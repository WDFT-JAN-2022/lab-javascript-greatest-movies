// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(arr) {
//   let allDirectors = arr.map(function (e) {
//     return e.director;
//   });
//   return allDirectors;
// }

function getAllDirectors(arr) {
  let directorsList = arr.map(function (directorObject) {
    return directorObject.director;
  });
  let cleanDirectorsList = directorsList.filter((director, index) => {
    return directorsList.indexOf(director) === index;
  });
  return cleanDirectorsList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const results = movies.filter((element) => {
    return (
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
    );
  });
  return results.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // if (movies.length === 0) {
  //   return 0;
  // }
  // let scores = movies.map(function (movies) {
  //   if (!movies.score) {
  //     return 0;
  //   } else {
  //     return movies.score;
  //   }
  // });

  // let sum = scores.reduce(function (score1, score2) {
  //   return score1 + score2;
  // });

  // sum /= Math.round(scores.length);
  // return Number(sum.toFixed(2));

  if (movieArray.length) {
    let totalScores = movieArray.reduce((prevValue, movie) => {
      if (movie.hasOwnProperty('score') && movie.score) {
        return movie.score + prevValue;
      } else {
        return prevValue;
      }
    }, 0);
    return Number((totalScores / movieArray.length).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let finalSum;
  let scoreList;
  let movieDramas = arr.filter(function (movieObject1) {
    return movieObject1.genre.includes('Drama');
  });
  return scoresAverage(movieDramas);

  //   scoreList = movieDramas.map((movieObject2) => {
  //     return movieObject2.score;
  //   });

  //   finalSum =
  //     scoreList.reduce((a, b) => {
  //       return a + b;
  //     }) / scoreList.length;

  //   return Math.round(finalSum * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // let ordered = [];
  let ordered = movies.sort(function (movie1, movie2) {
    ordered = movie1.year - movie2.year;
    if (movie1.year === movie2.year) {
      if (movie1.title.toUpperCase() < movie2.title.toUpperCase()) {
        return -1;
      } else {
        return 1;
      }
    }
    return ordered;
  });
  return Array.from(ordered);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {return arr.map(e => e.title).sort().slice(0,20);}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
