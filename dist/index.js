"use strict";

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var Node = function Node() {};

exports.Node = Node;
var Statement = (function (Node) {
  var Statement = function Statement() {
    Node.apply(this, arguments);
  };

  _extends(Statement, Node);

  return Statement;
})(Node);

exports.Statement = Statement;
var IterationStatement = (function (Statement) {
  var IterationStatement = function IterationStatement() {
    Statement.apply(this, arguments);
  };

  _extends(IterationStatement, Statement);

  return IterationStatement;
})(Statement);

exports.IterationStatement = IterationStatement;
var Expression = (function (Node) {
  var Expression = function Expression() {
    Node.apply(this, arguments);
  };

  _extends(Expression, Node);

  return Expression;
})(Node);

exports.Expression = Expression;
var PrimaryExpression = (function (Expression) {
  var PrimaryExpression = function PrimaryExpression() {
    Expression.apply(this, arguments);
  };

  _extends(PrimaryExpression, Expression);

  return PrimaryExpression;
})(Expression);

exports.PrimaryExpression = PrimaryExpression;
var LiteralExpression = (function (PrimaryExpression) {
  var LiteralExpression = function LiteralExpression() {
    PrimaryExpression.apply(this, arguments);
  };

  _extends(LiteralExpression, PrimaryExpression);

  return LiteralExpression;
})(PrimaryExpression);

exports.LiteralExpression = LiteralExpression;
var UnaryExpression = (function (Expression) {
  var UnaryExpression = function UnaryExpression(operand) {
    this.operand = operand;
  };

  _extends(UnaryExpression, Expression);

  return UnaryExpression;
})(Expression);

exports.UnaryExpression = UnaryExpression;
var MemberExpression = (function (Expression) {
  var MemberExpression = function MemberExpression(object) {
    this.object = object;
  };

  _extends(MemberExpression, Expression);

  return MemberExpression;
})(Expression);

exports.MemberExpression = MemberExpression;
var ObjectProperty = (function (Node) {
  var ObjectProperty = function ObjectProperty() {
    Node.apply(this, arguments);
  };

  _extends(ObjectProperty, Node);

  return ObjectProperty;
})(Node);

exports.ObjectProperty = ObjectProperty;
var NamedObjectProperty = (function (ObjectProperty) {
  var NamedObjectProperty = function NamedObjectProperty(name) {
    this.name = name;
  };

  _extends(NamedObjectProperty, ObjectProperty);

  return NamedObjectProperty;
})(ObjectProperty);

exports.NamedObjectProperty = NamedObjectProperty;
var MethodDefinition = (function (NamedObjectProperty) {
  var MethodDefinition = function MethodDefinition(name, body) {
    NamedObjectProperty.call(this, name);
    this.body = body;
  };

  _extends(MethodDefinition, NamedObjectProperty);

  return MethodDefinition;
})(NamedObjectProperty);

exports.MethodDefinition = MethodDefinition;
var AccessorProperty = (function (MethodDefinition) {
  var AccessorProperty = function AccessorProperty() {
    MethodDefinition.apply(this, arguments);
  };

  _extends(AccessorProperty, MethodDefinition);

  return AccessorProperty;
})(MethodDefinition);

exports.AccessorProperty = AccessorProperty;
var PropertyName = (function (Node) {
  var PropertyName = function PropertyName() {
    Node.apply(this, arguments);
  };

  _extends(PropertyName, Node);

  return PropertyName;
})(Node);

exports.PropertyName = PropertyName;
var ImportDeclaration = (function (Node) {
  var ImportDeclaration = function ImportDeclaration(moduleSpecifier) {
    this.moduleSpecifier = moduleSpecifier;
  };

  _extends(ImportDeclaration, Node);

  return ImportDeclaration;
})(Node);

exports.ImportDeclaration = ImportDeclaration;
var ExportDeclaration = (function (Node) {
  var ExportDeclaration = function ExportDeclaration() {
    Node.apply(this, arguments);
  };

  _extends(ExportDeclaration, Node);

  return ExportDeclaration;
})(Node);

exports.ExportDeclaration = ExportDeclaration;
var Binding = (function (Node) {
  var Binding = function Binding() {
    Node.apply(this, arguments);
  };

  _extends(Binding, Node);

  return Binding;
})(Node);

exports.Binding = Binding;
var BindingProperty = (function (Node) {
  var BindingProperty = function BindingProperty() {
    Node.apply(this, arguments);
  };

  _extends(BindingProperty, Node);

  return BindingProperty;
})(Node);

exports.BindingProperty = BindingProperty;
var BindingWithDefault = (function (Node) {
  var BindingWithDefault = function BindingWithDefault(binding, init) {
    this.type = "BindingWithDefault";
    this.binding = binding;
    this.init = init;
  };

  _extends(BindingWithDefault, Node);

  return BindingWithDefault;
})(Node);

exports.BindingWithDefault = BindingWithDefault;
var BindingIdentifier = (function (Binding) {
  var BindingIdentifier = function BindingIdentifier(identifier) {
    this.type = "BindingIdentifier";
    this.identifier = identifier;
  };

  _extends(BindingIdentifier, Binding);

  return BindingIdentifier;
})(Binding);

exports.BindingIdentifier = BindingIdentifier;
var ArrayBinding = (function (Binding) {
  var ArrayBinding = function ArrayBinding(elements, restElement) {
    this.type = "ArrayBinding";
    this.elements = elements;
    this.restElement = restElement;
  };

  _extends(ArrayBinding, Binding);

  return ArrayBinding;
})(Binding);

exports.ArrayBinding = ArrayBinding;
var ObjectBinding = (function (Binding) {
  var ObjectBinding = function ObjectBinding(properties) {
    this.type = "ObjectBinding";
    this.properties = properties;
  };

  _extends(ObjectBinding, Binding);

  return ObjectBinding;
})(Binding);

exports.ObjectBinding = ObjectBinding;
var BindingPropertyIdentifier = (function (BindingProperty) {
  var BindingPropertyIdentifier = function BindingPropertyIdentifier(identifier, init) {
    this.type = "BindingPropertyIdentifier";
    this.identifier = identifier;
    this.init = init;
  };

  _extends(BindingPropertyIdentifier, BindingProperty);

  return BindingPropertyIdentifier;
})(BindingProperty);

exports.BindingPropertyIdentifier = BindingPropertyIdentifier;
var BindingPropertyProperty = (function (BindingProperty) {
  var BindingPropertyProperty = function BindingPropertyProperty(name, binding) {
    this.type = "BindingPropertyProperty";
    this.name = name;
    this.binding = binding;
  };

  _extends(BindingPropertyProperty, BindingProperty);

  return BindingPropertyProperty;
})(BindingProperty);

