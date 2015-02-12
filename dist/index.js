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

var SourceLocation = exports.SourceLocation = function SourceLocation(offset, line, column) {
  _classCallCheck(this, SourceLocation);

  this.offset = offset;
  this.line = line;
  this.column = column;
};

var SourceSpan = exports.SourceSpan = function SourceSpan(start, end, source) {
  _classCallCheck(this, SourceSpan);

  this.start = start;
  this.end = end;
  this.source = source;
};

var IterationStatement = function IterationStatement(body) {
  _classCallCheck(this, IterationStatement);

  this.body = body;
};

var UnaryExpression = function UnaryExpression(operand) {
  _classCallCheck(this, UnaryExpression);

  this.operand = operand;
};

var MemberExpression = function MemberExpression(object) {
  _classCallCheck(this, MemberExpression);

  this.object = object;
};

var ObjectProperty = function ObjectProperty(name) {
  _classCallCheck(this, ObjectProperty);

  this.name = name;
};

var AccessorProperty = (function (ObjectProperty) {
  function AccessorProperty(name, body) {
    _classCallCheck(this, AccessorProperty);

    _get(Object.getPrototypeOf(AccessorProperty.prototype), "constructor", this).call(this, name);
    this.body = body;
  }

  _inherits(AccessorProperty, ObjectProperty);

  return AccessorProperty;
})(ObjectProperty);




// functions

var FunctionBody = exports.FunctionBody = function FunctionBody(directives, statements) {
  _classCallCheck(this, FunctionBody);

  this.type = "FunctionBody";
  this.directives = directives;
  this.statements = statements;
};

var FunctionDeclaration = exports.FunctionDeclaration = function FunctionDeclaration(name, parameters, body) {
  _classCallCheck(this, FunctionDeclaration);

  this.type = "FunctionDeclaration";
  this.name = name;
  this.parameters = parameters;
  this.body = body;
};

var FunctionExpression = exports.FunctionExpression = function FunctionExpression(name, parameters, body) {
  _classCallCheck(this, FunctionExpression);

  this.type = "FunctionExpression";
  this.name = name;
  this.parameters = parameters;
  this.body = body;
};




// object expressions

var ObjectExpression = exports.ObjectExpression = function ObjectExpression(properties) {
  _classCallCheck(this, ObjectExpression);

  this.type = "ObjectExpression";
  this.properties = properties;
};

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
var PropertyName = exports.PropertyName = function PropertyName(kind, value) {
  _classCallCheck(this, PropertyName);

  this.type = "PropertyName";
  this.kind = kind;
  this.value = value;
};




// literals

var LiteralBooleanExpression = exports.LiteralBooleanExpression = function LiteralBooleanExpression(value) {
  _classCallCheck(this, LiteralBooleanExpression);

  this.type = "LiteralBooleanExpression";
  this.value = value;
};

var LiteralInfinityExpression = exports.LiteralInfinityExpression = function LiteralInfinityExpression() {
  _classCallCheck(this, LiteralInfinityExpression);

  this.type = "LiteralInfinityExpression";
};

var LiteralNullExpression = exports.LiteralNullExpression = function LiteralNullExpression() {
  _classCallCheck(this, LiteralNullExpression);

  this.type = "LiteralNullExpression";
};

var LiteralNumericExpression = exports.LiteralNumericExpression = function LiteralNumericExpression(value) {
  _classCallCheck(this, LiteralNumericExpression);

  this.type = "LiteralNumericExpression";
  this.value = value;
};

var LiteralRegExpExpression = exports.LiteralRegExpExpression = function LiteralRegExpExpression(value) {
  _classCallCheck(this, LiteralRegExpExpression);

  this.type = "LiteralRegExpExpression";
  this.value = value;
};

var LiteralStringExpression = exports.LiteralStringExpression = function LiteralStringExpression(value) {
  _classCallCheck(this, LiteralStringExpression);

  this.type = "LiteralStringExpression";
  this.value = value;
};




// other expressions

