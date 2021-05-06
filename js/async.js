console.log("Line one");
console.log("Line two");
setTimeout(() => {
  console.log("Callback fired")
}, 2000)
console.log("Line three");
console.log("Line four");
console.log("Line five");

const getToDos = () => {
  // Create request object
const request = new XMLHttpRequest(); //XML old data format

request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState);
  if(request.readyState === 4 && request.status === 200)
  {
    console.log(request, request.responseText);
  }
  else if(request.readyState === 4)
  {
    console.log("Could not fetch the data");
  }
})
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
}

