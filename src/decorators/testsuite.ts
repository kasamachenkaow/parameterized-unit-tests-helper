import { getTestClass } from "./utils/testdata";
import { TestMethod, TestClass } from "./utils/types";

const testsuite = (
  testscopeFn: Function,
  testcaseFn: Function,
  beforeFn: Function,
  afterFn: Function,
  beforeEachFn: Function,
  afterEachFn: Function,
) => {
  const loopAllCases = (t: TestMethod) => {
    [...t.cases].reverse().forEach((args: unknown[]) =>
      testcaseFn(`${t.name} with ${args.toString()}`, () => {
        if (t.fn) {
          t.fn(...args);
        }
      })
    );
  };
  return (title: string) => {
    return (constructor: Function) => {
      const testClass = getTestClass(constructor) ??
        { methods: [] } as TestClass;

      testscopeFn(title, () => {
        if (testClass.before) beforeFn(testClass.before);
        if (testClass.beforeEach) beforeEachFn(testClass.beforeEach);

        testClass.methods.forEach((testMethod: TestMethod) =>
          loopAllCases(testMethod)
        );

        if (testClass.afterEach) afterEachFn(testClass.afterEach);
        if (testClass.after) afterFn(testClass.after);
      });
    };
  };
};

export default testsuite;
