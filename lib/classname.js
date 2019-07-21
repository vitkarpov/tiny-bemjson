module.exports = (bemjson) => {
  const className = [];

  if (bemjson.elem) {
    const elem = `${bemjson.block}__${bemjson.elem}`;

    if (bemjson.elemMods) {
      className.push(...getMods(elem, bemjson.elemMods))
    } else {
      className.push(elem);
    }
  } else {
    if (bemjson.mods) {
      className.push(...getMods(bemjson.block, bemjson.mods));
    } else {
      className.push(bemjson.block);
    }
  }
  return className.join(' ');
}

function getMods(prefix, mods) {
  return Object.keys(mods).map((key) => `${prefix}_${key}_${mods[key]}`);
}
