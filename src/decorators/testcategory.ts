import { getTestData, putTestData } from "./utils/testdata";
import { TestData } from "./utils/types";

const buider = () =>
  (cat: string) => {
    return function (target: object, propertyKey: string): void {
      const testData = getTestData(target.constructor, propertyKey) ?? {
        key: propertyKey,
      } as TestData;

      testData.cat = cat;

      putTestData(target.constructor, propertyKey, testData);
    };
  };

export default buider;
