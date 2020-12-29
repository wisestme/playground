// async & await
const getTodos = async () => {
  const response = await fetch('js/luigi.json');
  const data = await response.json();
  return data;
}

getTodos().then(data => {
  console.log('resolved:', data)
});
// // fetch api

// fetch('js/luigi.json').then((response) => {
//   console.log('resolved', response);
//   return response.json();
// }).then((data) => {
// console.log(data);
// }).catch((err) => {
//   console.log('rejected', err);
// });

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       if(request.readyState ===  4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if(request.readyState === 4) {
//         reject('error getting resource');
//       }
//     });

//     request.open('GET', resource);
//     request.send();
//   })
  
// }

// getTodos('js/luigi.json').then((data) => {
//   console.log('promise1 resolved:', data);
//   return getTodos('js/mario.json').then((data) => {
//     console.log('promise2 resolved:', data);
//     return getTodos('js/shaun.json').then((data) => {
//       console.log('promise3 resolved:', data)
//     })
//   })
// }).catch(err => {
//   console.log('promise rejected:', err);
// });
// // console.log(1);
// // console.log(2);

// // getTodos('js/luigi.json', (err, data) => {
// //   console.log('the call back is being fired');
// //   console.log(data);
// //   getTodos('js/mario.json', (err, data) => {
// //     console.log(data);
// //     getTodos('js/shaun.json', (err, data) => {
// //       console.log(data);
// //     });
// //   });
// // });

// // console.log(3);
// // console.log(4);
