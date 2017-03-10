var something = '';

window.addEventListener('load', function() { // so shit loads and then runs.

let deletion = document.getElementById('delete');  
    
deletion.addEventListener('click', function() {    

	document.getElementById(something).outerHTML = "";
    console.log('deleting ' + something);
    //need to call api and delete entry on database also!
 
});
    
});