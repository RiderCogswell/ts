class ArrayOfNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

// think of generics literally as arguments for types,
class ArrayOfAny<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

// where we can pass in whatever type we like through this function
new ArrayOfAny<number> ([1, 4, 5, 77, 9])
new ArrayOfAny<string> (['hello', 'world'])

// TS generics allow for type inference when declared through the values given
const arr = new ArrayOfAny(['a', 'b', 'c'])
const arrN = new ArrayOfAny([1, 2, 3])