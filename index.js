const classname = require("./lib/classname");
const serializeAttrs = require("./lib/serialize-attrs");

function render(bemjson) {
  if (typeof bemjson === "string") {
    return bemjson;
  }
  if (Array.isArray(bemjson)) {
    return bemjson.map(render);
  }

  const tag = bemjson.tag || "div";
  const className = [classname(bemjson), bemjson.cls || ""]
    .filter(Boolean)
    .concat((bemjson.mix || []).map(classname))
    .join(" ");
  const attrs = serializeAttrs(
    Object.assign({ class: className }, bemjson.attrs)
  );

  return [
    "<",
    tag,
    " ",
    attrs,
    ">",
    render(bemjson.content || ""),
    "</",
    tag,
    ">"
  ].join("");
}

module.exports = render;
