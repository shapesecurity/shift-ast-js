LaserBat AST Constructors for JS
================================


## About

This project provides constructors for [LaserBat format](https://github.com/shapesecurity/laserbat) AST nodes.


## Status

This project is currently in the `0.x.x` series until comprehensive tests are added.


## Installation

```sh
npm install laserbat-ast
```


## Usage

```js
var AST = require("laserbat-ast");
var myAstFragment = new AST.LabeledStatement(
  new AST.Identifier("label"),
  new AST.EmptyStatement
);
```


## Contributing

* Open a Github issue with a description of your desired change. If one exists already, leave a message stating that you are working on it with the date you expect it to be complete.
* Fork and clone the forked repo.
* Install dependencies with `npm install`.
* Build and test in your environment with `npm run build && npm test`.
* Create a feature branch. Make your changes. Add tests.
* Build and test in your environment with `npm run build && npm test`.
* Make a commit that includes the text "fixes #*XX*" where *XX* is the Github issue.
* Open a Pull Request on Github.


## License

    Copyright 2014 Shape Security, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
