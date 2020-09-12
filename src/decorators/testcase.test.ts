import "reflect-metadata";
import { testcaseMetadataKey } from "./utils/constants";

import { expect } from "chai";
import { stubInterface } from "ts-sinon";
import {
  testsuite,
  testname,
  testcase,
  testcategory,
  beforeEach,
} from "p-test-js/mocha";
import testcaseBuilder from "./testcase";
import { TestData } from "./utils/types";
import { getTestData, putTestData } from "./utils/testdata";

@testsuite("testcase decorators tests")
export class TestCaseTest {
  @testcategory("happy paths")
  @testname("should push testcase based on given args correctly")
  @beforeEach(() => console.log("each"))
  @testcase([1, 2, 3], "t1")
  @testcase([2, 2, 4], "t2")
  happyPaths(args: unknown[], testId: string): void {
    const target: object = {};
    const propertyKey: string = testId;
    const descriptor: PropertyDescriptor = stubInterface<PropertyDescriptor>();
    descriptor.value = () => {};

    const testcaseDecorator = testcaseBuilder()(...args);
    testcaseDecorator(target, propertyKey, descriptor);
    const existingTests: TestData[] =
      Reflect.getOwnMetadata(testcaseMetadataKey, target.constructor) ?? [];

    const existingTest = existingTests.find((t) => t.key === propertyKey);
    expect(existingTest).to.deep.eq({
      key: propertyKey,
      name: propertyKey,
      fn: descriptor.value,
      cases: [args],
    });
  }
}
