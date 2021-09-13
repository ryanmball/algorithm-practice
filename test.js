// VALUES OF THIS DEPENDS ON HOW THE FUNCTION IS INVOKED
// Simple Invocation
// value of this is the global object
function myFunction() {
  console.log(this);
}

myFunction();

// Method Invocation
// value of this is the object owning the method
const myObject = {
  method() {
    console.log(this);
  }
};

myObject.method();

// Indirect Invocation
// .call and .apply, value of this equals the first argument passed
function myFunction2() {
  console.log(this);
}
const myContext = { value: "A"};

myFunction2.call(myContext);
myFunction2.apply(myContext);

// Constructor Invocation
// this equals newly created instance
function MyFunction() {
  console.log(this);
}
new MyFunction();