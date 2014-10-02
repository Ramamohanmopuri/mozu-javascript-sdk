var constants = require('../../../constants'),
    AuthProvider;

module.exports = function(Client) {
  return Client.sub({
    getUser: Client.method({
      scope: constants.scopes.ADMINUSER,
      method: constants.verbs.GET,
      url: "{+homePod}api/platform/adminuser/accounts/{userId}"
    }),
    getTenantScopesForUser: (function(getTenantScopes) {
        return function getDefaultScope(conf) {
          AuthProvider = AuthProvider || require('../../../AuthProvider');
          if (conf) return getTenantScopes.call(this, conf);
          if (this.context.user) return getTenantScopes.call(this, { userId: this.context.user.userId });
          return AuthProvider.addAdminUserClaims(this).then(function() {
            return getTenantScopes.call(this, { userId: this.context.user.userId });
          }.bind(this));
        }
      })(Client.method({
        scope: constants.scopes.ADMINUSER,
        method: constants.verbs.GET,
        url: "{+homePod}api/platform/adminuser/accounts/{userId}/tenants" 
      }))
  });
};