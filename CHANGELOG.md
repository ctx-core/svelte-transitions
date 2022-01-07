# @ctx-core/svelte-transitions

## 5.0.50

### Patch Changes

- @swc/core: ^1.2.125 -> ^1.2.127
- svelte: ^3.44.3 -> ^3.45.0

## 5.0.49

### Patch Changes

- version bump

## 5.0.48

### Patch Changes

- .js + .d.ts instead of .ts

## 5.0.47

### Patch Changes

- fix: error TS6059: \* is not under 'rootDir': package.json: types: ./dist/index.d.ts

## 5.0.46

### Patch Changes

- tsconfig.json: "target": "ES2021"

## 5.0.45

### Patch Changes

- package.json: "types": "./src/index.ts": better editing experience

## 5.0.44

### Patch Changes

- fix: build

## 5.0.43

### Patch Changes

- \*.d.ts export

## 5.0.42

### Patch Changes

- fix: tsconfig.json: "rootDir": "."

## 5.0.41

### Patch Changes

- fix: package.json: exports

## 5.0.40

### Patch Changes

- package.json: svelte: ./dist/index.js

## 5.0.39

### Patch Changes

- svelte: 3.44.2 -> 3.44.3

## 5.0.38

### Patch Changes

- package.json: - module

## 5.0.37

### Patch Changes

- package.json: - "main": explicitly not support cjs

## 5.0.36

### Patch Changes

- @swc/core: ^1.2.117 -> ^1.2.118

## 5.0.35

### Patch Changes

- @swc/core: ^1.2.116 -> ^1.2.117

## 5.0.34

### Patch Changes

- @swc/core: ^1.2.113 -> ^1.2.116

## 5.0.33

### Patch Changes

- @swc/cli: ^0.1.51 -> ^0.1.52
- @swc/core: ^1.2.111 -> ^1.2.113

## 5.0.32

### Patch Changes

- svelte: 3.44.1 -> 3.44.2
- @swc/core: ^1.2.110 -> ^1.2.111

## 5.0.31

### Patch Changes

- typescript: ^4.4.4 -> ^4.5.2
- @swc/core: ^1.2.108 -> ^1.2.110

## 5.0.30

### Patch Changes

- @swc/core: ^1.2.107 -> ^1.2.108

## 5.0.29

### Patch Changes

- compile using swc

## 5.0.28

### Patch Changes

- svelte: 3.44.0 -> 3.44.1

## 5.0.27

### Patch Changes

- typescript: ^4.4.3 -> ^4.4.4
- svelte: 3.43.1 -> 3.44.0

## 5.0.26

### Patch Changes

- svelte: 3.43.0 -> 3.43.1

## 5.0.25

### Patch Changes

- svelte: 3.42.6 -> 3.43.0

## 5.0.24

### Patch Changes

- svelte: 3.42.5 -> 3.42.6

## 5.0.23

### Patch Changes

- typescript: ^4.4.2 -> ^4.4.3

## 5.0.22

### Patch Changes

- svelte: 3.42.4 -> 3.42.5

## 5.0.21

### Patch Changes

- svelte: 3.42.3 -> 3.42.4

## 5.0.20

### Patch Changes

- typescript: ^4.3.5 -> ^4.4.2

## 5.0.19

### Patch Changes

- svelte: 3.42.2 -> 3.42.3

## 5.0.18

### Patch Changes

- svelte: 3.42.1 -> 3.42.2

## 5.0.17

### Patch Changes

- svelte: 3.41.0 -> 3.42.1

## 5.0.16

### Patch Changes

- svelte: 3.40.3 -> 3.41.0

## 5.0.15

### Patch Changes

- svelte: 3.40.2 -> 3.40.3

## 5.0.14

### Patch Changes

- svelte: 3.40.1 -> 3.40.2

## 5.0.13

### Patch Changes

- svelte: 3.40.0 -> 3.40.1
- update dependencies

## 5.0.12

### Patch Changes

- svelte: 3.38.3 -> 3.40.0

## 5.0.11

### Patch Changes

- fix: "exports": "./package.json": "./package.json"

## 5.0.10

### Patch Changes

- exports: + "package.json": "./package.json"

## 5.0.9

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""

## 5.0.8

### Patch Changes

- tsconfig.json: "target": "es2019"

## 5.0.7

### Patch Changes

- fix: cjs: load as a Promise

## 5.0.6

### Patch Changes

- "main": "./dist/index.cjs"

## 5.0.5

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')

## 5.0.4

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 5.0.3

