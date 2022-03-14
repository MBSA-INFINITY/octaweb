/* eslint-disable */

const jsdoc2md = require("jsdoc-to-markdown");
const fs = require("fs");
const pluralize = require("pluralize");
const path = require("path");
const groupBy = require("lodash/groupBy");
const uniq = require("lodash/uniq");

/* input and output paths */
const inputFile = "src/**/*";
const outputDir = "wiki";
const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const templateData = jsdoc2md
  .getNamepaths({ files: inputFile, configure: "./scripts/jsdoc.conf.json" })
  .then((e) => {
    Object.keys(e).forEach((key) => {
      fs.writeFileSync(
        path.resolve(`${outputDir}/project/${pluralize(key)}.md`),
        `## ${capitalize(pluralize(key))}\n\n`
      );
    });
  })
  .then(() => {
    const getTemplateData = jsdoc2md.getTemplateDataSync({
      files: inputFile,
      configure: "jsdoc.conf.json",
    });
    const groups = groupBy(getTemplateData, "kind");

    Object.keys(groups).forEach((key) => {
      const template = `
{{>main}}

* * *

Last updated on ${new Date()}
`;
      const output = jsdoc2md.renderSync({
        data: groups[key],
        configure: "./scripts/jsdoc.conf.json",
        template,
      });
      fs.writeFileSync(path.resolve(`${outputDir}/project/${pluralize(key)}.md`), output);
    });
    return groups;
  })
  .then((res) => {
    const sidebarText = [];
    Object.keys(res).forEach((key) => {
      sidebarText.push(`\n#### ${capitalize(pluralize(key))}`);
      res[key].forEach((e) => {
        sidebarText.push(`- [${e.name}](project/${pluralize(key)}#${e.name})`);
      });
      sidebarText.push("\n");
    });
    return uniq(sidebarText);
  })
  .then((res) => {
    const data = fs.readFileSync("wiki/Home.md", "utf8").split("<!-- OCTAWEBDOC -->");
    let id = 0;
    if (data.length > 1) {
      id = 1;
    }
    data[id] = "<!-- OCTAWEBDOC -->\n" + res.join("\n");
    fs.writeFileSync("wiki/Home.md", data.join(""), "utf8");
  });
