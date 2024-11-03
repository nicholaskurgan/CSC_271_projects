// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_help = filterDropdown.value;

    // Get all help cards
    var help_cards = document.querySelectorAll(".help-card");
    


    //todo redo this to change from review cards to the if else shit

for (var i = 0; i < help_cards.length; i++) {
    
    var card_rating = help_cards[i].getAttribute('data-rating');

     // Debugging: Log the selected rating and card rating
     console.log('Selected rating:', selected_help);
     console.log('Card rating:', card_rating);

	if (selected_help === "All") { //used the triple equals cuz why not i learned about em
		help_cards[i].style.display = "block";
	}
    else if (selected_help === card_rating){
		help_cards[i].style.display = "block";
    }
    else {
		help_cards[i].style.display = "none";
	}
}

}); //end of the event listener i think?