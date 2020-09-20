import "reflect-metadata";
import Jest, { expect } from "@jest/globals";
import { getDecorators } from "./";

const {
  testsuite,
  testname,
  testcase,
  before,
  after,
  beforeEach,
  afterEach,
} = getDecorators(Jest);

@testsuite("Example test suite #1")
@before(() => console.log("Before #1"))
@after(() => console.log("After #1"))
export class DumpCalculatorTest1 {
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).toEqual(expected);
    console.log(r);
  }
}

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
    expect(r).toEqual(expected);
    console.log(r);
  }
}

@testsuite("Example test suite #3")
@before(() => console.log("Before #3"))
@after(() => console.log("After #3"))
@beforeEach(() => console.log("Before each #3"))
@afterEach(() => console.log("After each #3"))
export class DumpCalculatorTest3 {
  @testname("Example test case #3")
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).toEqual(expected);
  }
}
