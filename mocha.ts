import { describe, it } from 'mocha'
import {
  testnameBuilder,
  testcaseBuilder,
  testsuiteBuilder,
} from './src/decorators'

export const testname = testnameBuilder()
export const testcase = testcaseBuilder()
export const testsuite = testsuiteBuilder(describe, it)

export default {
  testname,
  testcase,
  testsuite,
}
