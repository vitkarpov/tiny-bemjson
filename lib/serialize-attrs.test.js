const serializeAttrs = require("./serialize-attrs");

describe("serializeAttrs", () => {
  [
    {
      attrs: { foo: 1, bar: 2 },
      result: 'foo="1" bar="2"'
    },
    {
      attrs: { foo: '&nbsp;<script src="alert()"></script>' },
      result: 'foo="&amp;nbsp;&lt;script src="alert()"&gt;&lt;/script&gt;"'
    }
  ].forEach(({attrs, result}, index) => {
    it(`${index + 1}`, () => {
      expect(serializeAttrs(attrs)).toBe(result);
    })
  })
})
