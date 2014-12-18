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

class IterationStatement {
  constructor(body) {
    this.body = body;
  }
}

class UnaryExpression {
  constructor(operand) {
    this.operand = operand;
  }
}

class MemberExpression {
  constructor(object) {
    this.object = object;
  }
}

class NamedObjectProperty {
  constructor(name) {
    this.name = name;
  }
}

class MethodDefinition extends NamedObjectProperty {
  constructor(name, body) {
    super(name);
    this.body = body;
  }
}

class AccessorProperty extends MethodDefinition { }

class ImportDeclaration {
  constructor(moduleSpecifier) {
    this.moduleSpecifier = moduleSpecifier;
  }
}


// bindings

export class BindingWithDefault {
  constructor(binding, initializer) {
    this.type = "BindingWithDefault";
    this.binding = binding;
    this.initializer = initializer;
  }
}

export class BindingIdentifier {
  constructor(identifier) {
    this.type = "BindingIdentifier";
    this.identifier = identifier;
  }
}

export class ArrayBinding {
  constructor(elements, restElement) {
    this.type = "ArrayBinding";
    this.elements = elements;
    this.restElement = restElement;
  }
}

export class ObjectBinding {
  constructor(properties) {
    this.type = "ObjectBinding";
    this.properties = properties;
  }
}

export class BindingPropertyIdentifier {
  constructor(identifier, initializer) {
    this.type = "BindingPropertyIdentifier";
    this.identifier = identifier;
    this.initializer = initializer;
  }
}

export class BindingPropertyProperty {
  constructor(name, binding) {
    this.type = "BindingPropertyProperty";
    this.name = name;
    this.binding = binding;
  }
}


// classes

export class ClassExpression {
  constructor(name, super_, elements) {
    this.type = "ClassExpression";
    this.name = name;
    this.super = super_;
    this.elements = elements;
  }
}

export class ClassStatement {
  constructor(name, super_, elements) {
    this.type = "ClassStatement";
    this.name = name;
    this.super = super_;
    this.elements = elements;
  }
}

export class ClassElement {
  constructor(isStatic, method) {
    this.type = "ClassElement";
    this.isStatic = isStatic;
    this.method = method;
  }
}


// modules

export class Module {
  constructor(directives, sourceElements) {
    this.type = "Module";
    this.directives = directives;
    this.sourceElements = sourceElements;
  }
}

export class ImportModule extends ImportDeclaration {
  constructor(moduleSpecifier) {
    this.type = "ImportModule";
    super(moduleSpecifier);
  }
}

export class ImportFrom extends ImportDeclaration {
  constructor(importClause, moduleSpecifier) {
    this.type = "ImportFrom";
    super(moduleSpecifier);
    this.importClause = importClause;
  }
}

export class ImportFromWithBinding extends ImportDeclaration {
  constructor(bindingIdentifier, importClause, moduleSpecifier) {
    this.type = "ImportFromWithBinding";
    super(moduleSpecifier);
    this.bindingIdentifier = bindingIdentifier;
    this.importClause = importClause;
  }
}

export class NamedImports {
  constructor(importSpecifiers) {
    this.type = "NamedImports";
    this.importSpecifiers = importSpecifiers;
  }
}

export class ImportSpecifier {
  constructor(identifier, bindingIdentifier) {
    this.type = "ImportSpecifier";
    this.identifier = identifier;
    this.bindingIdentifier = bindingIdentifier;
  }
}

export class ExportFrom {
  constructor(exportSpecifiers, moduleSpecifier) {
    this.type = "ExportFrom";
    this.exportSpecifiers = exportSpecifiers;
    this.moduleSpecifier = moduleSpecifier;
  }
}

export class Export {
  constructor(target) {
    this.type = "Export";
    this.target = target;
  }
}

export class ExportDefault {
  constructor(target) {
    this.type = "ExportDefault";
    this.target = target;
  }
}

export class ExportSpecifier {
  constructor(identifier, as) {
    this.type = "ExportSpecifier";
    this.identifier = identifier;
    this.as = as;
  }
}


// functions

export class FunctionBody {
  constructor(directives, statements) {
    this.type = "FunctionBody";
    this.directives = directives;
    this.statements = statements;
  }
}

export class ArrowExpression {
  constructor(parameters, restParameter, body) {
    this.type = "ArrowExpression";
    this.parameters = parameters;
    this.restParameter = restParameter;
    this.body = body;
  }
}

export class FunctionDeclaration {
  constructor(isGenerator, name, parameters, restParameter, body) {
    this.type = "FunctionDeclaration";
    this.isGenerator = isGenerator;
    this.name = name;
    this.parameters = parameters;
    this.restParameter = restParameter;
    this.body = body;
  }
}

