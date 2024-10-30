/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/

//array time yippeeee
var usernames = ["John Doe", "Jane Smith", "Alex Johnson"];
var dates = ["2024-10-30", "2024-10-30", "2024-10-30"];
var reviews = ["This movie was amazing! I loved the action scenes and the special effects.", "I didn't like this movie. It was too long and boring.",
	 "This movie was okay. I liked the story but the acting was not great."];
var ratings = [5, 2, 3];


/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
	  - Select the current review rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the review rating element's text to display the generated stars.
	  - Set the review rating element's attribute to current rating from the array. 

	  - Select the current review username element.
	  - Set its text to the username from the array and add a space to separate it from the date.

	  - Select the current review date element.
	  - Set its markup to the date from the array.

	  - Select the current review text element.
	  - Set its text to the review text from the array.
 
*/
var review_cards = document.querySelectorAll(".review-card");

for (var i = 0; i < review_cards.length; i++) {
	var review_rating = review_cards[i].querySelector(".review-rating");//errors from this why?? i was missing a t in selector i swear to god
	//i am terrible at spelling and js doesnt tell me when i goober my spelling im gonna perish like an ill victorian child
	//ignore this its a test to compare
	//var movie_image = movie_cards[i].querySelector(".movie-image");
	var stars = "";
	for (var j = 0; j < 5; j++) {
		if (j < ratings[i]) {
			stars += "★";
		} else {
			stars += "☆";
		}
	}	
	review_rating.textContent = stars;//cant assign string to a null?
	review_rating.setAttribute("data-rating", ratings[i]);//hope thats right

	var review_username = review_cards[i].querySelector(".review-username");
	review_username.firstChild.textContent = usernames[i] + " ";
	//ok so first child splits the html into chunks, so this separates the user name away from the span, so span is not overwritten

	var review_date = review_cards[i].querySelector(".review-date");
	review_date.innerHTML = dates[i];//i think marup means do the html? never seen a span tag before
	

	var review_text = review_cards[i].querySelector(".review-text");
	review_text.textContent = reviews[i];

}



// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;


    /* TO DO:

		- Loop through each card:
		  - Select the current review rating element.
		  - Get its rating attribute value.

		  - Check if the selected rating is 'All' or matches the card's rating.
		  	- If it matches, display the card.
		  	- Otherwise, hide the card

	*/


var review_cards = document.querySelectorAll(".review-card");
for (var i = 0; i < review_cards.length; i++) {

	var review_rating = review_cards[i].querySelector(".review-rating");
	var rating = review_rating.getAttribute("data-rating");

	if (selected_rating === "All" || selected_rating === rating) { //used the triple equals cuz why not i learned about em
		review_cards[i].style.display = "block";
	} else {
		review_cards[i].style.display = "none";
	}
}

}); //end of the event listener i think?




