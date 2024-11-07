
function the_wizard(){

//going to attempt to add a little fun thing that turns the background blue, and say a wizard did it
var wizard_happened = false;

//wizard makes it blue
if (wizard_happened == false) {
document.getElementsByClassName('wizard')[0].addEventListener('click', function() {//button gets clicked
    document.body.style.backgroundColor = 'blue';//wizard curse
    wizard_happened = true;
    alert('A wizard cursed the page! Reload the page to stop his magic!');

    if (wizard_happened == true) { //change headers to evil laugh
        var elements = document.getElementsByTagName('h3');
        var i = 0;
            while (i < elements.length) {
                elements[i].textContent = "MUAHAHAHA";
                i++;
            }
        }
        
});
}

}
//summon the wizard
the_wizard();



