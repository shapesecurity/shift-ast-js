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
var assert = require('assert');

describe('ShiftAST', function() {
  it('has the appropriate number of types', function(){
    assert.equal(Object.keys(ShiftAST).length, 88);
  });

  it('can construct everything', function(){
    for (var t in ShiftAST) {
      var n = new ShiftAST[t]({});
      assert(n instanceof ShiftAST[t]);
      assert.equal(n.type, t);
    };
  });

  it('correctly creates an IfStatement', function(){
    var test = new ShiftAST.LiteralBooleanExpression({value: true});
    var consequent = new ShiftAST.ExpressionStatement(new ShiftAST.LiteralNullExpression);
    var alternate = new ShiftAST.ThrowStatement(new ShiftAST.LiteralNumericExpression({value: 1}));
    var _if = new ShiftAST.IfStatement({test: test, consequent: consequent, alternate: alternate});
    assert.equal(_if.test, test);
    assert.equal(_if.consequent, consequent);
    assert.equal(_if.alternate, alternate);
  });
});
