const { saveNFT } = require("./nft");
const { isValidOwner } = require("./owner");
const { addHistory } = require("./history");

let counter = 1;

function mintNFT(owner, name) {
  if (!isValidOwner(owner)) {
    return null;
  }

  const nft = {
    id: counter++,
    name: name,
    owner: owner
  };

  saveNFT(nft);
  addHistory(nft);
  return nft.id;
}

module.exports = {
  mintNFT
};
