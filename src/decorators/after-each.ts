import { getTestData, putTestData } from "./utils/testdata";
import { TestData } from "./utils/types";

const buider = () =>
  (afterEachFn: Function) => {
    return function (target: object, propertyKey: string): void {
      const testdata = getTestData(target.constructor, propertyKey) ?? {
        key: propertyKey,
      } as TestData;

      testdata.afterEach = afterEachFn;

      putTestData(target.constructor, propertyKey, testdata);
    };
  };

export default buider;
