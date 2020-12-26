const getTodos = (theCallback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState ===  4 && request.status === 200) {
      theCallback();
    } else if(request.readyState === 4) {
      theCallback();
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
}

getTodos(() => {
  console.log('the call back is being fired');
});

