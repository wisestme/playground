const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  console.log("Track state of request", request, request.readyState);

  if(request.readyState ===  4) {
    console.log('I am done', request.responseText);
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
