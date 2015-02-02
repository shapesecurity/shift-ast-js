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

export class Node { }
// TODO: Node.prototype.loc

export class Statement extends Node { }
export class IterationStatement extends Statement { }

export class Expression extends Node { }
export class PrimaryExpression extends Expression { }
export class LiteralExpression extends PrimaryExpression { }

export class UnaryExpression extends Expression {
  constructor(operand) {
    this.operand = operand;
  }
}

export class MemberExpression extends Expression {
  constructor(object) {
    this.object = object;
  }
}

export class ObjectProperty extends Node { }

export class NamedObjectProperty extends ObjectProperty {
  constructor(name) {
    this.name = name;
  }
}

export class MethodDefinition extends NamedObjectProperty {
  constructor(name, body) {
    super(name);
    this.body = body;
  }
}

export class AccessorProperty extends MethodDefinition { }

export class PropertyName extends Node { }

export class ImportDeclaration extends Node {
  constructor(moduleSpecifier) {
    this.moduleSpecifier = moduleSpecifier;
  }
}

export class ExportDeclaration extends Node { }

export class Binding extends Node { }

export class BindingProperty extends Node { }


// bindings

export class BindingWithDefault extends Node {
  constructor(binding, init) {
    this.type = "BindingWithDefault";
    this.binding = binding;
    this.init = init;
  }
}

export class BindingIdentifier extends Binding {
  constructor(identifier) {
    this.type = "BindingIdentifier";
    this.identifier = identifier;
  }
}

export class ArrayBinding extends Binding {
  constructor(elements, restElement) {
    this.type = "ArrayBinding";
    this.elements = elements;
    this.restElement = restElement;
  }
}

export class ObjectBinding extends Binding {
  constructor(properties) {
    this.type = "ObjectBinding";
    this.properties = properties;
  }
}

export class BindingPropertyIdentifier extends BindingProperty {
  constructor(identifier, init) {
    this.type = "BindingPropertyIdentifier";
    this.identifier = identifier;
    this.init = init;
  }
}

export class BindingPropertyProperty extends BindingProperty {
  constructor(name, binding) {
    this.type = "BindingPropertyProperty";
    this.name = name;
    this.binding = binding;
  }
}


// classes

export class ClassExpression extends Expression {
  constructor(name, super_, elements) {
    this.type = "ClassExpression";
    this.name = name;
    this.super = super_;
    this.elements = elements;
  }
}

export class ClassStatement extends Statement {
  constructor(name, super_, elements) {
    this.type = "ClassStatement";
    this.name = name;
    this.super = super_;
    this.elements = elements;
  }
}

export class ClassElement extends Node {
  constructor(isStatic, method) {
    this.type = "ClassElement";
    this.isStatic = isStatic;
    this.method = method;
  }
}


// modules

