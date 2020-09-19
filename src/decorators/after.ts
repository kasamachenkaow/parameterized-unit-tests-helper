import { getTestClass, putTestClassIfNotExist } from "./utils/testdata";
import { TestClass } from "./utils/types";

const buider = () =>
  (afterFn: Function) => {
    return function (constructor: Function): void {
      const testClass = getTestClass(constructor) ?? {
        methods: [],
      } as TestClass;

      testClass.after = afterFn;

      putTestClassIfNotExist(constructor, testClass);
    };
  };

export default buider;