### Patch Changes

- support cjs & esm: + "exports"

## 5.0.2

### Patch Changes

- fix: "type": "module"

## 5.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"

## 5.0.0

### Major Changes

- "type": "module": module npm type

## 4.0.11

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5

## 4.0.10

### Patch Changes

- dist directory

## 4.0.9

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]

## 4.0.8

### Patch Changes

- svelte: 3.38.2 -> 3.38.3

## 4.0.7

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"

## 4.0.6

### Patch Changes

- fix: deploying \*.js files

## 4.0.5

### Patch Changes

- "prepare": "npm run clean && npm run compile"

## 4.0.4

### Patch Changes

- npm run prepare instead of npm run prepublishOnly

## 4.0.3

### Patch Changes

- fix: npm run clean

## 4.0.2

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4

## 4.0.1

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3

## 4.0.0

### Major Changes

- move from dist to src directory

## 3.3.3

### Patch Changes

- version bump: run build

## 3.3.2

### Patch Changes

- fix: build: clean up old build files in dist

## 3.3.1

### Patch Changes

- update dependencies

## 3.3.0

### Minor Changes

- fix tsc build directory issues

## 3.2.1

### Patch Changes

- .gitignore: - \*.js

## 3.2.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 3.1.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 3.1.2

### Patch Changes

- .npmignore: + ~

## 3.1.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 3.1.0

### Minor Changes

- "noImplicitAny": true

## 3.0.19

### Patch Changes

- svelte: 3.38.1 -> 3.38.2

## 3.0.18

### Patch Changes

- svelte: 3.38.0 -> 3.38.1

## 3.0.17

### Patch Changes

- update dependencies

## 3.0.16

### Patch Changes

- update dependencies

## 3.0.15

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 3.0.14

### Patch Changes

- "svelte": 3.37.0

## 3.0.13

### Patch Changes

- version bump

## 3.0.12

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 3.0.11

### Patch Changes

- fix: npm run compile: tsc -b .

## 3.0.10

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 3.0.9

### Patch Changes

- svelte: 3.34.0 -> 3.35.0

## 3.0.8

### Patch Changes

- svelte: 3.33.0 -> 3.34.0

## 3.0.7

### Patch Changes

- svelte: 3.32.3 -> 3.33.0

## 3.0.6

### Patch Changes

- version bump

## 3.0.5

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 3.0.4

### Patch Changes

- svelte: 3.32.2 -> 3.32.3

## 3.0.3

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 3.0.2

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 3.0.1

### Patch Changes

- svelte: 3.32.1 -> 3.32.2

## 3.0.0

### Major Changes

- src directory

## 2.1.4

### Patch Changes

- svelte: 3.32.0 -> 3.32.1

## 2.1.3

### Patch Changes

- svelte: 3.31.2 -> 3.32.0

## 2.1.2

### Patch Changes

- svelte: 3.31.1 -> 3.31.2

## 2.1.1

### Patch Changes

- svelte: 3.31.0 -> 3.31.1

## 2.1.0

### Minor Changes

- spin,typewriter,whoosh: extracted from lib

## 2.0.16

### Patch Changes

- - .rush

## 2.0.15

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3

## 2.0.14

### Patch Changes

- svelte: 3.30.1 -> 3.31.0

## 2.0.13

### Patch Changes

- svelte: 3.30.0 -> 3.30.1

## 2.0.12

### Patch Changes

- svelte: 3.29.7 -> 3.30.0

## 2.0.11

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2

## 2.0.10

### Patch Changes

- svelte: 3.29.6 -> 3.29.7

## 2.0.9

### Patch Changes

- svelte: 3.29.4 -> 3.29.6

## 2.0.8

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5

## 2.0.7

### Patch Changes

- svelte: 3.29.3 -> 3.29.4

## 2.0.6

### Patch Changes

- svelte: 3.29.0 -> 3.29.3

## 2.0.5

### Patch Changes

- svelte: 3.28.0 -> 3.29.0

## 2.0.4

### Patch Changes

- svelte: 3.27.0 -> 3.28.0

## 2.0.3

### Patch Changes

- svelte: 3.26.0 -> 3.27.0

## 2.0.2

### Patch Changes

- version bump to sync with npm

## 2.0.1

### Patch Changes

- svelte: ~3.25.1 -> 3.26.0

## 2.0.0

### Major Changes

- Typescript strict checking

## 1.2.68

### Patch Changes

- fix: npm run compile: path to tsc

## 1.2.67

### Patch Changes

- typescript updates
