"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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


// node classes

var Node = exports.Node = function Node() {
  _classCallCheck(this, Node);
};

// TODO: Node.prototype.loc

var Directive = exports.Directive = (function (Node) {
  function Directive() {
    _classCallCheck(this, Directive);

    if (Node != null) {
      Node.apply(this, arguments);
    }
  }

  _inherits(Directive, Node);

  return Directive;
})(Node);
var Statement = exports.Statement = (function (Node) {
  function Statement() {
    _classCallCheck(this, Statement);

    if (Node != null) {
      Node.apply(this, arguments);
    }
  }

  _inherits(Statement, Node);

  return Statement;
})(Node);
var IterationStatement = exports.IterationStatement = (function (Statement) {
  function IterationStatement() {
    _classCallCheck(this, IterationStatement);

    if (Statement != null) {
      Statement.apply(this, arguments);
    }
  }

  _inherits(IterationStatement, Statement);

  return IterationStatement;
})(Statement);
var Expression = exports.Expression = (function (Node) {
  function Expression() {
    _classCallCheck(this, Expression);

    if (Node != null) {
      Node.apply(this, arguments);
    }
  }

  _inherits(Expression, Node);

  return Expression;
})(Node);
var PrimaryExpression = exports.PrimaryExpression = (function (Expression) {
  function PrimaryExpression() {
    _classCallCheck(this, PrimaryExpression);

    if (Expression != null) {
      Expression.apply(this, arguments);
    }
  }

  _inherits(PrimaryExpression, Expression);

  return PrimaryExpression;
})(Expression);
var LiteralExpression = exports.LiteralExpression = (function (PrimaryExpression) {
  function LiteralExpression() {
    _classCallCheck(this, LiteralExpression);

    if (PrimaryExpression != null) {
      PrimaryExpression.apply(this, arguments);
    }
  }

  _inherits(LiteralExpression, PrimaryExpression);

  return LiteralExpression;
})(PrimaryExpression);
var UnaryExpression = exports.UnaryExpression = (function (Expression) {
  function UnaryExpression(operand) {
    _classCallCheck(this, UnaryExpression);

    this.operand = operand;
  }

  _inherits(UnaryExpression, Expression);

  return UnaryExpression;
})(Expression);
var MemberExpression = exports.MemberExpression = (function (Expression) {
  function MemberExpression(object) {
    _classCallCheck(this, MemberExpression);

    this.object = object;
  }

  _inherits(MemberExpression, Expression);

  return MemberExpression;
})(Expression);
var ObjectProperty = exports.ObjectProperty = (function (Node) {
  function ObjectProperty(name) {
    _classCallCheck(this, ObjectProperty);

    this.name = name;
  }

  _inherits(ObjectProperty, Node);

  return ObjectProperty;
})(Node);
var AccessorProperty = exports.AccessorProperty = (function (ObjectProperty) {
  function AccessorProperty(name, body) {
    _classCallCheck(this, AccessorProperty);

    _get(Object.getPrototypeOf(AccessorProperty.prototype), "constructor", this).call(this, name);
    this.body = body;
  }

  _inherits(AccessorProperty, ObjectProperty);

  return AccessorProperty;
})(ObjectProperty);



// functions

var FunctionBody = exports.FunctionBody = (function (Node) {
  function FunctionBody(directives, statements) {
    _classCallCheck(this, FunctionBody);

    this.type = "FunctionBody";
    this.directives = directives;
    this.statements = statements;
  }

  _inherits(FunctionBody, Node);

  return FunctionBody;
})(Node);
var FunctionDeclaration = exports.FunctionDeclaration = (function (Statement) {
  function FunctionDeclaration(name, parameters, body) {
    _classCallCheck(this, FunctionDeclaration);

    this.type = "FunctionDeclaration";
    this.name = name;
    this.parameters = parameters;
    this.body = body;
  }

  _inherits(FunctionDeclaration, Statement);

  return FunctionDeclaration;
})(Statement);
var FunctionExpression = exports.FunctionExpression = (function (PrimaryExpression) {
  function FunctionExpression(name, parameters, body) {
    _classCallCheck(this, FunctionExpression);

    this.type = "FunctionExpression";
    this.name = name;
    this.parameters = parameters;
    this.body = body;
  }

  _inherits(FunctionExpression, PrimaryExpression);

  return FunctionExpression;
})(PrimaryExpression);



