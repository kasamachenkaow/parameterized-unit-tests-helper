import { getTestClass, putTestClassIfNotExist } from "./utils/testdata";
import { TestClass } from "./utils/types";

const afterEach = () =>
  (afterEachFn: Function) => {
    return function (constructor: Function): void {
      const testClass = getTestClass(constructor) ?? {
        methods: [],
      } as TestClass;

      testClass.afterEach = afterEachFn;

      putTestClassIfNotExist(constructor, testClass);
    };
  };

export default afterEach;
