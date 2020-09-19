export interface TestClass {
  methods: TestMethod[];
  before?: Function;
  after?: Function;
  beforeEach?: Function;
  afterEach?: Function;
}

export interface TestMethod {
  key: string;
  name: string;
  fn: Function;
  cases: unknown[][];
}
