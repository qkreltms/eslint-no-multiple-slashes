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

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: `////////////// test can get only comments
            function foo() {}
            var bar = foo;
            ///////////////// test mutiple lines
            `,
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
