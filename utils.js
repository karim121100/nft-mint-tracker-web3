function formatNFT(nft) {
  return nft.id + " - " + nft.name + " - " + nft.owner;
}

module.exports = {
  formatNFT
};