export class FunctionExpression {
  constructor(isGenerator, name, parameters, restParameter, body) {
    this.type = "FunctionExpression";
    this.isGenerator = isGenerator;
    this.name = name;
    this.parameters = parameters;
    this.restParameter = restParameter;
    this.body = body;
  }
}

export class Method extends MethodDefinition {
  constructor(isGenerator, name, parameters, restParameter, body) {
    this.type = "Method";
    super(name, body);
    this.isGenerator = isGenerator;
    this.parameters = parameters;
    this.restParameter = restParameter;
  }
}


// object expressions

export class ObjectExpression {
  constructor(properties) {
    this.type = "ObjectExpression";
    this.properties = properties;
  }
}

export class Getter extends AccessorProperty {
  constructor(name, body) {
    this.type = "Getter";
    super(name, body);
  }
}

export class Setter extends AccessorProperty {
  constructor(name, parameter, body) {
    this.type = "Setter";
    super(name, body);
    this.parameter = parameter;
  }
}

export class DataProperty extends NamedObjectProperty {
  constructor(name, expression) {
    this.type = "DataProperty";
    super(name);
    this.expression = expression;
  }
}

export class ShorthandProperty {
  constructor(name) {
    this.type = "ShorthandProperty";
    this.name = name;
  }
}

export class ComputedPropertyName {
  constructor(value) {
    this.type = "ComputedPropertyName";
    this.value = value;
  }
}

export class StaticPropertyName {
  constructor( value) {
    this.type = "StaticPropertyName";
    this.value = value;
  }
}


// literals

export class LiteralBooleanExpression {
  constructor(value) {
    this.type = "LiteralBooleanExpression";
    this.value = value;
  }
}

export class LiteralInfinityExpression {
  constructor() {
    this.type = "LiteralInfinityExpression";
  }
}

export class LiteralNullExpression {
  constructor() {
    this.type = "LiteralNullExpression";
  }
}

export class LiteralNumericExpression {
  constructor(value) {
    this.type = "LiteralNumericExpression";
    this.value = value;
  }
}

export class LiteralRegExpExpression {
  constructor(value) {
    this.type = "LiteralRegExpExpression";
    this.value = value;
  }
}

export class LiteralStringExpression {
  constructor(value) {
    this.type = "LiteralStringExpression";
    this.value = value;
  }
}


// other expressions

export class ArrayExpression {
  constructor(elements) {
    this.type = "ArrayExpression";
    this.elements = elements;
  }
}

export class AssignmentExpression {
  constructor(operator, binding, expression) {
    this.type = "AssignmentExpression";
    this.operator = operator;
    this.binding = binding;
    this.expression = expression;
  }
}

