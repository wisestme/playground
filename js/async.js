

const getToDos = (resource) => {
  return new Promise((resolve, reject) => {
    // Create request object
    const request = new XMLHttpRequest(); //XML old data format

    request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState);
      if(request.readyState === 4 && request.status === 200)
      {
        const data = JSON.parse(request.responseText)
        resolve(data);
      }
      else if(request.readyState === 4)
      {
        reject('could not get data');
      }
    })
    request.open("GET", resource);
    request.send();
  });
  
}

console.log(1);
console.log(2);

getToDos('js/todos.json').then(data => {
  console.log('Promise resolved', data);
  return getToDos('js/mario.json').then(data => {
    console.log('Promise 2:', data);
    return getToDos('js/luigi.json').then(data => {
      console.log('Promise 3', data);
    })
  })
}).catch(err => {
  console.log('Promise rejected', err);
})

console.log(3);
console.log(4);

// Fetch
fetch('js/luigi.json').then(response => {
  console.log('Resolved', response);
  return response.json();
}).then(data => {
  console.log(data);
}).catch(err => {
  console.log('Rejescted', err);
})