function isValidOwner(address) {
  return address && address.startsWith("0x");
}

module.exports = {
  isValidOwner
};
