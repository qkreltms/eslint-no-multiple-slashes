/**
 * @fileoverview no multiple slashes like /////////...
 * @author jhpark
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-multiple-slashes"),

  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-multiple-slashes", rule, {

  valid: [
    {
      code: `// test
            function foo() {}
            var bar = foo;`,
    }
  ],

  invalid: [
    {
      code: `////////////// test can get only comments
            function foo() {}
            var bar = foo;
            `,
      errors: [{
        message: "multiple slashes는 미관을 해칩니다. 제거해주세요.",
      }]
    },
    {
      code: `////////////// test can get only comments
            function foo() {}
            var bar = foo;
            /////////////// multiple slashes
            `,
      errors: [{
        message: "multiple slashes는 미관을 해칩니다. 제거해주세요.",
      }, {
        message: "multiple slashes는 미관을 해칩니다. 제거해주세요.",
      }]
    }
  ]
});