export class BinaryExpression {
  constructor(operator, left, right) {
    this.type = "BinaryExpression";
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

export class CallExpression {
  constructor(callee, args) {
    this.type = "CallExpression";
    this.callee = callee;
    this.arguments = args;
  }
}

export class ComputedMemberExpression extends MemberExpression {
  constructor(object, expression) {
    this.type = "ComputedMemberExpression";
    super(object);
    this.expression = expression;
  }
}

export class ConditionalExpression {
  constructor(test, consequent, alternate) {
    this.type = "ConditionalExpression";
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class IdentifierExpression {
  constructor(identifier) {
    this.type = "IdentifierExpression";
    this.identifier = identifier;
  }
}

export class NewExpression {
  constructor(callee, args) {
    this.type = "NewExpression";
    this.callee = callee;
    this.arguments = args;
  }
}

export class PostfixExpression extends UnaryExpression {
  constructor(operand, operator) {
    this.type = "PostfixExpression";
    super(operand);
    this.operator = operator;
  }
}

export class PrefixExpression extends UnaryExpression {
  constructor(operator, operand) {
    this.type = "PrefixExpression";
    super(operand);
    this.operator = operator;
  }
}

export class StaticMemberExpression extends MemberExpression {
  constructor(object, property) {
    this.type = "StaticMemberExpression";
    super(object);
    this.property = property;
  }
}

export class TemplateString {
  constructor(elements) {
    this.type = "TemplateString";
    this.elements = elements;
  }
}

export class ThisExpression {
  constructor() {
    this.type = "ThisExpression";
  }
}

export class YieldExpression {
  constructor(expression) {
    this.type = "YieldExpression";
    this.expression = expression;
  }
}

export class YieldGeneratorExpression {
  constructor(expression) {
    this.type = "YieldGeneratorExpression";
    this.expression = expression;
  }
}


// other statements

export class BlockStatement {
  constructor(block) {
    this.type = "BlockStatement";
    this.block = block;
  }
}

export class BreakStatement {
  constructor(label) {
    this.type = "BreakStatement";
    this.label = label;
  }
}

export class ContinueStatement {
  constructor(label) {
    this.type = "ContinueStatement";
    this.label = label;
  }
}

export class DebuggerStatement {
  constructor() {
    this.type = "DebuggerStatement";
  }
}

export class DoWhileStatement extends IterationStatement {
  constructor(body, test) {
    this.type = "DoWhileStatement";
    super(body);
    this.test = test;
  }
}

export class EmptyStatement {
  constructor() {
    this.type = "EmptyStatement";
  }
}

export class ExpressionStatement {
  constructor(expression) {
    this.type = "ExpressionStatement";
    this.expression = expression;
  }
}

export class ForInStatement extends IterationStatement {
  constructor(left, right, body) {
    this.type = "ForInStatement";
    super(body);
    this.left = left;
    this.right = right;
  }
}

export class ForOfStatement {
  constructor(left, right, body) {
    this.type = "ForOfStatement";
    this.left = left;
    this.right = right;
    this.body = body;
  }
}

export class ForStatement extends IterationStatement {
  constructor(init, test, update, body) {
    this.type = "ForStatement";
    super(body);
    this.init = init;
    this.test = test;
    this.update = update;
  }
}

export class IfStatement {
  constructor(test, consequent, alternate) {
    this.type = "IfStatement";
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class LabeledStatement {
  constructor(label, body) {
    this.type = "LabeledStatement";
    this.label = label;
    this.body = body;
  }
}

export class ReturnStatement {
  constructor(expression) {
    this.type = "ReturnStatement";
    this.expression = expression;
  }
}

export class SwitchStatement {
  constructor(discriminant, cases) {
    this.type = "SwitchStatement";
    this.discriminant = discriminant;
    this.cases = cases;
  }
}

export class SwitchStatementWithDefault {
  constructor(discriminant, preDefaultCases, defaultCase, postDefaultCases) {
    this.type = "SwitchStatementWithDefault";
    this.discriminant = discriminant;
    this.preDefaultCases = preDefaultCases;
    this.defaultCase = defaultCase;
    this.postDefaultCases = postDefaultCases;
  }
}

export class ThrowStatement {
  constructor(expression) {
    this.type = "ThrowStatement";
    this.expression = expression;
  }
}

export class TryCatchStatement {
  constructor(body, catchClause) {
    this.type = "TryCatchStatement";
    this.body = body;
    this.catchClause = catchClause;
  }
}

export class TryFinallyStatement {
  constructor(body, catchClause, finalizer) {
    this.type = "TryFinallyStatement";
    this.body = body;
    this.catchClause = catchClause;
    this.finalizer = finalizer;
  }
}

export class VariableDeclarationStatement {
  constructor(declaration) {
    this.type = "VariableDeclarationStatement";
    this.declaration = declaration;
  }
}

export class WhileStatement extends IterationStatement {
  constructor(test, body) {
    this.type = "WhileStatement";
    super(body);
    this.test = test;
  }
}

export class WithStatement {
  constructor(object, body) {
    this.type = "WithStatement";
    this.object = object;
    this.body = body;
  }
}


// directives

export class UnknownDirective {
  constructor(value) {
    this.type = "UnknownDirective";
    this.value = value;
  }
}

export class UseStrictDirective {
  constructor() {
    this.type = "UseStrictDirective";
  }
}


// other nodes

export class Block {
  constructor(statements) {
    this.type = "Block";
    this.statements = statements;
  }
}

export class CatchClause {
  constructor(binding, body) {
    this.type = "CatchClause";
    this.binding = binding;
    this.body = body;
  }
}

export class Directive {
  constructor(value) {
    this.type = "Directive";
    this.value = value;
  }
}

export class Identifier {
  constructor(name) {
    this.type = "Identifier";
    this.name = name;
  }
}

export class Script {
  constructor(body) {
    this.type = "Script";
    this.body = body;
  }
}

export class SpreadElement {
  constructor(expression) {
    this.type = "SpreadElement";
    this.expression = expression;
  }
}

export class SwitchCase {
  constructor(test, consequent) {
    this.type = "SwitchCase";
    this.test = test;
    this.consequent = consequent;
  }
}

export class SwitchDefault {
  constructor(consequent) {
    this.type = "SwitchDefault";
    this.consequent = consequent;
  }
}

export class TemplateLiteral {
  constructor(value) {
    this.type = "TemplateLiteral";
    this.value = value;
  }
}

export class VariableDeclaration {
  constructor(kind, declarators) {
    if (declarators.length < 1)
      throw new TypeError("VariableDeclaration declarators list must be non-empty.");
    this.type = "VariableDeclaration";
    this.kind = kind;
    this.declarators = declarators;
  }
}

export class VariableDeclarator {
  constructor(binding, init) {
    this.type = "VariableDeclarator";
    this.binding = binding;
    this.init = init;
  }
}