var ArrayExpression = exports.ArrayExpression = function ArrayExpression(elements) {
  _classCallCheck(this, ArrayExpression);

  this.type = "ArrayExpression";
  this.elements = elements;
};

var AssignmentExpression = exports.AssignmentExpression = function AssignmentExpression(operator, binding, expression) {
  _classCallCheck(this, AssignmentExpression);

  this.type = "AssignmentExpression";
  this.operator = operator;
  this.binding = binding;
  this.expression = expression;
};

var BinaryExpression = exports.BinaryExpression = function BinaryExpression(operator, left, right) {
  _classCallCheck(this, BinaryExpression);

  this.type = "BinaryExpression";
  this.operator = operator;
  this.left = left;
  this.right = right;
};

var CallExpression = exports.CallExpression = function CallExpression(callee, args) {
  _classCallCheck(this, CallExpression);

  this.type = "CallExpression";
  this.callee = callee;
  this.arguments = args;
};

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
var ConditionalExpression = exports.ConditionalExpression = function ConditionalExpression(test, consequent, alternate) {
  _classCallCheck(this, ConditionalExpression);

  this.type = "ConditionalExpression";
  this.test = test;
  this.consequent = consequent;
  this.alternate = alternate;
};

var IdentifierExpression = exports.IdentifierExpression = function IdentifierExpression(identifier) {
  _classCallCheck(this, IdentifierExpression);

  this.type = "IdentifierExpression";
  this.identifier = identifier;
};

var NewExpression = exports.NewExpression = function NewExpression(callee, args) {
  _classCallCheck(this, NewExpression);

  this.type = "NewExpression";
  this.callee = callee;
  this.arguments = args;
};

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
var ThisExpression = exports.ThisExpression = function ThisExpression() {
  _classCallCheck(this, ThisExpression);

  this.type = "ThisExpression";
};




// other statements

var BlockStatement = exports.BlockStatement = function BlockStatement(block) {
  _classCallCheck(this, BlockStatement);

  this.type = "BlockStatement";
  this.block = block;
};

var BreakStatement = exports.BreakStatement = function BreakStatement(label) {
  _classCallCheck(this, BreakStatement);

  this.type = "BreakStatement";
  this.label = label;
};

var ContinueStatement = exports.ContinueStatement = function ContinueStatement(label) {
  _classCallCheck(this, ContinueStatement);

  this.type = "ContinueStatement";
  this.label = label;
};

var DebuggerStatement = exports.DebuggerStatement = function DebuggerStatement() {
  _classCallCheck(this, DebuggerStatement);

  this.type = "DebuggerStatement";
};

var DoWhileStatement = exports.DoWhileStatement = (function (IterationStatement) {
  function DoWhileStatement(body, test) {
    _classCallCheck(this, DoWhileStatement);

    this.type = "DoWhileStatement";
    _get(Object.getPrototypeOf(DoWhileStatement.prototype), "constructor", this).call(this, body);
    this.test = test;
  }

  _inherits(DoWhileStatement, IterationStatement);

  return DoWhileStatement;
})(IterationStatement);
var EmptyStatement = exports.EmptyStatement = function EmptyStatement() {
  _classCallCheck(this, EmptyStatement);

  this.type = "EmptyStatement";
};

var ExpressionStatement = exports.ExpressionStatement = function ExpressionStatement(expression) {
  _classCallCheck(this, ExpressionStatement);

  this.type = "ExpressionStatement";
  this.expression = expression;
};

var ForInStatement = exports.ForInStatement = (function (IterationStatement) {
  function ForInStatement(left, right, body) {
    _classCallCheck(this, ForInStatement);

    this.type = "ForInStatement";
    _get(Object.getPrototypeOf(ForInStatement.prototype), "constructor", this).call(this, body);
    this.left = left;
    this.right = right;
  }

  _inherits(ForInStatement, IterationStatement);

  return ForInStatement;
})(IterationStatement);
var ForStatement = exports.ForStatement = (function (IterationStatement) {
  function ForStatement(init, test, update, body) {
    _classCallCheck(this, ForStatement);

    this.type = "ForStatement";
    _get(Object.getPrototypeOf(ForStatement.prototype), "constructor", this).call(this, body);
    this.init = init;
    this.test = test;
    this.update = update;
  }

  _inherits(ForStatement, IterationStatement);

  return ForStatement;
})(IterationStatement);
var IfStatement = exports.IfStatement = function IfStatement(test, consequent, alternate) {
  _classCallCheck(this, IfStatement);

  this.type = "IfStatement";
  this.test = test;
  this.consequent = consequent;
  this.alternate = alternate;
};

