const { mintNFT } = require("./mint");
const { getMintHistory } = require("./history");
const { logInfo } = require("./logger");

const ownerAddress = "0xOwnerWalletHere";

function startApp() {
  logInfo("Starting NFT Mint Tracker");

  const nftId = mintNFT(ownerAddress, "My First NFT");
  logInfo("Minted NFT ID: " + nftId);

  const history = getMintHistory();
  logInfo("Mint History:");
  console.log(history);
}

startApp();
