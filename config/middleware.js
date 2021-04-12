module.exports = {
  load: {
    before: ["boom", "rollbar"],
  },
  settings: {
    rollbar: {
      enabled: true,
    },
  },
};
