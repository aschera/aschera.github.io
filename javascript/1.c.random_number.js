
<script type="text/javascript">

var number = ((Math.random() * 100) + 1); /*secret number*/
number = Math.ceil(number);
var count = 0;

while (true) {
	var guess = prompt("Please Guess my number(from 1 to 100)", "");
		if ((guess < 101) && (guess > 0)) { 
			count++;
			if (guess == number){
				console.log("you guessed the number", number, "This is CORRECT!");
				console.log("you guessed", count, "times");
				breack;
			}
    
		} else if (isNaN(number)) { 
    			console.log(prompt("It is not a number. Please enter a number from 1 to 100", ""));  
    
		} else {  
    			console.log(prompt("Your number (" + number + ") is below or above 100. Please enter a number from 1 to 100", ""));  
		}
} 


</script>

