const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if(request.readyState ===  4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if(request.readyState === 4) {
        reject('error getting resource');
      }
    });

    request.open('GET', resource);
    request.send();
  })
  
}

getTodos('js/luigi.json').then((data) => {
  console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});
// console.log(1);
// console.log(2);

// getTodos('js/luigi.json', (err, data) => {
//   console.log('the call back is being fired');
//   console.log(data);
//   getTodos('js/mario.json', (err, data) => {
//     console.log(data);
//     getTodos('js/shaun.json', (err, data) => {
//       console.log(data);
//     });
//   });
// });

// console.log(3);
// console.log(4);
