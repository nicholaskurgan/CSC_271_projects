var feedback = document.getElementById('feedback');

    var valid_title = false;

    const title = document.getElementById('pname');

    title.addEventListener("focus", function() {
        feedback.innerHTML = "Enter the title of your post";
      });

    

        //this will check the title text field and update accordingly
        title.addEventListener("blur", function() {
      
            if (title.value === "") {
                feedback.innerHTML = "You did not enter a title";
                title.style.borderColor = "red";
            }

             else {
                feedback.innerHTML = "";
                valid_title = true;
                title.style.borderColor = "#ccc";
            }
        });


        //description handling
        var valid_description = false;

    const description = document.getElementById('desc');

    description.addEventListener("focus", function() {
        feedback.innerHTML = "Enter the main description of your post";
      });

    

        //this will check the  text field and update accordingly
        description.addEventListener("blur", function() {
      
            if (description.value === "") {
                feedback.innerHTML = "You did not enter a description";
                description.style.borderColor = "red";
            }

             else {
                feedback.innerHTML = "";
                valid_description = true;
                description.style.borderColor = "#ccc";
            }
        });



//lastly is the submission handler
//use the bools we have established for validation checking before submission

const form = document.getElementById('post_form');
form.addEventListener("submit", function(event) {
    if (valid_title === false || valid_description === false){
        feedback.innerHTML = "Issues with your input. Please try again."; 
        event.preventDefault(); // Prevents the form from submitting i hope
    }
    else {
        feedback.innerHTML = "";
        alert("Thanks for posting, "+title.value+" is being sent to the printer as we speak!")
    }
    
  }, false);




  //making default post constructor
  function Post (title, description, origional, img, alt_text ) {
    this.title = title;
    this.description = description;
    this.origional = origional;//boolean
    this.img = img;
    this.alt_text = alt_text;
    this.generate_post = function () {
        var postHolder = document.getElementById("post_holder");
        postHolder.innerHTML = 
    "<div class='post'>" +
    "<h2>" + this.title + "</h2>" +
    "<p>" + this.description + "</p>" +
    "<img id='post_image' src='" + this.img + "' alt='" + this.alt_text + "'>" +
    "</div>";
    };
};


//populate a test post
var test_post = new Post("Test Post", "This is a test post", true, "images/aluminum.jpg", "ball of foil");
test_post.generate_post();

//todo implement a system to take in user post data and make a post with it