exports.BindingPropertyProperty = BindingPropertyProperty;
var ClassExpression = (function (Expression) {
  var ClassExpression = function ClassExpression(name, super_, elements) {
    this.type = "ClassExpression";
    this.name = name;
    this["super"] = super_;
    this.elements = elements;
  };

  _extends(ClassExpression, Expression);

  return ClassExpression;
})(Expression);

exports.ClassExpression = ClassExpression;
var ClassStatement = (function (Statement) {
  var ClassStatement = function ClassStatement(name, super_, elements) {
    this.type = "ClassStatement";
    this.name = name;
    this["super"] = super_;
    this.elements = elements;
  };

  _extends(ClassStatement, Statement);

  return ClassStatement;
})(Statement);

exports.ClassStatement = ClassStatement;
var ClassElement = (function (Node) {
  var ClassElement = function ClassElement(isStatic, method) {
    this.type = "ClassElement";
    this.isStatic = isStatic;
    this.method = method;
  };

  _extends(ClassElement, Node);

  return ClassElement;
})(Node);

exports.ClassElement = ClassElement;
var Module = (function (Node) {
  var Module = function Module(directives, sourceElements) {
    this.type = "Module";
    this.directives = directives;
    this.sourceElements = sourceElements;
  };

  _extends(Module, Node);

  return Module;
})(Node);

exports.Module = Module;
var ImportModule = (function (ImportDeclaration) {
  var ImportModule = function ImportModule(moduleSpecifier) {
    this.type = "ImportModule";
    ImportDeclaration.call(this, moduleSpecifier);
  };

  _extends(ImportModule, ImportDeclaration);

  return ImportModule;
})(ImportDeclaration);

exports.ImportModule = ImportModule;
var ImportFrom = (function (ImportDeclaration) {
  var ImportFrom = function ImportFrom(importClause, moduleSpecifier) {
    this.type = "ImportFrom";
    ImportDeclaration.call(this, moduleSpecifier);
    this.importClause = importClause;
  };

  _extends(ImportFrom, ImportDeclaration);

  return ImportFrom;
})(ImportDeclaration);

exports.ImportFrom = ImportFrom;
var ImportFromWithBinding = (function (ImportDeclaration) {
  var ImportFromWithBinding = function ImportFromWithBinding(bindingIdentifier, importClause, moduleSpecifier) {
    this.type = "ImportFromWithBinding";
    ImportDeclaration.call(this, moduleSpecifier);
    this.bindingIdentifier = bindingIdentifier;
    this.importClause = importClause;
  };

  _extends(ImportFromWithBinding, ImportDeclaration);

  return ImportFromWithBinding;
})(ImportDeclaration);

exports.ImportFromWithBinding = ImportFromWithBinding;
var NamedImports = (function (Node) {
  var NamedImports = function NamedImports(importSpecifiers) {
    this.type = "NamedImports";
    this.importSpecifiers = importSpecifiers;
  };

  _extends(NamedImports, Node);

  return NamedImports;
})(Node);

exports.NamedImports = NamedImports;
var ImportSpecifier = (function (Node) {
  var ImportSpecifier = function ImportSpecifier(identifier, bindingIdentifier) {
    this.type = "ImportSpecifier";
    this.identifier = identifier;
    this.bindingIdentifier = bindingIdentifier;
  };

  _extends(ImportSpecifier, Node);

  return ImportSpecifier;
})(Node);

exports.ImportSpecifier = ImportSpecifier;
var ExportFrom = (function (ExportDeclaration) {
  var ExportFrom = function ExportFrom(exportSpecifiers, moduleSpecifier) {
    this.type = "ExportFrom";
    this.exportSpecifiers = exportSpecifiers;
    this.moduleSpecifier = moduleSpecifier;
  };

  _extends(ExportFrom, ExportDeclaration);

  return ExportFrom;
})(ExportDeclaration);

exports.ExportFrom = ExportFrom;
var Export = (function (ExportDeclaration) {
  var Export = function Export(target) {
    this.type = "Export";
    this.target = target;
  };

  _extends(Export, ExportDeclaration);

  return Export;
})(ExportDeclaration);

exports.Export = Export;
var ExportDefault = (function (ExportDeclaration) {
  var ExportDefault = function ExportDefault(target) {
    this.type = "ExportDefault";
    this.target = target;
  };

  _extends(ExportDefault, ExportDeclaration);

  return ExportDefault;
})(ExportDeclaration);

exports.ExportDefault = ExportDefault;
var ExportSpecifier = (function (Node) {
  var ExportSpecifier = function ExportSpecifier(identifier, as) {
    this.type = "ExportSpecifier";
    this.identifier = identifier;
    this.as = as;
  };

  _extends(ExportSpecifier, Node);

  return ExportSpecifier;
})(Node);

exports.ExportSpecifier = ExportSpecifier;
var FunctionBody = (function (Node) {
  var FunctionBody = function FunctionBody(directives, statements) {
    this.type = "FunctionBody";
    this.directives = directives;
    this.statements = statements;
  };

  _extends(FunctionBody, Node);

  return FunctionBody;
})(Node);

exports.FunctionBody = FunctionBody;
var ArrowExpression = (function (Expression) {
  var ArrowExpression = function ArrowExpression(parameters, restParameter, body) {
    this.type = "ArrowExpression";
    this.parameters = parameters;
    this.restParameter = restParameter;
    this.body = body;
  };

  _extends(ArrowExpression, Expression);

  return ArrowExpression;
})(Expression);

exports.ArrowExpression = ArrowExpression;
var FunctionDeclaration = (function (Statement) {
  var FunctionDeclaration = function FunctionDeclaration(isGenerator, name, parameters, restParameter, body) {
    this.type = "FunctionDeclaration";
    this.isGenerator = isGenerator;
    this.name = name;
    this.parameters = parameters;
    this.restParameter = restParameter;
    this.body = body;
  };

  _extends(FunctionDeclaration, Statement);

  return FunctionDeclaration;
})(Statement);

exports.FunctionDeclaration = FunctionDeclaration;
var FunctionExpression = (function (PrimaryExpression) {
  var FunctionExpression = function FunctionExpression(isGenerator, name, parameters, restParameter, body) {
    this.type = "FunctionExpression";
    this.isGenerator = isGenerator;
    this.name = name;
    this.parameters = parameters;
    this.restParameter = restParameter;
    this.body = body;
  };

  _extends(FunctionExpression, PrimaryExpression);

  return FunctionExpression;
})(PrimaryExpression);

