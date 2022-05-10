import { getTestClass, putTestClassIfNotExist } from "./utils/testdata";
import { TestClass } from "./utils/types";

const beforeEach = () =>
  (beforeEachFn: Function) => {
    return function (constructor: Function): void {
      const testClass = getTestClass(constructor) ?? {
        methods: [],
      } as TestClass;

      testClass.beforeEach = beforeEachFn;

      putTestClassIfNotExist(constructor, testClass);
    };
  };

export default beforeEach;
