//calculator vars
var price = 0;
var weight = 0;
var gram_cost = 0;

document.getElementsByTagName('button')[0].addEventListener('click', function() {//button click
    price = parseFloat(document.getElementById('priceInput').value);
    weight = parseFloat(document.getElementById('weightInput').value);//parse info from input areas

    function calculate(price, weight){ //tmath for calculation function
        var gram_cost = price / weight;
        return gram_cost;
    }
    
    if (!isNaN(price) && !isNaN(weight) && weight !== 0) {
        var final_cost =calculate(price, weight);
        alert('Gram cost: ' + final_cost);//check for bad input an dcalculate
    } else {
        alert('Please enter valid numbers for price and weight.');
    }
});


calculate(price, weight);