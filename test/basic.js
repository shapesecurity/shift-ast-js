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

// @ts-check

let ShiftAST = require('../');
let ShiftASTChecked = require('../gen/checked');
// @ts-ignore
let Spec = require('shift-spec');
let assert = require('assert');

function construct(type, AST) {
  if (type === Spec.ExpressionStatement.fields[1].type) { // i.e. expression
    return new AST.LiteralNullExpression;
  }
  if (type === Spec.LabeledStatement.fields[2].type) { // i.e. statement
    return new AST.ExpressionStatement({ expression: new AST.LiteralNullExpression });
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
    default: {
      let fieldsObj = {};
      type.fields.filter(f => {
        return f.name !== 'type';
      }).forEach(f => {
        fieldsObj[f.name] = construct(f.type, AST);
      });
      return new AST[type.typeName](fieldsObj);
    }
  }
}

describe('ShiftAST', () => {
  it('has the appropriate number of types', () => {
    assert.equal(Object.keys(ShiftAST).length, 99);
  });

  it('can construct everything', () => {
    for (let t of Object.keys(ShiftAST)) {
      let n = construct(Spec[t], ShiftAST);
      // @ts-ignore
      assert(n instanceof ShiftAST[t]);
      assert.equal(n.type, t);
    }
  });

  it('correctly creates an IfStatement', () => {
    let test = new ShiftAST.LiteralBooleanExpression({ value: true });
    let consequent = new ShiftAST.ExpressionStatement({ expression: new ShiftAST.LiteralNullExpression });
    let alternate = new ShiftAST.ThrowStatement({ expression: new ShiftAST.LiteralNumericExpression({ value: 1 }) });
    let _if = new ShiftAST.IfStatement({ test, consequent, alternate });
    assert.equal(_if.test, test);
    assert.equal(_if.consequent, consequent);
    assert.equal(_if.alternate, alternate);
  });
});

describe('ShiftAST/checked', () => {
  it('has the appropriate number of types', () => {
    assert.equal(Object.keys(ShiftASTChecked).length, 99);
  });

  it('can construct everything', () => {
    for (let t of Object.keys(ShiftASTChecked)) {
      let n = construct(Spec[t], ShiftASTChecked);
      // @ts-ignore
      assert(n instanceof ShiftASTChecked[t]);
      assert.equal(n.type, t);
    }
  });

  it('correctly creates an IfStatement', () => {
    let test = new ShiftASTChecked.LiteralBooleanExpression({ value: true });
    let consequent = new ShiftASTChecked.ExpressionStatement({ expression: new ShiftASTChecked.LiteralNullExpression });
    let alternate = new ShiftASTChecked.ThrowStatement({ expression: new ShiftASTChecked.LiteralNumericExpression({ value: 1 }) });
    let _if = new ShiftASTChecked.IfStatement({ test, consequent, alternate });
    assert.equal(_if.test, test);
    assert.equal(_if.consequent, consequent);
    assert.equal(_if.alternate, alternate);
  });

  it('allows passing nothing or an empty argument for simple constructors', () => {
    new ShiftASTChecked.LiteralNullExpression();
    new ShiftASTChecked.LiteralNullExpression({});
  });

  it('forbids passing too few arguments', () => {
    // @ts-ignore
    assert.throws(() => new ShiftASTChecked.LiteralNumericExpression());
  });

  it('forbids passing extra arguments', () => {
    // @ts-ignore
    assert.throws(() => new ShiftASTChecked.LiteralNullExpression(null));
    // @ts-ignore
    assert.throws(() => new ShiftASTChecked.LiteralNullExpression({}, {}));
    // @ts-ignore
    assert.throws(() => new ShiftASTChecked.LiteralNumericExpression({ value: 0 }, {}));
  });

  it('forbids passing a bag with missing properties', () => {
    // @ts-ignore
    assert.throws(() => new ShiftASTChecked.LiteralNumericExpression({}));
  });

  it('forbids passing a bag with extra properties', () => {
    // @ts-ignore
    assert.throws(() => new ShiftASTChecked.LiteralNumericExpression({ notValue: 0 }));
    // @ts-ignore
    assert.throws(() => new ShiftASTChecked.LiteralNumericExpression({ value: 0, notValue: 0 }));
  });
});
