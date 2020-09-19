import { getTestClass, putTestClassIfNotExist } from "./utils/testdata";
import { TestClass } from "./utils/types";

const buider = () =>
  (beforeFn: Function) => {
    return function (constructor: Function): void {
      const testClass = getTestClass(constructor) ?? {
        methods: [],
      } as TestClass;

      testClass.before = beforeFn;

      putTestClassIfNotExist(constructor, testClass);
    };
  };

export default buider;