// object expressions

var ObjectExpression = exports.ObjectExpression = (function (PrimaryExpression) {
  function ObjectExpression(properties) {
    _classCallCheck(this, ObjectExpression);

    this.type = "ObjectExpression";
    this.properties = properties;
  }

  _inherits(ObjectExpression, PrimaryExpression);

  return ObjectExpression;
})(PrimaryExpression);
var Getter = exports.Getter = (function (AccessorProperty) {
  function Getter(name, body) {
    _classCallCheck(this, Getter);

    this.type = "Getter";
    _get(Object.getPrototypeOf(Getter.prototype), "constructor", this).call(this, name, body);
  }

  _inherits(Getter, AccessorProperty);

  return Getter;
})(AccessorProperty);
var Setter = exports.Setter = (function (AccessorProperty) {
  function Setter(name, parameter, body) {
    _classCallCheck(this, Setter);

    this.type = "Setter";
    _get(Object.getPrototypeOf(Setter.prototype), "constructor", this).call(this, name, body);
    this.parameter = parameter;
  }

  _inherits(Setter, AccessorProperty);

  return Setter;
})(AccessorProperty);
var DataProperty = exports.DataProperty = (function (ObjectProperty) {
  function DataProperty(name, expression) {
    _classCallCheck(this, DataProperty);

    this.type = "DataProperty";
    _get(Object.getPrototypeOf(DataProperty.prototype), "constructor", this).call(this, name);
    this.expression = expression;
  }

  _inherits(DataProperty, ObjectProperty);

  return DataProperty;
})(ObjectProperty);
var PropertyName = exports.PropertyName = (function (Node) {
  function PropertyName(kind, value) {
    _classCallCheck(this, PropertyName);

    this.type = "PropertyName";
    this.kind = kind;
    this.value = value;
  }

  _inherits(PropertyName, Node);

  return PropertyName;
})(Node);



// literals

var LiteralBooleanExpression = exports.LiteralBooleanExpression = (function (LiteralExpression) {
  function LiteralBooleanExpression(value) {
    _classCallCheck(this, LiteralBooleanExpression);

    this.type = "LiteralBooleanExpression";
    this.value = value;
  }

  _inherits(LiteralBooleanExpression, LiteralExpression);

  return LiteralBooleanExpression;
})(LiteralExpression);
var LiteralInfinityExpression = exports.LiteralInfinityExpression = (function (LiteralExpression) {
  function LiteralInfinityExpression() {
    _classCallCheck(this, LiteralInfinityExpression);

    this.type = "LiteralInfinityExpression";
  }

  _inherits(LiteralInfinityExpression, LiteralExpression);

  return LiteralInfinityExpression;
})(LiteralExpression);
var LiteralNullExpression = exports.LiteralNullExpression = (function (LiteralExpression) {
  function LiteralNullExpression() {
    _classCallCheck(this, LiteralNullExpression);

    this.type = "LiteralNullExpression";
  }

  _inherits(LiteralNullExpression, LiteralExpression);

  return LiteralNullExpression;
})(LiteralExpression);
var LiteralNumericExpression = exports.LiteralNumericExpression = (function (LiteralExpression) {
  function LiteralNumericExpression(value) {
    _classCallCheck(this, LiteralNumericExpression);

    this.type = "LiteralNumericExpression";
    this.value = value;
  }

  _inherits(LiteralNumericExpression, LiteralExpression);

  return LiteralNumericExpression;
})(LiteralExpression);
var LiteralRegExpExpression = exports.LiteralRegExpExpression = (function (LiteralExpression) {
  function LiteralRegExpExpression(value) {
    _classCallCheck(this, LiteralRegExpExpression);

    this.type = "LiteralRegExpExpression";
    this.value = value;
  }

  _inherits(LiteralRegExpExpression, LiteralExpression);

  return LiteralRegExpExpression;
})(LiteralExpression);
var LiteralStringExpression = exports.LiteralStringExpression = (function (LiteralExpression) {
  function LiteralStringExpression(value) {
    _classCallCheck(this, LiteralStringExpression);

    this.type = "LiteralStringExpression";
    this.value = value;
  }

  _inherits(LiteralStringExpression, LiteralExpression);

  return LiteralStringExpression;
})(LiteralExpression);



