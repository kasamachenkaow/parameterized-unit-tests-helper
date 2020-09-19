import Mocha from "mocha";
import {
  testnameBuilder,
  testcaseBuilder,
  testsuiteBuilder,
  beforeBuilder,
  afterBuilder,
  beforeEachBuilder,
  afterEachBuilder,
} from "./src/decorators";

export const testname = testnameBuilder();
export const testcase = testcaseBuilder();
export const before = beforeBuilder();
export const after = afterBuilder();
export const beforeEach = beforeEachBuilder();
export const afterEach = afterEachBuilder();
export const testsuite = testsuiteBuilder(
  Mocha.describe,
  Mocha.it,
  Mocha.before,
  Mocha.after,
  Mocha.beforeEach,
  Mocha.afterEach,
);

export default {
  testname,
  testcase,
  beforeEach,
  afterEach,
  before,
  after,
  testsuite,
};
