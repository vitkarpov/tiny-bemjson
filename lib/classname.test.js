const classname = require("./classname");

describe("classname", () => {
  [
    {
      bemjson: { block: "foo" },
      result: "foo"
    },
    {
      bemjson: { block: "foo", elem: "bar" },
      result: "foo__bar"
    },
    {
      bemjson: { block: "foo", mods: {a: 'b'} },
      result: "foo_a_b"
    },
    {
      bemjson: { block: "foo", elem: "bar", elemMods: {a: 'b'} },
      result: "foo__bar_a_b"
    }
  ].forEach(({bemjson, result}, index) => {
    it(`${index + 1}`, () => {
      expect(classname(bemjson)).toBe(result);
    })
  })
})
