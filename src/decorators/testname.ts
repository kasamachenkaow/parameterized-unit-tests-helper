import 'reflect-metadata'
import { Test } from './types'
import { testcaseMetadataKey } from './constants'

const buider = () => (name: string) => {
  return function (target: object, propertyKey: string): void {
    const existingTests: Test[] = Reflect.getOwnMetadata(testcaseMetadataKey, target.constructor) ?? []

    const test = existingTests.find(t => t.key === propertyKey) ?? {
      key: propertyKey,
    } as Test

    test.name = name

    Reflect.defineMetadata(testcaseMetadataKey, existingTests, target.constructor)
  }
}

export default buider
