

window.addEventListener('load', function() { // so shit loads and then runs.
    
    
let deletion = document.getElementById('delete');  
    
deletion.addEventListener('click', function() {   
    
    let res = document.querySelector('input[name="views"]:checked').value;

    let element = document.getElementById(res).innerText; // the li that is selected
    var number = parseFloat(element.match(/-*[0-9]+/));  // the id number in that li
	element.style.backgroundColor = 'red';
	
    
    
    
    //////////////////   AJAX ///////////////////////////////////////
    
    // url to access server
            let url = 'https://www.forverkliga.se/JavaScript/api/crud.php?op=delete&key=sHx2P';
    
            url+= 'id=' + number;
       console.log(url);
            // AJAX request 
            let ajax2 = new XMLHttpRequest();

            ajax2.open('post', url);

            ajax2.onreadystatechange = function() {


                if (ajax2.status == 200 && ajax2.readyState == 4) {
                    //parse string to object
                    let json2 = JSON.parse(ajax2.responseText);

                    // check is status = error
                    if (json2.status !== 'error') {

                        // status message - Server OK
                        printm(json2.status + ' : ' + json2.message);
                        
                        document.getElementById(res).outerHTML = ""; // delete from view list

                    } else {
                        console.log('server is no good');
                        console.log(json2);

                        // status message - Server BAD
                        printm(json2.status + ' : ' + json2.message);
                        //myFunction();
                    }

                } else if (ajax2.status != 200) {
                    // AJAX failiure report
                    console.log('ajax error');
                }

            }; //end ajax
            ajax2.send();

 
});
    
});






