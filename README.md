# parameterized-unit-tests-helper

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
