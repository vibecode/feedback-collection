if (process.env.NODE_ENV === 'production') {
  //return the keys
  module.exports = require('./prod')
} else {
  //return the dev keys
  module.exports = require('./dev')
}
