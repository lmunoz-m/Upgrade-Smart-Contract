require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const RPC_GOERLI_URL = process.env.RPC_GOERLI_URL
const PRIVATE_KEY_ACCOUNT = process.env.PRIVATE_KEY_ACCOUNT
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: RPC_GOERLI_URL,
      accounts: [PRIVATE_KEY_ACCOUNT],
    },
  },
  solidity: "0.8.17",
};
