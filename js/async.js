const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  console.log("Track state of request", request, request.readyState)
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
