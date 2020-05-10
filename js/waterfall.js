//  imgStatus.watch('.item', function(imgs) {

//      if (imgs.done())

//      	window.addEventListener('resize', function () {
//     waterfall(grid);
// });
         
//     var grid = document.querySelector('.grid');
//  waterfall(grid);
//  });

var grid = document.querySelector('.grid');
waterfall(grid);

window.addEventListener('resize', function () {
    waterfall(grid);
});