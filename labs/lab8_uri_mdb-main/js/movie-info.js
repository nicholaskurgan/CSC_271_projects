/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var pacific_rim = ["Pacific Rim", "https://upload.wikimedia.org/wikipedia/en/f/f3/Pacific_Rim_FilmPoster.jpeg", 5, 
    "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to operate a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse."];

var movie_image = document.querySelector(".movie-image");
movie_image.src = pacific_rim[1];
movie_image.alt = pacific_rim[0];

var movie_name = document.querySelector(".movie-name");
movie_name.textContent = pacific_rim[0];

var movie_description = document.querySelector(".description");
movie_description.textContent = pacific_rim[3];

var movie_rating = document.querySelector(".rating");
var stars = "";

	for (var j = 0; j < 5; j++) {
		if (j < pacific_rim[2]) {
			stars += "★";
		} else {
			stars += "☆";
		}
	}
    movie_rating.textContent = stars;

    
