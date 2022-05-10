import "reflect-metadata";
import { TestClass, TestMethod } from "./types";
import { testcaseMetadataKey } from "./constants";

export const getTestClass = (scopeId: object): TestClass | undefined => {
  const testClass: TestClass | undefined = Reflect.getOwnMetadata(
    testcaseMetadataKey,
    scopeId,
  );
  return testClass;
};

export const getTestMethod = (
  scopeId: object,
  testId: string,
): TestMethod | undefined => {
  const testClass = getTestClass(scopeId);

  if (!testClass) return undefined;

  return testClass.methods.find((t) => t.key === testId);
};

export const putTestClassIfNotExist = (
  scopeId: object,
  testClass: TestClass,
): TestClass => {
  const existingTestClass = getTestClass(scopeId);

  if (!existingTestClass) {
    Reflect.defineMetadata(testcaseMetadataKey, testClass, scopeId);
    return testClass;
  }

  return existingTestClass;
};

export const putTestMethodIfNotExist = (
  scopeId: object,
  testId: string,
  testMethod: TestMethod,
): TestMethod => {
  const testClass = putTestClassIfNotExist(scopeId, { methods: [] });

  let existingTestMethod: TestMethod | undefined = getTestMethod(
    scopeId,
    testId,
  );

  if (!existingTestMethod) {
    testClass.methods.push(testMethod);
    return testMethod;
  }

  return existingTestMethod;
};
