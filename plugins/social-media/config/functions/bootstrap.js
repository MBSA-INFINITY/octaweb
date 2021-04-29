module.exports = async () => {
  // set plugin store
  registerPermissionActions();
};
const registerPermissionActions = () => {
  const actions = [
    {
      section: "plugins",
      displayName: "Access Plugin",
      uid: "read",
      pluginName: "social-media",
    },
  ];

  const { actionProvider } = strapi.admin.services.permission;
  actionProvider.register(actions);
};
