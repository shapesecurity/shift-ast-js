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

import * as Shift from "../"

suite("unit", () => {
  suite("toJSON", () => {
    test("includes `type` member", () => {
      let node = new Shift.LiteralNumericExpression(0);
      assert.equal(node.type, JSON.parse(JSON.stringify(node)).type);
    });
  });

  // enough nonces to fill up the longest constructor parameter list
  const NONCES = Array.apply(null, Array(Object.keys(Shift).reduce((memo, t) => Math.max(memo, Shift[t].length), 0))).map(() => ({}));

  function testConstructor(t, members) {
    test(t, () => {
      assert(Shift[t]);
      let node = new Shift[t](...NONCES);
      assert(node instanceof Shift[t]);
      assert(node instanceof Shift.Node);
      assert.equal(typeof node.type, "string");
      members.forEach((member, index) => {
        assert.equal(node[member], NONCES[index], `${t}: ${member}`);
      });
    });
  }

  const SPEC = {
    ArrayBinding: ["elements", "restElement"],
    ArrayExpression: ["elements"],
    ArrowExpression: ["parameters", "restParameter", "body"],
    AssignmentExpression: ["operator", "binding", "expression"],
    BinaryExpression: ["operator", "left", "right"],
    BindingIdentifier: ["identifier"],
    BindingPropertyIdentifier: ["identifier", "initializer"],
    BindingPropertyProperty: ["name", "binding"],
    BindingWithDefault: ["binding", "initializer"],
    Block: ["statements"],
    BlockStatement: ["block"],
    BreakStatement: ["label"],
    CallExpression: ["callee", "arguments"],
    CatchClause: ["binding", "body"],
    ClassExpression: ["name", "super", "elements"],
    ClassStatement: ["name", "super", "elements"],
    ClassElement: ["isStatic", "method"],
    ComputedMemberExpression: ["object", "expression"],
    ComputedPropertyName: ["value"],
    ConditionalExpression: ["test", "consequent", "alternate"],
    ContinueStatement: ["label"],
    DataProperty: ["name", "expression"],
    DebuggerStatement: [],
    Directive: ["value"],
    DoWhileStatement: ["body", "test"],
    EmptyStatement: [],
    Export: ["target"],
    ExportDefault: ["target"],
    ExportFrom: ["exportSpecifiers", "moduleSpecifier"],
    ExportSpecifier: ["identifier", "as"],
    ExpressionStatement: ["expression"],
    ForInStatement: ["left", "right", "body"],
    ForOfStatement: ["left", "right", "body"],
    ForStatement: ["init", "test", "update", "body"],
    FunctionBody: ["directives", "statements"],
    FunctionDeclaration: ["isGenerator", "name", "parameters", "restParameter", "body"],
    FunctionExpression: ["isGenerator", "name", "parameters", "restParameter", "body"],
    Getter: ["name", "body"],
    Identifier: ["name"],
    IdentifierExpression: ["identifier"],
    IfStatement: ["test", "consequent", "alternate"],
    ImportFrom: ["importClause", "moduleSpecifier"],
    ImportFromWithBinding: ["bindingIdentifier", "importClause", "moduleSpecifier"],
    ImportModule: ["moduleSpecifier"],
    ImportSpecifier: ["identifier", "bindingIdentifier"],
    LabeledStatement: ["label", "body"],
    LiteralBooleanExpression: ["value"],
    LiteralInfinityExpression: [],
    LiteralNullExpression: [],
    LiteralNumericExpression: ["value"],
    LiteralRegExpExpression: ["value"],
    LiteralStringExpression: ["value"],
    Method: ["isGenerator", "name", "parameters", "restParameter", "body"],
    Module: ["directives", "sourceElements"],
    NamedImports: ["importSpecifiers"],
    NewExpression: ["callee", "arguments"],
    ObjectBinding: ["properties"],
    ObjectExpression: ["properties"],
    PostfixExpression: ["operand", "operator"],
    PrefixExpression: ["operator", "operand"],
    ReturnStatement: ["expression"],
    Script: ["body"],
    Setter: ["name", "parameter", "body"],
    ShorthandProperty: ["name"],
    SpreadElement: ["expression"],
    StaticMemberExpression: ["object", "property"],
    StaticPropertyName: ["value"],
    SwitchCase: ["test", "consequent"],
    SwitchDefault: ["consequent"],
    SwitchStatement: ["discriminant", "cases"],
    SwitchStatementWithDefault: ["discriminant", "preDefaultCases", "defaultCase", "postDefaultCases"],
    TemplateLiteral: ["value"],
    TemplateString: ["elements"],
    ThisExpression: [],
    ThrowStatement: ["expression"],
    TryCatchStatement: ["body", "catchClause"],
    TryFinallyStatement: ["body", "catchClause", "finalizer"],
    VariableDeclaration: ["kind", "declarators"],
    VariableDeclarationStatement: ["declaration"],
    VariableDeclarator: ["binding", "init"],
    WhileStatement: ["test", "body"],
    WithStatement: ["object", "body"],
    YieldExpression: ["expression"],
    YieldGeneratorExpression: ["expression"],
  };

  suite("constructors", () => {
    Object.keys(SPEC).forEach((t) => {
      testConstructor(t, SPEC[t]);
    });
  });
});
