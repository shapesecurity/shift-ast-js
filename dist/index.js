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

var NamedObjectProperty = function NamedObjectProperty(name) {
  _classCallCheck(this, NamedObjectProperty);

  this.name = name;
};

var MethodDefinition = (function (NamedObjectProperty) {
  function MethodDefinition(name, body) {
    _classCallCheck(this, MethodDefinition);

    _get(Object.getPrototypeOf(MethodDefinition.prototype), "constructor", this).call(this, name);
    this.body = body;
  }

  _inherits(MethodDefinition, NamedObjectProperty);

  return MethodDefinition;
})(NamedObjectProperty);

var AccessorProperty = (function (MethodDefinition) {
  function AccessorProperty() {
    _classCallCheck(this, AccessorProperty);

    if (MethodDefinition != null) {
      MethodDefinition.apply(this, arguments);
    }
  }

  _inherits(AccessorProperty, MethodDefinition);

  return AccessorProperty;
})(MethodDefinition);

var ImportDeclaration = function ImportDeclaration(moduleSpecifier) {
  _classCallCheck(this, ImportDeclaration);

  this.moduleSpecifier = moduleSpecifier;
};




// bindings

var BindingWithDefault = exports.BindingWithDefault = function BindingWithDefault(binding, initializer) {
  _classCallCheck(this, BindingWithDefault);

  this.type = "BindingWithDefault";
  this.binding = binding;
  this.initializer = initializer;
};

var BindingIdentifier = exports.BindingIdentifier = function BindingIdentifier(identifier) {
  _classCallCheck(this, BindingIdentifier);

  this.type = "BindingIdentifier";
  this.identifier = identifier;
};

var ArrayBinding = exports.ArrayBinding = function ArrayBinding(elements, restElement) {
  _classCallCheck(this, ArrayBinding);

  this.type = "ArrayBinding";
  this.elements = elements;
  this.restElement = restElement;
};

var ObjectBinding = exports.ObjectBinding = function ObjectBinding(properties) {
  _classCallCheck(this, ObjectBinding);

  this.type = "ObjectBinding";
  this.properties = properties;
};

var BindingPropertyIdentifier = exports.BindingPropertyIdentifier = function BindingPropertyIdentifier(identifier, initializer) {
  _classCallCheck(this, BindingPropertyIdentifier);

  this.type = "BindingPropertyIdentifier";
  this.identifier = identifier;
  this.initializer = initializer;
};

var BindingPropertyProperty = exports.BindingPropertyProperty = function BindingPropertyProperty(name, binding) {
  _classCallCheck(this, BindingPropertyProperty);

  this.type = "BindingPropertyProperty";
  this.name = name;
  this.binding = binding;
};




// classes

var ClassExpression = exports.ClassExpression = function ClassExpression(name, super_, elements) {
  _classCallCheck(this, ClassExpression);

  this.type = "ClassExpression";
  this.name = name;
  this["super"] = super_;
  this.elements = elements;
};

var ClassStatement = exports.ClassStatement = function ClassStatement(name, super_, elements) {
  _classCallCheck(this, ClassStatement);

  this.type = "ClassStatement";
  this.name = name;
  this["super"] = super_;
  this.elements = elements;
};

var ClassElement = exports.ClassElement = function ClassElement(isStatic, method) {
  _classCallCheck(this, ClassElement);

  this.type = "ClassElement";
  this.isStatic = isStatic;
  this.method = method;
};




// modules

var Module = exports.Module = function Module(directives, sourceElements) {
  _classCallCheck(this, Module);

  this.type = "Module";
  this.directives = directives;
  this.sourceElements = sourceElements;
};

