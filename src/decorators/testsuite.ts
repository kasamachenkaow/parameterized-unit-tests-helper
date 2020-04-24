import 'reflect-metadata'
import { Test } from './types'
import { testcaseMetadataKey } from './constants'

const buider = (testsuiteFn: Function, testcaseFn: Function) => (title: string) => {
  return function (constructor: Function): void {
    const tests = Reflect.getOwnMetadata(testcaseMetadataKey, constructor) ?? {} as Test[]

    testsuiteFn(title, () => {
      tests.forEach((t: Test) =>
        t.cases.reverse().forEach((args: unknown[]) =>
          testcaseFn(`${t.name} with ${args.toString()}`, () => {
            if (t.fn) {
              t.fn(...args)
            }
          }),
        ),
      )
    })
  }
}

export default buider
