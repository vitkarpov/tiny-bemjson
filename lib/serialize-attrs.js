const escape = require("./escape");

module.exports = (attrs = {}) => {
  return Object.keys(attrs).map((key) => {
    return `${escape(key)}="${escape(attrs[key])}"`;
  }).join(' ');
}
