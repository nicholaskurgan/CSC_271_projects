/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.
	

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/

var movie_titles = ["pacific rim", "project x", "interstellar"];

var poster_links = ["https://upload.wikimedia.org/wikipedia/en/f/f3/Pacific_Rim_FilmPoster.jpeg", "https://upload.wikimedia.org/wikipedia/en/0/0a/Project_X_poster.png"
	, "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"];

var movie_links = ["pacific-rim.html", "project-x.html", "interstellar.html"];

var ratings = [5, 5, 5];


/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/

/*
                   <img class="movie-image" src="img/placeholder.png" alt="Movie Thumbnail">
                    <div class="rating"></div>
                    <a href="" class="movie-link">Movie Name</a>
*/
var movie_cards = document.querySelectorAll(".movie-card");

for (var i = 0; i < movie_cards.length; i++) {

	var movie_image = movie_cards[i].querySelector(".movie-image");
	movie_image.src = poster_links[i];
	movie_image.alt = movie_titles[i];

	var movie_link = movie_cards[i].querySelector(".movie-link");
	movie_link.href = movie_links[i];
	movie_link.textContent = movie_titles[i];

	var movie_rating = movie_cards[i].querySelector(".rating");
	var stars = "";

	for (var j = 0; j < 5; j++) {
		if (j < ratings[i]) {
			stars += "★";
		} else {
			stars += "☆";
		}
	}

	movie_rating.textContent = stars;	

}