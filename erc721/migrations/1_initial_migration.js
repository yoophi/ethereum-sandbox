const Migrations = artifacts.require("Migrations");
const HelloNFT = artifacts.require("HelloNFT");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloNFT);
};
