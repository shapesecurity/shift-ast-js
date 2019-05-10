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

'use strict';

const writeFileSync = require('fs').writeFileSync;
const Spec = require('shift-spec').default;
const ExpressionType = Spec.ExpressionStatement.fields[1].type;
const StatementType = Spec.LabeledStatement.fields[2].type;

const header = `// Generated by src/${require('path').basename(__filename)}.

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
 */`;

function printType(type, force) {
  if (!force) {
    if (type === ExpressionType) {
      return 'Expression';
    }
    if (type === StatementType) {
      return 'Statement';
    }
  }
  switch (type.typeName) {
    case 'Boolean':
      return 'boolean';
    case 'Number':
      return 'number';
    case 'String':
      return 'string';
    case 'Maybe':
      return `${printType(type.argument)} | null`;
    case 'List':
      return `Array<${printType(type.argument)}>`;
    case 'Union':
      return `${type.arguments.map(t => printType(t)).join(' | ')}`;
    case 'Enum':
      return `${type.values.map(x => `'${x}'`).join(' | ')}`;
    default:
      return type.typeName;
  }
}

let content = `${header}

type Init<Node> = Pick<Node, Exclude<keyof Node, 'type'>>;

type Expression = ${printType(ExpressionType, true)};

type Statement = ${printType(StatementType, true)};
`;

for (let typename of Object.keys(Spec)) {
  let type = Spec[typename];
  let fields = type.fields.filter(f => f.name !== 'type');

  content += `
export class ${typename} {
  type: '${typename}';${fields.map(f => `
  ${f.name}: ${printType(f.type)};`).join('')}
  constructor(init${fields.length === 0 ? '?' : ''}: Init<${typename}>);
}
`;
}

writeFileSync('gen/index.d.ts', content);
writeFileSync('dist/index.d.ts', content);

let checkedContent = `${header}

export * from './index';
`;

writeFileSync('gen/checked.d.ts', checkedContent);
writeFileSync('dist/checked.d.ts', checkedContent);
