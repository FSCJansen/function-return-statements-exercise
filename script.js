//Checking if a number is big
const bigNumber = function(number){
    if (number > 100) {
        return true; 
    } else {
        return false;
    }    
} //This is a function that does something

const result = bigNumber(99);
console.log (result);


//Bouncer at a club
const access = function (age, currentNumber){
    if (currentNumber >= 500){
        return "it's too busy now, come back later";
    } else if (age < 18){
        return "this is a club for adults";
    } else {
        return "come in";
    }
} //This is a function that produces something

const allow = access (17, 501);
console.log (allow);

//Calculating the average
const averageOfFive = function (number1, number2, number3, number4, number5){
    return (number1 + number2 + number3 + number4 +number5) / 5;
}

const average = averageOfFive( 118, 153, 179, 132, 101);
console.log (average);

/* const add = function (number1, number2){
    const sum = number1 + number2;
    return sum;
};

const result = add (4, 5);

console.log (result); */