// other expressions

var ArrayExpression = exports.ArrayExpression = (function (PrimaryExpression) {
  function ArrayExpression(elements) {
    _classCallCheck(this, ArrayExpression);

    this.type = "ArrayExpression";
    this.elements = elements;
  }

  _inherits(ArrayExpression, PrimaryExpression);

  return ArrayExpression;
})(PrimaryExpression);
var AssignmentExpression = exports.AssignmentExpression = (function (Expression) {
  function AssignmentExpression(operator, binding, expression) {
    _classCallCheck(this, AssignmentExpression);

    this.type = "AssignmentExpression";
    this.operator = operator;
    this.binding = binding;
    this.expression = expression;
  }

  _inherits(AssignmentExpression, Expression);

  return AssignmentExpression;
})(Expression);
var BinaryExpression = exports.BinaryExpression = (function (Expression) {
  function BinaryExpression(operator, left, right) {
    _classCallCheck(this, BinaryExpression);

    this.type = "BinaryExpression";
    this.operator = operator;
    this.left = left;
    this.right = right;
  }

  _inherits(BinaryExpression, Expression);

  return BinaryExpression;
})(Expression);
var CallExpression = exports.CallExpression = (function (Expression) {
  function CallExpression(callee, args) {
    _classCallCheck(this, CallExpression);

    this.type = "CallExpression";
    this.callee = callee;
    this.arguments = args;
  }

  _inherits(CallExpression, Expression);

  return CallExpression;
})(Expression);
var ComputedMemberExpression = exports.ComputedMemberExpression = (function (MemberExpression) {
  function ComputedMemberExpression(object, expression) {
    _classCallCheck(this, ComputedMemberExpression);

    this.type = "ComputedMemberExpression";
    _get(Object.getPrototypeOf(ComputedMemberExpression.prototype), "constructor", this).call(this, object);
    this.expression = expression;
  }

  _inherits(ComputedMemberExpression, MemberExpression);

  return ComputedMemberExpression;
})(MemberExpression);
var ConditionalExpression = exports.ConditionalExpression = (function (Expression) {
  function ConditionalExpression(test, consequent, alternate) {
    _classCallCheck(this, ConditionalExpression);

    this.type = "ConditionalExpression";
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }

  _inherits(ConditionalExpression, Expression);

  return ConditionalExpression;
})(Expression);
var IdentifierExpression = exports.IdentifierExpression = (function (PrimaryExpression) {
  function IdentifierExpression(identifier) {
    _classCallCheck(this, IdentifierExpression);

    this.type = "IdentifierExpression";
    this.identifier = identifier;
  }

  _inherits(IdentifierExpression, PrimaryExpression);

  return IdentifierExpression;
})(PrimaryExpression);
var NewExpression = exports.NewExpression = (function (Expression) {
  function NewExpression(callee, args) {
    _classCallCheck(this, NewExpression);

    this.type = "NewExpression";
    this.callee = callee;
    this.arguments = args;
  }

  _inherits(NewExpression, Expression);

  return NewExpression;
})(Expression);
var PostfixExpression = exports.PostfixExpression = (function (UnaryExpression) {
  function PostfixExpression(operand, operator) {
    _classCallCheck(this, PostfixExpression);

    this.type = "PostfixExpression";
    _get(Object.getPrototypeOf(PostfixExpression.prototype), "constructor", this).call(this, operand);
    this.operator = operator;
  }

  _inherits(PostfixExpression, UnaryExpression);

  return PostfixExpression;
})(UnaryExpression);
var PrefixExpression = exports.PrefixExpression = (function (UnaryExpression) {
  function PrefixExpression(operator, operand) {
    _classCallCheck(this, PrefixExpression);

    this.type = "PrefixExpression";
    _get(Object.getPrototypeOf(PrefixExpression.prototype), "constructor", this).call(this, operand);
    this.operator = operator;
  }

  _inherits(PrefixExpression, UnaryExpression);

  return PrefixExpression;
})(UnaryExpression);
var StaticMemberExpression = exports.StaticMemberExpression = (function (MemberExpression) {
  function StaticMemberExpression(object, property) {
    _classCallCheck(this, StaticMemberExpression);

    this.type = "StaticMemberExpression";
    _get(Object.getPrototypeOf(StaticMemberExpression.prototype), "constructor", this).call(this, object);
    this.property = property;
  }

  _inherits(StaticMemberExpression, MemberExpression);

  return StaticMemberExpression;
})(MemberExpression);
var ThisExpression = exports.ThisExpression = (function (PrimaryExpression) {
  function ThisExpression() {
    _classCallCheck(this, ThisExpression);

    this.type = "ThisExpression";
  }

  _inherits(ThisExpression, PrimaryExpression);

  return ThisExpression;
})(PrimaryExpression);



