# Harmony Contract Verification Tutorial
Tutorial for harmony contract verification using hardhat-etherscan  

Prerequisites  
- Hardhat installed globally (https://hardhat.org/getting-started/)
- Install npx and npm version 16

To begin  
- npm install
- npx hardhat compile
- npx hardhat run --network harmony scripts/deployContractTest.js  

> Record the output of the deployed smart contract address, this will be used for verification

Example:
```
Starting deploy
Deploying
Initially Deployed 0x4eBb2a1714384d54Dc287B9FbA1c8D4639717d43
```

Note this tutorial can be used to demonstrate the hardhat verify plugin as well as the [Harmony Explorer](https://explorer.harmony.one) multi-file upload. The contents of the contracts/ directory contain the individual files used to build the SimpleToken.sol contract. You can either verify manually in Harmony Explorer or use the modified [hardhat-etherscan](https://github.com/victaphu/hardhat/tree/master/packages/hardhat-etherscan). 

## Verifying using hardhat-etherscan
The hardhat-etherscan module has been modified to support Harmony One. Please make sure that you include the correct package (see package.json).

To begin
npx hardhat verify --network harmony 'deployed contract address'   
e.g. ```npx hardhat verify --network harmony 0x4eBb2a1714384d54Dc287B9FbA1c8D4639717d43```

If you see the following error, run the command with a more specific contract:
```
Error in plugin @nomiclabs/hardhat-etherscan: More than one contract was found to match the deployed bytecode.
Please use the contract parameter with one of the following contracts:
  * contracts/ERC20.sol:ERC20
  * contracts/SimpleToken.sol:SimpleToken

For example:

  hardhat verify --contract contracts/Example.sol:ExampleContract <other args>

If you are running the verify subtask from within Hardhat instead:

  await run("verify:verify", {
    <other args>,
    contract: "contracts/Example.sol:ExampleContract"
  };
```
Run again with the following command (to specify the exact contract)      
npx hardhat verify --network harmony --contract contracts/SimpleToken.sol:SimpleToken 'deployed contract address'   
e.g. ```npx hardhat verify --network harmony --contract contracts/SimpleToken.sol:SimpleToken 0x4eBb2a1714384d54Dc287B9FbA1c8D4639717d43```

Result will look like the following (if successful)
```
Nothing to compile
Compiling 1 file with 0.6.2
Successfully submitted source code for contract
contracts/SimpleToken.sol:SimpleToken at 0x4eBb2a1714384d54Dc287B9FbA1c8D4639717d43
for verification on the block explorer. Waiting for verification result...

Successfully verified contract SimpleToken on Etherscan.
https://explorer.harmony.one/address/0x4eBb2a1714384d54Dc287B9FbA1c8D4639717d43#code
```
> Here is an example of the deployed and verified smart contract: [verified](https://explorer.harmony.one/address/0x4eBb2a1714384d54Dc287B9FbA1c8D4639717d43#code)