export class Module extends Node {
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

export class NamedImports extends Node {
  constructor(importSpecifiers) {
    this.type = "NamedImports";
    this.importSpecifiers = importSpecifiers;
  }
}

export class ImportSpecifier extends Node {
  constructor(identifier, bindingIdentifier) {
    this.type = "ImportSpecifier";
    this.identifier = identifier;
    this.bindingIdentifier = bindingIdentifier;
  }
}

export class ExportFrom extends ExportDeclaration {
  constructor(exportSpecifiers, moduleSpecifier) {
    this.type = "ExportFrom";
    this.exportSpecifiers = exportSpecifiers;
    this.moduleSpecifier = moduleSpecifier;
  }
}

export class Export extends ExportDeclaration {
  constructor(target) {
    this.type = "Export";
    this.target = target;
  }
}

export class ExportDefault extends ExportDeclaration {
  constructor(target) {
    this.type = "ExportDefault";
    this.target = target;
  }
}

export class ExportSpecifier extends Node {
  constructor(identifier, as) {
    this.type = "ExportSpecifier";
    this.identifier = identifier;
    this.as = as;
  }
}


// functions

export class FunctionBody extends Node {
  constructor(directives, statements) {
    this.type = "FunctionBody";
    this.directives = directives;
    this.statements = statements;
  }
}

export class ArrowExpression extends Expression {
  constructor(parameters, restParameter, body) {
    this.type = "ArrowExpression";
    this.parameters = parameters;
    this.restParameter = restParameter;
    this.body = body;
  }
}

export class FunctionDeclaration extends Statement {
  constructor(isGenerator, name, parameters, restParameter, body) {
    this.type = "FunctionDeclaration";
    this.isGenerator = isGenerator;
    this.name = name;
    this.parameters = parameters;
    this.restParameter = restParameter;
    this.body = body;
  }
}

export class FunctionExpression extends PrimaryExpression {
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

export class ObjectExpression extends PrimaryExpression {
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

export class ShorthandProperty extends ObjectProperty {
  constructor(name) {
    this.type = "ShorthandProperty";
    this.name = name;
  }
}

export class ComputedPropertyName extends PropertyName {
  constructor(value) {
    this.type = "ComputedPropertyName";
    this.value = value;
  }
}

export class StaticPropertyName extends PropertyName {
  constructor( value) {
    this.type = "StaticPropertyName";
    this.value = value;
  }
}


// literals

export class LiteralBooleanExpression extends LiteralExpression {
  constructor(value) {
    this.type = "LiteralBooleanExpression";
    this.value = value;
  }
}

export class LiteralInfinityExpression extends LiteralExpression {
  constructor() {
    this.type = "LiteralInfinityExpression";
  }
}

export class LiteralNullExpression extends LiteralExpression {
  constructor() {
    this.type = "LiteralNullExpression";
  }
}

export class LiteralNumericExpression extends LiteralExpression {
  constructor(value) {
    this.type = "LiteralNumericExpression";
    this.value = value;
  }
}

export class LiteralRegExpExpression extends LiteralExpression {
  constructor(value) {
    this.type = "LiteralRegExpExpression";
    this.value = value;
  }
}

export class LiteralStringExpression extends LiteralExpression {
  constructor(value) {
    this.type = "LiteralStringExpression";
    this.value = value;
  }
}


// other expressions

export class ArrayExpression extends PrimaryExpression {
  constructor(elements) {
    this.type = "ArrayExpression";
    this.elements = elements;
  }
}

export class AssignmentExpression extends Expression {
  constructor(operator, binding, expression) {
    this.type = "AssignmentExpression";
    this.operator = operator;
    this.binding = binding;
    this.expression = expression;
  }
}

export class BinaryExpression extends Expression {
  constructor(operator, left, right) {
    this.type = "BinaryExpression";
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

export class CallExpression extends Expression {
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

export class ConditionalExpression extends Expression {
  constructor(test, consequent, alternate) {
    this.type = "ConditionalExpression";
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class IdentifierExpression extends PrimaryExpression {
  constructor(identifier) {
    this.type = "IdentifierExpression";
    this.identifier = identifier;
  }
}

export class NewExpression extends Expression {
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

export class TemplateString extends PrimaryExpression {
  constructor(elements) {
    this.type = "TemplateString";
    this.elements = elements;
  }
}

export class ThisExpression extends PrimaryExpression {
  constructor() {
    this.type = "ThisExpression";
  }
}

export class YieldExpression extends Expression {
  constructor(expression) {
    this.type = "YieldExpression";
    this.expression = expression;
  }
}

export class YieldGeneratorExpression extends Expression {
  constructor(expression) {
    this.type = "YieldGeneratorExpression";
    this.expression = expression;
  }
}


// other statements

export class BlockStatement extends Statement {
  constructor(block) {
    this.type = "BlockStatement";
    this.block = block;
  }
}

export class BreakStatement extends Statement {
  constructor(label) {
    this.type = "BreakStatement";
    this.label = label;
  }
}

export class ContinueStatement extends Statement {
  constructor(label) {
    this.type = "ContinueStatement";
    this.label = label;
  }
}

export class DebuggerStatement extends Statement {
  constructor() {
    this.type = "DebuggerStatement";
  }
}

export class DoWhileStatement extends IterationStatement {
  constructor(body, test) {
    this.type = "DoWhileStatement";
    this.body = body;
    this.test = test;
  }
}

export class EmptyStatement extends Statement {
  constructor() {
    this.type = "EmptyStatement";
  }
}

export class ExpressionStatement extends Statement {
  constructor(expression) {
    this.type = "ExpressionStatement";
    this.expression = expression;
  }
}

export class ForInStatement extends IterationStatement {
  constructor(left, right, body) {
    this.type = "ForInStatement";
    this.left = left;
    this.right = right;
    this.body = body;
  }
}

export class ForOfStatement extends IterationStatement {
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
    this.init = init;
    this.test = test;
    this.update = update;
    this.body = body;
  }
}

export class IfStatement extends Statement {
  constructor(test, consequent, alternate) {
    this.type = "IfStatement";
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class LabeledStatement extends Statement {
  constructor(label, body) {
    this.type = "LabeledStatement";
    this.label = label;
    this.body = body;
  }
}

export class ReturnStatement extends Statement {
  constructor(expression) {
    this.type = "ReturnStatement";
    this.expression = expression;
  }
}

export class SwitchStatement extends Statement {
  constructor(discriminant, cases) {
    this.type = "SwitchStatement";
    this.discriminant = discriminant;
    this.cases = cases;
  }
}

export class SwitchStatementWithDefault extends Statement {
  constructor(discriminant, preDefaultCases, defaultCase, postDefaultCases) {
    this.type = "SwitchStatementWithDefault";
    this.discriminant = discriminant;
    this.preDefaultCases = preDefaultCases;
    this.defaultCase = defaultCase;
    this.postDefaultCases = postDefaultCases;
  }
}

export class ThrowStatement extends Statement {
  constructor(expression) {
    this.type = "ThrowStatement";
    this.expression = expression;
  }
}

export class TryCatchStatement extends Statement {
  constructor(body, catchClause) {
    this.type = "TryCatchStatement";
    this.body = body;
    this.catchClause = catchClause;
  }
}

export class TryFinallyStatement extends Statement {
  constructor(body, catchClause, finalizer) {
    this.type = "TryFinallyStatement";
    this.body = body;
    this.catchClause = catchClause;
    this.finalizer = finalizer;
  }
}

export class VariableDeclarationStatement extends Statement {
  constructor(declaration) {
    this.type = "VariableDeclarationStatement";
    this.declaration = declaration;
  }
}

export class WhileStatement extends IterationStatement {
  constructor(test, body) {
    this.type = "WhileStatement";
    this.test = test;
    this.body = body;
  }
}

export class WithStatement extends Statement {
  constructor(object, body) {
    this.type = "WithStatement";
    this.object = object;
    this.body = body;
  }
}


// other nodes

export class Block extends Node {
  constructor(statements) {
    this.type = "Block";
    this.statements = statements;
  }
}

export class CatchClause extends Node {
  constructor(binding, body) {
    this.type = "CatchClause";
    this.binding = binding;
    this.body = body;
  }
}

export class Directive extends Node {
  constructor(value) {
    this.type = "Directive";
    this.value = value;
  }
}

export class Identifier extends Node {
  constructor(name) {
    this.type = "Identifier";
    this.name = name;
  }
}

export class Script extends Node {
  constructor(body) {
    this.type = "Script";
    this.body = body;
  }
}

export class SpreadElement extends Node {
  constructor(expression) {
    this.type = "SpreadElement";
    this.expression = expression;
  }
}

export class SwitchCase extends Node {
  constructor(test, consequent) {
    this.type = "SwitchCase";
    this.test = test;
    this.consequent = consequent;
  }
}

export class SwitchDefault extends Node {
  constructor(consequent) {
    this.type = "SwitchDefault";
    this.consequent = consequent;
  }
}

export class TemplateLiteral extends Node {
  constructor(value) {
    this.type = "TemplateLiteral";
    this.value = value;
  }
}

export class VariableDeclaration extends Node {
  constructor(kind, declarators) {
    if (declarators.length < 1)
      throw new TypeError("VariableDeclaration declarators list must be non-empty.");
    this.type = "VariableDeclaration";
    this.kind = kind;
    this.declarators = declarators;
  }
}

export class VariableDeclarator extends Node {
  constructor(binding, init) {
    this.type = "VariableDeclarator";
    this.binding = binding;
    this.init = init;
  }
}
