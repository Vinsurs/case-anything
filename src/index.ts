import { camelCase } from 'case-anything';


const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}
function isString(val: unknown): val is string {
  return is(val, 'String');
}

function isObject(val: unknown): val is object {
  return is(val, 'Object');
}

function isArray(val: unknown): val is any[] {
  return Array.isArray ? Array.isArray(val) : is(val, 'Array');
}

/**
 * 🐪 camelCase
 * 
 * converts a string to camelCase
 */
export function camelCaseAnything<T>(target: T, options: Parameters<typeof camelCase>["1"] = {}): T {
    const defOptions: Parameters<typeof camelCase>["1"] = {
      keepSpecialCharacters: true
    }
    options = { ...defOptions, ...options }
    if (isString(target)) {
      // @ts-ignore
      return camelCase(target, options)
    }
    if (isObject(target)) {
      // @ts-ignore
      return Object.keys(target).reduce((prev, next) => {
        // @ts-ignore
        prev[camelCaseAnything(next)] = (isObject(target[next]) || isArray(target[next])) ? camelCaseAnything(target[next]) : target[next];
        return prev
      }, {})
    }
    if (isArray(target)) {
      return target.reduce((prev, next) => {
        prev.push(camelCaseAnything(next))
        return prev
      }, [])
    }
    return target
}
export * from "case-anything"