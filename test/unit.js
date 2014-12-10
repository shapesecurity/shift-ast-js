import * as assert from "assert";

import * as AST from "."

suite("unit", () => {
  test("toJSON includes `type` member", () => {
    let node = new AST.LiteralNumericExpression(0);
    assert.equal(node.type, JSON.parse(JSON.stringify(node)).type);
  });
});
