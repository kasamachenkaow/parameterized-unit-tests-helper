import Mocha from 'mocha'
import {
  testnameBuilder,
  testcaseBuilder,
  testsuiteBuilder,
  testcategoryBuilder,
  beforeEachBuilder,
} from './src/decorators'

export const testname = testnameBuilder()
export const testcase = testcaseBuilder()
export const testsuite = testsuiteBuilder(Mocha.describe, Mocha.it, Mocha.beforeEach)
export const testcategory = testcategoryBuilder()
export const beforeEach = beforeEachBuilder()

export default {
  testname,
  testcase,
  testsuite,
  testcategory,
  beforeEach,
}
