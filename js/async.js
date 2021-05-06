const getToDos = (callback) => {
  // Create request object
  const request = new XMLHttpRequest(); //XML old data format

  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200)
    {
      const data = JSON.parse(request.responseText)
      callback(undefined, data);
    }
    else if(request.readyState === 4)
    {
      callback("Could not fetch data", undefined);
    }
  })
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
}

console.log(1);
console.log(2);

getToDos((err, data) => {
  console.log("callback fired");
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log(data);
  }
});

console.log(3);
console.log(4);

