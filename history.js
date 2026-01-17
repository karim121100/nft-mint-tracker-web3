const history = [];

function addHistory(nft) {
  history.push({
    id: nft.id,
    owner: nft.owner,
    name: nft.name,
    time: new Date().toISOString()
  });
}

function getMintHistory() {
  return history;
}

module.exports = {
  addHistory,
  getMintHistory
};