var ImportModule = exports.ImportModule = (function (ImportDeclaration) {
  function ImportModule(moduleSpecifier) {
    _classCallCheck(this, ImportModule);

    this.type = "ImportModule";
    _get(Object.getPrototypeOf(ImportModule.prototype), "constructor", this).call(this, moduleSpecifier);
  }

  _inherits(ImportModule, ImportDeclaration);

  return ImportModule;
})(ImportDeclaration);
var ImportFrom = exports.ImportFrom = (function (ImportDeclaration) {
  function ImportFrom(importClause, moduleSpecifier) {
    _classCallCheck(this, ImportFrom);

    this.type = "ImportFrom";
    _get(Object.getPrototypeOf(ImportFrom.prototype), "constructor", this).call(this, moduleSpecifier);
    this.importClause = importClause;
  }

  _inherits(ImportFrom, ImportDeclaration);

  return ImportFrom;
})(ImportDeclaration);
var ImportFromWithBinding = exports.ImportFromWithBinding = (function (ImportDeclaration) {
  function ImportFromWithBinding(bindingIdentifier, importClause, moduleSpecifier) {
    _classCallCheck(this, ImportFromWithBinding);

    this.type = "ImportFromWithBinding";
    _get(Object.getPrototypeOf(ImportFromWithBinding.prototype), "constructor", this).call(this, moduleSpecifier);
    this.bindingIdentifier = bindingIdentifier;
    this.importClause = importClause;
  }

  _inherits(ImportFromWithBinding, ImportDeclaration);

  return ImportFromWithBinding;
})(ImportDeclaration);
var NamedImports = exports.NamedImports = function NamedImports(importSpecifiers) {
  _classCallCheck(this, NamedImports);

  this.type = "NamedImports";
  this.importSpecifiers = importSpecifiers;
};

var ImportSpecifier = exports.ImportSpecifier = function ImportSpecifier(identifier, bindingIdentifier) {
  _classCallCheck(this, ImportSpecifier);

  this.type = "ImportSpecifier";
  this.identifier = identifier;
  this.bindingIdentifier = bindingIdentifier;
};

var ExportFrom = exports.ExportFrom = function ExportFrom(exportSpecifiers, moduleSpecifier) {
  _classCallCheck(this, ExportFrom);

  this.type = "ExportFrom";
  this.exportSpecifiers = exportSpecifiers;
  this.moduleSpecifier = moduleSpecifier;
};

var Export = exports.Export = function Export(target) {
  _classCallCheck(this, Export);

  this.type = "Export";
  this.target = target;
};

var ExportDefault = exports.ExportDefault = function ExportDefault(target) {
  _classCallCheck(this, ExportDefault);

  this.type = "ExportDefault";
  this.target = target;
};

var ExportSpecifier = exports.ExportSpecifier = function ExportSpecifier(identifier, as) {
  _classCallCheck(this, ExportSpecifier);

  this.type = "ExportSpecifier";
  this.identifier = identifier;
  this.as = as;
};




// functions

var FunctionBody = exports.FunctionBody = function FunctionBody(directives, statements) {
  _classCallCheck(this, FunctionBody);

  this.type = "FunctionBody";
  this.directives = directives;
  this.statements = statements;
};

var ArrowExpression = exports.ArrowExpression = function ArrowExpression(parameters, restParameter, body) {
  _classCallCheck(this, ArrowExpression);

  this.type = "ArrowExpression";
  this.parameters = parameters;
  this.restParameter = restParameter;
  this.body = body;
};

var FunctionDeclaration = exports.FunctionDeclaration = function FunctionDeclaration(isGenerator, name, parameters, restParameter, body) {
  _classCallCheck(this, FunctionDeclaration);

  this.type = "FunctionDeclaration";
  this.isGenerator = isGenerator;
  this.name = name;
  this.parameters = parameters;
  this.restParameter = restParameter;
  this.body = body;
};

var FunctionExpression = exports.FunctionExpression = function FunctionExpression(isGenerator, name, parameters, restParameter, body) {
  _classCallCheck(this, FunctionExpression);

  this.type = "FunctionExpression";
  this.isGenerator = isGenerator;
  this.name = name;
  this.parameters = parameters;
  this.restParameter = restParameter;
  this.body = body;
};

