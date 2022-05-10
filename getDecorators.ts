import {
  testnameBuilder,
  testcaseBuilder,
  testsuiteBuilder,
  beforeBuilder,
  afterBuilder,
  beforeEachBuilder,
  afterEachBuilder,
} from "./src/decorators";

export interface TestProvider {
  describe: Function;
  it: Function;
  before?: Function;
  after?: Function;
  beforeAll?: Function;
  afterAll?: Function;
  beforeEach: Function;
  afterEach: Function;
}

export const emptyfn = () => 0;

export const getDecorators = (testProvider: TestProvider) => {
  const testname = testnameBuilder();
  const testcase = testcaseBuilder();
  const before = beforeBuilder();
  const after = afterBuilder();
  const beforeEach = beforeEachBuilder();
  const afterEach = afterEachBuilder();
  const testsuite = testsuiteBuilder(
    testProvider.describe,
    testProvider.it,
    testProvider.before || testProvider.beforeAll || emptyfn,
    testProvider.after || testProvider.afterAll || emptyfn,
    testProvider.beforeEach,
    testProvider.afterEach,
  );

  return {
    testname,
    testcase,
    beforeEach,
    afterEach,
    before,
    after,
    testsuite,
  };
};

export default getDecorators;
