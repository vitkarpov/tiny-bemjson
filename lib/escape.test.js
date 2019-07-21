const escape = require("./escape");

describe("escape", () => {
  [
    {
      input: '&nbsp;<script src="alert()"></script>',
      result: '&amp;nbsp;&lt;script src="alert()"&gt;&lt;/script&gt;'
    }
  ].forEach(({input, result}, index) => {
    it(`${index + 1}`, () => {
      expect(escape(input)).toBe(result);
    })
  })
})
