export interface TestData {
  key: string;
  name: string;
  fn: Function;
  cases: unknown[][];
  beforeEach?: Function;
  afterEach?: Function;
  cat?: string;
}
