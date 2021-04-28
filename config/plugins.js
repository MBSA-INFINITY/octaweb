module.exports = ({ env }) => {
  const plugins = {};
  if (env("NODE_ENV") === "production") {
    plugins["upload"]={
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    }
    plugins["email"]={
      provider: 'sendinblue',
      providerOptions: {
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
          user: env('EMAIL_SMTP_USER'),
          pass: env('EMAIL_SMTP_PASS'),
        },
      },
      settings: {
        
        defaultFrom: "no-reply@cms.iet.nitk.edu.in",
        defaultReplyTo: "iet@nitk.edu.in",
      },
    }
    // plugins["github-publish"]= {
    //   owner: "IET-NITK", // The gothub organisation or user
    //   repo: "IET-NITK.github.io", // The name of the repository
    //   workflow_id: "7048366", // The workflow_id or filename
    //   token: env("GITHUB_TOKEN"), // The GitHub personal access token with access to trigger workflows and view build status
    //   branch: "daddy", // The branch the workflow should be triggered on
    // }
  }
  return plugins
};
