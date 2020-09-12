import "reflect-metadata";

import {
  testsuite,
  testname,
  testcase,
  testcategory,
  beforeEach,
  afterEach,
} from "./mocha";

@testsuite("testsuite")
export class MochaTest {
  @testcategory("testcategory")
  @testname("testname")
  @beforeEach(() => console.log("beforeEach"))
  @afterEach(() => console.log("afterEach"))
  @testcase([1, 2, 3], "testcase1")
  @testcase([2, 2, 4], "testcase2")
  happyPaths(args: Array<number>[], testId: string): void {
    console.log(testId, args);
  }
}
