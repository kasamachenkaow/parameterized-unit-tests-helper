import { describe, it } from 'mocha'
import {
  testnameBuilder,
  testcaseBuilder,
  testsuiteBuilder,
} from './decorators'

export default {
  testname: testnameBuilder(),
  testcase: testcaseBuilder(),
  testsuite: testsuiteBuilder(describe, it),
}