exports.FunctionExpression = FunctionExpression;
var Method = (function (MethodDefinition) {
  var Method = function Method(isGenerator, name, parameters, restParameter, body) {
    this.type = "Method";
    MethodDefinition.call(this, name, body);
    this.isGenerator = isGenerator;
    this.parameters = parameters;
    this.restParameter = restParameter;
  };

  _extends(Method, MethodDefinition);

  return Method;
})(MethodDefinition);

exports.Method = Method;
var ObjectExpression = (function (PrimaryExpression) {
  var ObjectExpression = function ObjectExpression(properties) {
    this.type = "ObjectExpression";
    this.properties = properties;
  };

  _extends(ObjectExpression, PrimaryExpression);

  return ObjectExpression;
})(PrimaryExpression);

exports.ObjectExpression = ObjectExpression;
var Getter = (function (AccessorProperty) {
  var Getter = function Getter(name, body) {
    this.type = "Getter";
    AccessorProperty.call(this, name, body);
  };

  _extends(Getter, AccessorProperty);

  return Getter;
})(AccessorProperty);

exports.Getter = Getter;
var Setter = (function (AccessorProperty) {
  var Setter = function Setter(name, parameter, body) {
    this.type = "Setter";
    AccessorProperty.call(this, name, body);
    this.parameter = parameter;
  };

  _extends(Setter, AccessorProperty);

  return Setter;
})(AccessorProperty);

exports.Setter = Setter;
var DataProperty = (function (NamedObjectProperty) {
  var DataProperty = function DataProperty(name, expression) {
    this.type = "DataProperty";
    NamedObjectProperty.call(this, name);
    this.expression = expression;
  };

  _extends(DataProperty, NamedObjectProperty);

  return DataProperty;
})(NamedObjectProperty);

exports.DataProperty = DataProperty;
var ShorthandProperty = (function (ObjectProperty) {
  var ShorthandProperty = function ShorthandProperty(name) {
    this.type = "ShorthandProperty";
    this.name = name;
  };

  _extends(ShorthandProperty, ObjectProperty);

  return ShorthandProperty;
})(ObjectProperty);

exports.ShorthandProperty = ShorthandProperty;
var ComputedPropertyName = (function (PropertyName) {
  var ComputedPropertyName = function ComputedPropertyName(value) {
    this.type = "ComputedPropertyName";
    this.value = value;
  };

  _extends(ComputedPropertyName, PropertyName);

  return ComputedPropertyName;
})(PropertyName);

exports.ComputedPropertyName = ComputedPropertyName;
var StaticPropertyName = (function (PropertyName) {
  var StaticPropertyName = function StaticPropertyName(value) {
    this.type = "StaticPropertyName";
    this.value = value;
  };

  _extends(StaticPropertyName, PropertyName);

  return StaticPropertyName;
})(PropertyName);

exports.StaticPropertyName = StaticPropertyName;
var LiteralBooleanExpression = (function (LiteralExpression) {
  var LiteralBooleanExpression = function LiteralBooleanExpression(value) {
    this.type = "LiteralBooleanExpression";
    this.value = value;
  };

  _extends(LiteralBooleanExpression, LiteralExpression);

  return LiteralBooleanExpression;
})(LiteralExpression);

exports.LiteralBooleanExpression = LiteralBooleanExpression;
var LiteralInfinityExpression = (function (LiteralExpression) {
  var LiteralInfinityExpression = function LiteralInfinityExpression() {
    this.type = "LiteralInfinityExpression";
  };

  _extends(LiteralInfinityExpression, LiteralExpression);

  return LiteralInfinityExpression;
})(LiteralExpression);

exports.LiteralInfinityExpression = LiteralInfinityExpression;
var LiteralNullExpression = (function (LiteralExpression) {
  var LiteralNullExpression = function LiteralNullExpression() {
    this.type = "LiteralNullExpression";
  };

  _extends(LiteralNullExpression, LiteralExpression);

  return LiteralNullExpression;
})(LiteralExpression);

exports.LiteralNullExpression = LiteralNullExpression;
var LiteralNumericExpression = (function (LiteralExpression) {
  var LiteralNumericExpression = function LiteralNumericExpression(value) {
    this.type = "LiteralNumericExpression";
    this.value = value;
  };

  _extends(LiteralNumericExpression, LiteralExpression);

  return LiteralNumericExpression;
})(LiteralExpression);

exports.LiteralNumericExpression = LiteralNumericExpression;
var LiteralRegExpExpression = (function (LiteralExpression) {
  var LiteralRegExpExpression = function LiteralRegExpExpression(value) {
    this.type = "LiteralRegExpExpression";
    this.value = value;
  };

  _extends(LiteralRegExpExpression, LiteralExpression);

  return LiteralRegExpExpression;
})(LiteralExpression);

exports.LiteralRegExpExpression = LiteralRegExpExpression;
var LiteralStringExpression = (function (LiteralExpression) {
  var LiteralStringExpression = function LiteralStringExpression(value) {
    this.type = "LiteralStringExpression";
    this.value = value;
  };

  _extends(LiteralStringExpression, LiteralExpression);

  return LiteralStringExpression;
})(LiteralExpression);

exports.LiteralStringExpression = LiteralStringExpression;
var ArrayExpression = (function (PrimaryExpression) {
  var ArrayExpression = function ArrayExpression(elements) {
    this.type = "ArrayExpression";
    this.elements = elements;
  };

  _extends(ArrayExpression, PrimaryExpression);

  return ArrayExpression;
})(PrimaryExpression);

exports.ArrayExpression = ArrayExpression;
var AssignmentExpression = (function (Expression) {
  var AssignmentExpression = function AssignmentExpression(operator, binding, expression) {
    this.type = "AssignmentExpression";
    this.operator = operator;
    this.binding = binding;
    this.expression = expression;
  };

  _extends(AssignmentExpression, Expression);

  return AssignmentExpression;
})(Expression);

exports.AssignmentExpression = AssignmentExpression;
var BinaryExpression = (function (Expression) {
  var BinaryExpression = function BinaryExpression(operator, left, right) {
    this.type = "BinaryExpression";
    this.operator = operator;
    this.left = left;
    this.right = right;
  };

  _extends(BinaryExpression, Expression);

  return BinaryExpression;
})(Expression);

exports.BinaryExpression = BinaryExpression;
var CallExpression = (function (Expression) {
  var CallExpression = function CallExpression(callee, args) {
    this.type = "CallExpression";
    this.callee = callee;
    this.arguments = args;
  };

  _extends(CallExpression, Expression);

  return CallExpression;
})(Expression);

exports.CallExpression = CallExpression;
var ComputedMemberExpression = (function (MemberExpression) {
  var ComputedMemberExpression = function ComputedMemberExpression(object, expression) {
    this.type = "ComputedMemberExpression";
    MemberExpression.call(this, object);
    this.expression = expression;
  };

  _extends(ComputedMemberExpression, MemberExpression);

  return ComputedMemberExpression;
})(MemberExpression);

