import { getTestData, putTestData } from "./utils/testdata";
import { TestData } from "./utils/types";

const buider = () =>
  (name: string) => {
    return function (target: object, propertyKey: string): void {
      const testData = getTestData(target.constructor, propertyKey) ?? {
        key: propertyKey,
      } as TestData;

      testData.name = name;

      putTestData(target.constructor, propertyKey, testData);
    };
  };

export default buider;
