/**
 * Copyright 2016 Shape Security, Inc.
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

var ShiftAST = require('../');
var ShiftASTChecked = require('../checked');
var Spec = require('shift-spec').default;
var assert = require('assert');

function construct(type, AST) {
  if (type === Spec.ExpressionStatement.fields[2].type) { // i.e. expression
    return new AST.LiteralNullExpression;
  }
  if (type === Spec.LabeledStatement.fields[3].type) { // i.e. statement
    return new AST.ExpressionStatement({expression: new AST.LiteralNullExpression});
  }
  switch (type.typeName) {
    case 'Boolean':
      return true;
    case 'Number':
      return 0;
    case 'String':
      return 'foobar';
    case 'Maybe':
      return null;
    case 'List':
      return [];
    case 'Union':
      return construct(type.arguments[0], AST);
    case 'Enum':
      return type.values[0];
    default:
      var fieldsObj = {};
      type.fields.filter(function (f) { return (f.name !== 'type' && f.name !== 'loc'); }).forEach(function (f) {
        fieldsObj[f.name] = construct(f.type, AST);
      });
      return new AST[type.typeName](fieldsObj);
  }
}

describe('ShiftAST', function() {
  it('has the appropriate number of types', function(){
    assert.equal(Object.keys(ShiftAST).length, 88);
  });

  it('can construct everything', function(){
    for (var t in ShiftAST) {
      var n = construct(Spec[t], ShiftAST);
      assert(n instanceof ShiftAST[t]);
      assert.equal(n.type, t);
    };
  });

  it('correctly creates an IfStatement', function(){
    var test = new ShiftAST.LiteralBooleanExpression({value: true});
    var consequent = new ShiftAST.ExpressionStatement({expression: new ShiftAST.LiteralNullExpression});
    var alternate = new ShiftAST.ThrowStatement({expression: new ShiftAST.LiteralNumericExpression({value: 1})});
    var _if = new ShiftAST.IfStatement({test: test, consequent: consequent, alternate: alternate});
    assert.equal(_if.test, test);
    assert.equal(_if.consequent, consequent);
    assert.equal(_if.alternate, alternate);
  });
});

describe('ShiftAST/checked', function() {
  it('has the appropriate number of types', function(){
    assert.equal(Object.keys(ShiftASTChecked).length, 88);
  });

  it('can construct everything', function(){
    for (var t in ShiftASTChecked) {
      var n = construct(Spec[t], ShiftASTChecked);
      assert(n instanceof ShiftASTChecked[t]);
      assert.equal(n.type, t);
    };
  });

  it('correctly creates an IfStatement', function(){
    var test = new ShiftASTChecked.LiteralBooleanExpression({value: true});
    var consequent = new ShiftASTChecked.ExpressionStatement({expression: new ShiftASTChecked.LiteralNullExpression});
    var alternate = new ShiftASTChecked.ThrowStatement({expression: new ShiftASTChecked.LiteralNumericExpression({value: 1})});
    var _if = new ShiftASTChecked.IfStatement({test: test, consequent: consequent, alternate: alternate});
    assert.equal(_if.test, test);
    assert.equal(_if.consequent, consequent);
    assert.equal(_if.alternate, alternate);
  });
});
