# parameterized-unit-tests-helper
This module is to help writing javascript unit testing
in the parameterized way

It supports both `mocha@7.x.x` and `jest@26.x.x`
It also should supports any test frameworks whose has the following functionalities
```ts
interface TestProvider {
  describe: Function;
  it: Function;
  before?: Function;
  after?: Function;
  beforeAll?: Function;
  afterAll?: Function;
  beforeEach: Function;
  afterEach: Function;
}
```

### How to install?
```
npm i --save-dev p-test-js
or
yarn add --dev p-test-js
```

### Initialize (Mocha)
```ts
import Mocha from "mocha";
import { getDecorators } from 'p-test-js'

const {
  testsuite,
  testname,
  testcase,
  before,
  after,
  beforeEach,
  afterEach,
} = getDecorators(Mocha);
```

### Initialize (Jest)
```ts
import Jest from "@jest/globals";
import { getDecorators } from 'p-test-js'

const {
  testsuite,
  testname,
  testcase,
  before,
  after,
  beforeEach,
  afterEach,
} = getDecorators(Jest);
```

<<<<<<< HEAD
### Example 1 typescript (mocha)
=======
### example 1 typescript (mocha)
>>>>>>> 87e00e2ca3322ab41a5fd4596e7fe29822b85277
```ts
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

### Output 1
```
  Example test suite #1
Before #1
    ✓ superDumpPlusTest with 1,2,3
    ✓ superDumpPlusTest with 2,2,4
After #1
```

### Example 2 typescript (mocha)
```ts
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

### Output 2
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

<<<<<<< HEAD
### To-do
=======
### to-do
>>>>>>> 87e00e2ca3322ab41a5fd4596e7fe29822b85277
- add automated deployment
