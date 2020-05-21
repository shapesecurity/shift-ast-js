// Generated by scripts/generate-dts.js.

/**
 * Copyright 2019 Shape Security, Inc.
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

type Init<Node> = Pick<Node, Exclude<keyof Node, 'type'>>;

export type Node = ArrayAssignmentTarget | ArrayBinding | ArrayExpression | ArrowExpression | AssignmentExpression | AssignmentTargetIdentifier | AssignmentTargetPropertyIdentifier | AssignmentTargetPropertyProperty | AssignmentTargetWithDefault | AwaitExpression | BinaryExpression | BindingIdentifier | BindingPropertyIdentifier | BindingPropertyProperty | BindingWithDefault | Block | BlockStatement | BreakStatement | CallExpression | CatchClause | ClassDeclaration | ClassElement | ClassExpression | CompoundAssignmentExpression | ComputedMemberAssignmentTarget | ComputedMemberExpression | ComputedPropertyName | ConditionalExpression | ContinueStatement | DataProperty | DebuggerStatement | Directive | DoWhileStatement | EmptyStatement | Export | ExportAllFrom | ExportDefault | ExportFrom | ExportFromSpecifier | ExportLocalSpecifier | ExportLocals | ExpressionStatement | ForAwaitStatement | ForInStatement | ForOfStatement | ForStatement | FormalParameters | FunctionBody | FunctionDeclaration | FunctionExpression | Getter | IdentifierExpression | IfStatement | Import | ImportNamespace | ImportSpecifier | LabeledStatement | LiteralBooleanExpression | LiteralInfinityExpression | LiteralNullExpression | LiteralNumericExpression | LiteralRegExpExpression | LiteralStringExpression | Method | Module | NewExpression | NewTargetExpression | ObjectAssignmentTarget | ObjectBinding | ObjectExpression | ReturnStatement | Script | Setter | ShorthandProperty | SpreadElement | SpreadProperty | StaticMemberAssignmentTarget | StaticMemberExpression | StaticPropertyName | Super | SwitchCase | SwitchDefault | SwitchStatement | SwitchStatementWithDefault | TemplateElement | TemplateExpression | ThisExpression | ThrowStatement | TryCatchStatement | TryFinallyStatement | UnaryExpression | UpdateExpression | VariableDeclaration | VariableDeclarationStatement | VariableDeclarator | WhileStatement | WithStatement | YieldExpression | YieldGeneratorExpression;

export type Expression = ArrayExpression | ArrowExpression | AssignmentExpression | AwaitExpression | BinaryExpression | CallExpression | ClassExpression | CompoundAssignmentExpression | ConditionalExpression | FunctionExpression | IdentifierExpression | LiteralBooleanExpression | LiteralInfinityExpression | LiteralNullExpression | LiteralNumericExpression | LiteralRegExpExpression | LiteralStringExpression | ComputedMemberExpression | StaticMemberExpression | NewExpression | NewTargetExpression | ObjectExpression | TemplateExpression | ThisExpression | UnaryExpression | UpdateExpression | YieldExpression | YieldGeneratorExpression;

export type Statement = BlockStatement | BreakStatement | ClassDeclaration | ContinueStatement | DebuggerStatement | EmptyStatement | ExpressionStatement | FunctionDeclaration | IfStatement | DoWhileStatement | ForAwaitStatement | ForInStatement | ForOfStatement | ForStatement | WhileStatement | LabeledStatement | ReturnStatement | SwitchStatement | SwitchStatementWithDefault | ThrowStatement | TryCatchStatement | TryFinallyStatement | VariableDeclarationStatement | WithStatement;


export class ArrayAssignmentTarget {
  type: 'ArrayAssignmentTarget';
  elements: Array<AssignmentTargetWithDefault | ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget | null>;
  rest: ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget | null;
  constructor(init: Init<ArrayAssignmentTarget>);
}

export class ArrayBinding {
  type: 'ArrayBinding';
  elements: Array<BindingWithDefault | BindingIdentifier | ArrayBinding | ObjectBinding | null>;
  rest: BindingIdentifier | ArrayBinding | ObjectBinding | null;
  constructor(init: Init<ArrayBinding>);
}

export class ArrayExpression {
  type: 'ArrayExpression';
  elements: Array<Expression | SpreadElement | null>;
  constructor(init: Init<ArrayExpression>);
}

export class ArrowExpression {
  type: 'ArrowExpression';
  isAsync: boolean;
  params: FormalParameters;
  body: Expression | FunctionBody;
  constructor(init: Init<ArrowExpression>);
}

export class AssignmentExpression {
  type: 'AssignmentExpression';
  binding: ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget;
  expression: Expression;
  constructor(init: Init<AssignmentExpression>);
}

export class AssignmentTargetIdentifier {
  type: 'AssignmentTargetIdentifier';
  name: string;
  constructor(init: Init<AssignmentTargetIdentifier>);
}

export class AssignmentTargetPropertyIdentifier {
  type: 'AssignmentTargetPropertyIdentifier';
  binding: AssignmentTargetIdentifier;
  init: Expression | null;
  constructor(init: Init<AssignmentTargetPropertyIdentifier>);
}

export class AssignmentTargetPropertyProperty {
  type: 'AssignmentTargetPropertyProperty';
  name: ComputedPropertyName | StaticPropertyName;
  binding: AssignmentTargetWithDefault | ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget;
  constructor(init: Init<AssignmentTargetPropertyProperty>);
}

export class AssignmentTargetWithDefault {
  type: 'AssignmentTargetWithDefault';
  binding: ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget;
  init: Expression;
  constructor(init: Init<AssignmentTargetWithDefault>);
}

export class AwaitExpression {
  type: 'AwaitExpression';
  expression: Expression;
  constructor(init: Init<AwaitExpression>);
}

export class BinaryExpression {
  type: 'BinaryExpression';
  left: Expression;
  operator: '==' | '!=' | '===' | '!==' | '<' | '<=' | '>' | '>=' | 'in' | 'instanceof' | '<<' | '>>' | '>>>' | '+' | '-' | '*' | '/' | '%' | '**' | ',' | '||' | '&&' | '|' | '^' | '&';
  right: Expression;
  constructor(init: Init<BinaryExpression>);
}

export class BindingIdentifier {
  type: 'BindingIdentifier';
  name: string;
  constructor(init: Init<BindingIdentifier>);
}

export class BindingPropertyIdentifier {
  type: 'BindingPropertyIdentifier';
  binding: BindingIdentifier;
  init: Expression | null;
  constructor(init: Init<BindingPropertyIdentifier>);
}

export class BindingPropertyProperty {
  type: 'BindingPropertyProperty';
  name: ComputedPropertyName | StaticPropertyName;
  binding: BindingWithDefault | BindingIdentifier | ArrayBinding | ObjectBinding;
  constructor(init: Init<BindingPropertyProperty>);
}

export class BindingWithDefault {
  type: 'BindingWithDefault';
  binding: BindingIdentifier | ArrayBinding | ObjectBinding;
  init: Expression;
  constructor(init: Init<BindingWithDefault>);
}

export class Block {
  type: 'Block';
  statements: Array<Statement>;
  constructor(init: Init<Block>);
}

export class BlockStatement {
  type: 'BlockStatement';
  block: Block;
  constructor(init: Init<BlockStatement>);
}

export class BreakStatement {
  type: 'BreakStatement';
  label: string | null;
  constructor(init: Init<BreakStatement>);
}

export class CallExpression {
  type: 'CallExpression';
  callee: Expression | Super;
  arguments: Array<Expression | SpreadElement>;
  constructor(init: Init<CallExpression>);
}

export class CatchClause {
  type: 'CatchClause';
  binding: BindingIdentifier | ArrayBinding | ObjectBinding;
  body: Block;
  constructor(init: Init<CatchClause>);
}

export class ClassDeclaration {
  type: 'ClassDeclaration';
  name: BindingIdentifier;
  super: Expression | null;
  elements: Array<ClassElement>;
  constructor(init: Init<ClassDeclaration>);
}

export class ClassElement {
  type: 'ClassElement';
  isStatic: boolean;
  method: Getter | Method | Setter;
  constructor(init: Init<ClassElement>);
}

export class ClassExpression {
  type: 'ClassExpression';
  name: BindingIdentifier | null;
  super: Expression | null;
  elements: Array<ClassElement>;
  constructor(init: Init<ClassExpression>);
}

export class CompoundAssignmentExpression {
  type: 'CompoundAssignmentExpression';
  binding: AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget;
  operator: '+=' | '-=' | '*=' | '/=' | '%=' | '**=' | '<<=' | '>>=' | '>>>=' | '|=' | '^=' | '&=';
  expression: Expression;
  constructor(init: Init<CompoundAssignmentExpression>);
}

export class ComputedMemberAssignmentTarget {
  type: 'ComputedMemberAssignmentTarget';
  object: Expression | Super;
  expression: Expression;
  constructor(init: Init<ComputedMemberAssignmentTarget>);
}

export class ComputedMemberExpression {
  type: 'ComputedMemberExpression';
  object: Expression | Super;
  expression: Expression;
  constructor(init: Init<ComputedMemberExpression>);
}

export class ComputedPropertyName {
  type: 'ComputedPropertyName';
  expression: Expression;
  constructor(init: Init<ComputedPropertyName>);
}

export class ConditionalExpression {
  type: 'ConditionalExpression';
  test: Expression;
  consequent: Expression;
  alternate: Expression;
  constructor(init: Init<ConditionalExpression>);
}

export class ContinueStatement {
  type: 'ContinueStatement';
  label: string | null;
  constructor(init: Init<ContinueStatement>);
}

export class DataProperty {
  type: 'DataProperty';
  name: ComputedPropertyName | StaticPropertyName;
  expression: Expression;
  constructor(init: Init<DataProperty>);
}

export class DebuggerStatement {
  type: 'DebuggerStatement';
  constructor(init?: Init<DebuggerStatement>);
}

export class Directive {
  type: 'Directive';
  rawValue: string;
  constructor(init: Init<Directive>);
}

export class DoWhileStatement {
  type: 'DoWhileStatement';
  body: Statement;
  test: Expression;
  constructor(init: Init<DoWhileStatement>);
}

export class EmptyStatement {
  type: 'EmptyStatement';
  constructor(init?: Init<EmptyStatement>);
}

export class Export {
  type: 'Export';
  declaration: ClassDeclaration | FunctionDeclaration | VariableDeclaration;
  constructor(init: Init<Export>);
}

export class ExportAllFrom {
  type: 'ExportAllFrom';
  moduleSpecifier: string;
  constructor(init: Init<ExportAllFrom>);
}

export class ExportDefault {
  type: 'ExportDefault';
  body: ClassDeclaration | Expression | FunctionDeclaration;
  constructor(init: Init<ExportDefault>);
}

export class ExportFrom {
  type: 'ExportFrom';
  namedExports: Array<ExportFromSpecifier>;
  moduleSpecifier: string;
  constructor(init: Init<ExportFrom>);
}

export class ExportFromSpecifier {
  type: 'ExportFromSpecifier';
  name: string;
  exportedName: string | null;
  constructor(init: Init<ExportFromSpecifier>);
}

export class ExportLocalSpecifier {
  type: 'ExportLocalSpecifier';
  name: IdentifierExpression;
  exportedName: string | null;
  constructor(init: Init<ExportLocalSpecifier>);
}

export class ExportLocals {
  type: 'ExportLocals';
  namedExports: Array<ExportLocalSpecifier>;
  constructor(init: Init<ExportLocals>);
}

export class ExpressionStatement {
  type: 'ExpressionStatement';
  expression: Expression;
  constructor(init: Init<ExpressionStatement>);
}

export class ForAwaitStatement {
  type: 'ForAwaitStatement';
  left: ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget | VariableDeclaration;
  right: Expression;
  body: Statement;
  constructor(init: Init<ForAwaitStatement>);
}

export class ForInStatement {
  type: 'ForInStatement';
  left: ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget | VariableDeclaration;
  right: Expression;
  body: Statement;
  constructor(init: Init<ForInStatement>);
}

export class ForOfStatement {
  type: 'ForOfStatement';
  left: ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget | VariableDeclaration;
  right: Expression;
  body: Statement;
  constructor(init: Init<ForOfStatement>);
}

export class ForStatement {
  type: 'ForStatement';
  init: Expression | VariableDeclaration | null;
  test: Expression | null;
  update: Expression | null;
  body: Statement;
  constructor(init: Init<ForStatement>);
}

export class FormalParameters {
  type: 'FormalParameters';
  items: Array<BindingWithDefault | BindingIdentifier | ArrayBinding | ObjectBinding>;
  rest: BindingIdentifier | ArrayBinding | ObjectBinding | null;
  constructor(init: Init<FormalParameters>);
}

export class FunctionBody {
  type: 'FunctionBody';
  directives: Array<Directive>;
  statements: Array<Statement>;
  constructor(init: Init<FunctionBody>);
}

export class FunctionDeclaration {
  type: 'FunctionDeclaration';
  isAsync: boolean;
  isGenerator: boolean;
  name: BindingIdentifier;
  params: FormalParameters;
  body: FunctionBody;
  constructor(init: Init<FunctionDeclaration>);
}

export class FunctionExpression {
  type: 'FunctionExpression';
  isAsync: boolean;
  isGenerator: boolean;
  name: BindingIdentifier | null;
  params: FormalParameters;
  body: FunctionBody;
  constructor(init: Init<FunctionExpression>);
}

export class Getter {
  type: 'Getter';
  name: ComputedPropertyName | StaticPropertyName;
  body: FunctionBody;
  constructor(init: Init<Getter>);
}

export class IdentifierExpression {
  type: 'IdentifierExpression';
  name: string;
  constructor(init: Init<IdentifierExpression>);
}

export class IfStatement {
  type: 'IfStatement';
  test: Expression;
  consequent: Statement;
  alternate: Statement | null;
  constructor(init: Init<IfStatement>);
}

export class Import {
  type: 'Import';
  defaultBinding: BindingIdentifier | null;
  namedImports: Array<ImportSpecifier>;
  moduleSpecifier: string;
  constructor(init: Init<Import>);
}

export class ImportNamespace {
  type: 'ImportNamespace';
  defaultBinding: BindingIdentifier | null;
  namespaceBinding: BindingIdentifier;
  moduleSpecifier: string;
  constructor(init: Init<ImportNamespace>);
}

export class ImportSpecifier {
  type: 'ImportSpecifier';
  name: string | null;
  binding: BindingIdentifier;
  constructor(init: Init<ImportSpecifier>);
}

export class LabeledStatement {
  type: 'LabeledStatement';
  label: string;
  body: Statement;
  constructor(init: Init<LabeledStatement>);
}

export class LiteralBooleanExpression {
  type: 'LiteralBooleanExpression';
  value: boolean;
  constructor(init: Init<LiteralBooleanExpression>);
}

export class LiteralInfinityExpression {
  type: 'LiteralInfinityExpression';
  constructor(init?: Init<LiteralInfinityExpression>);
}

export class LiteralNullExpression {
  type: 'LiteralNullExpression';
  constructor(init?: Init<LiteralNullExpression>);
}

export class LiteralNumericExpression {
  type: 'LiteralNumericExpression';
  value: number;
  constructor(init: Init<LiteralNumericExpression>);
}

export class LiteralRegExpExpression {
  type: 'LiteralRegExpExpression';
  pattern: string;
  global: boolean;
  ignoreCase: boolean;
  multiLine: boolean;
  dotAll: boolean;
  unicode: boolean;
  sticky: boolean;
  constructor(init: Init<LiteralRegExpExpression>);
}

export class LiteralStringExpression {
  type: 'LiteralStringExpression';
  value: string;
  constructor(init: Init<LiteralStringExpression>);
}

export class Method {
  type: 'Method';
  isAsync: boolean;
  isGenerator: boolean;
  name: ComputedPropertyName | StaticPropertyName;
  params: FormalParameters;
  body: FunctionBody;
  constructor(init: Init<Method>);
}

export class Module {
  type: 'Module';
  directives: Array<Directive>;
  items: Array<Export | ExportAllFrom | ExportDefault | ExportFrom | ExportLocals | Import | ImportNamespace | Statement>;
  constructor(init: Init<Module>);
}

export class NewExpression {
  type: 'NewExpression';
  callee: Expression;
  arguments: Array<Expression | SpreadElement>;
  constructor(init: Init<NewExpression>);
}

export class NewTargetExpression {
  type: 'NewTargetExpression';
  constructor(init?: Init<NewTargetExpression>);
}

export class ObjectAssignmentTarget {
  type: 'ObjectAssignmentTarget';
  properties: Array<AssignmentTargetPropertyIdentifier | AssignmentTargetPropertyProperty>;
  rest: ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget | null;
  constructor(init: Init<ObjectAssignmentTarget>);
}

export class ObjectBinding {
  type: 'ObjectBinding';
  properties: Array<BindingPropertyIdentifier | BindingPropertyProperty>;
  rest: BindingIdentifier | ArrayBinding | ObjectBinding | null;
  constructor(init: Init<ObjectBinding>);
}

export class ObjectExpression {
  type: 'ObjectExpression';
  properties: Array<DataProperty | Getter | Method | Setter | ShorthandProperty | SpreadProperty>;
  constructor(init: Init<ObjectExpression>);
}

export class ReturnStatement {
  type: 'ReturnStatement';
  expression: Expression | null;
  constructor(init: Init<ReturnStatement>);
}

export class Script {
  type: 'Script';
  directives: Array<Directive>;
  statements: Array<Statement>;
  constructor(init: Init<Script>);
}

export class Setter {
  type: 'Setter';
  name: ComputedPropertyName | StaticPropertyName;
  param: BindingWithDefault | BindingIdentifier | ArrayBinding | ObjectBinding;
  body: FunctionBody;
  constructor(init: Init<Setter>);
}

export class ShorthandProperty {
  type: 'ShorthandProperty';
  name: IdentifierExpression;
  constructor(init: Init<ShorthandProperty>);
}

export class SpreadElement {
  type: 'SpreadElement';
  expression: Expression;
  constructor(init: Init<SpreadElement>);
}

export class SpreadProperty {
  type: 'SpreadProperty';
  expression: Expression;
  constructor(init: Init<SpreadProperty>);
}

export class StaticMemberAssignmentTarget {
  type: 'StaticMemberAssignmentTarget';
  object: Expression | Super;
  property: string;
  constructor(init: Init<StaticMemberAssignmentTarget>);
}

export class StaticMemberExpression {
  type: 'StaticMemberExpression';
  object: Expression | Super;
  property: string;
  constructor(init: Init<StaticMemberExpression>);
}

export class StaticPropertyName {
  type: 'StaticPropertyName';
  value: string;
  constructor(init: Init<StaticPropertyName>);
}

export class Super {
  type: 'Super';
  constructor(init?: Init<Super>);
}

export class SwitchCase {
  type: 'SwitchCase';
  test: Expression;
  consequent: Array<Statement>;
  constructor(init: Init<SwitchCase>);
}

export class SwitchDefault {
  type: 'SwitchDefault';
  consequent: Array<Statement>;
  constructor(init: Init<SwitchDefault>);
}

export class SwitchStatement {
  type: 'SwitchStatement';
  discriminant: Expression;
  cases: Array<SwitchCase>;
  constructor(init: Init<SwitchStatement>);
}

export class SwitchStatementWithDefault {
  type: 'SwitchStatementWithDefault';
  discriminant: Expression;
  preDefaultCases: Array<SwitchCase>;
  defaultCase: SwitchDefault;
  postDefaultCases: Array<SwitchCase>;
  constructor(init: Init<SwitchStatementWithDefault>);
}

export class TemplateElement {
  type: 'TemplateElement';
  rawValue: string;
  constructor(init: Init<TemplateElement>);
}

export class TemplateExpression {
  type: 'TemplateExpression';
  tag: Expression | null;
  elements: Array<Expression | TemplateElement>;
  constructor(init: Init<TemplateExpression>);
}

export class ThisExpression {
  type: 'ThisExpression';
  constructor(init?: Init<ThisExpression>);
}

export class ThrowStatement {
  type: 'ThrowStatement';
  expression: Expression;
  constructor(init: Init<ThrowStatement>);
}

export class TryCatchStatement {
  type: 'TryCatchStatement';
  body: Block;
  catchClause: CatchClause;
  constructor(init: Init<TryCatchStatement>);
}

export class TryFinallyStatement {
  type: 'TryFinallyStatement';
  body: Block;
  catchClause: CatchClause | null;
  finalizer: Block;
  constructor(init: Init<TryFinallyStatement>);
}

export class UnaryExpression {
  type: 'UnaryExpression';
  operator: '+' | '-' | '!' | '~' | 'typeof' | 'void' | 'delete';
  operand: Expression;
  constructor(init: Init<UnaryExpression>);
}

export class UpdateExpression {
  type: 'UpdateExpression';
  isPrefix: boolean;
  operator: '++' | '--';
  operand: AssignmentTargetIdentifier | ComputedMemberAssignmentTarget | StaticMemberAssignmentTarget;
  constructor(init: Init<UpdateExpression>);
}

export class VariableDeclaration {
  type: 'VariableDeclaration';
  kind: 'var' | 'let' | 'const';
  declarators: Array<VariableDeclarator>;
  constructor(init: Init<VariableDeclaration>);
}

export class VariableDeclarationStatement {
  type: 'VariableDeclarationStatement';
  declaration: VariableDeclaration;
  constructor(init: Init<VariableDeclarationStatement>);
}

export class VariableDeclarator {
  type: 'VariableDeclarator';
  binding: BindingIdentifier | ArrayBinding | ObjectBinding;
  init: Expression | null;
  constructor(init: Init<VariableDeclarator>);
}

export class WhileStatement {
  type: 'WhileStatement';
  test: Expression;
  body: Statement;
  constructor(init: Init<WhileStatement>);
}

export class WithStatement {
  type: 'WithStatement';
  object: Expression;
  body: Statement;
  constructor(init: Init<WithStatement>);
}

export class YieldExpression {
  type: 'YieldExpression';
  expression: Expression | null;
  constructor(init: Init<YieldExpression>);
}

export class YieldGeneratorExpression {
  type: 'YieldGeneratorExpression';
  expression: Expression;
  constructor(init: Init<YieldGeneratorExpression>);
}
