let m: string = 'hello'
console.log(m)
let num: number = undefined;  
let bool: boolean = undefined;  
let str: string = undefined;  

// Declare a tuple  
let a: [string, number];  
  
// Initialize it  ;
a = ["hi", 8, "how", 5]; // OK  
console.log(a)



function name() {
    let num:number = 12;
    console.log(num)
}

name();

function logMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Method: ${propertyKey}, Arguments: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class MyClass {
  @logMethod
  sayHello(name: string) {
    return `Hello, ${name}`;
  }
}

const instance = new MyClass();
instance.sayHello("World");
