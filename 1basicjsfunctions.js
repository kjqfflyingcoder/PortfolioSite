var startNum = 4;
var endNum = 20;
var stepNum = 3;
var evens = [];
var possible = startNum;
for (var i = 0; i < ((endNum - startNum)/stepNum); i++) {
        if (possible % 2 == 0) {
            evens.push(possible);
	}
            possible = possible + stepNum;
}
console.log(i);
console.log(evens.length);
console.log(evens);

var loopCounter = 0;
while (loopCounter <= 4) {
    console.log(loopCounter);
    console.log("Hi Gina");
    loopCounter++;
}

alert("This is a message");
confirm("Do you like cake?");
prompt('What is your favorite band?');

function newFunction(){

}

var newArray = [];

newFunction();

function findMax(numbers){
 	var maxNumber = numbers[0];
 	for (var i = 0; i < numbers.length - 1; i++){
   		if (numbers[i]>=numbers[i+1]){
   		var maxMaybe = numbers[i];
   		} else {
     		maxMaybe = numbers[i+1];
    	}
   		if (maxMaybe >= maxNumber) {
   			maxNumber = maxMaybe;
   		}
   	}
  	return maxNumber;
}

function sumOfRange(numbers){
	var sum = 0;
  	for (var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
    }
  	return sum;
}

var direction = prompt("Should we STOP, SLOW, or GO?");
if (direction == "STOP") {
    console.log("STOP!");
    alert("STOP!");
} else {
    console.log("GO!");
    alert("GO!");
}

var direction = prompt("Should we STOP, SLOW, or GO?");
switch (direction) {
    case "STOP":
        console.log("STOP!");
        alert("STOP!");
        break;
    case "SLOW":
        console.log("SLOW DOWN!");
        alert("SLOW DOWN!");
        break;
    default:
        console.log("GO!");
        alert("GO!");
}

/* Comparison operators
Less than (<)
Greater than (>)
Less than or equal to (<=)
Greater than or equal to (>=)
Equal to (==)
Strictly equal to (===)
Not equal to (!=)
Not strictly equal to (!==)
*/

/* Logical operators.
AND (&&)
OR (||)
NOT (!)
*/