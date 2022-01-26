const { ethers, upgrades } = require("hardhat");
require("dotenv").config();
async function main() {
  // Deploying
  console.log("Starting deploy");
  const SimpleToken = await ethers.getContractFactory("SimpleToken");
  console.log("Deploying");
  const instance = await SimpleToken.deploy();
  console.log("Initially Deployed", instance.address);
  
}

main();