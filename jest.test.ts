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

let beforeAfterCount: number = 0;
let beforeAfterEachCount: number = 0;

@testsuite("Example test suite #1")
@before(() => beforeAfterCount++)
@after(() => beforeAfterCount++)
export class DumpCalculatorTest1 {
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).toEqual(expected);
    expect(beforeAfterCount).toEqual(1);
  }
}

@testsuite("Example test suite #2")
@before(() => beforeAfterCount++)
@after(() => beforeAfterCount++)
@beforeEach(() => beforeAfterEachCount++)
@afterEach(() => beforeAfterEachCount++)
export class DumpCalculatorTest2 {
  @testname("Example test case #2")
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).toEqual(expected);
    expect(beforeAfterCount).toEqual(3);
    if (a === 1 && b === 2) expect(beforeAfterEachCount).toEqual(1);
    if (a === 2 && b === 2) expect(beforeAfterEachCount).toEqual(3);
  }
}

@testsuite("Example test suite #3")
@before(() => beforeAfterCount++)
@after(() => beforeAfterCount++)
@beforeEach(() => beforeAfterEachCount++)
@afterEach(() => beforeAfterEachCount++)
export class DumpCalculatorTest3 {
  @testname("Example test case #3")
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).toEqual(expected);
    expect(beforeAfterCount).toEqual(5);
    if (a === 1 && b === 2) expect(beforeAfterEachCount).toEqual(5);
    if (a === 2 && b === 2) expect(beforeAfterEachCount).toEqual(7);
  }
}