exports.ComputedMemberExpression = ComputedMemberExpression;
var ConditionalExpression = (function (Expression) {
  var ConditionalExpression = function ConditionalExpression(test, consequent, alternate) {
    this.type = "ConditionalExpression";
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  };

  _extends(ConditionalExpression, Expression);

  return ConditionalExpression;
})(Expression);

exports.ConditionalExpression = ConditionalExpression;
var IdentifierExpression = (function (PrimaryExpression) {
  var IdentifierExpression = function IdentifierExpression(identifier) {
    this.type = "IdentifierExpression";
    this.identifier = identifier;
  };

  _extends(IdentifierExpression, PrimaryExpression);

  return IdentifierExpression;
})(PrimaryExpression);

exports.IdentifierExpression = IdentifierExpression;
var NewExpression = (function (Expression) {
  var NewExpression = function NewExpression(callee, args) {
    this.type = "NewExpression";
    this.callee = callee;
    this.arguments = args;
  };

  _extends(NewExpression, Expression);

  return NewExpression;
})(Expression);

exports.NewExpression = NewExpression;
var PostfixExpression = (function (UnaryExpression) {
  var PostfixExpression = function PostfixExpression(operand, operator) {
    this.type = "PostfixExpression";
    UnaryExpression.call(this, operand);
    this.operator = operator;
  };

  _extends(PostfixExpression, UnaryExpression);

  return PostfixExpression;
})(UnaryExpression);

exports.PostfixExpression = PostfixExpression;
var PrefixExpression = (function (UnaryExpression) {
  var PrefixExpression = function PrefixExpression(operator, operand) {
    this.type = "PrefixExpression";
    UnaryExpression.call(this, operand);
    this.operator = operator;
  };

  _extends(PrefixExpression, UnaryExpression);

  return PrefixExpression;
})(UnaryExpression);

exports.PrefixExpression = PrefixExpression;
var StaticMemberExpression = (function (MemberExpression) {
  var StaticMemberExpression = function StaticMemberExpression(object, property) {
    this.type = "StaticMemberExpression";
    MemberExpression.call(this, object);
    this.property = property;
  };

  _extends(StaticMemberExpression, MemberExpression);

  return StaticMemberExpression;
})(MemberExpression);

exports.StaticMemberExpression = StaticMemberExpression;
var TemplateString = (function (PrimaryExpression) {
  var TemplateString = function TemplateString(elements) {
    this.type = "TemplateString";
    this.elements = elements;
  };

  _extends(TemplateString, PrimaryExpression);

  return TemplateString;
})(PrimaryExpression);

exports.TemplateString = TemplateString;
var ThisExpression = (function (PrimaryExpression) {
  var ThisExpression = function ThisExpression() {
    this.type = "ThisExpression";
  };

  _extends(ThisExpression, PrimaryExpression);

  return ThisExpression;
})(PrimaryExpression);

exports.ThisExpression = ThisExpression;
var YieldExpression = (function (Expression) {
  var YieldExpression = function YieldExpression(expression) {
    this.type = "YieldExpression";
    this.expression = expression;
  };

  _extends(YieldExpression, Expression);

  return YieldExpression;
})(Expression);

exports.YieldExpression = YieldExpression;
var YieldGeneratorExpression = (function (Expression) {
  var YieldGeneratorExpression = function YieldGeneratorExpression(expression) {
    this.type = "YieldGeneratorExpression";
    this.expression = expression;
  };

  _extends(YieldGeneratorExpression, Expression);

  return YieldGeneratorExpression;
})(Expression);

exports.YieldGeneratorExpression = YieldGeneratorExpression;
var BlockStatement = (function (Statement) {
  var BlockStatement = function BlockStatement(block) {
    this.type = "BlockStatement";
    this.block = block;
  };

  _extends(BlockStatement, Statement);

  return BlockStatement;
})(Statement);

exports.BlockStatement = BlockStatement;
var BreakStatement = (function (Statement) {
  var BreakStatement = function BreakStatement(label) {
    this.type = "BreakStatement";
    this.label = label;
  };

  _extends(BreakStatement, Statement);

  return BreakStatement;
})(Statement);

exports.BreakStatement = BreakStatement;
var ContinueStatement = (function (Statement) {
  var ContinueStatement = function ContinueStatement(label) {
    this.type = "ContinueStatement";
    this.label = label;
  };

  _extends(ContinueStatement, Statement);

  return ContinueStatement;
})(Statement);

exports.ContinueStatement = ContinueStatement;
var DebuggerStatement = (function (Statement) {
  var DebuggerStatement = function DebuggerStatement() {
    this.type = "DebuggerStatement";
  };

  _extends(DebuggerStatement, Statement);

  return DebuggerStatement;
})(Statement);

exports.DebuggerStatement = DebuggerStatement;
var DoWhileStatement = (function (IterationStatement) {
  var DoWhileStatement = function DoWhileStatement(body, test) {
    this.type = "DoWhileStatement";
    this.body = body;
    this.test = test;
  };

  _extends(DoWhileStatement, IterationStatement);

  return DoWhileStatement;
})(IterationStatement);

exports.DoWhileStatement = DoWhileStatement;
var EmptyStatement = (function (Statement) {
  var EmptyStatement = function EmptyStatement() {
    this.type = "EmptyStatement";
  };

  _extends(EmptyStatement, Statement);

  return EmptyStatement;
})(Statement);

exports.EmptyStatement = EmptyStatement;
var ExpressionStatement = (function (Statement) {
  var ExpressionStatement = function ExpressionStatement(expression) {
    this.type = "ExpressionStatement";
    this.expression = expression;
  };

  _extends(ExpressionStatement, Statement);

  return ExpressionStatement;
})(Statement);

exports.ExpressionStatement = ExpressionStatement;
var ForInStatement = (function (IterationStatement) {
  var ForInStatement = function ForInStatement(left, right, body) {
    this.type = "ForInStatement";
    this.left = left;
    this.right = right;
    this.body = body;
  };

  _extends(ForInStatement, IterationStatement);

  return ForInStatement;
})(IterationStatement);

exports.ForInStatement = ForInStatement;
var ForOfStatement = (function (IterationStatement) {
  var ForOfStatement = function ForOfStatement(left, right, body) {
    this.type = "ForOfStatement";
    this.left = left;
    this.right = right;
    this.body = body;
  };

  _extends(ForOfStatement, IterationStatement);

  return ForOfStatement;
})(IterationStatement);

