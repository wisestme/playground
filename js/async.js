const getToDos = (callback) => {
  // Create request object
  const request = new XMLHttpRequest(); //XML old data format

  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200)
    {
      callback();
    }
    else if(request.readyState === 4)
    {
      callback();
    }
  })
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
}

getToDos(() => {
  console.log("callback fired");
});