var LabeledStatement = exports.LabeledStatement = function LabeledStatement(label, body) {
  _classCallCheck(this, LabeledStatement);

  this.type = "LabeledStatement";
  this.label = label;
  this.body = body;
};

var ReturnStatement = exports.ReturnStatement = function ReturnStatement(expression) {
  _classCallCheck(this, ReturnStatement);

  this.type = "ReturnStatement";
  this.expression = expression;
};

var SwitchStatement = exports.SwitchStatement = function SwitchStatement(discriminant, cases) {
  _classCallCheck(this, SwitchStatement);

  this.type = "SwitchStatement";
  this.discriminant = discriminant;
  this.cases = cases;
};

var SwitchStatementWithDefault = exports.SwitchStatementWithDefault = function SwitchStatementWithDefault(discriminant, preDefaultCases, defaultCase, postDefaultCases) {
  _classCallCheck(this, SwitchStatementWithDefault);

  this.type = "SwitchStatementWithDefault";
  this.discriminant = discriminant;
  this.preDefaultCases = preDefaultCases;
  this.defaultCase = defaultCase;
  this.postDefaultCases = postDefaultCases;
};

var ThrowStatement = exports.ThrowStatement = function ThrowStatement(expression) {
  _classCallCheck(this, ThrowStatement);

  this.type = "ThrowStatement";
  this.expression = expression;
};

var TryCatchStatement = exports.TryCatchStatement = function TryCatchStatement(body, catchClause) {
  _classCallCheck(this, TryCatchStatement);

  this.type = "TryCatchStatement";
  this.body = body;
  this.catchClause = catchClause;
};

var TryFinallyStatement = exports.TryFinallyStatement = function TryFinallyStatement(body, catchClause, finalizer) {
  _classCallCheck(this, TryFinallyStatement);

  this.type = "TryFinallyStatement";
  this.body = body;
  this.catchClause = catchClause;
  this.finalizer = finalizer;
};

var VariableDeclarationStatement = exports.VariableDeclarationStatement = function VariableDeclarationStatement(declaration) {
  _classCallCheck(this, VariableDeclarationStatement);

  this.type = "VariableDeclarationStatement";
  this.declaration = declaration;
};

var WhileStatement = exports.WhileStatement = (function (IterationStatement) {
  function WhileStatement(test, body) {
    _classCallCheck(this, WhileStatement);

    this.type = "WhileStatement";
    _get(Object.getPrototypeOf(WhileStatement.prototype), "constructor", this).call(this, body);
    this.test = test;
  }

  _inherits(WhileStatement, IterationStatement);

  return WhileStatement;
})(IterationStatement);
var WithStatement = exports.WithStatement = function WithStatement(object, body) {
  _classCallCheck(this, WithStatement);

  this.type = "WithStatement";
  this.object = object;
  this.body = body;
};




// directives

var UnknownDirective = exports.UnknownDirective = function UnknownDirective(value) {
  _classCallCheck(this, UnknownDirective);

  this.type = "UnknownDirective";
  this.value = value;
};

var UseStrictDirective = exports.UseStrictDirective = function UseStrictDirective() {
  _classCallCheck(this, UseStrictDirective);

  this.type = "UseStrictDirective";
};




// other nodes

var Block = exports.Block = function Block(statements) {
  _classCallCheck(this, Block);

  this.type = "Block";
  this.statements = statements;
};

var CatchClause = exports.CatchClause = function CatchClause(binding, body) {
  _classCallCheck(this, CatchClause);

  this.type = "CatchClause";
  this.binding = binding;
  this.body = body;
};