exports.ForOfStatement = ForOfStatement;
var ForStatement = (function (IterationStatement) {
  var ForStatement = function ForStatement(init, test, update, body) {
    this.type = "ForStatement";
    this.init = init;
    this.test = test;
    this.update = update;
    this.body = body;
  };

  _extends(ForStatement, IterationStatement);

  return ForStatement;
})(IterationStatement);

exports.ForStatement = ForStatement;
var IfStatement = (function (Statement) {
  var IfStatement = function IfStatement(test, consequent, alternate) {
    this.type = "IfStatement";
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  };

  _extends(IfStatement, Statement);

  return IfStatement;
})(Statement);

exports.IfStatement = IfStatement;
var LabeledStatement = (function (Statement) {
  var LabeledStatement = function LabeledStatement(label, body) {
    this.type = "LabeledStatement";
    this.label = label;
    this.body = body;
  };

  _extends(LabeledStatement, Statement);

  return LabeledStatement;
})(Statement);

exports.LabeledStatement = LabeledStatement;
var ReturnStatement = (function (Statement) {
  var ReturnStatement = function ReturnStatement(expression) {
    this.type = "ReturnStatement";
    this.expression = expression;
  };

  _extends(ReturnStatement, Statement);

  return ReturnStatement;
})(Statement);

exports.ReturnStatement = ReturnStatement;
var SwitchStatement = (function (Statement) {
  var SwitchStatement = function SwitchStatement(discriminant, cases) {
    this.type = "SwitchStatement";
    this.discriminant = discriminant;
    this.cases = cases;
  };

  _extends(SwitchStatement, Statement);

  return SwitchStatement;
})(Statement);

exports.SwitchStatement = SwitchStatement;
var SwitchStatementWithDefault = (function (Statement) {
  var SwitchStatementWithDefault = function SwitchStatementWithDefault(discriminant, preDefaultCases, defaultCase, postDefaultCases) {
    this.type = "SwitchStatementWithDefault";
    this.discriminant = discriminant;
    this.preDefaultCases = preDefaultCases;
    this.defaultCase = defaultCase;
    this.postDefaultCases = postDefaultCases;
  };

  _extends(SwitchStatementWithDefault, Statement);

  return SwitchStatementWithDefault;
})(Statement);

exports.SwitchStatementWithDefault = SwitchStatementWithDefault;
var ThrowStatement = (function (Statement) {
  var ThrowStatement = function ThrowStatement(expression) {
    this.type = "ThrowStatement";
    this.expression = expression;
  };

  _extends(ThrowStatement, Statement);

  return ThrowStatement;
})(Statement);

exports.ThrowStatement = ThrowStatement;
var TryCatchStatement = (function (Statement) {
  var TryCatchStatement = function TryCatchStatement(body, catchClause) {
    this.type = "TryCatchStatement";
    this.body = body;
    this.catchClause = catchClause;
  };

  _extends(TryCatchStatement, Statement);

  return TryCatchStatement;
})(Statement);

exports.TryCatchStatement = TryCatchStatement;
var TryFinallyStatement = (function (Statement) {
  var TryFinallyStatement = function TryFinallyStatement(body, catchClause, finalizer) {
    this.type = "TryFinallyStatement";
    this.body = body;
    this.catchClause = catchClause;
    this.finalizer = finalizer;
  };

  _extends(TryFinallyStatement, Statement);

  return TryFinallyStatement;
})(Statement);

exports.TryFinallyStatement = TryFinallyStatement;
var VariableDeclarationStatement = (function (Statement) {
  var VariableDeclarationStatement = function VariableDeclarationStatement(declaration) {
    this.type = "VariableDeclarationStatement";
    this.declaration = declaration;
  };

  _extends(VariableDeclarationStatement, Statement);

  return VariableDeclarationStatement;
})(Statement);

exports.VariableDeclarationStatement = VariableDeclarationStatement;
var WhileStatement = (function (IterationStatement) {
  var WhileStatement = function WhileStatement(test, body) {
    this.type = "WhileStatement";
    this.test = test;
    this.body = body;
  };

  _extends(WhileStatement, IterationStatement);

  return WhileStatement;
})(IterationStatement);

exports.WhileStatement = WhileStatement;
var WithStatement = (function (Statement) {
  var WithStatement = function WithStatement(object, body) {
    this.type = "WithStatement";
    this.object = object;
    this.body = body;
  };

  _extends(WithStatement, Statement);

  return WithStatement;
})(Statement);

exports.WithStatement = WithStatement;
var Block = (function (Node) {
  var Block = function Block(statements) {
    this.type = "Block";
    this.statements = statements;
  };

  _extends(Block, Node);

  return Block;
})(Node);

exports.Block = Block;
var CatchClause = (function (Node) {
  var CatchClause = function CatchClause(binding, body) {
    this.type = "CatchClause";
    this.binding = binding;
    this.body = body;
  };

  _extends(CatchClause, Node);

  return CatchClause;
})(Node);

exports.CatchClause = CatchClause;
var Directive = (function (Node) {
  var Directive = function Directive(value) {
    this.type = "Directive";
    this.value = value;
  };

  _extends(Directive, Node);

  return Directive;
})(Node);

exports.Directive = Directive;
var Identifier = (function (Node) {
  var Identifier = function Identifier(name) {
    this.type = "Identifier";
    this.name = name;
  };

  _extends(Identifier, Node);

  return Identifier;
})(Node);

exports.Identifier = Identifier;
var Script = (function (Node) {
  var Script = function Script(body) {
    this.type = "Script";
    this.body = body;
  };

  _extends(Script, Node);

  return Script;
})(Node);

exports.Script = Script;
var SpreadElement = (function (Node) {
  var SpreadElement = function SpreadElement(expression) {
    this.type = "SpreadElement";
    this.expression = expression;
  };

  _extends(SpreadElement, Node);

  return SpreadElement;
})(Node);

exports.SpreadElement = SpreadElement;
var SwitchCase = (function (Node) {
  var SwitchCase = function SwitchCase(test, consequent) {
    this.type = "SwitchCase";
    this.test = test;
    this.consequent = consequent;
  };

  _extends(SwitchCase, Node);

  return SwitchCase;
})(Node);

exports.SwitchCase = SwitchCase;
var SwitchDefault = (function (Node) {
  var SwitchDefault = function SwitchDefault(consequent) {
    this.type = "SwitchDefault";
    this.consequent = consequent;
  };

  _extends(SwitchDefault, Node);

  return SwitchDefault;
})(Node);

exports.SwitchDefault = SwitchDefault;
var TemplateLiteral = (function (Node) {
  var TemplateLiteral = function TemplateLiteral(value) {
    this.type = "TemplateLiteral";
    this.value = value;
  };

  _extends(TemplateLiteral, Node);

  return TemplateLiteral;
})(Node);

