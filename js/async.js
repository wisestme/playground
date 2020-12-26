const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {

// })

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
