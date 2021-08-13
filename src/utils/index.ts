export function hasOwn(obj: unknown, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function filterMap<T, R>(
  array: R[],
  { filter, map }: {
    filter: (value: R, index: number) => boolean,
    map: (value: R, index: number) => T,
  },
): T[] {
  if (!Array.isArray(array)) {
    return [];
  }
  const collection: T[] = [];
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (filter(item, i)) {
      collection.push(map(item, collection.length));
    }
  }
  return collection;
}

type type = 'string' | 'number' | 'boolean' | 'symbol' | 'array' | 'object' | 'function'
  | 'regexp' | 'date' | 'error' | 'promise';

export function type(val: unknown): type {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

export function repeat<T, R =T>(
  sourceData: T,
  times: number,
  callback: (index, obj: T) => R = () => sourceData as unknown as R,
): R[] {
  const list = [];
  for (let index = 0; index < times; index += 1) {
    list.push(callback(index, sourceData));
  }
  return list;
}
