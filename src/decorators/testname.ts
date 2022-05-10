import { getTestMethod, putTestMethodIfNotExist } from "./utils/testdata";
import { TestMethod } from "./utils/types";

const testname = () =>
  (name: string) => {
    return function (target: object, propertyKey: string): void {
      const testMethod = getTestMethod(target.constructor, propertyKey) ?? {
        key: propertyKey,
      } as TestMethod;

      testMethod.name = name;

      putTestMethodIfNotExist(target.constructor, propertyKey, testMethod);
    };
  };

export default testname;