var Method = exports.Method = (function (MethodDefinition) {
  function Method(isGenerator, name, parameters, restParameter, body) {
    _classCallCheck(this, Method);

    this.type = "Method";
    _get(Object.getPrototypeOf(Method.prototype), "constructor", this).call(this, name, body);
    this.isGenerator = isGenerator;
    this.parameters = parameters;
    this.restParameter = restParameter;
  }

  _inherits(Method, MethodDefinition);

  return Method;
})(MethodDefinition);



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
var DataProperty = exports.DataProperty = (function (NamedObjectProperty) {
  function DataProperty(name, expression) {
    _classCallCheck(this, DataProperty);

    this.type = "DataProperty";
    _get(Object.getPrototypeOf(DataProperty.prototype), "constructor", this).call(this, name);
    this.expression = expression;
  }

  _inherits(DataProperty, NamedObjectProperty);

  return DataProperty;
})(NamedObjectProperty);
var ShorthandProperty = exports.ShorthandProperty = function ShorthandProperty(name) {
  _classCallCheck(this, ShorthandProperty);

  this.type = "ShorthandProperty";
  this.name = name;
};

var ComputedPropertyName = exports.ComputedPropertyName = function ComputedPropertyName(value) {
  _classCallCheck(this, ComputedPropertyName);

  this.type = "ComputedPropertyName";
  this.value = value;
};

