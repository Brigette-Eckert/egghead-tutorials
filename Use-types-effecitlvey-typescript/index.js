let somePhrase: string = "Hello World!";
let someNum: number = 30;

let myFunction = (a:string, b:number) => {
  return a + b;
}

console.log(myFunction(somePhrase, someNum));
console.log(myFunction(42, someNum));
console.log(myFunction("hello world", "42"));



//tsc index.js to run