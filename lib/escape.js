const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

function replaceTag(tag) {
  return tagsToReplace[tag] || tag;
}

module.exports = (s) => {
  return s.toString().replace(/[&<>]/g, replaceTag);
}
