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

import * as assert from "assert";

import * as Shift from "../";

import ShiftSpec from "shift-spec";

Object.assign = require("object-assign");

suite("unit", () => {
  suite("toJSON", () => {
    test("includes `type` member", () => {
      let node = new Shift.LiteralNumericExpression(0);
      assert.equal(node.type, JSON.parse(JSON.stringify(node)).type);
    });
  });

  // enough nonces to fill up the longest constructor parameter list
  const NONCES = Array.apply(null, Array(Object.keys(Shift).reduce((memo, t) => Math.max(memo, Shift[t].length), 0))).map(() => ({}));

  function testConstructor(t, members) {
    test(t, () => {
      assert(Shift[t]);
      let node = new Shift[t](...NONCES);
      assert(node instanceof Shift[t]);
      if (t !== "SourceLocation" && t !== "SourceSpan") {
        assert.equal(typeof node.type, "string");
      }
      members.forEach((member, index) => {
        assert.equal(node[member], NONCES[index], `${t}: ${member}`);
      });
    });
  }

  let SPEC = Object.assign({}, ShiftSpec());

  SPEC.SourceLocation = ["offset", "line", "column"];
  SPEC.SourceSpan = ["start", "end", "source"];

  suite("constructors", () => {
    test("all constructors are tested", () => {
      let shiftCtors = Object.keys(Shift).sort();
      let specCtors = Object.keys(SPEC).sort();
      shiftCtors.forEach((shiftCtor, i) => {
        assert.equal(shiftCtor, specCtors[i]);
      });
      assert.equal(shiftCtors.length, specCtors.length);
    });

    Object.keys(SPEC).forEach((t) => {
      testConstructor(t, SPEC[t]);
    });
  });

  test("VariableDeclaration declarators must be non-empty", () => {
    assert.throws(() => new Shift.VariableDeclaration("var", []));
  });
});