var Identifier = exports.Identifier = function Identifier(name) {
  _classCallCheck(this, Identifier);

  this.type = "Identifier";
  this.name = name;
};

var Script = exports.Script = function Script(body) {
  _classCallCheck(this, Script);

  this.type = "Script";
  this.body = body;
};

var SwitchCase = exports.SwitchCase = function SwitchCase(test, consequent) {
  _classCallCheck(this, SwitchCase);

  this.type = "SwitchCase";
  this.test = test;
  this.consequent = consequent;
};

var SwitchDefault = exports.SwitchDefault = function SwitchDefault(consequent) {
  _classCallCheck(this, SwitchDefault);

  this.type = "SwitchDefault";
  this.consequent = consequent;
};

var VariableDeclaration = exports.VariableDeclaration = function VariableDeclaration(kind, declarators) {
  _classCallCheck(this, VariableDeclaration);

  if (declarators.length < 1) throw new TypeError("VariableDeclaration declarators list must be non-empty.");
  this.type = "VariableDeclaration";
  this.kind = kind;
  this.declarators = declarators;
};

var VariableDeclarator = exports.VariableDeclarator = function VariableDeclarator(binding, init) {
  _classCallCheck(this, VariableDeclarator);

  this.type = "VariableDeclarator";
  this.binding = binding;
  this.init = init;
};
//# sourceMappingURL=data:application/json;base64,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O3dCQURqQixVQUFVOztBQUVuQixNQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUN6QixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztDQUM5Qjs7SUFHVSxhQUFhLFdBQWIsYUFBYSxHQUNiLFNBREEsYUFBYSxDQUNaLFVBQVU7d0JBRFgsYUFBYTs7QUFFdEIsTUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7QUFDNUIsTUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDOUI7O0lBR1UsbUJBQW1CLFdBQW5CLG1CQUFtQixHQUNuQixTQURBLG1CQUFtQixDQUNsQixJQUFJLEVBQUUsV0FBVzt3QkFEbEIsbUJBQW1COztBQUU1QixNQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN4QixNQUFNLElBQUksU0FBUyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7QUFDakYsTUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztBQUNsQyxNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztDQUNoQzs7SUFHVSxrQkFBa0IsV0FBbEIsa0JBQWtCLEdBQ2xCLFNBREEsa0JBQWtCLENBQ2pCLE9BQU8sRUFBRSxJQUFJO3dCQURkLGtCQUFrQjs7QUFFM0IsTUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztBQUNqQyxNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNsQiIsImZpbGUiOiJzcmMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDE0IFNoYXBlIFNlY3VyaXR5LCBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG4vLyBub2RlIGNsYXNzZXNcblxuZXhwb3J0IGNsYXNzIFNvdXJjZUxvY2F0aW9uIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0LCBsaW5lLCBjb2x1bW4pIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VTcGFuIHtcbiAgY29uc3RydWN0b3Ioc3RhcnQsIGVuZCwgc291cmNlKSB7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG59XG5cbmNsYXNzIEl0ZXJhdGlvblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJvZHkpIHtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmNsYXNzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhbmQpIHtcbiAgICB0aGlzLm9wZXJhbmQgPSBvcGVyYW5kO1xuICB9XG59XG5cbmNsYXNzIE1lbWJlckV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgfVxufVxuXG5jbGFzcyBPYmplY3RQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmNsYXNzIEFjY2Vzc29yUHJvcGVydHkgZXh0ZW5kcyBPYmplY3RQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvZHkpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cblxuLy8gZnVuY3Rpb25zXG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkJvZHkge1xuICBjb25zdHJ1Y3RvcihkaXJlY3RpdmVzLCBzdGF0ZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkJvZHlcIjtcbiAgICB0aGlzLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwYXJhbWV0ZXJzLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtZXRlcnMsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cblxuLy8gb2JqZWN0IGV4cHJlc3Npb25zXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMudHlwZSA9IFwiT2JqZWN0RXhwcmVzc2lvblwiO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldHRlciBleHRlbmRzIEFjY2Vzc29yUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJHZXR0ZXJcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0dGVyIGV4dGVuZHMgQWNjZXNzb3JQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtZXRlciwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiU2V0dGVyXCI7XG4gICAgc3VwZXIobmFtZSwgYm9keSk7XG4gICAgdGhpcy5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFQcm9wZXJ0eSBleHRlbmRzIE9iamVjdFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiRGF0YVByb3BlcnR5XCI7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOYW1lIHtcbiAgY29uc3RydWN0b3Ioa2luZCwgdmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlByb3BlcnR5TmFtZVwiO1xuICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblxuLy8gbGl0ZXJhbHNcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxCb29sZWFuRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsQm9vbGVhbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxJbmZpbml0eUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxJbmZpbml0eUV4cHJlc3Npb25cIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE51bGxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsTnVsbEV4cHJlc3Npb25cIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE51bWVyaWNFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxOdW1lcmljRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxTdHJpbmdFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxTdHJpbmdFeHByZXNzaW9uXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblxuLy8gb3RoZXIgZXhwcmVzc2lvbnNcblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJheUV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGJpbmRpbmcsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMudHlwZSA9IFwiQmluYXJ5RXhwcmVzc2lvblwiO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhbGxFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlZE1lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb21wdXRlZE1lbWJlckV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvYmplY3QpO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklkZW50aWZpZXJFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV3RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgIHRoaXMudHlwZSA9IFwiTmV3RXhwcmVzc2lvblwiO1xuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9zdGZpeEV4cHJlc3Npb24gZXh0ZW5kcyBVbmFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYW5kLCBvcGVyYXRvcikge1xuICAgIHRoaXMudHlwZSA9IFwiUG9zdGZpeEV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvcGVyYW5kKTtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByZWZpeEV4cHJlc3Npb24gZXh0ZW5kcyBVbmFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgb3BlcmFuZCkge1xuICAgIHRoaXMudHlwZSA9IFwiUHJlZml4RXhwcmVzc2lvblwiO1xuICAgIHN1cGVyKG9wZXJhbmQpO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3RhdGljTWVtYmVyRXhwcmVzc2lvbiBleHRlbmRzIE1lbWJlckV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgdGhpcy50eXBlID0gXCJTdGF0aWNNZW1iZXJFeHByZXNzaW9uXCI7XG4gICAgc3VwZXIob2JqZWN0KTtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRoaXNFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJUaGlzRXhwcmVzc2lvblwiO1xuICB9XG59XG5cblxuLy8gb3RoZXIgc3RhdGVtZW50c1xuXG5leHBvcnQgY2xhc3MgQmxvY2tTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihibG9jaykge1xuICAgIHRoaXMudHlwZSA9IFwiQmxvY2tTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJsb2NrID0gYmxvY2s7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyZWFrU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJyZWFrU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250aW51ZVN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb250aW51ZVN0YXRlbWVudFwiO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVidWdnZXJTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRlYnVnZ2VyU3RhdGVtZW50XCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvV2hpbGVTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5LCB0ZXN0KSB7XG4gICAgdGhpcy50eXBlID0gXCJEb1doaWxlU3RhdGVtZW50XCI7XG4gICAgc3VwZXIoYm9keSk7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkVtcHR5U3RhdGVtZW50XCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJFeHByZXNzaW9uU3RhdGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ySW5TdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRm9ySW5TdGF0ZW1lbnRcIjtcbiAgICBzdXBlcihib2R5KTtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW5pdCwgdGVzdCwgdXBkYXRlLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGb3JTdGF0ZW1lbnRcIjtcbiAgICBzdXBlcihib2R5KTtcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElmU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IodGVzdCwgY29uc2VxdWVudCwgYWx0ZXJuYXRlKSB7XG4gICAgdGhpcy50eXBlID0gXCJJZlN0YXRlbWVudFwiO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGFiZWxlZFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJMYWJlbGVkU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlJldHVyblN0YXRlbWVudFwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRpc2NyaW1pbmFudCwgY2FzZXMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaFN0YXRlbWVudFwiO1xuICAgIHRoaXMuZGlzY3JpbWluYW50ID0gZGlzY3JpbWluYW50O1xuICAgIHRoaXMuY2FzZXMgPSBjYXNlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoU3RhdGVtZW50V2l0aERlZmF1bHQge1xuICBjb25zdHJ1Y3RvcihkaXNjcmltaW5hbnQsIHByZURlZmF1bHRDYXNlcywgZGVmYXVsdENhc2UsIHBvc3REZWZhdWx0Q2FzZXMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaFN0YXRlbWVudFdpdGhEZWZhdWx0XCI7XG4gICAgdGhpcy5kaXNjcmltaW5hbnQgPSBkaXNjcmltaW5hbnQ7XG4gICAgdGhpcy5wcmVEZWZhdWx0Q2FzZXMgPSBwcmVEZWZhdWx0Q2FzZXM7XG4gICAgdGhpcy5kZWZhdWx0Q2FzZSA9IGRlZmF1bHRDYXNlO1xuICAgIHRoaXMucG9zdERlZmF1bHRDYXNlcyA9IHBvc3REZWZhdWx0Q2FzZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRocm93U3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiVGhyb3dTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcnlDYXRjaFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJvZHksIGNhdGNoQ2xhdXNlKSB7XG4gICAgdGhpcy50eXBlID0gXCJUcnlDYXRjaFN0YXRlbWVudFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5jYXRjaENsYXVzZSA9IGNhdGNoQ2xhdXNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcnlGaW5hbGx5U3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYm9keSwgY2F0Y2hDbGF1c2UsIGZpbmFsaXplcikge1xuICAgIHRoaXMudHlwZSA9IFwiVHJ5RmluYWxseVN0YXRlbWVudFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5jYXRjaENsYXVzZSA9IGNhdGNoQ2xhdXNlO1xuICAgIHRoaXMuZmluYWxpemVyID0gZmluYWxpemVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25TdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdoaWxlU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IodGVzdCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiV2hpbGVTdGF0ZW1lbnRcIjtcbiAgICBzdXBlcihib2R5KTtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaXRoU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJXaXRoU3RhdGVtZW50XCI7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5cbi8vIGRpcmVjdGl2ZXNcblxuZXhwb3J0IGNsYXNzIFVua25vd25EaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiVW5rbm93bkRpcmVjdGl2ZVwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXNlU3RyaWN0RGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJVc2VTdHJpY3REaXJlY3RpdmVcIjtcbiAgfVxufVxuXG5cbi8vIG90aGVyIG5vZGVzXG5cbmV4cG9ydCBjbGFzcyBCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJsb2NrXCI7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2F0Y2hDbGF1c2Uge1xuICBjb25zdHJ1Y3RvcihiaW5kaW5nLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJDYXRjaENsYXVzZVwiO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklkZW50aWZpZXJcIjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTY3JpcHQge1xuICBjb25zdHJ1Y3Rvcihib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJTY3JpcHRcIjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hDYXNlIHtcbiAgY29uc3RydWN0b3IodGVzdCwgY29uc2VxdWVudCkge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoQ2FzZVwiO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoRGVmYXVsdCB7XG4gIGNvbnN0cnVjdG9yKGNvbnNlcXVlbnQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaERlZmF1bHRcIjtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioa2luZCwgZGVjbGFyYXRvcnMpIHtcbiAgICBpZiAoZGVjbGFyYXRvcnMubGVuZ3RoIDwgMSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJWYXJpYWJsZURlY2xhcmF0aW9uIGRlY2xhcmF0b3JzIGxpc3QgbXVzdCBiZSBub24tZW1wdHkuXCIpO1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xuICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgdGhpcy5kZWNsYXJhdG9ycyA9IGRlY2xhcmF0b3JzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihiaW5kaW5nLCBpbml0KSB7XG4gICAgdGhpcy50eXBlID0gXCJWYXJpYWJsZURlY2xhcmF0b3JcIjtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gIH1cbn1cbiJdfQ==