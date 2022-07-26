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

// TS generics allow for type inference when declared through the given values
const arr = new ArrayOfAny(['a', 'b', 'c'])
const arrN = new ArrayOfAny([1, 2, 3])

// example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

function printNums(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAny<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAny<string>(['a', 'b', 'c']);
printAny([1, 2, 3, 5])