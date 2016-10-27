//function that creates a object and puts it into an array.

function createMovieObject(title, year, genre) {
    var movie = {};
    movie.title = title;
    movie.year = year;
    movie.genre = genre;
    
    var arr = [];
    arr.push(movie);
    
    return arr;
}

createMovieObject();