// other statements

var BlockStatement = exports.BlockStatement = (function (Statement) {
  function BlockStatement(block) {
    _classCallCheck(this, BlockStatement);

    this.type = "BlockStatement";
    this.block = block;
  }

  _inherits(BlockStatement, Statement);

  return BlockStatement;
})(Statement);
var BreakStatement = exports.BreakStatement = (function (Statement) {
  function BreakStatement(label) {
    _classCallCheck(this, BreakStatement);

    this.type = "BreakStatement";
    this.label = label;
  }

  _inherits(BreakStatement, Statement);

  return BreakStatement;
})(Statement);
var ContinueStatement = exports.ContinueStatement = (function (Statement) {
  function ContinueStatement(label) {
    _classCallCheck(this, ContinueStatement);

    this.type = "ContinueStatement";
    this.label = label;
  }

  _inherits(ContinueStatement, Statement);

  return ContinueStatement;
})(Statement);
var DebuggerStatement = exports.DebuggerStatement = (function (Statement) {
  function DebuggerStatement() {
    _classCallCheck(this, DebuggerStatement);

    this.type = "DebuggerStatement";
  }

  _inherits(DebuggerStatement, Statement);

  return DebuggerStatement;
})(Statement);
var DoWhileStatement = exports.DoWhileStatement = (function (IterationStatement) {
  function DoWhileStatement(body, test) {
    _classCallCheck(this, DoWhileStatement);

    this.type = "DoWhileStatement";
    this.body = body;
    this.test = test;
  }

  _inherits(DoWhileStatement, IterationStatement);

  return DoWhileStatement;
})(IterationStatement);
var EmptyStatement = exports.EmptyStatement = (function (Statement) {
  function EmptyStatement() {
    _classCallCheck(this, EmptyStatement);

    this.type = "EmptyStatement";
  }

  _inherits(EmptyStatement, Statement);

  return EmptyStatement;
})(Statement);
var ExpressionStatement = exports.ExpressionStatement = (function (Statement) {
  function ExpressionStatement(expression) {
    _classCallCheck(this, ExpressionStatement);

    this.type = "ExpressionStatement";
    this.expression = expression;
  }

  _inherits(ExpressionStatement, Statement);

  return ExpressionStatement;
})(Statement);
var ForInStatement = exports.ForInStatement = (function (IterationStatement) {
  function ForInStatement(left, right, body) {
    _classCallCheck(this, ForInStatement);

    this.type = "ForInStatement";
    this.left = left;
    this.right = right;
    this.body = body;
  }

  _inherits(ForInStatement, IterationStatement);

  return ForInStatement;
})(IterationStatement);
var ForStatement = exports.ForStatement = (function (IterationStatement) {
  function ForStatement(init, test, update, body) {
    _classCallCheck(this, ForStatement);

    this.type = "ForStatement";
    this.init = init;
    this.test = test;
    this.update = update;
    this.body = body;
  }

  _inherits(ForStatement, IterationStatement);

  return ForStatement;
})(IterationStatement);
var IfStatement = exports.IfStatement = (function (Statement) {
  function IfStatement(test, consequent, alternate) {
    _classCallCheck(this, IfStatement);

    this.type = "IfStatement";
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }

  _inherits(IfStatement, Statement);

  return IfStatement;
})(Statement);
var LabeledStatement = exports.LabeledStatement = (function (Statement) {
  function LabeledStatement(label, body) {
    _classCallCheck(this, LabeledStatement);

    this.type = "LabeledStatement";
    this.label = label;
    this.body = body;
  }

  _inherits(LabeledStatement, Statement);

  return LabeledStatement;
})(Statement);
var ReturnStatement = exports.ReturnStatement = (function (Statement) {
  function ReturnStatement(expression) {
    _classCallCheck(this, ReturnStatement);

    this.type = "ReturnStatement";
    this.expression = expression;
  }

  _inherits(ReturnStatement, Statement);

  return ReturnStatement;
})(Statement);
var SwitchStatement = exports.SwitchStatement = (function (Statement) {
  function SwitchStatement(discriminant, cases) {
    _classCallCheck(this, SwitchStatement);

    this.type = "SwitchStatement";
    this.discriminant = discriminant;
    this.cases = cases;
  }

  _inherits(SwitchStatement, Statement);

  return SwitchStatement;
})(Statement);
var SwitchStatementWithDefault = exports.SwitchStatementWithDefault = (function (Statement) {
  function SwitchStatementWithDefault(discriminant, preDefaultCases, defaultCase, postDefaultCases) {
    _classCallCheck(this, SwitchStatementWithDefault);

    this.type = "SwitchStatementWithDefault";
    this.discriminant = discriminant;
    this.preDefaultCases = preDefaultCases;
    this.defaultCase = defaultCase;
    this.postDefaultCases = postDefaultCases;
  }

  _inherits(SwitchStatementWithDefault, Statement);

  return SwitchStatementWithDefault;
})(Statement);
var ThrowStatement = exports.ThrowStatement = (function (Statement) {
  function ThrowStatement(expression) {
    _classCallCheck(this, ThrowStatement);

    this.type = "ThrowStatement";
    this.expression = expression;
  }

  _inherits(ThrowStatement, Statement);

  return ThrowStatement;
})(Statement);
var TryCatchStatement = exports.TryCatchStatement = (function (Statement) {
  function TryCatchStatement(body, catchClause) {
    _classCallCheck(this, TryCatchStatement);

    this.type = "TryCatchStatement";
    this.body = body;
    this.catchClause = catchClause;
  }

  _inherits(TryCatchStatement, Statement);

  return TryCatchStatement;
})(Statement);
var TryFinallyStatement = exports.TryFinallyStatement = (function (Statement) {
  function TryFinallyStatement(body, catchClause, finalizer) {
    _classCallCheck(this, TryFinallyStatement);

    this.type = "TryFinallyStatement";
    this.body = body;
    this.catchClause = catchClause;
    this.finalizer = finalizer;
  }

  _inherits(TryFinallyStatement, Statement);

  return TryFinallyStatement;
})(Statement);
var VariableDeclarationStatement = exports.VariableDeclarationStatement = (function (Statement) {
  function VariableDeclarationStatement(declaration) {
    _classCallCheck(this, VariableDeclarationStatement);

    this.type = "VariableDeclarationStatement";
    this.declaration = declaration;
  }

  _inherits(VariableDeclarationStatement, Statement);

  return VariableDeclarationStatement;
})(Statement);
var WhileStatement = exports.WhileStatement = (function (IterationStatement) {
  function WhileStatement(test, body) {
    _classCallCheck(this, WhileStatement);

    this.type = "WhileStatement";
    this.test = test;
    this.body = body;
  }

  _inherits(WhileStatement, IterationStatement);

  return WhileStatement;
})(IterationStatement);
var WithStatement = exports.WithStatement = (function (Statement) {
  function WithStatement(object, body) {
    _classCallCheck(this, WithStatement);

    this.type = "WithStatement";
    this.object = object;
    this.body = body;
  }

  _inherits(WithStatement, Statement);

  return WithStatement;
})(Statement);



