import { getTestClass, putTestClassIfNotExist } from "./utils/testdata";
import { TestClass } from "./utils/types";

const before = () =>
  (beforeFn: Function) => {
    return function (constructor: Function): void {
      const testClass = getTestClass(constructor) ?? {
        methods: [],
      } as TestClass;

      testClass.before = beforeFn;

      putTestClassIfNotExist(constructor, testClass);
    };
  };

export default before;
