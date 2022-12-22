async function main() {
    const BoxV3 = await ethers.getContractFactory("BoxV3")
    let box = await upgrades.upgradeProxy("0xB217049e47914f421F0C649E6f056cF004C5F5a7", BoxV3)
    console.log("Your upgraded proxy is done!", box.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })