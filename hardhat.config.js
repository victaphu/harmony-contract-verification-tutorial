require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
        {
            version: "0.6.2",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    ]
},
  networks: {
    hardhat: {
      chainId: 1337
    }, 
    harmony: {
      // url: "https://api.s0.t.hmny.io",
      url: "https://harmony-0-rpc.gateway.pokt.network",
      accounts: [process.env.PRIVATE_KEY]
    },
    harmonyTest: {
      // url: "https://api.s0.t.hmny.io",
      url: "https://api.s0.b.hmny.io",
      accounts: [process.env.PRIVATE_KEY]
    },
    harmonyDev: {
      url: "https://api.s0.ps.hmny.io",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      harmony: 'your API key',
      harmonyDev: 'your API key',
    }
  }

};
