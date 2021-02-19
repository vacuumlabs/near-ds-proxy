const DSProxyFactory = artifacts.require('DSProxyFactory');
const ProxyRegistry = artifacts.require('ProxyRegistry');

module.exports = function (deployer) {
  deployer
    .deploy(DSProxyFactory)
    .then(function () {
      return deployer.deploy(ProxyRegistry, DSProxyFactory.address);
    })
    .then(function () {
      console.log({ DSProxyFactory: DSProxyFactory.address });
      console.log({ ProxyRegistry: ProxyRegistry.address });
    });
};
