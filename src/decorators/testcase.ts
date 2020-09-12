import { getTestData, putTestData } from './utils/testdata'
import { TestData } from './utils/types'

const buider = () => (...args: unknown[]) => {
  return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): void {
    const existingTest = getTestData(target.constructor, propertyKey)

    if (existingTest) {
      if (!existingTest.cases) {
        existingTest.cases = []
      }
      existingTest.cases.push(args)
      putTestData(target.constructor, propertyKey, existingTest)
    } else {
      const newTestData: TestData = {
        key: propertyKey,
        name: propertyKey,
        fn: descriptor.value,
        cases: [],
      }

      newTestData.cases.push(args)
      putTestData(target.constructor, propertyKey, newTestData)
    }
  }
}

export default buider
