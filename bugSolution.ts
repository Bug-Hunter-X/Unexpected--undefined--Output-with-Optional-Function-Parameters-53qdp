function printName(name?: string): void {
  const nameToPrint = name === undefined ? 'Guest' : name; //Check for undefined
  console.log(nameToPrint);
}

printName(); // Prints 'Guest'
printName(undefined); //Prints 'Guest'

//Alternative Solution using default parameters
function printName2(name: string = 'Guest'): void {
  console.log(name);
}
printName2(); // Prints 'Guest'
printName2(undefined); // Prints 'Guest' // Note undefined is coerced to string 'undefined' 
printName2('John'); //Prints John 