import { getTestClass, putTestClassIfNotExist } from "./utils/testdata";
import { TestClass } from "./utils/types";

const after = () =>
  (afterFn: Function) => {
    return function (constructor: Function): void {
      const testClass = getTestClass(constructor) ?? {
        methods: [],
      } as TestClass;

      testClass.after = afterFn;

      putTestClassIfNotExist(constructor, testClass);
    };
  };

export default after;
