# parameterized-unit-tests-helper
This module is to help writing javascript unit testing 
in the parameterized way
currently supports only `mocha` but planned to suport more js test frameworks

### install
```
npm i --save p-test-js
or
yarn add p-test-js
```

### example
```ts
import { testsuite, testname, testcase } from 'p-test-js/mocha'
@testsuite('example test class')
export class GetReasonsHandlerTest {

  @testname('example test class method')
  @testcase(1, 2)
  @testcase(2, 2)
  shouldReturnBadRequestIfMissingRequiredProp(a: number, b: number): void {
    const r = a + b
    expect(r).to.be.eq(4)
  }
}
```
### output
```
example test class
    ✓ example test class method with 2,2
    X example test class method 1,2
```

### todo
- add jest version, follow https://github.com/facebook/jest/pull/9801
- write tests
