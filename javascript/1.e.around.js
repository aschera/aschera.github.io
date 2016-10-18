
<script type="text/javascript">

/*test
var text = prompt("Which word would you like to try?", "");

var result = text.charAt(text.length-1);
var result1 = text.charAt(text.length-2); 
var result2 = text.charAt(text.length-3); 
console.log=(result + result1 + result2);
*/


var text = prompt("Which word would you like to try?", "");

var total = 0;
var result;

for (var i = 0; i <=text.length; i ++){
     total --i;
	result = text.charAt(text.length-total);
}
console.log=(result);


</script>
