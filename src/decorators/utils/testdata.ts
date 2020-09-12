import "reflect-metadata";
import { TestData } from "./types";
import { testcaseMetadataKey } from "./constants";

export const getScopeData = (scopeId: object): TestData[] | undefined => {
  const existingTests: TestData[] | undefined = Reflect.getOwnMetadata(
    testcaseMetadataKey,
    scopeId,
  );
  return existingTests;
};
export const getTestData = (
  scopeId: object,
  testId: string,
): TestData | undefined => {
  const existingTests: TestData[] = getScopeData(scopeId) ?? [];

  const testdata = existingTests.find((t) => t.key === testId);

  return testdata;
};

export const putTestData = (
  scopeId: object,
  testId: string,
  testdata: TestData,
) => {
  let existingTests: TestData[] | undefined = getScopeData(scopeId);
  let existingTestData: TestData | undefined = getTestData(scopeId, testId);

  if (!existingTests) {
    existingTests = [];
    Reflect.defineMetadata(testcaseMetadataKey, existingTests, scopeId);
  }
  if (!existingTestData) {
    existingTests.push(testdata);
  }
};