// directives

var UnknownDirective = exports.UnknownDirective = (function (Directive) {
  function UnknownDirective(value) {
    _classCallCheck(this, UnknownDirective);

    this.type = "UnknownDirective";
    this.value = value;
  }

  _inherits(UnknownDirective, Directive);

  return UnknownDirective;
})(Directive);
var UseStrictDirective = exports.UseStrictDirective = (function (Directive) {
  function UseStrictDirective() {
    _classCallCheck(this, UseStrictDirective);

    this.type = "UseStrictDirective";
  }

  _inherits(UseStrictDirective, Directive);

  return UseStrictDirective;
})(Directive);



// other nodes

var Block = exports.Block = (function (Node) {
  function Block(statements) {
    _classCallCheck(this, Block);

    this.type = "Block";
    this.statements = statements;
  }

  _inherits(Block, Node);

  return Block;
})(Node);
var CatchClause = exports.CatchClause = (function (Node) {
  function CatchClause(binding, body) {
    _classCallCheck(this, CatchClause);

    this.type = "CatchClause";
    this.binding = binding;
    this.body = body;
  }

  _inherits(CatchClause, Node);

  return CatchClause;
})(Node);
var Identifier = exports.Identifier = (function (Node) {
  function Identifier(name) {
    _classCallCheck(this, Identifier);

    this.type = "Identifier";
    this.name = name;
  }

  _inherits(Identifier, Node);

  return Identifier;
})(Node);
var Script = exports.Script = (function (Node) {
  function Script(body) {
    _classCallCheck(this, Script);

    this.type = "Script";
    this.body = body;
  }

  _inherits(Script, Node);

  return Script;
})(Node);
var SwitchCase = exports.SwitchCase = (function (Node) {
  function SwitchCase(test, consequent) {
    _classCallCheck(this, SwitchCase);

    this.type = "SwitchCase";
    this.test = test;
    this.consequent = consequent;
  }

  _inherits(SwitchCase, Node);

  return SwitchCase;
})(Node);
var SwitchDefault = exports.SwitchDefault = (function (Node) {
  function SwitchDefault(consequent) {
    _classCallCheck(this, SwitchDefault);

    this.type = "SwitchDefault";
    this.consequent = consequent;
  }

  _inherits(SwitchDefault, Node);

  return SwitchDefault;
})(Node);
var VariableDeclaration = exports.VariableDeclaration = (function (Node) {
  function VariableDeclaration(kind, declarators) {
    _classCallCheck(this, VariableDeclaration);

    if (declarators.length < 1) throw new TypeError("VariableDeclaration declarators list must be non-empty.");
    this.type = "VariableDeclaration";
    this.kind = kind;
    this.declarators = declarators;
  }

  _inherits(VariableDeclaration, Node);

  return VariableDeclaration;
})(Node);
var VariableDeclarator = exports.VariableDeclarator = (function (Node) {
  function VariableDeclarator(binding, init) {
    _classCallCheck(this, VariableDeclarator);

    this.type = "VariableDeclarator";
    this.binding = binding;
    this.init = init;
  }

  _inherits(VariableDeclarator, Node);

  return VariableDeclarator;
})(Node);
//# sourceMappingURL=data:application/json;base64,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bUI7R0FBUyxJQUFJO0lBVWhDLGtCQUFrQixXQUFsQixrQkFBa0IsY0FBUyxJQUFJO0FBQy9CLFdBREEsa0JBQWtCLENBQ2pCLE9BQU8sRUFBRSxJQUFJOzBCQURkLGtCQUFrQjs7QUFFM0IsUUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztBQUNqQyxRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztHQUNsQjs7WUFMVSxrQkFBa0IsRUFBUyxJQUFJOztTQUEvQixrQkFBa0I7R0FBUyxJQUFJIiwiZmlsZSI6InNyYy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMTQgU2hhcGUgU2VjdXJpdHksIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cbi8vIG5vZGUgY2xhc3Nlc1xuXG5leHBvcnQgY2xhc3MgTm9kZSB7IH1cbi8vIFRPRE86IE5vZGUucHJvdG90eXBlLmxvY1xuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIGV4dGVuZHMgTm9kZSB7IH1cblxuZXhwb3J0IGNsYXNzIFN0YXRlbWVudCBleHRlbmRzIE5vZGUgeyB9XG5leHBvcnQgY2xhc3MgSXRlcmF0aW9uU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHsgfVxuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUgeyB9XG5leHBvcnQgY2xhc3MgUHJpbWFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHsgfVxuZXhwb3J0IGNsYXNzIExpdGVyYWxFeHByZXNzaW9uIGV4dGVuZHMgUHJpbWFyeUV4cHJlc3Npb24geyB9XG5cbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmFuZCkge1xuICAgIHRoaXMub3BlcmFuZCA9IG9wZXJhbmQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3BlcnR5IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NvclByb3BlcnR5IGV4dGVuZHMgT2JqZWN0UHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2R5KSB7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uc1xuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25Cb2R5IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGRpcmVjdGl2ZXMsIHN0YXRlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZ1bmN0aW9uQm9keVwiO1xuICAgIHRoaXMuZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXM7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25EZWNsYXJhdGlvbiBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtZXRlcnMsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25FeHByZXNzaW9uIGV4dGVuZHMgUHJpbWFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwYXJhbWV0ZXJzLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5cbi8vIG9iamVjdCBleHByZXNzaW9uc1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0RXhwcmVzc2lvbiBleHRlbmRzIFByaW1hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMudHlwZSA9IFwiT2JqZWN0RXhwcmVzc2lvblwiO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldHRlciBleHRlbmRzIEFjY2Vzc29yUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJHZXR0ZXJcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0dGVyIGV4dGVuZHMgQWNjZXNzb3JQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtZXRlciwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiU2V0dGVyXCI7XG4gICAgc3VwZXIobmFtZSwgYm9keSk7XG4gICAgdGhpcy5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFQcm9wZXJ0eSBleHRlbmRzIE9iamVjdFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiRGF0YVByb3BlcnR5XCI7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOYW1lIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGtpbmQsIHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJQcm9wZXJ0eU5hbWVcIjtcbiAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5cbi8vIGxpdGVyYWxzXG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsQm9vbGVhbkV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsQm9vbGVhbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxJbmZpbml0eUV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbEluZmluaXR5RXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTnVsbEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbE51bGxFeHByZXNzaW9uXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxOdW1lcmljRXhwcmVzc2lvbiBleHRlbmRzIExpdGVyYWxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxOdW1lcmljRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsUmVnRXhwRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFN0cmluZ0V4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsU3RyaW5nRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5cbi8vIG90aGVyIGV4cHJlc3Npb25zXG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb24gZXh0ZW5kcyBQcmltYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJheUV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBiaW5kaW5nLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgdGhpcy50eXBlID0gXCJCaW5hcnlFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhbGxFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlZE1lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb21wdXRlZE1lbWJlckV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvYmplY3QpO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXN0LCBjb25zZXF1ZW50LCBhbHRlcm5hdGUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllckV4cHJlc3Npb24gZXh0ZW5kcyBQcmltYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklkZW50aWZpZXJFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV3RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICB0aGlzLnR5cGUgPSBcIk5ld0V4cHJlc3Npb25cIjtcbiAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvc3RmaXhFeHByZXNzaW9uIGV4dGVuZHMgVW5hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmFuZCwgb3BlcmF0b3IpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlBvc3RmaXhFeHByZXNzaW9uXCI7XG4gICAgc3VwZXIob3BlcmFuZCk7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmVmaXhFeHByZXNzaW9uIGV4dGVuZHMgVW5hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3IsIG9wZXJhbmQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlByZWZpeEV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvcGVyYW5kKTtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRpY01lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHRoaXMudHlwZSA9IFwiU3RhdGljTWVtYmVyRXhwcmVzc2lvblwiO1xuICAgIHN1cGVyKG9iamVjdCk7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaGlzRXhwcmVzc2lvbiBleHRlbmRzIFByaW1hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJUaGlzRXhwcmVzc2lvblwiO1xuICB9XG59XG5cblxuLy8gb3RoZXIgc3RhdGVtZW50c1xuXG5leHBvcnQgY2xhc3MgQmxvY2tTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihibG9jaykge1xuICAgIHRoaXMudHlwZSA9IFwiQmxvY2tTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJsb2NrID0gYmxvY2s7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyZWFrU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJyZWFrU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250aW51ZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb250aW51ZVN0YXRlbWVudFwiO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVidWdnZXJTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRlYnVnZ2VyU3RhdGVtZW50XCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvV2hpbGVTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5LCB0ZXN0KSB7XG4gICAgdGhpcy50eXBlID0gXCJEb1doaWxlU3RhdGVtZW50XCI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiRW1wdHlTdGF0ZW1lbnRcIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JJblN0YXRlbWVudCBleHRlbmRzIEl0ZXJhdGlvblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxlZnQsIHJpZ2h0LCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGb3JJblN0YXRlbWVudFwiO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvclN0YXRlbWVudCBleHRlbmRzIEl0ZXJhdGlvblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGluaXQsIHRlc3QsIHVwZGF0ZSwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRm9yU3RhdGVtZW50XCI7XG4gICAgdGhpcy5pbml0ID0gaW5pdDtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElmU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IodGVzdCwgY29uc2VxdWVudCwgYWx0ZXJuYXRlKSB7XG4gICAgdGhpcy50eXBlID0gXCJJZlN0YXRlbWVudFwiO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGFiZWxlZFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJMYWJlbGVkU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlJldHVyblN0YXRlbWVudFwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRpc2NyaW1pbmFudCwgY2FzZXMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaFN0YXRlbWVudFwiO1xuICAgIHRoaXMuZGlzY3JpbWluYW50ID0gZGlzY3JpbWluYW50O1xuICAgIHRoaXMuY2FzZXMgPSBjYXNlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoU3RhdGVtZW50V2l0aERlZmF1bHQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkaXNjcmltaW5hbnQsIHByZURlZmF1bHRDYXNlcywgZGVmYXVsdENhc2UsIHBvc3REZWZhdWx0Q2FzZXMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaFN0YXRlbWVudFdpdGhEZWZhdWx0XCI7XG4gICAgdGhpcy5kaXNjcmltaW5hbnQgPSBkaXNjcmltaW5hbnQ7XG4gICAgdGhpcy5wcmVEZWZhdWx0Q2FzZXMgPSBwcmVEZWZhdWx0Q2FzZXM7XG4gICAgdGhpcy5kZWZhdWx0Q2FzZSA9IGRlZmF1bHRDYXNlO1xuICAgIHRoaXMucG9zdERlZmF1bHRDYXNlcyA9IHBvc3REZWZhdWx0Q2FzZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRocm93U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiVGhyb3dTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcnlDYXRjaFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJvZHksIGNhdGNoQ2xhdXNlKSB7XG4gICAgdGhpcy50eXBlID0gXCJUcnlDYXRjaFN0YXRlbWVudFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5jYXRjaENsYXVzZSA9IGNhdGNoQ2xhdXNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcnlGaW5hbGx5U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYm9keSwgY2F0Y2hDbGF1c2UsIGZpbmFsaXplcikge1xuICAgIHRoaXMudHlwZSA9IFwiVHJ5RmluYWxseVN0YXRlbWVudFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5jYXRjaENsYXVzZSA9IGNhdGNoQ2xhdXNlO1xuICAgIHRoaXMuZmluYWxpemVyID0gZmluYWxpemVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25TdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdoaWxlU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IodGVzdCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiV2hpbGVTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpdGhTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIldpdGhTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cblxuLy8gZGlyZWN0aXZlc1xuXG5leHBvcnQgY2xhc3MgVW5rbm93bkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJVbmtub3duRGlyZWN0aXZlXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VTdHJpY3REaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlVzZVN0cmljdERpcmVjdGl2ZVwiO1xuICB9XG59XG5cblxuLy8gb3RoZXIgbm9kZXNcblxuZXhwb3J0IGNsYXNzIEJsb2NrIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJsb2NrXCI7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2F0Y2hDbGF1c2UgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoYmluZGluZywgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiQ2F0Y2hDbGF1c2VcIjtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMudHlwZSA9IFwiSWRlbnRpZmllclwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNjcmlwdCBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcihib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJTY3JpcHRcIjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hDYXNlIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGNvbnNlcXVlbnQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaENhc2VcIjtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaERlZmF1bHQgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY29uc2VxdWVudCkge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoRGVmYXVsdFwiO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb24gZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3Ioa2luZCwgZGVjbGFyYXRvcnMpIHtcbiAgICBpZiAoZGVjbGFyYXRvcnMubGVuZ3RoIDwgMSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJWYXJpYWJsZURlY2xhcmF0aW9uIGRlY2xhcmF0b3JzIGxpc3QgbXVzdCBiZSBub24tZW1wdHkuXCIpO1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xuICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgdGhpcy5kZWNsYXJhdG9ycyA9IGRlY2xhcmF0b3JzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0b3IgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoYmluZGluZywgaW5pdCkge1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdG9yXCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICB9XG59XG4iXX0=