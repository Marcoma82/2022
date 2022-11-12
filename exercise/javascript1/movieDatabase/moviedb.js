/* movie database
create an array with a movie list that contain 
title
has seen boolean
stars 1 to 5
*/

// You have not seen nope
// you have seen star wars and gave it 4.5 stars
//you have seen terminator and gave it 3.5 stars

const movie = [
    {
        title: "Star Wars",
        hasSeen: true,
        stars: 4.5,
    },
    {
        title: "NOPE",
        hasSeen: false,
        stars:0,
    },
    {
        title: "Indiana Jones",
        hasSeen: true,
        stars:4.5,
    },
    {
        title: "Jurassic Park",
        hasSeen: true,
        stars:4,
    },
    {
        title: "terminator",
        hasSeen: true,
        stars: 3.5,
    },
]

movie.forEach((movie) => {
    if(movie.hasSeen === true) {
        console.log(`you have see ${movie.title} and you rate it ${movie.stars}`)
    // console.log(`you have see ' + movie.title + ' and you rate it ' + movie.stars)
    } else {
    console.log(`you have not see ${movie.title}`)
    }
    })