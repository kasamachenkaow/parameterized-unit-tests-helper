import { getTestMethod, putTestMethodIfNotExist } from "./utils/testdata";
import { TestMethod } from "./utils/types";

const buider = () =>
  (...args: unknown[]) => {
    return function (
      target: object,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ): void {
      const existingTest = getTestMethod(target.constructor, propertyKey);

      if (existingTest) {
        if (!existingTest.cases) {
          existingTest.cases = [];
        }
        existingTest.cases.push(args);
        putTestMethodIfNotExist(target.constructor, propertyKey, existingTest);
      } else {
        const newTestMethod: TestMethod = {
          key: propertyKey,
          name: propertyKey,
          fn: descriptor.value,
          cases: [],
        };

        newTestMethod.cases.push(args);
        putTestMethodIfNotExist(target.constructor, propertyKey, newTestMethod);
      }
    };
  };

export default buider;
