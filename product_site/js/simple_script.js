
const now = new Date();
var day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);

var time_frames = ["Morning", "Afternoon", "Night"];
var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];//arrays for info

var chosen_time;

//function to process the time and make a div edit
function time_slot (chosen_time, time_frames, hours){

if (hours < 12){
    chosen_time = time_frames[0];
}
else if (hours > 12 && hours < 18) {
    chosen_time = time_frames[1];
}
else {
    chosen_time = time_frames[2];
}

if (day == 0){
    day = weekday[0];
}
else if (day == 1){
    day = weekday[1];
}
else if (day == 2){
    day = weekday[2];
}
else if (day == 3){
    day = weekday[3];
}
else if (day == 4){
    day = weekday[4];
}
else if (day == 5){
    day = weekday[5];
}
else if (day == 6){
    day = weekday[6];
}

var element = document.getElementById('time_welcome');
element.innerHTML = "It's a great " + day +" " + chosen_time + " for some 3d printing" ;

}//end of function


time_slot (chosen_time, time_frames, hours);//running the function


