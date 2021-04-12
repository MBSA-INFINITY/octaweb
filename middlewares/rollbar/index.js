const rollbarjs = require("rollbar");

var rollbar = new rollbarjs({
  accessToken: "1639227c09144e1eb50a28af42ac3704",
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: strapi.config.environment,
  },
});


module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          await next();
        } catch (error) {
          rollbar.error(error);
          throw error;
        }
      });
    },
  };
};
