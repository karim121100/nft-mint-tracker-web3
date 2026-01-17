const nftStore = [];

function saveNFT(nft) {
  nftStore.push(nft);
}

function getAllNFTs() {
  return nftStore;
}

module.exports = {
  saveNFT,
  getAllNFTs
};
