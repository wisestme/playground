console.log("Line one");
console.log("Line two");
setTimeout(() => {
  console.log("Callback fired")
}, 2000)
console.log("Line three");
console.log("Line four");
console.log("Line five");

// Create request object
const request = new XMLHttpRequest(); //XML old data format

request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState);
  if(request.readyState === 4)
  {
    console.log(request.responseText);
  }
})
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
