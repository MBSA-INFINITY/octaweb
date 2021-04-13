module.exports = ({ env }) => {
  const plugins = {
    "github-publish": {
      owner: "IET-NITK", // The gothub organisation or user
      repo: "IET-NITK.github.io", // The name of the repository
      workflow_id: "deploy.yml", // The workflow_id or filename
      token: env("GITHUB_TOKEN"), // The GitHub personal access token with access to trigger workflows and view build status
      branch: "daddy", // The branch the workflow should be triggered on
    },
  };
  if (env("NODE_ENV") === "production") {
    plugins["upload"]={
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    }
  }
  return plugins
};