var StaticPropertyName = exports.StaticPropertyName = function StaticPropertyName(value) {
  _classCallCheck(this, StaticPropertyName);

  this.type = "StaticPropertyName";
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
var TemplateString = exports.TemplateString = function TemplateString(elements) {
  _classCallCheck(this, TemplateString);

  this.type = "TemplateString";
  this.elements = elements;
};

var ThisExpression = exports.ThisExpression = function ThisExpression() {
  _classCallCheck(this, ThisExpression);

  this.type = "ThisExpression";
};

var YieldExpression = exports.YieldExpression = function YieldExpression(expression) {
  _classCallCheck(this, YieldExpression);

  this.type = "YieldExpression";
  this.expression = expression;
};

var YieldGeneratorExpression = exports.YieldGeneratorExpression = function YieldGeneratorExpression(expression) {
  _classCallCheck(this, YieldGeneratorExpression);

  this.type = "YieldGeneratorExpression";
  this.expression = expression;
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
var ForOfStatement = exports.ForOfStatement = function ForOfStatement(left, right, body) {
  _classCallCheck(this, ForOfStatement);

  this.type = "ForOfStatement";
  this.left = left;
  this.right = right;
  this.body = body;
};

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

var Directive = exports.Directive = function Directive(value) {
  _classCallCheck(this, Directive);

  this.type = "Directive";
  this.value = value;
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

var SpreadElement = exports.SpreadElement = function SpreadElement(expression) {
  _classCallCheck(this, SpreadElement);

  this.type = "SpreadElement";
  this.expression = expression;
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

var TemplateLiteral = exports.TemplateLiteral = function TemplateLiteral(value) {
  _classCallCheck(this, TemplateLiteral);

  this.type = "TemplateLiteral";
  this.value = value;
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
//# sourceMappingURL=data:application/json;base64,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bEIiLCJmaWxlIjoic3JjL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNCBTaGFwZSBTZWN1cml0eSwgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cblxuLy8gbm9kZSBjbGFzc2VzXG5cbmNsYXNzIEl0ZXJhdGlvblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJvZHkpIHtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmNsYXNzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhbmQpIHtcbiAgICB0aGlzLm9wZXJhbmQgPSBvcGVyYW5kO1xuICB9XG59XG5cbmNsYXNzIE1lbWJlckV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgfVxufVxuXG5jbGFzcyBOYW1lZE9iamVjdFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuY2xhc3MgTWV0aG9kRGVmaW5pdGlvbiBleHRlbmRzIE5hbWVkT2JqZWN0UHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2R5KSB7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5jbGFzcyBBY2Nlc3NvclByb3BlcnR5IGV4dGVuZHMgTWV0aG9kRGVmaW5pdGlvbiB7IH1cblxuY2xhc3MgSW1wb3J0RGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLm1vZHVsZVNwZWNpZmllciA9IG1vZHVsZVNwZWNpZmllcjtcbiAgfVxufVxuXG5cbi8vIGJpbmRpbmdzXG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nV2l0aERlZmF1bHQge1xuICBjb25zdHJ1Y3RvcihiaW5kaW5nLCBpbml0aWFsaXplcikge1xuICAgIHRoaXMudHlwZSA9IFwiQmluZGluZ1dpdGhEZWZhdWx0XCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdJZGVudGlmaWVyIHtcbiAgY29uc3RydWN0b3IoaWRlbnRpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiQmluZGluZ0lkZW50aWZpZXJcIjtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUJpbmRpbmcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50cywgcmVzdEVsZW1lbnQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkFycmF5QmluZGluZ1wiO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICB0aGlzLnJlc3RFbGVtZW50ID0gcmVzdEVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdEJpbmRpbmcge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy50eXBlID0gXCJPYmplY3RCaW5kaW5nXCI7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluZGluZ1Byb3BlcnR5SWRlbnRpZmllciB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIsIGluaXRpYWxpemVyKSB7XG4gICAgdGhpcy50eXBlID0gXCJCaW5kaW5nUHJvcGVydHlJZGVudGlmaWVyXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdQcm9wZXJ0eVByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgYmluZGluZykge1xuICAgIHRoaXMudHlwZSA9IFwiQmluZGluZ1Byb3BlcnR5UHJvcGVydHlcIjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gIH1cbn1cblxuXG4vLyBjbGFzc2VzXG5cbmV4cG9ydCBjbGFzcyBDbGFzc0V4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdXBlcl8sIGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJDbGFzc0V4cHJlc3Npb25cIjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXIgPSBzdXBlcl87XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1N0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN1cGVyXywgZWxlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNsYXNzU3RhdGVtZW50XCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyID0gc3VwZXJfO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaXNTdGF0aWMsIG1ldGhvZCkge1xuICAgIHRoaXMudHlwZSA9IFwiQ2xhc3NFbGVtZW50XCI7XG4gICAgdGhpcy5pc1N0YXRpYyA9IGlzU3RhdGljO1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB9XG59XG5cblxuLy8gbW9kdWxlc1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoZGlyZWN0aXZlcywgc291cmNlRWxlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIk1vZHVsZVwiO1xuICAgIHRoaXMuZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXM7XG4gICAgdGhpcy5zb3VyY2VFbGVtZW50cyA9IHNvdXJjZUVsZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBvcnRNb2R1bGUgZXh0ZW5kcyBJbXBvcnREZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1vZHVsZVNwZWNpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiSW1wb3J0TW9kdWxlXCI7XG4gICAgc3VwZXIobW9kdWxlU3BlY2lmaWVyKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1wb3J0RnJvbSBleHRlbmRzIEltcG9ydERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoaW1wb3J0Q2xhdXNlLCBtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkltcG9ydEZyb21cIjtcbiAgICBzdXBlcihtb2R1bGVTcGVjaWZpZXIpO1xuICAgIHRoaXMuaW1wb3J0Q2xhdXNlID0gaW1wb3J0Q2xhdXNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBvcnRGcm9tV2l0aEJpbmRpbmcgZXh0ZW5kcyBJbXBvcnREZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGJpbmRpbmdJZGVudGlmaWVyLCBpbXBvcnRDbGF1c2UsIG1vZHVsZVNwZWNpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiSW1wb3J0RnJvbVdpdGhCaW5kaW5nXCI7XG4gICAgc3VwZXIobW9kdWxlU3BlY2lmaWVyKTtcbiAgICB0aGlzLmJpbmRpbmdJZGVudGlmaWVyID0gYmluZGluZ0lkZW50aWZpZXI7XG4gICAgdGhpcy5pbXBvcnRDbGF1c2UgPSBpbXBvcnRDbGF1c2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hbWVkSW1wb3J0cyB7XG4gIGNvbnN0cnVjdG9yKGltcG9ydFNwZWNpZmllcnMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIk5hbWVkSW1wb3J0c1wiO1xuICAgIHRoaXMuaW1wb3J0U3BlY2lmaWVycyA9IGltcG9ydFNwZWNpZmllcnM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltcG9ydFNwZWNpZmllciB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIsIGJpbmRpbmdJZGVudGlmaWVyKSB7XG4gICAgdGhpcy50eXBlID0gXCJJbXBvcnRTcGVjaWZpZXJcIjtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMuYmluZGluZ0lkZW50aWZpZXIgPSBiaW5kaW5nSWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwb3J0RnJvbSB7XG4gIGNvbnN0cnVjdG9yKGV4cG9ydFNwZWNpZmllcnMsIG1vZHVsZVNwZWNpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiRXhwb3J0RnJvbVwiO1xuICAgIHRoaXMuZXhwb3J0U3BlY2lmaWVycyA9IGV4cG9ydFNwZWNpZmllcnM7XG4gICAgdGhpcy5tb2R1bGVTcGVjaWZpZXIgPSBtb2R1bGVTcGVjaWZpZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cG9ydCB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgIHRoaXMudHlwZSA9IFwiRXhwb3J0XCI7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cG9ydERlZmF1bHQge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cG9ydERlZmF1bHRcIjtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwb3J0U3BlY2lmaWVyIHtcbiAgY29uc3RydWN0b3IoaWRlbnRpZmllciwgYXMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cG9ydFNwZWNpZmllclwiO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5hcyA9IGFzO1xuICB9XG59XG5cblxuLy8gZnVuY3Rpb25zXG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkJvZHkge1xuICBjb25zdHJ1Y3RvcihkaXJlY3RpdmVzLCBzdGF0ZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkJvZHlcIjtcbiAgICB0aGlzLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycm93RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMsIHJlc3RQYXJhbWV0ZXIsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkFycm93RXhwcmVzc2lvblwiO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXN0UGFyYW1ldGVyID0gcmVzdFBhcmFtZXRlcjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkRlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoaXNHZW5lcmF0b3IsIG5hbWUsIHBhcmFtZXRlcnMsIHJlc3RQYXJhbWV0ZXIsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIjtcbiAgICB0aGlzLmlzR2VuZXJhdG9yID0gaXNHZW5lcmF0b3I7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmVzdFBhcmFtZXRlciA9IHJlc3RQYXJhbWV0ZXI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25FeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoaXNHZW5lcmF0b3IsIG5hbWUsIHBhcmFtZXRlcnMsIHJlc3RQYXJhbWV0ZXIsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiO1xuICAgIHRoaXMuaXNHZW5lcmF0b3IgPSBpc0dlbmVyYXRvcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXN0UGFyYW1ldGVyID0gcmVzdFBhcmFtZXRlcjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRob2QgZXh0ZW5kcyBNZXRob2REZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoaXNHZW5lcmF0b3IsIG5hbWUsIHBhcmFtZXRlcnMsIHJlc3RQYXJhbWV0ZXIsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIk1ldGhvZFwiO1xuICAgIHN1cGVyKG5hbWUsIGJvZHkpO1xuICAgIHRoaXMuaXNHZW5lcmF0b3IgPSBpc0dlbmVyYXRvcjtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmVzdFBhcmFtZXRlciA9IHJlc3RQYXJhbWV0ZXI7XG4gIH1cbn1cblxuXG4vLyBvYmplY3QgZXhwcmVzc2lvbnNcblxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy50eXBlID0gXCJPYmplY3RFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0dGVyIGV4dGVuZHMgQWNjZXNzb3JQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkdldHRlclwiO1xuICAgIHN1cGVyKG5hbWUsIGJvZHkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXR0ZXIgZXh0ZW5kcyBBY2Nlc3NvclByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgcGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJTZXR0ZXJcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgICB0aGlzLnBhcmFtZXRlciA9IHBhcmFtZXRlcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YVByb3BlcnR5IGV4dGVuZHMgTmFtZWRPYmplY3RQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRhdGFQcm9wZXJ0eVwiO1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNob3J0aGFuZFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMudHlwZSA9IFwiU2hvcnRoYW5kUHJvcGVydHlcIjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlZFByb3BlcnR5TmFtZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb21wdXRlZFByb3BlcnR5TmFtZVwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3RhdGljUHJvcGVydHlOYW1lIHtcbiAgY29uc3RydWN0b3IoIHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJTdGF0aWNQcm9wZXJ0eU5hbWVcIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuXG4vLyBsaXRlcmFsc1xuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbEJvb2xlYW5FeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxCb29sZWFuRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbEluZmluaXR5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbEluZmluaXR5RXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTnVsbEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxOdWxsRXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTnVtZXJpY0V4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbE51bWVyaWNFeHByZXNzaW9uXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsUmVnRXhwRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsUmVnRXhwRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFN0cmluZ0V4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbFN0cmluZ0V4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuXG4vLyBvdGhlciBleHByZXNzaW9uc1xuXG5leHBvcnQgY2xhc3MgQXJyYXlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkFycmF5RXhwcmVzc2lvblwiO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXNzaWdubWVudEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgYmluZGluZywgZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiQXNzaWdubWVudEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgdGhpcy50eXBlID0gXCJCaW5hcnlFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgIHRoaXMudHlwZSA9IFwiQ2FsbEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXB1dGVkTWVtYmVyRXhwcmVzc2lvbiBleHRlbmRzIE1lbWJlckV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNvbXB1dGVkTWVtYmVyRXhwcmVzc2lvblwiO1xuICAgIHN1cGVyKG9iamVjdCk7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodGVzdCwgY29uc2VxdWVudCwgYWx0ZXJuYXRlKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb25kaXRpb25hbEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoaWRlbnRpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiSWRlbnRpZmllckV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXdFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoY2FsbGVlLCBhcmdzKSB7XG4gICAgdGhpcy50eXBlID0gXCJOZXdFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0Zml4RXhwcmVzc2lvbiBleHRlbmRzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhbmQsIG9wZXJhdG9yKSB7XG4gICAgdGhpcy50eXBlID0gXCJQb3N0Zml4RXhwcmVzc2lvblwiO1xuICAgIHN1cGVyKG9wZXJhbmQpO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlZml4RXhwcmVzc2lvbiBleHRlbmRzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBvcGVyYW5kKSB7XG4gICAgdGhpcy50eXBlID0gXCJQcmVmaXhFeHByZXNzaW9uXCI7XG4gICAgc3VwZXIob3BlcmFuZCk7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNNZW1iZXJFeHByZXNzaW9uIGV4dGVuZHMgTWVtYmVyRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN0YXRpY01lbWJlckV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvYmplY3QpO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiVGVtcGxhdGVTdHJpbmdcIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRoaXNFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJUaGlzRXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZaWVsZEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJZaWVsZEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZaWVsZEdlbmVyYXRvckV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJZaWVsZEdlbmVyYXRvckV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cblxuLy8gb3RoZXIgc3RhdGVtZW50c1xuXG5leHBvcnQgY2xhc3MgQmxvY2tTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihibG9jaykge1xuICAgIHRoaXMudHlwZSA9IFwiQmxvY2tTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJsb2NrID0gYmxvY2s7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyZWFrU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJyZWFrU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250aW51ZVN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb250aW51ZVN0YXRlbWVudFwiO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVidWdnZXJTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRlYnVnZ2VyU3RhdGVtZW50XCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvV2hpbGVTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5LCB0ZXN0KSB7XG4gICAgdGhpcy50eXBlID0gXCJEb1doaWxlU3RhdGVtZW50XCI7XG4gICAgc3VwZXIoYm9keSk7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkVtcHR5U3RhdGVtZW50XCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJFeHByZXNzaW9uU3RhdGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ySW5TdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRm9ySW5TdGF0ZW1lbnRcIjtcbiAgICBzdXBlcihib2R5KTtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yT2ZTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRm9yT2ZTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihpbml0LCB0ZXN0LCB1cGRhdGUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZvclN0YXRlbWVudFwiO1xuICAgIHN1cGVyKGJvZHkpO1xuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWZTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXN0LCBjb25zZXF1ZW50LCBhbHRlcm5hdGUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklmU3RhdGVtZW50XCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYWJlbGVkU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxhYmVsZWRTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiUmV0dXJuU3RhdGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzY3JpbWluYW50LCBjYXNlcykge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoU3RhdGVtZW50XCI7XG4gICAgdGhpcy5kaXNjcmltaW5hbnQgPSBkaXNjcmltaW5hbnQ7XG4gICAgdGhpcy5jYXNlcyA9IGNhc2VzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hTdGF0ZW1lbnRXaXRoRGVmYXVsdCB7XG4gIGNvbnN0cnVjdG9yKGRpc2NyaW1pbmFudCwgcHJlRGVmYXVsdENhc2VzLCBkZWZhdWx0Q2FzZSwgcG9zdERlZmF1bHRDYXNlcykge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoU3RhdGVtZW50V2l0aERlZmF1bHRcIjtcbiAgICB0aGlzLmRpc2NyaW1pbmFudCA9IGRpc2NyaW1pbmFudDtcbiAgICB0aGlzLnByZURlZmF1bHRDYXNlcyA9IHByZURlZmF1bHRDYXNlcztcbiAgICB0aGlzLmRlZmF1bHRDYXNlID0gZGVmYXVsdENhc2U7XG4gICAgdGhpcy5wb3N0RGVmYXVsdENhc2VzID0gcG9zdERlZmF1bHRDYXNlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGhyb3dTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJUaHJvd1N0YXRlbWVudFwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyeUNhdGNoU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYm9keSwgY2F0Y2hDbGF1c2UpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRyeUNhdGNoU3RhdGVtZW50XCI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLmNhdGNoQ2xhdXNlID0gY2F0Y2hDbGF1c2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyeUZpbmFsbHlTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5LCBjYXRjaENsYXVzZSwgZmluYWxpemVyKSB7XG4gICAgdGhpcy50eXBlID0gXCJUcnlGaW5hbGx5U3RhdGVtZW50XCI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLmNhdGNoQ2xhdXNlID0gY2F0Y2hDbGF1c2U7XG4gICAgdGhpcy5maW5hbGl6ZXIgPSBmaW5hbGl6ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbikge1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblN0YXRlbWVudFwiO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2hpbGVTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXN0LCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJXaGlsZVN0YXRlbWVudFwiO1xuICAgIHN1cGVyKGJvZHkpO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpdGhTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIldpdGhTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cblxuLy8gZGlyZWN0aXZlc1xuXG5leHBvcnQgY2xhc3MgVW5rbm93bkRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJVbmtub3duRGlyZWN0aXZlXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VTdHJpY3REaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlVzZVN0cmljdERpcmVjdGl2ZVwiO1xuICB9XG59XG5cblxuLy8gb3RoZXIgbm9kZXNcblxuZXhwb3J0IGNsYXNzIEJsb2NrIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiQmxvY2tcIjtcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXRjaENsYXVzZSB7XG4gIGNvbnN0cnVjdG9yKGJpbmRpbmcsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhdGNoQ2xhdXNlXCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiRGlyZWN0aXZlXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMudHlwZSA9IFwiSWRlbnRpZmllclwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNjcmlwdCB7XG4gIGNvbnN0cnVjdG9yKGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlNjcmlwdFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwcmVhZEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJTcHJlYWRFbGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGNvbnNlcXVlbnQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaENhc2VcIjtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaERlZmF1bHQge1xuICBjb25zdHJ1Y3Rvcihjb25zZXF1ZW50KSB7XG4gICAgdGhpcy50eXBlID0gXCJTd2l0Y2hEZWZhdWx0XCI7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVMaXRlcmFsIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRlbXBsYXRlTGl0ZXJhbFwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGtpbmQsIGRlY2xhcmF0b3JzKSB7XG4gICAgaWYgKGRlY2xhcmF0b3JzLmxlbmd0aCA8IDEpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVmFyaWFibGVEZWNsYXJhdGlvbiBkZWNsYXJhdG9ycyBsaXN0IG11c3QgYmUgbm9uLWVtcHR5LlwiKTtcbiAgICB0aGlzLnR5cGUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbiAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgIHRoaXMuZGVjbGFyYXRvcnMgPSBkZWNsYXJhdG9ycztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGVEZWNsYXJhdG9yIHtcbiAgY29uc3RydWN0b3IoYmluZGluZywgaW5pdCkge1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdG9yXCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICB9XG59XG4iXX0=