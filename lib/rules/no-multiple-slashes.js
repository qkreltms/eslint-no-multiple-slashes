/**
 * @fileoverview no multiple slashes like /////////...
 * @author jhpark
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "no multiple slashes like ///...",
      category: "Stylistic Issues",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    type: "suggestion",
  },

  create: function (context) {
    return {
      BlockStatement : function (node) {
        for (let { value } of context.getAllComments()) {
          /\/{3,}/.test(value) && context.report({
            node,
            message: `multiple slashes는 미관을 해칩니다. 제거해주세요.`,
            // fix: fixer => fixer.replaceText(node, ""),
          })
        }
      }
    }
  }
};
