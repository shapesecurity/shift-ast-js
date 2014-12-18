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

var Directive = exports.Directive = function Directive(value) {
  _classCallCheck(this, Directive);

  this.type = "Directive";
  this.value = value;
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
//# sourceMappingURL=data:application/json;base64,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QUFDbEMsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsTUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Q0FDaEM7O0lBR1Usa0JBQWtCLFdBQWxCLGtCQUFrQixHQUNsQixTQURBLGtCQUFrQixDQUNqQixPQUFPLEVBQUUsSUFBSTt3QkFEZCxrQkFBa0I7O0FBRTNCLE1BQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFDakMsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDbEIiLCJmaWxlIjoic3JjL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNCBTaGFwZSBTZWN1cml0eSwgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cblxuLy8gbm9kZSBjbGFzc2VzXG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldCwgbGluZSwgY29sdW1uKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU291cmNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQsIHNvdXJjZSkge1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxufVxuXG5jbGFzcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5KSB7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5jbGFzcyBVbmFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYW5kKSB7XG4gICAgdGhpcy5vcGVyYW5kID0gb3BlcmFuZDtcbiAgfVxufVxuXG5jbGFzcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gIH1cbn1cblxuY2xhc3MgTmFtZWRPYmplY3RQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmNsYXNzIE1ldGhvZERlZmluaXRpb24gZXh0ZW5kcyBOYW1lZE9iamVjdFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgYm9keSkge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuY2xhc3MgQWNjZXNzb3JQcm9wZXJ0eSBleHRlbmRzIE1ldGhvZERlZmluaXRpb24geyB9XG5cbmNsYXNzIEltcG9ydERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IobW9kdWxlU3BlY2lmaWVyKSB7XG4gICAgdGhpcy5tb2R1bGVTcGVjaWZpZXIgPSBtb2R1bGVTcGVjaWZpZXI7XG4gIH1cbn1cblxuXG4vLyBiaW5kaW5nc1xuXG5leHBvcnQgY2xhc3MgQmluZGluZ1dpdGhEZWZhdWx0IHtcbiAgY29uc3RydWN0b3IoYmluZGluZywgaW5pdGlhbGl6ZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJpbmRpbmdXaXRoRGVmYXVsdFwiO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgdGhpcy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nSWRlbnRpZmllciB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJpbmRpbmdJZGVudGlmaWVyXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlCaW5kaW5nIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMsIHJlc3RFbGVtZW50KSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJheUJpbmRpbmdcIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgdGhpcy5yZXN0RWxlbWVudCA9IHJlc3RFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RCaW5kaW5nIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMudHlwZSA9IFwiT2JqZWN0QmluZGluZ1wiO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdQcm9wZXJ0eUlkZW50aWZpZXIge1xuICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyLCBpbml0aWFsaXplcikge1xuICAgIHRoaXMudHlwZSA9IFwiQmluZGluZ1Byb3BlcnR5SWRlbnRpZmllclwiO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nUHJvcGVydHlQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJpbmRpbmcpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJpbmRpbmdQcm9wZXJ0eVByb3BlcnR5XCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICB9XG59XG5cblxuLy8gY2xhc3Nlc1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJfLCBlbGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiQ2xhc3NFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyID0gc3VwZXJfO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdXBlcl8sIGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJDbGFzc1N0YXRlbWVudFwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdXBlciA9IHN1cGVyXztcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGlzU3RhdGljLCBtZXRob2QpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNsYXNzRWxlbWVudFwiO1xuICAgIHRoaXMuaXNTdGF0aWMgPSBpc1N0YXRpYztcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgfVxufVxuXG5cbi8vIG1vZHVsZXNcblxuZXhwb3J0IGNsYXNzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGRpcmVjdGl2ZXMsIHNvdXJjZUVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJNb2R1bGVcIjtcbiAgICB0aGlzLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuICAgIHRoaXMuc291cmNlRWxlbWVudHMgPSBzb3VyY2VFbGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1wb3J0TW9kdWxlIGV4dGVuZHMgSW1wb3J0RGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkltcG9ydE1vZHVsZVwiO1xuICAgIHN1cGVyKG1vZHVsZVNwZWNpZmllcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltcG9ydEZyb20gZXh0ZW5kcyBJbXBvcnREZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGltcG9ydENsYXVzZSwgbW9kdWxlU3BlY2lmaWVyKSB7XG4gICAgdGhpcy50eXBlID0gXCJJbXBvcnRGcm9tXCI7XG4gICAgc3VwZXIobW9kdWxlU3BlY2lmaWVyKTtcbiAgICB0aGlzLmltcG9ydENsYXVzZSA9IGltcG9ydENsYXVzZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1wb3J0RnJvbVdpdGhCaW5kaW5nIGV4dGVuZHMgSW1wb3J0RGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihiaW5kaW5nSWRlbnRpZmllciwgaW1wb3J0Q2xhdXNlLCBtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkltcG9ydEZyb21XaXRoQmluZGluZ1wiO1xuICAgIHN1cGVyKG1vZHVsZVNwZWNpZmllcik7XG4gICAgdGhpcy5iaW5kaW5nSWRlbnRpZmllciA9IGJpbmRpbmdJZGVudGlmaWVyO1xuICAgIHRoaXMuaW1wb3J0Q2xhdXNlID0gaW1wb3J0Q2xhdXNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOYW1lZEltcG9ydHMge1xuICBjb25zdHJ1Y3RvcihpbXBvcnRTcGVjaWZpZXJzKSB7XG4gICAgdGhpcy50eXBlID0gXCJOYW1lZEltcG9ydHNcIjtcbiAgICB0aGlzLmltcG9ydFNwZWNpZmllcnMgPSBpbXBvcnRTcGVjaWZpZXJzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBvcnRTcGVjaWZpZXIge1xuICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyLCBiaW5kaW5nSWRlbnRpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiSW1wb3J0U3BlY2lmaWVyXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLmJpbmRpbmdJZGVudGlmaWVyID0gYmluZGluZ0lkZW50aWZpZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cG9ydEZyb20ge1xuICBjb25zdHJ1Y3RvcihleHBvcnRTcGVjaWZpZXJzLCBtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cG9ydEZyb21cIjtcbiAgICB0aGlzLmV4cG9ydFNwZWNpZmllcnMgPSBleHBvcnRTcGVjaWZpZXJzO1xuICAgIHRoaXMubW9kdWxlU3BlY2lmaWVyID0gbW9kdWxlU3BlY2lmaWVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnQge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cG9ydFwiO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnREZWZhdWx0IHtcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgdGhpcy50eXBlID0gXCJFeHBvcnREZWZhdWx0XCI7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cG9ydFNwZWNpZmllciB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIsIGFzKSB7XG4gICAgdGhpcy50eXBlID0gXCJFeHBvcnRTcGVjaWZpZXJcIjtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMuYXMgPSBhcztcbiAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uc1xuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25Cb2R5IHtcbiAgY29uc3RydWN0b3IoZGlyZWN0aXZlcywgc3RhdGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiRnVuY3Rpb25Cb2R5XCI7XG4gICAgdGhpcy5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJvd0V4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJvd0V4cHJlc3Npb25cIjtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmVzdFBhcmFtZXRlciA9IHJlc3RQYXJhbWV0ZXI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25EZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGlzR2VuZXJhdG9yLCBuYW1lLCBwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCI7XG4gICAgdGhpcy5pc0dlbmVyYXRvciA9IGlzR2VuZXJhdG9yO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJlc3RQYXJhbWV0ZXIgPSByZXN0UGFyYW1ldGVyO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGlzR2VuZXJhdG9yLCBuYW1lLCBwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmlzR2VuZXJhdG9yID0gaXNHZW5lcmF0b3I7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmVzdFBhcmFtZXRlciA9IHJlc3RQYXJhbWV0ZXI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWV0aG9kIGV4dGVuZHMgTWV0aG9kRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGlzR2VuZXJhdG9yLCBuYW1lLCBwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJNZXRob2RcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgICB0aGlzLmlzR2VuZXJhdG9yID0gaXNHZW5lcmF0b3I7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJlc3RQYXJhbWV0ZXIgPSByZXN0UGFyYW1ldGVyO1xuICB9XG59XG5cblxuLy8gb2JqZWN0IGV4cHJlc3Npb25zXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMudHlwZSA9IFwiT2JqZWN0RXhwcmVzc2lvblwiO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldHRlciBleHRlbmRzIEFjY2Vzc29yUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJHZXR0ZXJcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0dGVyIGV4dGVuZHMgQWNjZXNzb3JQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtZXRlciwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiU2V0dGVyXCI7XG4gICAgc3VwZXIobmFtZSwgYm9keSk7XG4gICAgdGhpcy5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFQcm9wZXJ0eSBleHRlbmRzIE5hbWVkT2JqZWN0UHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJEYXRhUHJvcGVydHlcIjtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaG9ydGhhbmRQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlNob3J0aGFuZFByb3BlcnR5XCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZWRQcm9wZXJ0eU5hbWUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiQ29tcHV0ZWRQcm9wZXJ0eU5hbWVcIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRpY1Byb3BlcnR5TmFtZSB7XG4gIGNvbnN0cnVjdG9yKCB2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiU3RhdGljUHJvcGVydHlOYW1lXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblxuLy8gbGl0ZXJhbHNcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxCb29sZWFuRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsQm9vbGVhbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxJbmZpbml0eUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxJbmZpbml0eUV4cHJlc3Npb25cIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE51bGxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsTnVsbEV4cHJlc3Npb25cIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE51bWVyaWNFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxOdW1lcmljRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxTdHJpbmdFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxTdHJpbmdFeHByZXNzaW9uXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblxuLy8gb3RoZXIgZXhwcmVzc2lvbnNcblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJheUV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGJpbmRpbmcsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMudHlwZSA9IFwiQmluYXJ5RXhwcmVzc2lvblwiO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhbGxFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlZE1lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb21wdXRlZE1lbWJlckV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvYmplY3QpO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklkZW50aWZpZXJFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV3RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgIHRoaXMudHlwZSA9IFwiTmV3RXhwcmVzc2lvblwiO1xuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9zdGZpeEV4cHJlc3Npb24gZXh0ZW5kcyBVbmFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYW5kLCBvcGVyYXRvcikge1xuICAgIHRoaXMudHlwZSA9IFwiUG9zdGZpeEV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvcGVyYW5kKTtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByZWZpeEV4cHJlc3Npb24gZXh0ZW5kcyBVbmFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgb3BlcmFuZCkge1xuICAgIHRoaXMudHlwZSA9IFwiUHJlZml4RXhwcmVzc2lvblwiO1xuICAgIHN1cGVyKG9wZXJhbmQpO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3RhdGljTWVtYmVyRXhwcmVzc2lvbiBleHRlbmRzIE1lbWJlckV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgdGhpcy50eXBlID0gXCJTdGF0aWNNZW1iZXJFeHByZXNzaW9uXCI7XG4gICAgc3VwZXIob2JqZWN0KTtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlU3RyaW5nIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRlbXBsYXRlU3RyaW5nXCI7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaGlzRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiVGhpc0V4cHJlc3Npb25cIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgWWllbGRFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiWWllbGRFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgWWllbGRHZW5lcmF0b3JFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiWWllbGRHZW5lcmF0b3JFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5cbi8vIG90aGVyIHN0YXRlbWVudHNcblxuZXhwb3J0IGNsYXNzIEJsb2NrU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYmxvY2spIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJsb2NrU3RhdGVtZW50XCI7XG4gICAgdGhpcy5ibG9jayA9IGJsb2NrO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCcmVha1N0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsKSB7XG4gICAgdGhpcy50eXBlID0gXCJCcmVha1N0YXRlbWVudFwiO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGludWVTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsYWJlbCkge1xuICAgIHRoaXMudHlwZSA9IFwiQ29udGludWVTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlYnVnZ2VyU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJEZWJ1Z2dlclN0YXRlbWVudFwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb1doaWxlU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYm9keSwgdGVzdCkge1xuICAgIHRoaXMudHlwZSA9IFwiRG9XaGlsZVN0YXRlbWVudFwiO1xuICAgIHN1cGVyKGJvZHkpO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5U3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJFbXB0eVN0YXRlbWVudFwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiRXhwcmVzc2lvblN0YXRlbWVudFwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvckluU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZvckluU3RhdGVtZW50XCI7XG4gICAgc3VwZXIoYm9keSk7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvck9mU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZvck9mU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW5pdCwgdGVzdCwgdXBkYXRlLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGb3JTdGF0ZW1lbnRcIjtcbiAgICBzdXBlcihib2R5KTtcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElmU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IodGVzdCwgY29uc2VxdWVudCwgYWx0ZXJuYXRlKSB7XG4gICAgdGhpcy50eXBlID0gXCJJZlN0YXRlbWVudFwiO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGFiZWxlZFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJMYWJlbGVkU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlJldHVyblN0YXRlbWVudFwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRpc2NyaW1pbmFudCwgY2FzZXMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaFN0YXRlbWVudFwiO1xuICAgIHRoaXMuZGlzY3JpbWluYW50ID0gZGlzY3JpbWluYW50O1xuICAgIHRoaXMuY2FzZXMgPSBjYXNlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoU3RhdGVtZW50V2l0aERlZmF1bHQge1xuICBjb25zdHJ1Y3RvcihkaXNjcmltaW5hbnQsIHByZURlZmF1bHRDYXNlcywgZGVmYXVsdENhc2UsIHBvc3REZWZhdWx0Q2FzZXMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaFN0YXRlbWVudFdpdGhEZWZhdWx0XCI7XG4gICAgdGhpcy5kaXNjcmltaW5hbnQgPSBkaXNjcmltaW5hbnQ7XG4gICAgdGhpcy5wcmVEZWZhdWx0Q2FzZXMgPSBwcmVEZWZhdWx0Q2FzZXM7XG4gICAgdGhpcy5kZWZhdWx0Q2FzZSA9IGRlZmF1bHRDYXNlO1xuICAgIHRoaXMucG9zdERlZmF1bHRDYXNlcyA9IHBvc3REZWZhdWx0Q2FzZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRocm93U3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiVGhyb3dTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcnlDYXRjaFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJvZHksIGNhdGNoQ2xhdXNlKSB7XG4gICAgdGhpcy50eXBlID0gXCJUcnlDYXRjaFN0YXRlbWVudFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5jYXRjaENsYXVzZSA9IGNhdGNoQ2xhdXNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcnlGaW5hbGx5U3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYm9keSwgY2F0Y2hDbGF1c2UsIGZpbmFsaXplcikge1xuICAgIHRoaXMudHlwZSA9IFwiVHJ5RmluYWxseVN0YXRlbWVudFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5jYXRjaENsYXVzZSA9IGNhdGNoQ2xhdXNlO1xuICAgIHRoaXMuZmluYWxpemVyID0gZmluYWxpemVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25TdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdoaWxlU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IodGVzdCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiV2hpbGVTdGF0ZW1lbnRcIjtcbiAgICBzdXBlcihib2R5KTtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaXRoU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJXaXRoU3RhdGVtZW50XCI7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5cbi8vIGRpcmVjdGl2ZXNcblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJEaXJlY3RpdmVcIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuXG4vLyBvdGhlciBub2Rlc1xuXG5leHBvcnQgY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJCbG9ja1wiO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhdGNoQ2xhdXNlIHtcbiAgY29uc3RydWN0b3IoYmluZGluZywgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiQ2F0Y2hDbGF1c2VcIjtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJEaXJlY3RpdmVcIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy50eXBlID0gXCJJZGVudGlmaWVyXCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NyaXB0IHtcbiAgY29uc3RydWN0b3IoYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiU2NyaXB0XCI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3ByZWFkRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlNwcmVhZEVsZW1lbnRcIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hDYXNlIHtcbiAgY29uc3RydWN0b3IodGVzdCwgY29uc2VxdWVudCkge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoQ2FzZVwiO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoRGVmYXVsdCB7XG4gIGNvbnN0cnVjdG9yKGNvbnNlcXVlbnQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaERlZmF1bHRcIjtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUxpdGVyYWwge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiVGVtcGxhdGVMaXRlcmFsXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioa2luZCwgZGVjbGFyYXRvcnMpIHtcbiAgICBpZiAoZGVjbGFyYXRvcnMubGVuZ3RoIDwgMSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJWYXJpYWJsZURlY2xhcmF0aW9uIGRlY2xhcmF0b3JzIGxpc3QgbXVzdCBiZSBub24tZW1wdHkuXCIpO1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xuICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgdGhpcy5kZWNsYXJhdG9ycyA9IGRlY2xhcmF0b3JzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihiaW5kaW5nLCBpbml0KSB7XG4gICAgdGhpcy50eXBlID0gXCJWYXJpYWJsZURlY2xhcmF0b3JcIjtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gIH1cbn1cbiJdfQ==