const calculateAverageRating = (ratingArray) => {
let ratingSum = 0;
let averageRating;
for(let rating of ratingArray) {
  ratingSum += rating;
  averageRating = ratingSum / ratingArray.length;
}
  return averageRating;
}

let sumOfRating = calculateAverageRating([4, 5, 3, 4, 3]);
console.log(sumOfRating);