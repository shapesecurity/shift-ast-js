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
var Directive = (function (Node) {
  var Directive = function Directive() {
    Node.apply(this, arguments);
  };

  _extends(Directive, Node);

  return Directive;
})(Node);

exports.Directive = Directive;
var Statement = (function (Node) {
  var Statement = function Statement() {
    Node.apply(this, arguments);
  };

  _extends(Statement, Node);

  return Statement;
})(Node);

exports.Statement = Statement;
var IterationStatement = (function (Node) {
  var IterationStatement = function IterationStatement() {
    Node.apply(this, arguments);
  };

  _extends(IterationStatement, Node);

  return IterationStatement;
})(Node);

exports.IterationStatement = IterationStatement;
var Expression = (function (Node) {
  var Expression = function Expression() {
    Node.apply(this, arguments);
  };

  _extends(Expression, Node);

  return Expression;
})(Node);

exports.Expression = Expression;
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
var FunctionDeclaration = (function (Statement) {
  var FunctionDeclaration = function FunctionDeclaration(name, parameters, body) {
    this.type = "FunctionDeclaration";
    this.name = name;
    this.parameters = parameters;
    this.body = body;
  };

  _extends(FunctionDeclaration, Statement);

  return FunctionDeclaration;
})(Statement);

exports.FunctionDeclaration = FunctionDeclaration;
var FunctionExpression = (function (PrimaryExpression) {
  var FunctionExpression = function FunctionExpression(name, parameters, body) {
    this.type = "FunctionExpression";
    this.name = name;
    this.parameters = parameters;
    this.body = body;
  };

  _extends(FunctionExpression, PrimaryExpression);

  return FunctionExpression;
})(PrimaryExpression);

exports.FunctionExpression = FunctionExpression;
var ObjectExpression = (function (PrimaryExpression) {
  var ObjectExpression = function ObjectExpression(properties) {
    this.type = "ObjectExpression";
    this.properties = properties;
  };

  _extends(ObjectExpression, PrimaryExpression);

  return ObjectExpression;
})(PrimaryExpression);

exports.ObjectExpression = ObjectExpression;
var Getter = (function (Node) {
  var Getter = function Getter(name, body) {
    this.type = "Getter";
    this.name = name;
    this.body = body;
  };

  _extends(Getter, Node);

  return Getter;
})(Node);

exports.Getter = Getter;
var Setter = (function (Node) {
  var Setter = function Setter(name, parameter, body) {
    this.type = "Setter";
    this.name = name;
    this.parameter = parameter;
    this.body = body;
  };

  _extends(Setter, Node);

  return Setter;
})(Node);

exports.Setter = Setter;
var DataProperty = (function (Node) {
  var DataProperty = function DataProperty(name, expression) {
    this.type = "DataProperty";
    this.name = name;
    this.expression = expression;
  };

  _extends(DataProperty, Node);

  return DataProperty;
})(Node);

exports.DataProperty = DataProperty;
var PropertyName = (function (Node) {
  var PropertyName = function PropertyName(kind, value) {
    this.type = "PropertyName";
    this.kind = kind;
    this.value = value;
  };

  _extends(PropertyName, Node);

  return PropertyName;
})(Node);

exports.PropertyName = PropertyName;
var LiteralBooleanExpression = (function (LiteralExpression) {
  var LiteralBooleanExpression = function LiteralBooleanExpression(value) {
    this.type = "LiteralBooleanExpression";
    this.value = value;
  };

  _extends(LiteralBooleanExpression, LiteralExpression);

  return LiteralBooleanExpression;
})(LiteralExpression);

exports.LiteralBooleanExpression = LiteralBooleanExpression;
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
    MemberExpression.call(this, object);
    this.type = "ComputedMemberExpression";
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
    UnaryExpression.call(this, operand);
    this.type = "PostfixExpression";
    this.operator = operator;
  };

  _extends(PostfixExpression, UnaryExpression);

  return PostfixExpression;
})(UnaryExpression);

exports.PostfixExpression = PostfixExpression;
var PrefixExpression = (function (UnaryExpression) {
  var PrefixExpression = function PrefixExpression(operator, operand) {
    UnaryExpression.call(this, operand);
    this.type = "PrefixExpression";
    this.operator = operator;
  };

  _extends(PrefixExpression, UnaryExpression);

  return PrefixExpression;
})(UnaryExpression);

exports.PrefixExpression = PrefixExpression;
var StaticMemberExpression = (function (MemberExpression) {
  var StaticMemberExpression = function StaticMemberExpression(object, property) {
    MemberExpression.call(this, object);
    this.type = "StaticMemberExpression";
    this.property = property;
  };

  _extends(StaticMemberExpression, MemberExpression);

  return StaticMemberExpression;
})(MemberExpression);

