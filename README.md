# Upgrade Smart Contract Examples

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
npx hardhat run scripts/upgrade.js
```
To interact with the smart contracts

```shell
npx hardhat console
 > const BoxV3 = await ethers.getContractFactory("BoxV3")
 > const boxV3 = await BoxV3.attach("0xB217049e47914f421F0C649E6f056cF004C5F5a7")
 > (await boxV3.retrieve()).toString()
 > (await boxV3.increment())
```