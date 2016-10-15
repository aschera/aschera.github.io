
<script type="text/javascript">

var number = prompt("Please enter a number from 1 to 10", ""); 
if ((number < 11) && (number > 0)) { 
    console.log(number); 
    document.write(number); 
    
} else if (isNaN(number)) { 
    console.log(prompt("It is not a number. Please enter a number from 1 to 10", ""));  
    
} else {  
    console.log(prompt("Your number (" + number + ") is below or above 10. Please enter a number from 1 to 10", ""));  
} 

</script>