exports.StaticMemberExpression = StaticMemberExpression;
var ThisExpression = (function (PrimaryExpression) {
  var ThisExpression = function ThisExpression() {
    this.type = "ThisExpression";
  };

  _extends(ThisExpression, PrimaryExpression);

  return ThisExpression;
})(PrimaryExpression);

exports.ThisExpression = ThisExpression;
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
var UnknownDirective = (function (Directive) {
  var UnknownDirective = function UnknownDirective(value) {
    this.type = "UnknownDirective";
    this.value = value;
  };

  _extends(UnknownDirective, Directive);

  return UnknownDirective;
})(Directive);

exports.UnknownDirective = UnknownDirective;
var UseStrictDirective = (function (Directive) {
  var UseStrictDirective = function UseStrictDirective() {
    this.type = "UseStrictDirective";
  };

  _extends(UseStrictDirective, Directive);

  return UseStrictDirective;
})(Directive);

exports.UseStrictDirective = UseStrictDirective;
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
//# sourceMappingURL=data:application/json;base64,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YSxHQUFiLGFBQWE7SUFPYixtQkFBbUIsY0FBUyxJQUFJO01BQWhDLG1CQUFtQixHQUNuQixTQURBLG1CQUFtQixDQUNsQixJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQzdCLFFBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3hCLE1BQU0sSUFBSSxTQUFTLENBQUMseURBQXlELENBQUMsQ0FBQztBQUNqRixRQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0FBQ2xDLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0dBQ2hDOztXQVBVLG1CQUFtQixFQUFTLElBQUk7O1NBQWhDLG1CQUFtQjtHQUFTLElBQUk7O1FBQWhDLG1CQUFtQixHQUFuQixtQkFBbUI7SUFVbkIsa0JBQWtCLGNBQVMsSUFBSTtNQUEvQixrQkFBa0IsR0FDbEIsU0FEQSxrQkFBa0IsQ0FDakIsT0FBTyxFQUFFLElBQUksRUFBRTtBQUN6QixRQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDO0FBQ2pDLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0dBQ2xCOztXQUxVLGtCQUFrQixFQUFTLElBQUk7O1NBQS9CLGtCQUFrQjtHQUFTLElBQUk7O1FBQS9CLGtCQUFrQixHQUFsQixrQkFBa0IiLCJmaWxlIjoic3JjL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNCBTaGFwZSBTZWN1cml0eSwgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cblxuLy8gbm9kZSBjbGFzc2VzXG5cbmV4cG9ydCBjbGFzcyBOb2RlIHsgfVxuLy8gVE9ETzogTm9kZS5wcm90b3R5cGUubG9jXG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUgZXh0ZW5kcyBOb2RlIHsgfVxuZXhwb3J0IGNsYXNzIFN0YXRlbWVudCBleHRlbmRzIE5vZGUgeyB9XG5leHBvcnQgY2xhc3MgSXRlcmF0aW9uU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7IH1cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7IH1cbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iob3BlcmFuZCkge1xuICAgIHRoaXMub3BlcmFuZCA9IG9wZXJhbmQ7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBNZW1iZXJFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICB9XG59XG5leHBvcnQgY2xhc3MgUHJpbWFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHsgfVxuZXhwb3J0IGNsYXNzIExpdGVyYWxFeHByZXNzaW9uIGV4dGVuZHMgUHJpbWFyeUV4cHJlc3Npb24geyB9XG5cblxuLy8gZnVuY3Rpb25zXG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkJvZHkgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGlyZWN0aXZlcywgc3RhdGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiRnVuY3Rpb25Cb2R5XCI7XG4gICAgdGhpcy5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkRlY2xhcmF0aW9uIGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSwgcGFyYW1ldGVycywgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRnVuY3Rpb25EZWNsYXJhdGlvblwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkV4cHJlc3Npb24gZXh0ZW5kcyBQcmltYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtZXRlcnMsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cblxuLy8gb2JqZWN0IGV4cHJlc3Npb25zXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uIGV4dGVuZHMgUHJpbWFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy50eXBlID0gXCJPYmplY3RFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0dGVyIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkdldHRlclwiO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0dGVyIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtZXRlciwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiU2V0dGVyXCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcmFtZXRlciA9IHBhcmFtZXRlcjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhUHJvcGVydHkgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiRGF0YVByb3BlcnR5XCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eU5hbWUgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3Ioa2luZCwgdmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlByb3BlcnR5TmFtZVwiO1xuICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblxuLy8gbGl0ZXJhbHNcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxCb29sZWFuRXhwcmVzc2lvbiBleHRlbmRzIExpdGVyYWxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxCb29sZWFuRXhwcmVzc2lvblwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE51bGxFeHByZXNzaW9uIGV4dGVuZHMgTGl0ZXJhbEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkxpdGVyYWxOdWxsRXhwcmVzc2lvblwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTnVtZXJpY0V4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gXCJMaXRlcmFsTnVtZXJpY0V4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxSZWdFeHBFeHByZXNzaW9uIGV4dGVuZHMgTGl0ZXJhbEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbFJlZ0V4cEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxTdHJpbmdFeHByZXNzaW9uIGV4dGVuZHMgTGl0ZXJhbEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGl0ZXJhbFN0cmluZ0V4cHJlc3Npb25cIjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuXG4vLyBvdGhlciBleHByZXNzaW9uc1xuXG5leHBvcnQgY2xhc3MgQXJyYXlFeHByZXNzaW9uIGV4dGVuZHMgUHJpbWFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMudHlwZSA9IFwiQXJyYXlFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25tZW50RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgYmluZGluZywgZXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IFwiQXNzaWdubWVudEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMudHlwZSA9IFwiQmluYXJ5RXhwcmVzc2lvblwiO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoY2FsbGVlLCBhcmdzKSB7XG4gICAgdGhpcy50eXBlID0gXCJDYWxsRXhwcmVzc2lvblwiO1xuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZWRNZW1iZXJFeHByZXNzaW9uIGV4dGVuZHMgTWVtYmVyRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgZXhwcmVzc2lvbikge1xuICAgIHN1cGVyKG9iamVjdCk7XG4gICAgdGhpcy50eXBlID0gXCJDb21wdXRlZE1lbWJlckV4cHJlc3Npb25cIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25hbEV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodGVzdCwgY29uc2VxdWVudCwgYWx0ZXJuYXRlKSB7XG4gICAgdGhpcy50eXBlID0gXCJDb25kaXRpb25hbEV4cHJlc3Npb25cIjtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJFeHByZXNzaW9uIGV4dGVuZHMgUHJpbWFyeUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyKSB7XG4gICAgdGhpcy50eXBlID0gXCJJZGVudGlmaWVyRXhwcmVzc2lvblwiO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ld0V4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IoY2FsbGVlLCBhcmdzKSB7XG4gICAgdGhpcy50eXBlID0gXCJOZXdFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0Zml4RXhwcmVzc2lvbiBleHRlbmRzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhbmQsIG9wZXJhdG9yKSB7XG4gICAgc3VwZXIob3BlcmFuZCk7XG4gICAgdGhpcy50eXBlID0gXCJQb3N0Zml4RXhwcmVzc2lvblwiO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlZml4RXhwcmVzc2lvbiBleHRlbmRzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBvcGVyYW5kKSB7XG4gICAgc3VwZXIob3BlcmFuZCk7XG4gICAgdGhpcy50eXBlID0gXCJQcmVmaXhFeHByZXNzaW9uXCI7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNNZW1iZXJFeHByZXNzaW9uIGV4dGVuZHMgTWVtYmVyRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBzdXBlcihvYmplY3QpO1xuICAgIHRoaXMudHlwZSA9IFwiU3RhdGljTWVtYmVyRXhwcmVzc2lvblwiO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGhpc0V4cHJlc3Npb24gZXh0ZW5kcyBQcmltYXJ5RXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9IFwiVGhpc0V4cHJlc3Npb25cIjtcbiAgfVxufVxuXG5cbi8vIG90aGVyIHN0YXRlbWVudHNcblxuZXhwb3J0IGNsYXNzIEJsb2NrU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYmxvY2spIHtcbiAgICB0aGlzLnR5cGUgPSBcIkJsb2NrU3RhdGVtZW50XCI7XG4gICAgdGhpcy5ibG9jayA9IGJsb2NrO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCcmVha1N0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsKSB7XG4gICAgdGhpcy50eXBlID0gXCJCcmVha1N0YXRlbWVudFwiO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGludWVTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsYWJlbCkge1xuICAgIHRoaXMudHlwZSA9IFwiQ29udGludWVTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlYnVnZ2VyU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJEZWJ1Z2dlclN0YXRlbWVudFwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb1doaWxlU3RhdGVtZW50IGV4dGVuZHMgSXRlcmF0aW9uU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoYm9keSwgdGVzdCkge1xuICAgIHRoaXMudHlwZSA9IFwiRG9XaGlsZVN0YXRlbWVudFwiO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkVtcHR5U3RhdGVtZW50XCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJFeHByZXNzaW9uU3RhdGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ySW5TdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiRm9ySW5TdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBJdGVyYXRpb25TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihpbml0LCB0ZXN0LCB1cGRhdGUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkZvclN0YXRlbWVudFwiO1xuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZlN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiSWZTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhYmVsZWRTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihsYWJlbCwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiTGFiZWxlZFN0YXRlbWVudFwiO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXR1cm5TdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJSZXR1cm5TdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkaXNjcmltaW5hbnQsIGNhc2VzKSB7XG4gICAgdGhpcy50eXBlID0gXCJTd2l0Y2hTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmRpc2NyaW1pbmFudCA9IGRpc2NyaW1pbmFudDtcbiAgICB0aGlzLmNhc2VzID0gY2FzZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3aXRjaFN0YXRlbWVudFdpdGhEZWZhdWx0IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzY3JpbWluYW50LCBwcmVEZWZhdWx0Q2FzZXMsIGRlZmF1bHRDYXNlLCBwb3N0RGVmYXVsdENhc2VzKSB7XG4gICAgdGhpcy50eXBlID0gXCJTd2l0Y2hTdGF0ZW1lbnRXaXRoRGVmYXVsdFwiO1xuICAgIHRoaXMuZGlzY3JpbWluYW50ID0gZGlzY3JpbWluYW50O1xuICAgIHRoaXMucHJlRGVmYXVsdENhc2VzID0gcHJlRGVmYXVsdENhc2VzO1xuICAgIHRoaXMuZGVmYXVsdENhc2UgPSBkZWZhdWx0Q2FzZTtcbiAgICB0aGlzLnBvc3REZWZhdWx0Q2FzZXMgPSBwb3N0RGVmYXVsdENhc2VzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaHJvd1N0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRocm93U3RhdGVtZW50XCI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJ5Q2F0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihib2R5LCBjYXRjaENsYXVzZSkge1xuICAgIHRoaXMudHlwZSA9IFwiVHJ5Q2F0Y2hTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIHRoaXMuY2F0Y2hDbGF1c2UgPSBjYXRjaENsYXVzZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJ5RmluYWxseVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGJvZHksIGNhdGNoQ2xhdXNlLCBmaW5hbGl6ZXIpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlRyeUZpbmFsbHlTdGF0ZW1lbnRcIjtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIHRoaXMuY2F0Y2hDbGF1c2UgPSBjYXRjaENsYXVzZTtcbiAgICB0aGlzLmZpbmFsaXplciA9IGZpbmFsaXplcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy50eXBlID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uU3RhdGVtZW50XCI7XG4gICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaGlsZVN0YXRlbWVudCBleHRlbmRzIEl0ZXJhdGlvblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRlc3QsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIldoaWxlU3RhdGVtZW50XCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaXRoU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gXCJXaXRoU3RhdGVtZW50XCI7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5cbi8vIGRpcmVjdGl2ZXNcblxuZXhwb3J0IGNsYXNzIFVua25vd25EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IFwiVW5rbm93bkRpcmVjdGl2ZVwiO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXNlU3RyaWN0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gXCJVc2VTdHJpY3REaXJlY3RpdmVcIjtcbiAgfVxufVxuXG5cbi8vIG90aGVyIG5vZGVzXG5cbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnRzKSB7XG4gICAgdGhpcy50eXBlID0gXCJCbG9ja1wiO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhdGNoQ2xhdXNlIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGJpbmRpbmcsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkNhdGNoQ2xhdXNlXCI7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLnR5cGUgPSBcIklkZW50aWZpZXJcIjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTY3JpcHQgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoYm9keSkge1xuICAgIHRoaXMudHlwZSA9IFwiU2NyaXB0XCI7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoQ2FzZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih0ZXN0LCBjb25zZXF1ZW50KSB7XG4gICAgdGhpcy50eXBlID0gXCJTd2l0Y2hDYXNlXCI7XG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2hEZWZhdWx0IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnNlcXVlbnQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlN3aXRjaERlZmF1bHRcIjtcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGtpbmQsIGRlY2xhcmF0b3JzKSB7XG4gICAgaWYgKGRlY2xhcmF0b3JzLmxlbmd0aCA8IDEpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVmFyaWFibGVEZWNsYXJhdGlvbiBkZWNsYXJhdG9ycyBsaXN0IG11c3QgYmUgbm9uLWVtcHR5LlwiKTtcbiAgICB0aGlzLnR5cGUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbiAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgIHRoaXMuZGVjbGFyYXRvcnMgPSBkZWNsYXJhdG9ycztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGVEZWNsYXJhdG9yIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGJpbmRpbmcsIGluaXQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIlZhcmlhYmxlRGVjbGFyYXRvclwiO1xuICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgdGhpcy5pbml0ID0gaW5pdDtcbiAgfVxufVxuIl19