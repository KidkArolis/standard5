# standard5

JavaScript [Standard](https://github.com/feross/standard) Style, but for es5 browser environments.

Specifically, the differences from the original `standard` project are:

- es6 flag is false (so no es6 syntax)
- jsx flag is false
- node flag is false (but cjs modules are still supported)
- browser flag is true

### Usage

Install it

    npm install standard5 -g

And use just like `standard`

    $ standard5
      standard: Use JavaScript Standard Style (http://standardjs.com)
      test/hello.js:3:3: Parsing error: The keyword 'const' is reserved

For more usage docs see the [standard repo](https://github.com/feross/standard).
