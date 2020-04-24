import 'reflect-metadata'
import { Test } from './types'
import { testcaseMetadataKey } from './constants'

const buider = () => (...args: unknown[]) => {
  return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): void {
    const existingTests: Test[] = Reflect.getOwnMetadata(testcaseMetadataKey, target.constructor) ?? []

    const existingTest = existingTests.find(t => t.key === propertyKey)
    if (existingTest) {
      if (!existingTest.cases) {
        existingTest.cases = []
      }
      existingTest.cases.push(args)
    } else {
      const newTestCases: Test = {
        key: propertyKey,
        name: propertyKey,
        fn: descriptor.value,
        cases: [],
      }

      newTestCases.cases.push(args)
      existingTests.push(newTestCases)
    }

    Reflect.defineMetadata(testcaseMetadataKey, existingTests, target.constructor)
  }
}

export default buider
