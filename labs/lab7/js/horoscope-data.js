
var my_zodiac = "im an asparagus";
var my_personal_information = "august";
var my_birthday = 6;
var my_credit_card_number = 6.345838;
var description = "idk man, just rotate a cat inside of your head, counter clockwise, medium rotation speed. he is orange for he is not that bright.";
var quantum_super_position = false;

var element1 = document.getElementById('sign');
element1.innerHTML = my_zodiac;

var element2 = document.getElementsByClassName('birthday')[0];
element2.innerHTML += my_personal_information + " " + my_birthday;

var element3 = document.getElementsByClassName('luckyNum')[0];
element3.innerHTML += my_credit_card_number;


var elements = document.getElementsByTagName("p");
elements[0].innerHTML =  description;

elements[1].innerHTML += "<strong>" + quantum_super_position + "</strong>";


var mood = 0.98;
var mood_p1 = 1.8;
var mood_p2 =2;

var final_mood = (mood + mood_p1 + mood_p2) / 3;

var element4 = document.getElementById('mood');
element4.innerHTML += mood + "the average mood of asparagus, sagitarius, and libra is:" + final_mood;

var signs = ["asparagus  ", "sagitarius  ", "libra  "];

var my_zodiac_again = signs[0];
var p1 = signs[1];
var p2 = signs[2];

var element4 = document.getElementById('me');
element4.innerHTML += my_zodiac_again;
var element4 = document.getElementById('p1');
element4.innerHTML += p1;
var element4 = document.getElementById('p2');
element4.innerHTML += p2;

var descriptions = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];
var my_desc = descriptions[3];
var p1_desc = descriptions[1];
var p2_desc = descriptions[5];
descriptions[6] = "beans on toast";

var element4 = document.getElementById('me');
element4.innerHTML += my_desc;
var element4 = document.getElementById('p1');
element4.innerHTML += p1_desc;
var element4 = document.getElementById('p2');
element4.innerHTML += p2_desc;

