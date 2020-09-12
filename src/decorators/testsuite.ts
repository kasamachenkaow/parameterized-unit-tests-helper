import { getScopeData } from "./utils/testdata";
import { TestData } from "./utils/types";

const buider = (
  testscopeFn: Function,
  testcaseFn: Function,
  beforeEachFn: Function,
  afterEachFn: Function,
) => {
  const loopAllCases = (t: TestData) => {
    if (t.beforeEach) beforeEachFn(t.beforeEach);
    t.cases.reverse().forEach((args: unknown[]) =>
      testcaseFn(`${t.name} with ${args.toString()}`, () => {
        if (t.fn) {
          t.fn(...args);
        }
      })
    );
    if (t.afterEach) afterEachFn(t.afterEach);
  };
  return (title: string) => {
    return (constructor: Function) => {
      const testDatas = getScopeData(constructor) ?? {} as TestData[];

      testscopeFn(title, () => {
        testDatas.forEach((t: TestData) => {
          if (t.cat) {
            testscopeFn(t.cat, () => loopAllCases(t));
          } else {
            loopAllCases(t);
          }
        });
      });
    };
  };
};

export default buider;
