//calculator vars
var price = 0;
var weight = 0;
var gram_cost = 0;

document.getElementsByTagName('button')[0].addEventListener('click', function() {//button click
    price = parseFloat(document.getElementById('priceInput').value);
    weight = parseFloat(document.getElementById('weightInput').value);//parse info from input areas
    
    if (!isNaN(price) && !isNaN(weight) && weight !== 0) {
        gram_cost = price / weight;
        alert('Gram cost: ' + gram_cost);//check for bad input an dcalculate
    } else {
        alert('Please enter valid numbers for price and weight.');
    }
});