exports.TemplateLiteral = TemplateLiteral;
var VariableDeclaration = (function (Node) {
  var VariableDeclaration = function VariableDeclaration(kind, declarators) {
    if (declarators.length < 1) throw new TypeError("VariableDeclaration declarators list must be non-empty.");
    this.type = "VariableDeclaration";
    this.kind = kind;
    this.declarators = declarators;
  };

  _extends(VariableDeclaration, Node);

  return VariableDeclaration;
})(Node);

exports.VariableDeclaration = VariableDeclaration;
var VariableDeclarator = (function (Node) {
  var VariableDeclarator = function VariableDeclarator(binding, init) {
    this.type = "VariableDeclarator";
    this.binding = binding;
    this.init = init;
  };

  _extends(VariableDeclarator, Node);

  return VariableDeclarator;
})(Node);

exports.VariableDeclarator = VariableDeclarator;
//# sourceMappingURL=data:application/json;base64,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L0Isa0JBQWtCLEdBQ2xCLFNBREEsa0JBQWtCLENBQ2pCLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDekIsUUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztBQUNqQyxRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztHQUNsQjs7V0FMVSxrQkFBa0IsRUFBUyxJQUFJOztTQUEvQixrQkFBa0I7R0FBUyxJQUFJOztRQUEvQixrQkFBa0IsR0FBbEIsa0JBQWtCIiwiZmlsZSI6InNyYy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMTQgU2hhcGUgU2VjdXJpdHksIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cbi8vIG5vZGUgY2xhc3Nlc1xuXG5leHBvcnQgY2xhc3MgTm9kZSB7IH1cbi8vIFRPRE86IE5vZGUucHJvdG90eXBlLmxvY1xuXG5leHBvcnQgY2xhc3MgU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7IH1cbmV4cG9ydCBjbGFzcyBJdGVyYXRpb25TdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQgeyB9XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7IH1cbmV4cG9ydCBjbGFzcyBQcmltYXJ5RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24geyB9XG5leHBvcnQgY2xhc3MgTGl0ZXJhbEV4cHJlc3Npb24gZXh0ZW5kcyBQcmltYXJ5RXhwcmVzc2lvbiB7IH1cblxuZXhwb3J0IGNsYXNzIFVuYXJ5RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYW5kKSB7XG4gICAgdGhpcy5vcGVyYW5kID0gb3BlcmFuZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVtYmVyRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UHJvcGVydHkgZXh0ZW5kcyBOb2RlIHsgfVxuXG5leHBvcnQgY2xhc3MgTmFtZWRPYmplY3RQcm9wZXJ0eSBleHRlbmRzIE9iamVjdFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZERlZmluaXRpb24gZXh0ZW5kcyBOYW1lZE9iamVjdFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgYm9keSkge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFjY2Vzc29yUHJvcGVydHkgZXh0ZW5kcyBNZXRob2REZWZpbml0aW9uIHsgfVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOYW1lIGV4dGVuZHMgTm9kZSB7IH1cblxuZXhwb3J0IGNsYXNzIEltcG9ydERlY2xhcmF0aW9uIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG1vZHVsZVNwZWNpZmllcikge1xuICAgIHRoaXMubW9kdWxlU3BlY2lmaWVyID0gbW9kdWxlU3BlY2lmaWVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnREZWNsYXJhdGlvbiBleHRlbmRzIE5vZGUgeyB9XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nIGV4dGVuZHMgTm9kZSB7IH1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdQcm9wZXJ0eSBleHRlbmRzIE5vZGUgeyB9XG5cblxuLy8gYmluZGluZ3NcblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdXaXRoRGVmYXVsdCBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihiaW5kaW5nLCBpbml0KSB7XG4gICAgdGhpcy50eXBlID0gXCJCaW5kaW5nV2l0aERlZmF1bHRcIjtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdJZGVudGlmaWVyIGV4dGVuZHMgQmluZGluZyB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJpbmRpbmdJZGVudGlmaWVyXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlCaW5kaW5nIGV4dGVuZHMgQmluZGluZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzLCByZXN0RWxlbWVudCkge1xuICAgIHRoaXMudHlwZSA9IFwiQXJyYXlCaW5kaW5nXCI7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgIHRoaXMucmVzdEVsZW1lbnQgPSByZXN0RWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0QmluZGluZyBleHRlbmRzIEJpbmRpbmcge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy50eXBlID0gXCJPYmplY3RCaW5kaW5nXCI7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluZGluZ1Byb3BlcnR5SWRlbnRpZmllciBleHRlbmRzIEJpbmRpbmdQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIsIGluaXQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJpbmRpbmdQcm9wZXJ0eUlkZW50aWZpZXJcIjtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdQcm9wZXJ0eVByb3BlcnR5IGV4dGVuZHMgQmluZGluZ1Byb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgYmluZGluZykge1xuICAgIHRoaXMudHlwZSA9IFwiQmluZGluZ1Byb3BlcnR5UHJvcGVydHlcIjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gIH1cbn1cblxuXG4vLyBjbGFzc2VzXG5cbmV4cG9ydCBjbGFzcyBDbGFzc0V4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJfLCBlbGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiQ2xhc3NFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyID0gc3VwZXJfO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdXBlcl8sIGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJDbGFzc1N0YXRlbWVudFwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdXBlciA9IHN1cGVyXztcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRWxlbWVudCBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcihpc1N0YXRpYywgbWV0aG9kKSB7XG4gICAgdGhpcy50eXBlID0gXCJDbGFzc0VsZW1lbnRcIjtcbiAgICB0aGlzLmlzU3RhdGljID0gaXNTdGF0aWM7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIH1cbn1cblxuXG4vLyBtb2R1bGVzXG5cbmV4cG9ydCBjbGFzcyBNb2R1bGUgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGlyZWN0aXZlcywgc291cmNlRWxlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIk1vZHVsZVwiO1xuICAgIHRoaXMuZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXM7XG4gICAgdGhpcy5zb3VyY2VFbGVtZW50cyA9IHNvdXJjZUVsZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBvcnRNb2R1bGUgZXh0ZW5kcyBJbXBvcnREZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1vZHVsZVNwZWNpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiSW1wb3J0TW9kdWxlXCI7XG4gICAgc3VwZXIobW9kdWxlU3BlY2lmaWVyKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1wb3J0RnJvbSBleHRlbmRzIEltcG9ydERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoaW1wb3J0Q2xhdXNlLCBtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkltcG9ydEZyb21cIjtcbiAgICBzdXBlcihtb2R1bGVTcGVjaWZpZXIpO1xuICAgIHRoaXMuaW1wb3J0Q2xhdXNlID0gaW1wb3J0Q2xhdXNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBvcnRGcm9tV2l0aEJpbmRpbmcgZXh0ZW5kcyBJbXBvcnREZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGJpbmRpbmdJZGVudGlmaWVyLCBpbXBvcnRDbGF1c2UsIG1vZHVsZVNwZWNpZmllcikge1xuICAgIHRoaXMudHlwZSA9IFwiSW1wb3J0RnJvbVdpdGhCaW5kaW5nXCI7XG4gICAgc3VwZXIobW9kdWxlU3BlY2lmaWVyKTtcbiAgICB0aGlzLmJpbmRpbmdJZGVudGlmaWVyID0gYmluZGluZ0lkZW50aWZpZXI7XG4gICAgdGhpcy5pbXBvcnRDbGF1c2UgPSBpbXBvcnRDbGF1c2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hbWVkSW1wb3J0cyBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihpbXBvcnRTcGVjaWZpZXJzKSB7XG4gICAgdGhpcy50eXBlID0gXCJOYW1lZEltcG9ydHNcIjtcbiAgICB0aGlzLmltcG9ydFNwZWNpZmllcnMgPSBpbXBvcnRTcGVjaWZpZXJzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBvcnRTcGVjaWZpZXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoaWRlbnRpZmllciwgYmluZGluZ0lkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkltcG9ydFNwZWNpZmllclwiO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5iaW5kaW5nSWRlbnRpZmllciA9IGJpbmRpbmdJZGVudGlmaWVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnRGcm9tIGV4dGVuZHMgRXhwb3J0RGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihleHBvcnRTcGVjaWZpZXJzLCBtb2R1bGVTcGVjaWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cG9ydEZyb21cIjtcbiAgICB0aGlzLmV4cG9ydFNwZWNpZmllcnMgPSBleHBvcnRTcGVjaWZpZXJzO1xuICAgIHRoaXMubW9kdWxlU3BlY2lmaWVyID0gbW9kdWxlU3BlY2lmaWVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnQgZXh0ZW5kcyBFeHBvcnREZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgIHRoaXMudHlwZSA9IFwiRXhwb3J0XCI7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cG9ydERlZmF1bHQgZXh0ZW5kcyBFeHBvcnREZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgIHRoaXMudHlwZSA9IFwiRXhwb3J0RGVmYXVsdFwiO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnRTcGVjaWZpZXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoaWRlbnRpZmllciwgYXMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkV4cG9ydFNwZWNpZmllclwiO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5hcyA9IGFzO1xuICB9XG59XG5cblxuLy8gZnVuY3Rpb25zXG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkJvZHkgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGlyZWN0aXZlcywgc3RhdGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiRnVuY3Rpb25Cb2R5XCI7XG4gICAgdGhpcy5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJvd0V4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocGFyYW1ldGVycywgcmVzdFBhcmFtZXRlciwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiQXJyb3dFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJlc3RQYXJhbWV0ZXIgPSByZXN0UGFyYW1ldGVyO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRGVjbGFyYXRpb24gZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihpc0dlbmVyYXRvciwgbmFtZSwgcGFyYW1ldGVycywgcmVzdFBhcmFtZXRlciwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRnVuY3Rpb25EZWNsYXJhdGlvblwiO1xuICAgIHRoaXMuaXNHZW5lcmF0b3IgPSBpc0dlbmVyYXRvcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXN0UGFyYW1ldGVyID0gcmVzdFBhcmFtZXRlcjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkV4cHJlc3Npb24gZXh0ZW5kcyBQcmltYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGlzR2VuZXJhdG9yLCBuYW1lLCBwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJGdW5jdGlvbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmlzR2VuZXJhdG9yID0gaXNHZW5lcmF0b3I7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmVzdFBhcmFtZXRlciA9IHJlc3RQYXJhbWV0ZXI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWV0aG9kIGV4dGVuZHMgTWV0aG9kRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGlzR2VuZXJhdG9yLCBuYW1lLCBwYXJhbWV0ZXJzLCByZXN0UGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJNZXRob2RcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgICB0aGlzLmlzR2VuZXJhdG9yID0gaXNHZW5lcmF0b3I7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJlc3RQYXJhbWV0ZXIgPSByZXN0UGFyYW1ldGVyO1xuICB9XG59XG5cblxuLy8gb2JqZWN0IGV4cHJlc3Npb25zXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uIGV4dGVuZHMgUHJpbWFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy50eXBlID0gXCJPYmplY3RFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0dGVyIGV4dGVuZHMgQWNjZXNzb3JQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkdldHRlclwiO1xuICAgIHN1cGVyKG5hbWUsIGJvZHkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXR0ZXIgZXh0ZW5kcyBBY2Nlc3NvclByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgcGFyYW1ldGVyLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJTZXR0ZXJcIjtcbiAgICBzdXBlcihuYW1lLCBib2R5KTtcbiAgICB0aGlzLnBhcmFtZXRlciA9IHBhcmFtZXRlcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YVByb3BlcnR5IGV4dGVuZHMgTmFtZWRPYmplY3RQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRhdGFQcm9wZXJ0eVwiO1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNob3J0aGFuZFByb3BlcnR5IGV4dGVuZHMgT2JqZWN0UHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy50eXBlID0gXCJTaG9ydGhhbmRQcm9wZXJ0eVwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXB1dGVkUHJvcGVydHlOYW1lIGV4dGVuZHMgUHJvcGVydHlOYW1lIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNvbXB1dGVkUHJvcGVydHlOYW1lXCI7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNQcm9wZXJ0eU5hbWUgZXh0ZW5kcyBQcm9wZXJ0eU5hbWUge1xuICBjb25zdHJ1Y3RvciggdmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN0YXRpY1Byb3BlcnR5TmFtZVwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5cbi8vIGxpdGVyYWxzXG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsQm9vbGVhbkV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsQm9vbGVhbkV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxJbmZpbml0eUV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbEluZmluaXR5RXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTnVsbEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbE51bGxFeHByZXNzaW9uXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxOdW1lcmljRXhwcmVzc2lvbiBleHRlbmRzIExpdGVyYWxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxOdW1lcmljRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsUmVnRXhwRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFN0cmluZ0V4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsU3RyaW5nRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5cbi8vIG90aGVyIGV4cHJlc3Npb25zXG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb24gZXh0ZW5kcyBQcmltYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJBcnJheUV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBiaW5kaW5nLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgdGhpcy50eXBlID0gXCJCaW5hcnlFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhbGxFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlZE1lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb21wdXRlZE1lbWJlckV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvYmplY3QpO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXN0LCBjb25zZXF1ZW50LCBhbHRlcm5hdGUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllckV4cHJlc3Npb24gZXh0ZW5kcyBQcmltYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklkZW50aWZpZXJFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV3RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICB0aGlzLnR5cGUgPSBcIk5ld0V4cHJlc3Npb25cIjtcbiAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvc3RmaXhFeHByZXNzaW9uIGV4dGVuZHMgVW5hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmFuZCwgb3BlcmF0b3IpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlBvc3RmaXhFeHByZXNzaW9uXCI7XG4gICAgc3VwZXIob3BlcmFuZCk7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmVmaXhFeHByZXNzaW9uIGV4dGVuZHMgVW5hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0b3IsIG9wZXJhbmQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlByZWZpeEV4cHJlc3Npb25cIjtcbiAgICBzdXBlcihvcGVyYW5kKTtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRpY01lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBNZW1iZXJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHRoaXMudHlwZSA9IFwiU3RhdGljTWVtYmVyRXhwcmVzc2lvblwiO1xuICAgIHN1cGVyKG9iamVjdCk7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVN0cmluZyBleHRlbmRzIFByaW1hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRlbXBsYXRlU3RyaW5nXCI7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaGlzRXhwcmVzc2lvbiBleHRlbmRzIFByaW1hcnlFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJUaGlzRXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZaWVsZEV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiWWllbGRFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgWWllbGRHZW5lcmF0b3JFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIllpZWxkR2VuZXJhdG9yRXhwcmVzc2lvblwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuXG4vLyBvdGhlciBzdGF0ZW1lbnRzXG5cbmV4cG9ydCBjbGFzcyBCbG9ja1N0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJsb2NrKSB7XG4gICAgdGhpcy50eXBlID0gXCJCbG9ja1N0YXRlbWVudFwiO1xuICAgIHRoaXMuYmxvY2sgPSBibG9jaztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnJlYWtTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsYWJlbCkge1xuICAgIHRoaXMudHlwZSA9IFwiQnJlYWtTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRpbnVlU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGFiZWwpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNvbnRpbnVlU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWJ1Z2dlclN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiRGVidWdnZXJTdGF0ZW1lbnRcIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9XaGlsZVN0YXRlbWVudCBleHRlbmRzIEl0ZXJhdGlvblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJvZHksIHRlc3QpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRvV2hpbGVTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJFbXB0eVN0YXRlbWVudFwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiRXhwcmVzc2lvblN0YXRlbWVudFwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvckluU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZvckluU3RhdGVtZW50XCI7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yT2ZTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRm9yT2ZTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihpbml0LCB0ZXN0LCB1cGRhdGUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZvclN0YXRlbWVudFwiO1xuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZlN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiSWZTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhYmVsZWRTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsYWJlbCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGFiZWxlZFN0YXRlbWVudFwiO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXR1cm5TdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJSZXR1cm5TdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkaXNjcmltaW5hbnQsIGNhc2VzKSB7XG4gICAgdGhpcy50eXBlID0gXCJTd2l0Y2hTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmRpc2NyaW1pbmFudCA9IGRpc2NyaW1pbmFudDtcbiAgICB0aGlzLmNhc2VzID0gY2FzZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaFN0YXRlbWVudFdpdGhEZWZhdWx0IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzY3JpbWluYW50LCBwcmVEZWZhdWx0Q2FzZXMsIGRlZmF1bHRDYXNlLCBwb3N0RGVmYXVsdENhc2VzKSB7XG4gICAgdGhpcy50eXBlID0gXCJTd2l0Y2hTdGF0ZW1lbnRXaXRoRGVmYXVsdFwiO1xuICAgIHRoaXMuZGlzY3JpbWluYW50ID0gZGlzY3JpbWluYW50O1xuICAgIHRoaXMucHJlRGVmYXVsdENhc2VzID0gcHJlRGVmYXVsdENhc2VzO1xuICAgIHRoaXMuZGVmYXVsdENhc2UgPSBkZWZhdWx0Q2FzZTtcbiAgICB0aGlzLnBvc3REZWZhdWx0Q2FzZXMgPSBwb3N0RGVmYXVsdENhc2VzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaHJvd1N0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRocm93U3RhdGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJ5Q2F0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5LCBjYXRjaENsYXVzZSkge1xuICAgIHRoaXMudHlwZSA9IFwiVHJ5Q2F0Y2hTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIHRoaXMuY2F0Y2hDbGF1c2UgPSBjYXRjaENsYXVzZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJ5RmluYWxseVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJvZHksIGNhdGNoQ2xhdXNlLCBmaW5hbGl6ZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRyeUZpbmFsbHlTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIHRoaXMuY2F0Y2hDbGF1c2UgPSBjYXRjaENsYXVzZTtcbiAgICB0aGlzLmZpbmFsaXplciA9IGZpbmFsaXplcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uU3RhdGVtZW50XCI7XG4gICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaGlsZVN0YXRlbWVudCBleHRlbmRzIEl0ZXJhdGlvblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIldoaWxlU3RhdGVtZW50XCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaXRoU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJXaXRoU3RhdGVtZW50XCI7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5cbi8vIG90aGVyIG5vZGVzXG5cbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJCbG9ja1wiO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhdGNoQ2xhdXNlIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGJpbmRpbmcsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhdGNoQ2xhdXNlXCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRpcmVjdGl2ZVwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllciBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy50eXBlID0gXCJJZGVudGlmaWVyXCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NyaXB0IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlNjcmlwdFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwcmVhZEVsZW1lbnQgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiU3ByZWFkRWxlbWVudFwiO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaENhc2UgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodGVzdCwgY29uc2VxdWVudCkge1xuICAgIHRoaXMudHlwZSA9IFwiU3dpdGNoQ2FzZVwiO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoRGVmYXVsdCBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcihjb25zZXF1ZW50KSB7XG4gICAgdGhpcy50eXBlID0gXCJTd2l0Y2hEZWZhdWx0XCI7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVMaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJUZW1wbGF0ZUxpdGVyYWxcIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb24gZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3Ioa2luZCwgZGVjbGFyYXRvcnMpIHtcbiAgICBpZiAoZGVjbGFyYXRvcnMubGVuZ3RoIDwgMSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJWYXJpYWJsZURlY2xhcmF0aW9uIGRlY2xhcmF0b3JzIGxpc3QgbXVzdCBiZSBub24tZW1wdHkuXCIpO1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xuICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgdGhpcy5kZWNsYXJhdG9ycyA9IGRlY2xhcmF0b3JzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0b3IgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoYmluZGluZywgaW5pdCkge1xuICAgIHRoaXMudHlwZSA9IFwiVmFyaWFibGVEZWNsYXJhdG9yXCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICB9XG59XG4iXX0=