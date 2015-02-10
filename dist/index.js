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

var BindingWithDefault = exports.BindingWithDefault = function BindingWithDefault(binding, init) {
  _classCallCheck(this, BindingWithDefault);

  this.type = "BindingWithDefault";
  this.binding = binding;
  this.init = init;
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

var BindingPropertyIdentifier = exports.BindingPropertyIdentifier = function BindingPropertyIdentifier(identifier, init) {
  _classCallCheck(this, BindingPropertyIdentifier);

  this.type = "BindingPropertyIdentifier";
  this.identifier = identifier;
  this.init = init;
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

var NewTargetExpression = exports.NewTargetExpression = function NewTargetExpression() {
  _classCallCheck(this, NewTargetExpression);

  this.type = "NewTargetExpression";
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

var Super = exports.Super = function Super() {
  _classCallCheck(this, Super);

  this.type = "Super";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQk0sa0JBQWtCLEdBQ1gsU0FEUCxrQkFBa0IsQ0FDVixJQUFJO3dCQURaLGtCQUFrQjs7QUFFcEIsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDbEI7O0lBR0csZUFBZSxHQUNSLFNBRFAsZUFBZSxDQUNQLE9BQU87d0JBRGYsZUFBZTs7QUFFakIsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDeEI7O0lBR0csZ0JBQWdCLEdBQ1QsU0FEUCxnQkFBZ0IsQ0FDUixNQUFNO3dCQURkLGdCQUFnQjs7QUFFbEIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0lBR0csbUJBQW1CLEdBQ1osU0FEUCxtQkFBbUIsQ0FDWCxJQUFJO3dCQURaLG1CQUFtQjs7QUFFckIsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDbEI7O0lBR0csZ0JBQWdCLGNBQVMsbUJBQW1CO0FBQ3JDLFdBRFAsZ0JBQWdCLENBQ1IsSUFBSSxFQUFFLElBQUk7MEJBRGxCLGdCQUFnQjs7QUFFbEIsK0JBRkUsZ0JBQWdCLDZDQUVaLElBQUksRUFBRTtBQUNaLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0dBQ2xCOztZQUpHLGdCQUFnQixFQUFTLG1CQUFtQjs7U0FBNUMsZ0JBQWdCO0dBQVMsbUJBQW1COztJQU81QyxnQkFBZ0IsY0FBUyxnQkFBZ0I7V0FBekMsZ0JBQWdCOzBCQUFoQixnQkFBZ0I7O1FBQVMsZ0JBQWdCO0FBQWhCLHNCQUFnQjs7OztZQUF6QyxnQkFBZ0IsRUFBUyxnQkFBZ0I7O1NBQXpDLGdCQUFnQjtHQUFTLGdCQUFnQjs7SUFFekMsaUJBQWlCLEdBQ1YsU0FEUCxpQkFBaUIsQ0FDVCxlQUFlO3dCQUR2QixpQkFBaUI7O0FBRW5CLE1BQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0NBQ3hDOzs7Ozs7O0lBTVUsa0JBQWtCLFdBQWxCLGtCQUFrQixHQUNsQixTQURBLGtCQUFrQixDQUNqQixPQUFPLEVBQUUsSUFBSTt3QkFEZCxrQkFBa0I7O0FBRTNCLE1BQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFDakMsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDbEI7O0lBR1UsaUJBQWlCLFdBQWpCLGlCQUFpQixHQUNqQixTQURBLGlCQUFpQixDQUNoQixVQUFVO3dCQURYLGlCQUFpQjs7QUFFMUIsTUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztBQUNoQyxNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztDQUM5Qjs7SUFHVSxZQUFZLFdBQVosWUFBWSxHQUNaLFNBREEsWUFBWSxDQUNYLFFBQVEsRUFBRSxXQUFXO3dCQUR0QixZQUFZOztBQUVyQixNQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztBQUMzQixNQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixNQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztDQUNoQzs7SUFHVSxhQUFhLFdBQWIsYUFBYSxHQUNiLFNBREEsYUFBYSxDQUNaLFVBQVU7d0JBRFgsYUFBYTs7QUFFdEIsTUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7QUFDNUIsTUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDOUI7O0lBR1UseUJBQXlCLFdBQXpCLHlCQUF5QixHQUN6QixTQURBLHlCQUF5QixDQUN4QixVQUFVLEVBQUUsSUFBSTt3QkFEakIseUJBQXlCOztBQUVsQyxNQUFJLENBQUMsSUFBSSxHQUFHLDJCQUEyQixDQUFDO0FBQ3hDLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2xCOztJQUdVLHVCQUF1QixXQUF2Qix1QkFBdUIsR0FDdkIsU0FEQSx1QkFBdUIsQ0FDdEIsSUFBSSxFQUFFLE9BQU87d0JBRGQsdUJBQXVCOztBQUVoQyxNQUFJLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFDO0FBQ3RDLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQ3hCOzs7Ozs7O0lBTVUsZUFBZSxXQUFmLGVBQWUsR0FDZixTQURBLGVBQWUsQ0FDZCxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVE7d0JBRHZCLGVBQWU7O0FBRXhCLE1BQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFDOUIsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsTUFBSSxTQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3BCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0NBQzFCOztJQUdVLGNBQWMsV0FBZCxjQUFjLEdBQ2QsU0FEQSxjQUFjLENBQ2IsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRO3dCQUR2QixjQUFjOztBQUV2QixNQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0FBQzdCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksU0FBTSxHQUFHLE1BQU0sQ0FBQztBQUNwQixNQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztDQUMxQjs7SUFHVSxZQUFZLFdBQVosWUFBWSxHQUNaLFNBREEsWUFBWSxDQUNYLFFBQVEsRUFBRSxNQUFNO3dCQURqQixZQUFZOztBQUVyQixNQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztBQUMzQixNQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixNQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUN0Qjs7Ozs7OztJQU1VLE1BQU0sV0FBTixNQUFNLEdBQ04sU0FEQSxNQUFNLENBQ0wsVUFBVSxFQUFFLGNBQWM7d0JBRDNCLE1BQU07O0FBRWYsTUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7QUFDckIsTUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsTUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7Q0FDdEM7O0lBR1UsWUFBWSxXQUFaLFlBQVksY0FBUyxpQkFBaUI7QUFDdEMsV0FEQSxZQUFZLENBQ1gsZUFBZTswQkFEaEIsWUFBWTs7QUFFckIsUUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7QUFDM0IsK0JBSFMsWUFBWSw2Q0FHZixlQUFlLEVBQUU7R0FDeEI7O1lBSlUsWUFBWSxFQUFTLGlCQUFpQjs7U0FBdEMsWUFBWTtHQUFTLGlCQUFpQjtJQU90QyxVQUFVLFdBQVYsVUFBVSxjQUFTLGlCQUFpQjtBQUNwQyxXQURBLFVBQVUsQ0FDVCxZQUFZLEVBQUUsZUFBZTswQkFEOUIsVUFBVTs7QUFFbkIsUUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7QUFDekIsK0JBSFMsVUFBVSw2Q0FHYixlQUFlLEVBQUU7QUFDdkIsUUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7R0FDbEM7O1lBTFUsVUFBVSxFQUFTLGlCQUFpQjs7U0FBcEMsVUFBVTtHQUFTLGlCQUFpQjtJQVFwQyxxQkFBcUIsV0FBckIscUJBQXFCLGNBQVMsaUJBQWlCO0FBQy9DLFdBREEscUJBQXFCLENBQ3BCLGlCQUFpQixFQUFFLFlBQVksRUFBRSxlQUFlOzBCQURqRCxxQkFBcUI7O0FBRTlCLFFBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7QUFDcEMsK0JBSFMscUJBQXFCLDZDQUd4QixlQUFlLEVBQUU7QUFDdkIsUUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0FBQzNDLFFBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0dBQ2xDOztZQU5VLHFCQUFxQixFQUFTLGlCQUFpQjs7U0FBL0MscUJBQXFCO0dBQVMsaUJBQWlCO0lBUy9DLFlBQVksV0FBWixZQUFZLEdBQ1osU0FEQSxZQUFZLENBQ1gsZ0JBQWdCO3dCQURqQixZQUFZOztBQUVyQixNQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztBQUMzQixNQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7Q0FDMUM7O0lBR1UsZUFBZSxXQUFmLGVBQWUsR0FDZixTQURBLGVBQWUsQ0FDZCxVQUFVLEVBQUUsaUJBQWlCO3dCQUQ5QixlQUFlOztBQUV4QixNQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0FBQzlCLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztDQUM1Qzs7SUFHVSxVQUFVLFdBQVYsVUFBVSxHQUNWLFNBREEsVUFBVSxDQUNULGdCQUFnQixFQUFFLGVBQWU7d0JBRGxDLFVBQVU7O0FBRW5CLE1BQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQ3pCLE1BQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUN6QyxNQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztDQUN4Qzs7SUFHVSxNQUFNLFdBQU4sTUFBTSxHQUNOLFNBREEsTUFBTSxDQUNMLE1BQU07d0JBRFAsTUFBTTs7QUFFZixNQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNyQixNQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUN0Qjs7SUFHVSxhQUFhLFdBQWIsYUFBYSxHQUNiLFNBREEsYUFBYSxDQUNaLE1BQU07d0JBRFAsYUFBYTs7QUFFdEIsTUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7QUFDNUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0lBR1UsZUFBZSxXQUFmLGVBQWUsR0FDZixTQURBLGVBQWUsQ0FDZCxVQUFVLEVBQUUsRUFBRTt3QkFEZixlQUFlOztBQUV4QixNQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0FBQzlCLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NBQ2Q7Ozs7Ozs7SUFNVSxZQUFZLFdBQVosWUFBWSxHQUNaLFNBREEsWUFBWSxDQUNYLFVBQVUsRUFBRSxVQUFVO3dCQUR2QixZQUFZOztBQUVyQixNQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztBQUMzQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztDQUM5Qjs7SUFHVSxlQUFlLFdBQWYsZUFBZSxHQUNmLFNBREEsZUFBZSxDQUNkLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSTt3QkFEaEMsZUFBZTs7QUFFeEIsTUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztBQUM5QixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixNQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyxNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNsQjs7SUFHVSxtQkFBbUIsV0FBbkIsbUJBQW1CLEdBQ25CLFNBREEsbUJBQW1CLENBQ2xCLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJO3dCQURuRCxtQkFBbUI7O0FBRTVCLE1BQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7QUFDbEMsTUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsTUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsTUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDbEI7O0lBR1Usa0JBQWtCLFdBQWxCLGtCQUFrQixHQUNsQixTQURBLGtCQUFrQixDQUNqQixXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSTt3QkFEbkQsa0JBQWtCOztBQUUzQixNQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDO0FBQ2pDLE1BQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2xCOztJQUdVLE1BQU0sV0FBTixNQUFNLGNBQVMsZ0JBQWdCO0FBQy9CLFdBREEsTUFBTSxDQUNMLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJOzBCQURuRCxNQUFNOztBQUVmLFFBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ3JCLCtCQUhTLE1BQU0sNkNBR1QsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNsQixRQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixRQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztHQUNwQzs7WUFQVSxNQUFNLEVBQVMsZ0JBQWdCOztTQUEvQixNQUFNO0dBQVMsZ0JBQWdCOzs7Ozs7SUFhL0IsZ0JBQWdCLFdBQWhCLGdCQUFnQixHQUNoQixTQURBLGdCQUFnQixDQUNmLFVBQVU7d0JBRFgsZ0JBQWdCOztBQUV6QixNQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQy9CLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQzlCOztJQUdVLE1BQU0sV0FBTixNQUFNLGNBQVMsZ0JBQWdCO0FBQy9CLFdBREEsTUFBTSxDQUNMLElBQUksRUFBRSxJQUFJOzBCQURYLE1BQU07O0FBRWYsUUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7QUFDckIsK0JBSFMsTUFBTSw2Q0FHVCxJQUFJLEVBQUUsSUFBSSxFQUFFO0dBQ25COztZQUpVLE1BQU0sRUFBUyxnQkFBZ0I7O1NBQS9CLE1BQU07R0FBUyxnQkFBZ0I7SUFPL0IsTUFBTSxXQUFOLE1BQU0sY0FBUyxnQkFBZ0I7QUFDL0IsV0FEQSxNQUFNLENBQ0wsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJOzBCQUR0QixNQUFNOztBQUVmLFFBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ3JCLCtCQUhTLE1BQU0sNkNBR1QsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNsQixRQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztHQUM1Qjs7WUFMVSxNQUFNLEVBQVMsZ0JBQWdCOztTQUEvQixNQUFNO0dBQVMsZ0JBQWdCO0lBUS9CLFlBQVksV0FBWixZQUFZLGNBQVMsbUJBQW1CO0FBQ3hDLFdBREEsWUFBWSxDQUNYLElBQUksRUFBRSxVQUFVOzBCQURqQixZQUFZOztBQUVyQixRQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztBQUMzQiwrQkFIUyxZQUFZLDZDQUdmLElBQUksRUFBRTtBQUNaLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0dBQzlCOztZQUxVLFlBQVksRUFBUyxtQkFBbUI7O1NBQXhDLFlBQVk7R0FBUyxtQkFBbUI7SUFReEMsaUJBQWlCLFdBQWpCLGlCQUFpQixHQUNqQixTQURBLGlCQUFpQixDQUNoQixJQUFJO3dCQURMLGlCQUFpQjs7QUFFMUIsTUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztBQUNoQyxNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNsQjs7SUFHVSxvQkFBb0IsV0FBcEIsb0JBQW9CLEdBQ3BCLFNBREEsb0JBQW9CLENBQ25CLEtBQUs7d0JBRE4sb0JBQW9COztBQUU3QixNQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDO0FBQ25DLE1BQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0NBQ3BCOztJQUdVLGtCQUFrQixXQUFsQixrQkFBa0IsR0FDbEIsU0FEQSxrQkFBa0IsQ0FDaEIsS0FBSzt3QkFEUCxrQkFBa0I7O0FBRTNCLE1BQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFDakMsTUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDcEI7Ozs7Ozs7SUFNVSx3QkFBd0IsV0FBeEIsd0JBQXdCLEdBQ3hCLFNBREEsd0JBQXdCLENBQ3ZCLEtBQUs7d0JBRE4sd0JBQXdCOztBQUVqQyxNQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDO0FBQ3ZDLE1BQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0NBQ3BCOztJQUdVLHlCQUF5QixXQUF6Qix5QkFBeUIsR0FDekIsU0FEQSx5QkFBeUI7d0JBQXpCLHlCQUF5Qjs7QUFFbEMsTUFBSSxDQUFDLElBQUksR0FBRywyQkFBMkIsQ0FBQztDQUN6Qzs7SUFHVSxxQkFBcUIsV0FBckIscUJBQXFCLEdBQ3JCLFNBREEscUJBQXFCO3dCQUFyQixxQkFBcUI7O0FBRTlCLE1BQUksQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7Q0FDckM7O0lBR1Usd0JBQXdCLFdBQXhCLHdCQUF3QixHQUN4QixTQURBLHdCQUF3QixDQUN2QixLQUFLO3dCQUROLHdCQUF3Qjs7QUFFakMsTUFBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQztBQUN2QyxNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUNwQjs7SUFHVSx1QkFBdUIsV0FBdkIsdUJBQXVCLEdBQ3ZCLFNBREEsdUJBQXVCLENBQ3RCLEtBQUs7d0JBRE4sdUJBQXVCOztBQUVoQyxNQUFJLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFDO0FBQ3RDLE1BQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0NBQ3BCOztJQUdVLHVCQUF1QixXQUF2Qix1QkFBdUIsR0FDdkIsU0FEQSx1QkFBdUIsQ0FDdEIsS0FBSzt3QkFETix1QkFBdUI7O0FBRWhDLE1BQUksQ0FBQyxJQUFJLEdBQUcseUJBQXlCLENBQUM7QUFDdEMsTUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDcEI7Ozs7Ozs7SUFNVSxlQUFlLFdBQWYsZUFBZSxHQUNmLFNBREEsZUFBZSxDQUNkLFFBQVE7d0JBRFQsZUFBZTs7QUFFeEIsTUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztBQUM5QixNQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztDQUMxQjs7SUFHVSxvQkFBb0IsV0FBcEIsb0JBQW9CLEdBQ3BCLFNBREEsb0JBQW9CLENBQ25CLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVTt3QkFEOUIsb0JBQW9COztBQUU3QixNQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDO0FBQ25DLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLE1BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQzlCOztJQUdVLGdCQUFnQixXQUFoQixnQkFBZ0IsR0FDaEIsU0FEQSxnQkFBZ0IsQ0FDZixRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUs7d0JBRHRCLGdCQUFnQjs7QUFFekIsTUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUMvQixNQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUNwQjs7SUFHVSxjQUFjLFdBQWQsY0FBYyxHQUNkLFNBREEsY0FBYyxDQUNiLE1BQU0sRUFBRSxJQUFJO3dCQURiLGNBQWM7O0FBRXZCLE1BQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0IsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsTUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Q0FDdkI7O0lBR1Usd0JBQXdCLFdBQXhCLHdCQUF3QixjQUFTLGdCQUFnQjtBQUNqRCxXQURBLHdCQUF3QixDQUN2QixNQUFNLEVBQUUsVUFBVTswQkFEbkIsd0JBQXdCOztBQUVqQyxRQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDO0FBQ3ZDLCtCQUhTLHdCQUF3Qiw2Q0FHM0IsTUFBTSxFQUFFO0FBQ2QsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7R0FDOUI7O1lBTFUsd0JBQXdCLEVBQVMsZ0JBQWdCOztTQUFqRCx3QkFBd0I7R0FBUyxnQkFBZ0I7SUFRakQscUJBQXFCLFdBQXJCLHFCQUFxQixHQUNyQixTQURBLHFCQUFxQixDQUNwQixJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVM7d0JBRDVCLHFCQUFxQjs7QUFFOUIsTUFBSSxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQztBQUNwQyxNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixNQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztDQUM1Qjs7SUFHVSxvQkFBb0IsV0FBcEIsb0JBQW9CLEdBQ3BCLFNBREEsb0JBQW9CLENBQ25CLFVBQVU7d0JBRFgsb0JBQW9COztBQUU3QixNQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDO0FBQ25DLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQzlCOztJQUdVLGFBQWEsV0FBYixhQUFhLEdBQ2IsU0FEQSxhQUFhLENBQ1osTUFBTSxFQUFFLElBQUk7d0JBRGIsYUFBYTs7QUFFdEIsTUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7QUFDNUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsTUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Q0FDdkI7O0lBR1UsbUJBQW1CLFdBQW5CLG1CQUFtQixHQUNuQixTQURBLG1CQUFtQjt3QkFBbkIsbUJBQW1COztBQUU1QixNQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0NBQ25DOztJQUdVLGlCQUFpQixXQUFqQixpQkFBaUIsY0FBUyxlQUFlO0FBQ3pDLFdBREEsaUJBQWlCLENBQ2hCLE9BQU8sRUFBRSxRQUFROzBCQURsQixpQkFBaUI7O0FBRTFCLFFBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7QUFDaEMsK0JBSFMsaUJBQWlCLDZDQUdwQixPQUFPLEVBQUU7QUFDZixRQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztHQUMxQjs7WUFMVSxpQkFBaUIsRUFBUyxlQUFlOztTQUF6QyxpQkFBaUI7R0FBUyxlQUFlO0lBUXpDLGdCQUFnQixXQUFoQixnQkFBZ0IsY0FBUyxlQUFlO0FBQ3hDLFdBREEsZ0JBQWdCLENBQ2YsUUFBUSxFQUFFLE9BQU87MEJBRGxCLGdCQUFnQjs7QUFFekIsUUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUMvQiwrQkFIUyxnQkFBZ0IsNkNBR25CLE9BQU8sRUFBRTtBQUNmLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0dBQzFCOztZQUxVLGdCQUFnQixFQUFTLGVBQWU7O1NBQXhDLGdCQUFnQjtHQUFTLGVBQWU7SUFReEMsc0JBQXNCLFdBQXRCLHNCQUFzQixjQUFTLGdCQUFnQjtBQUMvQyxXQURBLHNCQUFzQixDQUNyQixNQUFNLEVBQUUsUUFBUTswQkFEakIsc0JBQXNCOztBQUUvQixRQUFJLENBQUMsSUFBSSxHQUFHLHdCQUF3QixDQUFDO0FBQ3JDLCtCQUhTLHNCQUFzQiw2Q0FHekIsTUFBTSxFQUFFO0FBQ2QsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7R0FDMUI7O1lBTFUsc0JBQXNCLEVBQVMsZ0JBQWdCOztTQUEvQyxzQkFBc0I7R0FBUyxnQkFBZ0I7SUFRL0MsY0FBYyxXQUFkLGNBQWMsR0FDZCxTQURBLGNBQWMsQ0FDYixRQUFRO3dCQURULGNBQWM7O0FBRXZCLE1BQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Q0FDMUI7O0lBR1UsY0FBYyxXQUFkLGNBQWMsR0FDZCxTQURBLGNBQWM7d0JBQWQsY0FBYzs7QUFFdkIsTUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztDQUM5Qjs7SUFHVSxlQUFlLFdBQWYsZUFBZSxHQUNmLFNBREEsZUFBZSxDQUNkLFVBQVU7d0JBRFgsZUFBZTs7QUFFeEIsTUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztBQUM5QixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztDQUM5Qjs7SUFHVSx3QkFBd0IsV0FBeEIsd0JBQXdCLEdBQ3hCLFNBREEsd0JBQXdCLENBQ3ZCLFVBQVU7d0JBRFgsd0JBQXdCOztBQUVqQyxNQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDO0FBQ3ZDLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQzlCOzs7Ozs7O0lBTVUsY0FBYyxXQUFkLGNBQWMsR0FDZCxTQURBLGNBQWMsQ0FDYixLQUFLO3dCQUROLGNBQWM7O0FBRXZCLE1BQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0IsTUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDcEI7O0lBR1UsY0FBYyxXQUFkLGNBQWMsR0FDZCxTQURBLGNBQWMsQ0FDYixLQUFLO3dCQUROLGNBQWM7O0FBRXZCLE1BQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0IsTUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDcEI7O0lBR1UsaUJBQWlCLFdBQWpCLGlCQUFpQixHQUNqQixTQURBLGlCQUFpQixDQUNoQixLQUFLO3dCQUROLGlCQUFpQjs7QUFFMUIsTUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztBQUNoQyxNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUNwQjs7SUFHVSxpQkFBaUIsV0FBakIsaUJBQWlCLEdBQ2pCLFNBREEsaUJBQWlCO3dCQUFqQixpQkFBaUI7O0FBRTFCLE1BQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7Q0FDakM7O0lBR1UsZ0JBQWdCLFdBQWhCLGdCQUFnQixjQUFTLGtCQUFrQjtBQUMzQyxXQURBLGdCQUFnQixDQUNmLElBQUksRUFBRSxJQUFJOzBCQURYLGdCQUFnQjs7QUFFekIsUUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUMvQiwrQkFIUyxnQkFBZ0IsNkNBR25CLElBQUksRUFBRTtBQUNaLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0dBQ2xCOztZQUxVLGdCQUFnQixFQUFTLGtCQUFrQjs7U0FBM0MsZ0JBQWdCO0dBQVMsa0JBQWtCO0lBUTNDLGNBQWMsV0FBZCxjQUFjLEdBQ2QsU0FEQSxjQUFjO3dCQUFkLGNBQWM7O0FBRXZCLE1BQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7Q0FDOUI7O0lBR1UsbUJBQW1CLFdBQW5CLG1CQUFtQixHQUNuQixTQURBLG1CQUFtQixDQUNsQixVQUFVO3dCQURYLG1CQUFtQjs7QUFFNUIsTUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztBQUNsQyxNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztDQUM5Qjs7SUFHVSxjQUFjLFdBQWQsY0FBYyxjQUFTLGtCQUFrQjtBQUN6QyxXQURBLGNBQWMsQ0FDYixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUk7MEJBRGxCLGNBQWM7O0FBRXZCLFFBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0IsK0JBSFMsY0FBYyw2Q0FHakIsSUFBSSxFQUFFO0FBQ1osUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O1lBTlUsY0FBYyxFQUFTLGtCQUFrQjs7U0FBekMsY0FBYztHQUFTLGtCQUFrQjtJQVN6QyxjQUFjLFdBQWQsY0FBYyxHQUNkLFNBREEsY0FBYyxDQUNiLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSTt3QkFEbEIsY0FBYzs7QUFFdkIsTUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztBQUM3QixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNsQjs7SUFHVSxZQUFZLFdBQVosWUFBWSxjQUFTLGtCQUFrQjtBQUN2QyxXQURBLFlBQVksQ0FDWCxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJOzBCQUR6QixZQUFZOztBQUVyQixRQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztBQUMzQiwrQkFIUyxZQUFZLDZDQUdmLElBQUksRUFBRTtBQUNaLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0dBQ3RCOztZQVBVLFlBQVksRUFBUyxrQkFBa0I7O1NBQXZDLFlBQVk7R0FBUyxrQkFBa0I7SUFVdkMsV0FBVyxXQUFYLFdBQVcsR0FDWCxTQURBLFdBQVcsQ0FDVixJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVM7d0JBRDVCLFdBQVc7O0FBRXBCLE1BQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO0FBQzFCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0NBQzVCOztJQUdVLGdCQUFnQixXQUFoQixnQkFBZ0IsR0FDaEIsU0FEQSxnQkFBZ0IsQ0FDZixLQUFLLEVBQUUsSUFBSTt3QkFEWixnQkFBZ0I7O0FBRXpCLE1BQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFDL0IsTUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDbEI7O0lBR1UsZUFBZSxXQUFmLGVBQWUsR0FDZixTQURBLGVBQWUsQ0FDZCxVQUFVO3dCQURYLGVBQWU7O0FBRXhCLE1BQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFDOUIsTUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDOUI7O0lBR1UsZUFBZSxXQUFmLGVBQWUsR0FDZixTQURBLGVBQWUsQ0FDZCxZQUFZLEVBQUUsS0FBSzt3QkFEcEIsZUFBZTs7QUFFeEIsTUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztBQUM5QixNQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUNqQyxNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUNwQjs7SUFHVSwwQkFBMEIsV0FBMUIsMEJBQTBCLEdBQzFCLFNBREEsMEJBQTBCLENBQ3pCLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGdCQUFnQjt3QkFEN0QsMEJBQTBCOztBQUVuQyxNQUFJLENBQUMsSUFBSSxHQUFHLDRCQUE0QixDQUFDO0FBQ3pDLE1BQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBQ2pDLE1BQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLE1BQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLE1BQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztDQUMxQzs7SUFHVSxjQUFjLFdBQWQsY0FBYyxHQUNkLFNBREEsY0FBYyxDQUNiLFVBQVU7d0JBRFgsY0FBYzs7QUFFdkIsTUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztBQUM3QixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztDQUM5Qjs7SUFHVSxpQkFBaUIsV0FBakIsaUJBQWlCLEdBQ2pCLFNBREEsaUJBQWlCLENBQ2hCLElBQUksRUFBRSxXQUFXO3dCQURsQixpQkFBaUI7O0FBRTFCLE1BQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7QUFDaEMsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsTUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Q0FDaEM7O0lBR1UsbUJBQW1CLFdBQW5CLG1CQUFtQixHQUNuQixTQURBLG1CQUFtQixDQUNsQixJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVM7d0JBRDdCLG1CQUFtQjs7QUFFNUIsTUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztBQUNsQyxNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixNQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztDQUM1Qjs7SUFHVSw0QkFBNEIsV0FBNUIsNEJBQTRCLEdBQzVCLFNBREEsNEJBQTRCLENBQzNCLFdBQVc7d0JBRFosNEJBQTRCOztBQUVyQyxNQUFJLENBQUMsSUFBSSxHQUFHLDhCQUE4QixDQUFDO0FBQzNDLE1BQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0NBQ2hDOztJQUdVLGNBQWMsV0FBZCxjQUFjLGNBQVMsa0JBQWtCO0FBQ3pDLFdBREEsY0FBYyxDQUNiLElBQUksRUFBRSxJQUFJOzBCQURYLGNBQWM7O0FBRXZCLFFBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0IsK0JBSFMsY0FBYyw2Q0FHakIsSUFBSSxFQUFFO0FBQ1osUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7R0FDbEI7O1lBTFUsY0FBYyxFQUFTLGtCQUFrQjs7U0FBekMsY0FBYztHQUFTLGtCQUFrQjtJQVF6QyxhQUFhLFdBQWIsYUFBYSxHQUNiLFNBREEsYUFBYSxDQUNaLE1BQU0sRUFBRSxJQUFJO3dCQURiLGFBQWE7O0FBRXRCLE1BQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO0FBQzVCLE1BQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2xCOzs7Ozs7O0lBTVUsS0FBSyxXQUFMLEtBQUssR0FDTCxTQURBLEtBQUssQ0FDSixVQUFVO3dCQURYLEtBQUs7O0FBRWQsTUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDcEIsTUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDOUI7O0lBR1UsV0FBVyxXQUFYLFdBQVcsR0FDWCxTQURBLFdBQVcsQ0FDVixPQUFPLEVBQUUsSUFBSTt3QkFEZCxXQUFXOztBQUVwQixNQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztBQUMxQixNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNsQjs7SUFHVSxTQUFTLFdBQVQsU0FBUyxHQUNULFNBREEsU0FBUyxDQUNSLEtBQUs7d0JBRE4sU0FBUzs7QUFFbEIsTUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7QUFDeEIsTUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDcEI7O0lBR1UsVUFBVSxXQUFWLFVBQVUsR0FDVixTQURBLFVBQVUsQ0FDVCxJQUFJO3dCQURMLFVBQVU7O0FBRW5CLE1BQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQ3pCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2xCOztJQUdVLE1BQU0sV0FBTixNQUFNLEdBQ04sU0FEQSxNQUFNLENBQ0wsSUFBSTt3QkFETCxNQUFNOztBQUVmLE1BQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ3JCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2xCOztJQUdVLGFBQWEsV0FBYixhQUFhLEdBQ2IsU0FEQSxhQUFhLENBQ1osVUFBVTt3QkFEWCxhQUFhOztBQUV0QixNQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUM1QixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztDQUM5Qjs7SUFHVSxLQUFLLFdBQUwsS0FBSyxHQUNMLFNBREEsS0FBSzt3QkFBTCxLQUFLOztBQUVkLE1BQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0NBQ3JCOztJQUdVLFVBQVUsV0FBVixVQUFVLEdBQ1YsU0FEQSxVQUFVLENBQ1QsSUFBSSxFQUFFLFVBQVU7d0JBRGpCLFVBQVU7O0FBRW5CLE1BQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQ3pCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQzlCOztJQUdVLGFBQWEsV0FBYixhQUFhLEdBQ2IsU0FEQSxhQUFhLENBQ1osVUFBVTt3QkFEWCxhQUFhOztBQUV0QixNQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUM1QixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztDQUM5Qjs7SUFHVSxlQUFlLFdBQWYsZUFBZSxHQUNmLFNBREEsZUFBZSxDQUNkLEtBQUs7d0JBRE4sZUFBZTs7QUFFeEIsTUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztBQUM5QixNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUNwQjs7SUFHVSxtQkFBbUIsV0FBbkIsbUJBQW1CLEdBQ25CLFNBREEsbUJBQW1CLENBQ2xCLElBQUksRUFBRSxXQUFXO3dCQURsQixtQkFBbUI7O0FBRTVCLE1BQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3hCLE1BQU0sSUFBSSxTQUFTLENBQUMseURBQXlELENBQUMsQ0FBQztBQUNqRixNQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0FBQ2xDLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0NBQ2hDOztJQUdVLGtCQUFrQixXQUFsQixrQkFBa0IsR0FDbEIsU0FEQSxrQkFBa0IsQ0FDakIsT0FBTyxFQUFFLElBQUk7d0JBRGQsa0JBQWtCOztBQUUzQixNQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDO0FBQ2pDLE1BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2xCIiwiZmlsZSI6InNyYy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMTQgU2hhcGUgU2VjdXJpdHksIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cbi8vIG5vZGUgY2xhc3Nlc1xuXG5jbGFzcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5KSB7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5jbGFzcyBVbmFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYW5kKSB7XG4gICAgdGhpcy5vcGVyYW5kID0gb3BlcmFuZDtcbiAgfVxufVxuXG5jbGFzcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gIH1cbn1cblxuY2xhc3MgTmFtZWRPYmplY3RQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmNsYXNzIE1ldGhvZERlZmluaXRpb24gZXh0ZW5kcyBOYW1lZE9iamVjdFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgYm9keSkge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuY2xhc3MgQWNjZXNzb3JQcm9wZXJ0eSBleHRlbmRzIE1ldGhvZERlZmluaXRpb24geyB9XG5cbmNsYXNzIEltcG9ydERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IobW9kdWxlU3BlY2lmaWVyKSB7XG4gICAgdGhpcy5tb2R1bGVTcGVjaWZpZXIgPSBtb2R1bGVTcGVjaWZpZXI7XG4gIH1cbn1cblxuXG4vLyBiaW5kaW5nc1xuXG5leHBvcnQgY2xhc3MgQmluZGluZ1dpdGhEZWZhdWx0IHtcbiAgY29uc3RydWN0b3IoYmluZGluZywgaW5pdCkge1xuICAgIHRoaXMudHlwZSA9IFwiQmluZGluZ1dpdGhEZWZhdWx0XCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nSWRlbnRpZmllciB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJpbmRpbmdJZGVudGlmaWVyXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlCaW5kaW5nIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMsIHJlc3RFbGVtZW50KSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJheUJpbmRpbmdcIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgdGhpcy5yZXN0RWxlbWVudCA9IHJlc3RFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RCaW5kaW5nIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMudHlwZSA9IFwiT2JqZWN0QmluZGluZ1wiO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdQcm9wZXJ0eUlkZW50aWZpZXIge1xuICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyLCBpbml0KSB7XG4gICAgdGhpcy50eXBlID0gXCJCaW5kaW5nUHJvcGVydHlJZGVudGlmaWVyXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nUHJvcGVydHlQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJpbmRpbmcpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJpbmRpbmdQcm9wZXJ0eVByb3BlcnR5XCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICB9XG59XG5cblxuLy8gY2xhc3Nlc1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJfLCBlbGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiQ2xhc3NFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyID0gc3VwZXJfO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdXBlcl8sIGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJDbGFzc1N0YXRlbWVudFwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdXBlciA9IHN1cGVyXztcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGlzU3RhdGljLCBtZXRob2QpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNsYXNzRWxlbWVudFwiO1xuICAgIHRoaXMuaXNTdGF0aWMgPSBpc1N0YXRpYztcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgfVxufVxuXG5cbi8vIG1vZHVsZXNcblxuZXhwb3J0IGNsYXNzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGRpcmVjdGl2ZXMsIHNvdXJjZUVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJNb2R1bGVcIjtcbiAgICB0aGlzLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuICAgIHRoaXMuc291cmNlRWxlbWVudHMgPSBzb3VyY2VFbGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1wb3J0TW9kdWxlIGV4dGVuZHMgSW1wb3J0RGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkltcG9ydE1vZHVsZVwiO1xuICAgIHN1cGVyKG1vZHVsZVNwZWNpZmllcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltcG9ydEZyb20gZXh0ZW5kcyBJbXBvcnREZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGltcG9ydENsYXVzZSwgbW9kdWxlU3BlY2lmaWVyKSB7XG4gICAgdGhpcy50eXBlID0gXCJJbXBvcnRGcm9tXCI7XG4gICAgc3VwZXIobW9kdWxlU3BlY2lmaWVyKTtcbiAgICB0aGlzLmltcG9ydENsYXVzZSA9IGltcG9ydENsYXVzZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1wb3J0RnJvbVdpdGhCaW5kaW5nIGV4dGVuZHMgSW1wb3J0RGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihiaW5kaW5nSWRlbnRpZmllciwgaW1wb3J0Q2xhdXNlLCBtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkltcG9ydEZyb21XaXRoQmluZGluZ1wiO1xuICAgIHN1cGVyKG1vZHVsZVNwZWNpZmllcik7XG4gICAgdGhpcy5iaW5kaW5nSWRlbnRpZmllciA9IGJpbmRpbmdJZGVudGlmaWVyO1xuICAgIHRoaXMuaW1wb3J0Q2xhdXNlID0gaW1wb3J0Q2xhdXNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOYW1lZEltcG9ydHMge1xuICBjb25zdHJ1Y3RvcihpbXBvcnRTcGVjaWZpZXJzKSB7XG4gICAgdGhpcy50eXBlID0gXCJOYW1lZEltcG9ydHNcIjtcbiAgICB0aGlzLmltcG9ydFNwZWNpZmllcnMgPSBpbXBvcnRTcGVjaWZpZXJzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBvcnRTcGVjaWZpZXIge1xuICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyLCBiaW5kaW5nSWRlbnRpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiSW1wb3J0U3BlY2lmaWVyXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLmJpbmRpbmdJZGVudGlmaWVyID0gYmluZGluZ0lkZW50aWZpZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cG9ydEZyb20ge1xuICBjb25zdHJ1Y3RvcihleHBvcnRTcGVjaWZpZXJzLCBtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cG9ydEZyb21cIjtcbiAgICB0aGlzLmV4cG9ydFNwZWNpZmllcnMgPSBleHBvcnRTcGVjaWZpZXJzO1xuICAgIHRoaXMubW9kdWxlU3BlY2lmaWVyID0gbW9kdWxlU3BlY2lmaWVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnQge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cG9ydFwiO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnREZWZhdWx0IHtcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgdGhpcy50eXBlID0gXCJFeHBvcnREZWZhdWx0XCI7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cG9ydFNwZWNpZmllciB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIsIGFzKSB7XG4gICAgdGhpcy50eXBlID0gXCJFeHBvcnRTcGVjaWZpZXJcIjtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMuYXMgPSBhcztcbiAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uc1xuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25Cb2R5IHtcbiAgY29uc3RydWN0b3IoZGlyZWN0aXZlcywgc3RhdGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiRnVuY3Rpb25Cb2R5XCI7XG4gICAgdGhpcy5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJvd0V4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJvd0V4cHJlc3Npb25cIjtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmVzdFBhcmFtZXRlciA9IHJlc3RQYXJhbWV0ZXI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25EZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGlzR2VuZXJhdG9yLCBuYW1lLCBwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCI7XG4gICAgdGhpcy5pc0dlbmVyYXRvciA9IGlzR2VuZXJhdG9yO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJlc3RQYXJhbWV0ZXIgPSByZXN0UGFyYW1ldGVyO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGlzR2VuZXJhdG9yLCBuYW1lLCBwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmlzR2VuZXJhdG9yID0gaXNHZW5lcmF0b3I7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmVzdFBhcmFtZXRlciA9IHJlc3RQYXJhbWV0ZXI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWV0aG9kIGV4dGVuZHMgTWV0aG9kRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGlzR2VuZXJhdG9yLCBuYW1lLCBwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJNZXRob2RcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgICB0aGlzLmlzR2VuZXJhdG9yID0gaXNHZW5lcmF0b3I7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJlc3RQYXJhbWV0ZXIgPSByZXN0UGFyYW1ldGVyO1xuICB9XG59XG5cblxuLy8gb2JqZWN0IGV4cHJlc3Npb25zXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMudHlwZSA9IFwiT2JqZWN0RXhwcmVzc2lvblwiO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldHRlciBleHRlbmRzIEFjY2Vzc29yUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJHZXR0ZXJcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0dGVyIGV4dGVuZHMgQWNjZXNzb3JQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtZXRlciwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiU2V0dGVyXCI7XG4gICAgc3VwZXIobmFtZSwgYm9keSk7XG4gICAgdGhpcy5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFQcm9wZXJ0eSBleHRlbmRzIE5hbWVkT2JqZWN0UHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJEYXRhUHJvcGVydHlcIjtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaG9ydGhhbmRQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlNob3J0aGFuZFByb3BlcnR5XCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZWRQcm9wZXJ0eU5hbWUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiQ29tcHV0ZWRQcm9wZXJ0eU5hbWVcIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRpY1Byb3BlcnR5TmFtZSB7XG4gIGNvbnN0cnVjdG9yKCB2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiU3RhdGljUHJvcGVydHlOYW1lXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblxuLy8gbGl0ZXJhbHNcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxCb29sZWFuRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsQm9vbGVhbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxJbmZpbml0eUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxJbmZpbml0eUV4cHJlc3Npb25cIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE51bGxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsTnVsbEV4cHJlc3Npb25cIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE51bWVyaWNFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxOdW1lcmljRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxTdHJpbmdFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxTdHJpbmdFeHByZXNzaW9uXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblxuLy8gb3RoZXIgZXhwcmVzc2lvbnNcblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJheUV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGJpbmRpbmcsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMudHlwZSA9IFwiQmluYXJ5RXhwcmVzc2lvblwiO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhbGxFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlZE1lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb21wdXRlZE1lbWJlckV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvYmplY3QpO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklkZW50aWZpZXJFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV3RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgIHRoaXMudHlwZSA9IFwiTmV3RXhwcmVzc2lvblwiO1xuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV3VGFyZ2V0RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiTmV3VGFyZ2V0RXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0Zml4RXhwcmVzc2lvbiBleHRlbmRzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhbmQsIG9wZXJhdG9yKSB7XG4gICAgdGhpcy50eXBlID0gXCJQb3N0Zml4RXhwcmVzc2lvblwiO1xuICAgIHN1cGVyKG9wZXJhbmQpO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlZml4RXhwcmVzc2lvbiBleHRlbmRzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBvcGVyYW5kKSB7XG4gICAgdGhpcy50eXBlID0gXCJQcmVmaXhFeHByZXNzaW9uXCI7XG4gICAgc3VwZXIob3BlcmFuZCk7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNNZW1iZXJFeHByZXNzaW9uIGV4dGVuZHMgTWVtYmVyRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN0YXRpY01lbWJlckV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvYmplY3QpO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiVGVtcGxhdGVTdHJpbmdcIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRoaXNFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJUaGlzRXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZaWVsZEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJZaWVsZEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZaWVsZEdlbmVyYXRvckV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJZaWVsZEdlbmVyYXRvckV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cblxuLy8gb3RoZXIgc3RhdGVtZW50c1xuXG5leHBvcnQgY2xhc3MgQmxvY2tTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihibG9jaykge1xuICAgIHRoaXMudHlwZSA9IFwiQmxvY2tTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJsb2NrID0gYmxvY2s7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyZWFrU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJyZWFrU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250aW51ZVN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb250aW51ZVN0YXRlbWVudFwiO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVidWdnZXJTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRlYnVnZ2VyU3RhdGVtZW50XCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvV2hpbGVTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5LCB0ZXN0KSB7XG4gICAgdGhpcy50eXBlID0gXCJEb1doaWxlU3RhdGVtZW50XCI7XG4gICAgc3VwZXIoYm9keSk7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkVtcHR5U3RhdGVtZW50XCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJFeHByZXNzaW9uU3RhdGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ySW5TdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRm9ySW5TdGF0ZW1lbnRcIjtcbiAgICBzdXBlcihib2R5KTtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yT2ZTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRm9yT2ZTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihpbml0LCB0ZXN0LCB1cGRhdGUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZvclN0YXRlbWVudFwiO1xuICAgIHN1cGVyKGJvZHkpO1xuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWZTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXN0LCBjb25zZXF1ZW50LCBhbHRlcm5hdGUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklmU3RhdGVtZW50XCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYWJlbGVkU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxhYmVsZWRTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiUmV0dXJuU3RhdGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzY3JpbWluYW50LCBjYXNlcykge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoU3RhdGVtZW50XCI7XG4gICAgdGhpcy5kaXNjcmltaW5hbnQgPSBkaXNjcmltaW5hbnQ7XG4gICAgdGhpcy5jYXNlcyA9IGNhc2VzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hTdGF0ZW1lbnRXaXRoRGVmYXVsdCB7XG4gIGNvbnN0cnVjdG9yKGRpc2NyaW1pbmFudCwgcHJlRGVmYXVsdENhc2VzLCBkZWZhdWx0Q2FzZSwgcG9zdERlZmF1bHRDYXNlcykge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoU3RhdGVtZW50V2l0aERlZmF1bHRcIjtcbiAgICB0aGlzLmRpc2NyaW1pbmFudCA9IGRpc2NyaW1pbmFudDtcbiAgICB0aGlzLnByZURlZmF1bHRDYXNlcyA9IHByZURlZmF1bHRDYXNlcztcbiAgICB0aGlzLmRlZmF1bHRDYXNlID0gZGVmYXVsdENhc2U7XG4gICAgdGhpcy5wb3N0RGVmYXVsdENhc2VzID0gcG9zdERlZmF1bHRDYXNlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGhyb3dTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJUaHJvd1N0YXRlbWVudFwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyeUNhdGNoU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYm9keSwgY2F0Y2hDbGF1c2UpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRyeUNhdGNoU3RhdGVtZW50XCI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLmNhdGNoQ2xhdXNlID0gY2F0Y2hDbGF1c2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyeUZpbmFsbHlTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5LCBjYXRjaENsYXVzZSwgZmluYWxpemVyKSB7XG4gICAgdGhpcy50eXBlID0gXCJUcnlGaW5hbGx5U3RhdGVtZW50XCI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLmNhdGNoQ2xhdXNlID0gY2F0Y2hDbGF1c2U7XG4gICAgdGhpcy5maW5hbGl6ZXIgPSBmaW5hbGl6ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbikge1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblN0YXRlbWVudFwiO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2hpbGVTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXN0LCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJXaGlsZVN0YXRlbWVudFwiO1xuICAgIHN1cGVyKGJvZHkpO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpdGhTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIldpdGhTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cblxuLy8gb3RoZXIgbm9kZXNcblxuZXhwb3J0IGNsYXNzIEJsb2NrIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiQmxvY2tcIjtcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXRjaENsYXVzZSB7XG4gIGNvbnN0cnVjdG9yKGJpbmRpbmcsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhdGNoQ2xhdXNlXCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiRGlyZWN0aXZlXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMudHlwZSA9IFwiSWRlbnRpZmllclwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNjcmlwdCB7XG4gIGNvbnN0cnVjdG9yKGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlNjcmlwdFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwcmVhZEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJTcHJlYWRFbGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN1cGVyXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaENhc2Uge1xuICBjb25zdHJ1Y3Rvcih0ZXN0LCBjb25zZXF1ZW50KSB7XG4gICAgdGhpcy50eXBlID0gXCJTd2l0Y2hDYXNlXCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hEZWZhdWx0IHtcbiAgY29uc3RydWN0b3IoY29uc2VxdWVudCkge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoRGVmYXVsdFwiO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlTGl0ZXJhbCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJUZW1wbGF0ZUxpdGVyYWxcIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihraW5kLCBkZWNsYXJhdG9ycykge1xuICAgIGlmIChkZWNsYXJhdG9ycy5sZW5ndGggPCAxKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlZhcmlhYmxlRGVjbGFyYXRpb24gZGVjbGFyYXRvcnMgbGlzdCBtdXN0IGJlIG5vbi1lbXB0eS5cIik7XG4gICAgdGhpcy50eXBlID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG4gICAgdGhpcy5raW5kID0ga2luZDtcbiAgICB0aGlzLmRlY2xhcmF0b3JzID0gZGVjbGFyYXRvcnM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRvciB7XG4gIGNvbnN0cnVjdG9yKGJpbmRpbmcsIGluaXQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlZhcmlhYmxlRGVjbGFyYXRvclwiO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgdGhpcy5pbml0ID0gaW5pdDtcbiAgfVxufVxuIl19