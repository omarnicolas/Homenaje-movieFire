const moviesRef = firebase.database().ref("peliculas");

function addMovie(data) {
  return moviesRef.push(data);
}

function deleteMovie(id) {
  return moviesRef.child(id).remove();
}

function updateMovie(id, data) {
  return moviesRef.child(id).set(data);
}

function getMovieDetails(id) {
  return new Promise((resolve, reject) => {
    moviesRef.child(id).on("value", data => {
      resolve(data.val());
    });
  });
}

// @TODO: Refactor para trabajar con UI directamente
function getMovies() {
  moviesRef.on("value", data => {
    console.log("data", data.val());
  });
}
