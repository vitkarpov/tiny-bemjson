const render = require("./");

describe("tiny-bemjson", () => {
  [
    {
      bemjson: {
        block: "foo",
        content: {
          block: "bar",
          content: "baz"
        }
      },
      result: '<div class="foo"><div class="bar">baz</div></div>'
    },
    {
      bemjson: {
        block: "foo",
        attrs: {
          "data-foo": "bar"
        }
      },
      result: '<div class="foo" data-foo="bar"></div>'
    },
    {
      bemjson: {
        block: "foo",
        cls: "bar"
      },
      result: '<div class="foo bar"></div>'
    },
    {
      bemjson: {
        block: "foo",
        elem: "bar"
      },
      result: '<div class="foo__bar"></div>'
    },
    {
      bemjson: {
        block: 'foo',
        mix: [
            {block: 'bar', mods: {a: 'b'}},
            {block: 'bar', elem: 'elem', elemMods: {a: 'b'}}
        ]
      },
      result: '<div class="foo bar_a_b bar__elem_a_b"></div>'
    },
    {
      bemjson: {
        block: 'foo',
        content: {
            block: 'foo',
            elem: 'bar'
        }
      },
      result: '<div class="foo"><div class="foo__bar"></div></div>'
    }
  ].forEach(({ bemjson, result }, index) => {
    it(`${index + 1}`, () => {
      expect(render(bemjson)).toBe(result);
    });
  });
});
