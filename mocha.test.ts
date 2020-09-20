import "reflect-metadata";
import Mocha from "mocha";
import { expect } from "chai";
import { getDecorators } from "./";

const {
  testsuite,
  testname,
  testcase,
  before,
  after,
  beforeEach,
  afterEach,
} = getDecorators(Mocha);

let beforeAfterCount: number = 0;
let beforeAfterEachCount: number = 0;

@testsuite("Example test suite #1")
@before(() => beforeAfterCount++ && console.log("Before #1"))
@after(() => beforeAfterCount++ && console.log("After #1"))
export class DumpCalculatorTest1 {
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).to.be.eq(expected);
    expect(beforeAfterCount).to.be.eq(1);
  }
}

@testsuite("Example test suite #2")
@before(() => beforeAfterCount++ && console.log("Before #2"))
@after(() => beforeAfterCount++ && console.log("After #2"))
@beforeEach(() => beforeAfterEachCount++ && console.log("Before each #2"))
@afterEach(() => beforeAfterEachCount++ && console.log("After each #2"))
export class DumpCalculatorTest2 {
  @testname("Example test case #2")
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).to.be.eq(expected);
    expect(beforeAfterCount).to.be.eq(3);
    if (a === 1 && b === 2) expect(beforeAfterEachCount).to.be.eq(1);
    if (a === 2 && b === 2) expect(beforeAfterEachCount).to.be.eq(3);
  }
}

@testsuite("Example test suite #3")
@before(() => beforeAfterCount++ && console.log("Before #3"))
@after(() => beforeAfterCount++ && console.log("After #3"))
@beforeEach(() => beforeAfterEachCount++ && console.log("Before each #3"))
@afterEach(() => beforeAfterEachCount++ && console.log("After each #3"))
export class DumpCalculatorTest3 {
  @testname("Example test case #3")
  @testcase(1, 2, 3)
  @testcase(2, 2, 4)
  superDumpPlusTest(a: number, b: number, expected: number): void {
    const r = a + b;
    expect(r).to.be.eq(expected);
    expect(beforeAfterCount).to.be.eq(5);
    if (a === 1 && b === 2) expect(beforeAfterEachCount).to.be.eq(5);
    if (a === 2 && b === 2) expect(beforeAfterEachCount).to.be.eq(7);
  }
}
