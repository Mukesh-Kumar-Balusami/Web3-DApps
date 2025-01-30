require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/d2b395037c0643fb95fd0c43b2746a6d",
      accounts: ["c7e8b06666f69ecea1eaea6813225260e64138f9b138908d782ac0b6c21a79e7"]
    }
    // sepolia: {
    //   url: process.env.SEPOLIA_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY]
    // },
    // polygonAmoy: {
    //   url: process.env.POLYGON_AMOY_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY]
    // }
  }
};
