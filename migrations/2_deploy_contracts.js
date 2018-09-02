var VeloxToken = artifacts.require("./VeloxToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(VeloxToken, { from: accounts[0] });
};
