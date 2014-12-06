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

export class Node {
  get type() {
    return this.constructor.name;
  }
}
// TODO: Node.prototype.loc

export class Directive extends Node { }
export class Statement extends Node { }
export class IterationStatement extends Node { }
export class Expression extends Node { }
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
export class PrimaryExpression extends Expression { }
export class LiteralExpression extends PrimaryExpression { }


// functions

export class FunctionBody extends Node {
  constructor(directives, statements) {
    this.directives = directives;
    this.statements = statements;
  }
}

export class FunctionDeclaration extends Statement {
  constructor(name, parameters, body) {
    this.name = name;
    this.parameters = parameters;
    this.body = body;
  }
}

export class FunctionExpression extends PrimaryExpression {
  constructor(name, parameters, body) {
    this.name = name;
    this.parameters = parameters;
    this.body = body;
  }
}


// object expressions

export class ObjectExpression extends PrimaryExpression {
  constructor(properties) {
    this.properties = properties;
  }
}

export class Getter extends Node {
  constructor(name, body) {
    this.name = name;
    this.body = body;
  }
}

export class Setter extends Node {
  constructor(name, parameter, body) {
    this.name = name;
    this.parameter = parameter;
    this.body = body;
  }
}

export class DataProperty extends Node {
  constructor(name, expression) {
    this.name = name;
    this.expression = expression;
  }
}

export class PropertyName extends Node {
  constructor(kind, value) {
    this.kind = kind;
    this.value = value;
  }
}


// literals

export class LiteralBooleanExpression extends LiteralExpression {
  constructor(value) {
    this.value = value;
  }
}

export class LiteralNullExpression extends LiteralExpression { }

export class LiteralNumericExpression extends LiteralExpression {
  constructor(value) {
    this.value = value;
  }
}

export class LiteralRegExpExpression extends LiteralExpression {
  constructor(value) {
    this.value = value;
  }
}

export class LiteralStringExpression extends LiteralExpression {
  constructor(value) {
    this.value = value;
  }
}


// other expressions

export class ArrayExpression extends PrimaryExpression {
  constructor(elements) {
    this.elements = elements;
  }
}

export class AssignmentExpression extends Expression {
  constructor(operator, binding, expression) {
    this.operator = operator;
    this.binding = binding;
    this.expression = expression;
  }
}

export class BinaryExpression extends Expression {
  constructor(operator, left, right) {
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

export class CallExpression extends Expression {
  constructor(callee, args) {
    this.callee = callee;
    this.arguments = args;
  }
}

export class ComputedMemberExpression extends MemberExpression {
  constructor(object, expression) {
    super(object);
    this.expression = expression;
  }
}

export class ConditionalExpression extends Expression {
  constructor(test, consequent, alternate) {
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class IdentifierExpression extends PrimaryExpression {
  constructor(identifier) {
    this.identifier = identifier;
  }
}

export class NewExpression extends Expression {
  constructor(callee, args) {
    this.callee = callee;
    this.arguments = args;
  }
}

export class PostfixExpression extends UnaryExpression {
  constructor(operand, operator) {
    super(operand);
    this.operator = operator;
  }
}

export class PrefixExpression extends UnaryExpression {
  constructor(operator, operand) {
    super(operand);
    this.operator = operator;
  }
}

export class StaticMemberExpression extends MemberExpression {
  constructor(object, property) {
    super(object);
    this.property = property;
  }
}

export class ThisExpression extends PrimaryExpression { }


// other statements

export class BlockStatement extends Statement {
  constructor(block) {
    this.block = block;
  }
}

export class BreakStatement extends Statement {
  constructor(label) {
    this.label = label;
  }
}

export class ContinueStatement extends Statement {
  constructor(label) {
    this.label = label;
  }
}

export class DebuggerStatement extends Statement { }

export class DoWhileStatement extends IterationStatement {
  constructor(body, test) {
    this.body = body;
    this.test = test;
  }
}

export class EmptyStatement extends Statement { }

export class ExpressionStatement extends Statement {
  constructor(expression) {
    this.expression = expression;
  }
}

export class ForInStatement extends IterationStatement {
  constructor(left, right, body) {
    this.left = left;
    this.right = right;
    this.body = body;
  }
}

export class ForStatement extends IterationStatement {
  constructor(init, test, update, body) {
    this.init = init;
    this.test = test;
    this.update = update;
    this.body = body;
  }
}

export class IfStatement extends Statement {
  constructor(test, consequent, alternate) {
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class LabeledStatement extends Statement {
  constructor(label, body) {
    this.label = label;
    this.body = body;
  }
}

export class ReturnStatement extends Statement {
  constructor(expression) {
    this.expression = expression;
  }
}

export class SwitchStatement extends Statement {
  constructor(discriminant, cases) {
    this.discriminant = discriminant;
    this.cases = cases;
  }
}

export class SwitchStatementWithDefault extends Statement {
  constructor(discriminant, preDefaultCases, defaultCase, postDefaultCases) {
    this.discriminant = discriminant;
    this.preDefaultCases = preDefaultCases;
    this.defaultCase = defaultCase;
    this.postDefaultCases = postDefaultCases;
  }
}

export class ThrowStatement extends Statement {
  constructor(expression) {
    this.expression = expression;
  }
}

export class TryCatchStatement extends Statement {
  constructor(body, catchclause) {
    this.body = body;
    this.catchclause = catchclause;
  }
}

export class TryFinallyStatement extends Statement {
  constructor(body, catchclause, finalizer) {
    this.body = body;
    this.catchclause = catchclause;
    this.finalizer = finalizer;
  }
}

export class VariableDeclarationStatement extends Statement {
  constructor(declaration) {
    this.declaration = declaration;
  }
}

export class WhileStatement extends IterationStatement {
  constructor(test, body) {
    this.test = test;
    this.body = body;
  }
}

export class WithStatement extends Statement {
  constructor(object, body) {
    this.object = object;
    this.body = body;
  }
}


// directives

export class UnknownDirective extends Directive {
  constructor(value) {
    this.value = value;
  }
}

export class UseStrictDirective extends Directive { }


// other nodes

export class Block extends Node {
  constructor(statements) {
    this.statements = statements;
  }
}

export class CatchClause extends Node {
  constructor(binding, body) {
    this.binding = binding;
    this.body = body;
  }
}

export class Identifier extends Node {
  constructor(name) {
    this.name = name;
  }
}

export class Script extends Node {
  constructor(body) {
    this.body = body;
  }
}

export class SwitchCase extends Node {
  constructor(test, consequent) {
    this.test = test;
    this.consequent = consequent;
  }
}

export class SwitchDefault extends Node {
  constructor(consequent) {
    this.consequent = consequent;
  }
}

export class VariableDeclaration extends Node {
  constructor(kind, declarators) {
    if (declarators.length < 1)
      throw new TypeError("VariableDeclaration declarators list must be non-empty.");
    this.kind = kind;
    this.declarators = declarators;
  }
}

export class VariableDeclarator extends Node {
  constructor(binding, init) {
    this.binding = binding;
    this.init = init;
  }
}
