const dateFormat = () => {
  return new Date(Date.now()).toUTCString()
}

module.exports = {
  dateFormat
}