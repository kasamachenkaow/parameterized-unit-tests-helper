# parameterized-unit-tests-helper
This module is to help writing javascript unit testing
in the parameterized way
currently supports only `mocha` but planned to support more javascript test frameworks

### install
```
npm i --save-dev p-test-js
or
yarn add --dev p-test-js
```

### example 1 typescript (mocha)
```ts
import { testsuite, testname, testcase } from 'p-test-js/mocha'
import { expect } from 'chai'

@testsuite("Example test suite #1")
@before(() => console.log("Before #1"))
@after(() => console.log("After #1"))
export class DumpCalculatorTest1 {
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).to.be.eq(expected);
  }
}
```

### output 1
```
  Example test suite #1
Before #1
    ✓ superDumpPlusTest with 1,2,3
    ✓ superDumpPlusTest with 2,2,4
After #1
```

### example 2 typescript (mocha)
```ts
import { testsuite, testname, testcase } from 'p-test-js/mocha'
import { expect } from 'chai'

@testsuite("Example test suite #2")
@before(() => console.log("Before #2"))
@after(() => console.log("After #2"))
@beforeEach(() => console.log("Before each #2"))
@afterEach(() => console.log("After each #2"))
export class DumpCalculatorTest2 {
  @testname("Example test case #2")
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).to.be.eq(expected);
  }
}
```

### output 2
```
  Example test suite #2
Before #2
Before each #2
    ✓ Example test case #2 with 1,2,3
After each #2
Before each #2
    ✓ Example test case #2 with 2,2,4
After each #2
After #2
```

### todo
- add jest version, follow https://github.com/facebook/jest/pull/9801, https://github.com/jest-community/eslint-plugin-jest/issues/556
- write tests
