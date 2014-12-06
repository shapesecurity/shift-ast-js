/**
 * Copyright 2014 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from "assert";

import * as AST from "../"

suite("unit", () => {
  suite("toJSON", () => {
    test("includes `type` member", () => {
      let node = new AST.LiteralNumericExpression(0);
      assert.equal(node.type, JSON.parse(JSON.stringify(node)).type);
    });
  });

  // enough nonces to fill up the longest constructor parameter list
  const NONCES = Array.apply(null, Array(Object.keys(AST).reduce((memo, t) => Math.max(memo, AST[t].length), 0))).map(() => ({}));

  function testConstructor(t, members) {
    test(t, () => {
      let node = new AST[t](...NONCES);
      assert.ok(node instanceof AST[t]);
      assert.ok(node instanceof AST.Node);
      assert.equal(typeof node.type, "string");
      members.forEach((member, index) => {
        assert.equal(node[member], NONCES[index], `${t}: ${member}`);
      });
    });
  }

  const SPEC = {
    ArrayExpression: ["elements"],
    AssignmentExpression: ["operator", "binding", "expression"],
    BinaryExpression: ["operator", "left", "right"],
    Block: ["statements"],
    BlockStatement: ["block"],
    BreakStatement: ["label"],
    CallExpression: ["callee", "arguments"],
    CatchClause: ["binding", "body"],
    ComputedMemberExpression: ["object", "expression"],
    ConditionalExpression: ["test", "consequent", "alternate"],
    ContinueStatement: ["label"],
    DataProperty: ["name", "expression"],
    DebuggerStatement: [],
    DoWhileStatement: ["body", "test"],
    EmptyStatement: [],
    ExpressionStatement: ["expression"],
    ForInStatement: ["left", "right", "body"],
    ForStatement: ["init", "test", "update", "body"],
    FunctionBody: ["directives", "statements"],
    FunctionDeclaration: ["name", "parameters", "body"],
    FunctionExpression: ["name", "parameters", "body"],
    Getter: ["name", "body"],
    Identifier: ["name"],
    IdentifierExpression: ["identifier"],
    IfStatement: ["test", "consequent", "alternate"],
    LabeledStatement: ["label", "body"],
    LiteralBooleanExpression: ["value"],
    LiteralNullExpression: [],
    LiteralNumericExpression: ["value"],
    LiteralRegExpExpression: ["value"],
    LiteralStringExpression: ["value"],
    NewExpression: ["callee", "arguments"],
    ObjectExpression: ["properties"],
    PostfixExpression: ["operand", "operator"],
    PrefixExpression: ["operator", "operand"],
    PropertyName: ["kind", "value"],
    ReturnStatement: ["expression"],
    Script: ["body"],
    Setter: ["name", "parameter", "body"],
    StaticMemberExpression: ["object", "property"],
    SwitchCase: ["test", "consequent"],
    SwitchDefault: ["consequent"],
    SwitchStatement: ["discriminant", "cases"],
    SwitchStatementWithDefault: ["discriminant", "preDefaultCases", "defaultCase", "postDefaultCases"],
    ThisExpression: [],
    ThrowStatement: ["expression"],
    TryCatchStatement: ["body", "catchClause"],
    TryFinallyStatement: ["body", "catchClause", "finalizer"],
    UnknownDirective: ["value"],
    UseStrictDirective: [],
    VariableDeclaration: ["kind", "declarators"],
    VariableDeclarationStatement: ["declaration"],
    VariableDeclarator: ["binding", "init"],
    WhileStatement: ["test", "body"],
    WithStatement: ["object", "body"],
  };

  suite("constructors", () => {
    Object.keys(SPEC).forEach((t) => {
      testConstructor(t, SPEC[t]);
    });
  });
});
