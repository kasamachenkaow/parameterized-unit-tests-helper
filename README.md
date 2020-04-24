# parameterized-unit-tests-helper
This module is to help writing javascript unit testing 
in the parameterized way
currently supports only `mocha` but planned to suport more js test frameworks

### install
```
npm i --save-dev p-test-js
or
yarn add --dev p-test-js
```

### example typescript
```ts
import { testsuite, testname, testcase } from 'p-test-js/mocha'
@testsuite('example test class')
export class DumpCalculatorTest {

  @testname('example test class method')
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b
    expect(r).to.be.eq(expected)
  }
}
```

### output
```
example test class
    ✓ example test class method with 1,2
    ✓ example test class method with 2,2
```

### todo
- add jest version, follow https://github.com/facebook/jest/pull/9801
- write tests
