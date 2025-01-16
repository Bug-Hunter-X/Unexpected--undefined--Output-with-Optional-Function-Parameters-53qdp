function printName(name?: string): void {
  console.log(name);
}

printName(); // This will print 'undefined'
printName(undefined); // This will also print 'undefined'