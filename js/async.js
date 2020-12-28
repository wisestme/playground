const getTodos = (resource, theCallback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState ===  4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      theCallback(undefined, data);
    } else if(request.readyState === 4) {
      theCallback('could not fetch data', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
}

// promise example
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    //resolve('some data');
    reject('some error')
  })
}

getSomething().then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
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
