<script type="text/javascript">




while (true) {
var number = 1; /*secret number*/

	var guess = prompt("Please guess my number secret 1 to 10", ""); 
		if ((number < 11) && (number > 0)) { 
			if (guess == number){
				console.log("you guessed", number, "This is CORRECT!");
				breack;
			} else if (guess!== number){
				console.log("you guessed", number, "This is WRONG!");
			}
    
		} else if (isNaN(number)) { 
    			console.log(prompt("It is not a number. Please enter a number from 1 to 10", ""));  
    
		} else {  
    			console.log(prompt("Your number (" + number + ") is below or above 10. Please enter a number from 1 to 10", ""));  
		}
} 


</script>
