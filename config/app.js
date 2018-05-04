const {IP, PORT} = process.env

module.exports = {
  ip: IP || '0.0.0.0',
  port: PORT || '8080'
}