const hre = require("hardhat");

async function main() {
    const Messaging = await hre.ethers.getContractFactory("Messaging");
    const messaging = await Messaging.deploy();
    // await messaging.deployed();
    await messaging.waitForDeployment();  // Alternative way
    // console.log(`Contract deployed at: ${messaging.address}`);
    console.log(`Contract deployed at: ${messaging.target}`);
}

main().catch((error) =>{
    console.error(error);
    process.exitCode=1;
});