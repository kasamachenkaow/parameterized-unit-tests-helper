import Mocha from "mocha";
import {
  testnameBuilder,
  testcaseBuilder,
  testsuiteBuilder,
  testcategoryBuilder,
  beforeEachBuilder,
  afterEachBuilder,
} from "./src/decorators";

export const testname = testnameBuilder();
export const testcase = testcaseBuilder();
export const testsuite = testsuiteBuilder(
  Mocha.describe,
  Mocha.it,
  Mocha.beforeEach,
  Mocha.afterEach,
);
export const testcategory = testcategoryBuilder();
export const beforeEach = beforeEachBuilder();
export const afterEach = afterEachBuilder();

export default {
  testname,
  testcase,
  testsuite,
  testcategory,
  beforeEach,
  afterEach,
};
