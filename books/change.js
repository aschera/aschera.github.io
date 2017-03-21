var current_id_book = ''; 

/* radio check listener */

var changeHandler = (function initChangeHandler() {
    var previousCheckedRadio = null;
    
    function logInfo(info) {
        if (!console || !console.log) return;
            
        console.log(info);
    }
    
    function logPrevious(element) {
        if (!element) return;
            
        var message = element.value + ' was unchecked';
        
        let the_li = previousCheckedRadio.value; // the li that was selected previousCheckedRadio
        if (document.getElementById(the_li) == null) {
            console.log('no');
        } else {
            document.getElementById(the_li).style.backgroundColor = '#e3e0cf';
            logInfo(message);
        }
        
    }
    
    function logCurrent(element) {
        if (!element) return;
            
        var message = element.value + ' is checked';
        
        
        logInfo(message);
    }
    
    var result = function (event) {
        var currentCheckedRadio = event.target;
        var name = currentCheckedRadio.name;
        
        if (name !== 'views') return;
            
        logPrevious(previousCheckedRadio);
        logCurrent(currentCheckedRadio);
        
        previousCheckedRadio = currentCheckedRadio;
        
        // change text fields.
        let title = document.getElementById('V_title'); ;
        let author = document.getElementById('V_author');;
        
        // passing new data into them
        let the_li = currentCheckedRadio.value; // the li that is selected
        let element = document.getElementById(the_li).innerText; // the li that is selected
        
        let new_id = element.substring(5, element.indexOf(','));
        current_id_book = new_id;
        let new_title = element.substring( element.indexOf("e:") + 3, element.indexOf(" A") + -1 );
        let new_author = element.substring( element.indexOf("r:") + 3, element.indexOf("updated:") -2 );
        console.log(new_title);
        console.log(new_author);
        
        document.getElementById('V_title').value = new_title;
        document.getElementById('V_author').value = new_author;
        
        document.getElementById(the_li).style.backgroundColor = '#9fa8a3';
    };
    
    return result;
})();

document.addEventListener('change', changeHandler, false);

/************************************************************************************************* */

// Change the book api call.



        window.addEventListener('load', function() { // so shit loads and then runs.
            let button = document.getElementById('change');
     
            button.addEventListener('click', function() {
                
           
        let title = document.getElementById('V_title').value;
        let author = document.getElementById('V_author').value;
        let id = current_id_book; 

		if(author === '' && title ==='') {
			printm('Please enter a title and an author first!');
		}
		else { 
                
                // url to access server
                let url = 'https://www.forverkliga.se/JavaScript/api/crud.php?op=update&key=sHx2P';
                
                url+= '&id=' + id + '&title=' + title+ '&author=' + author;
               
                // AJAX request 
                let ajax = new XMLHttpRequest();

                ajax.open('post', url);
  
                ajax.onreadystatechange = function() {
                    
                let status = '';

                    if (ajax.status == 200 && ajax.readyState == 4) {
                        //parse string to object
                        let json = JSON.parse(ajax.responseText);

                        // check is status = error
                        if (json.status !== 'error') {
// status message - Server OK
                           
                            printm('The book: with id: ' + id + ' has been updated to: ' + title +  ' by ' + author);
                            document.getElementById('V_title').value = '';
                            document.getElementById('V_author').value = '';
                            
       
                        } else {
// status message - Server Bad
                            
                            printm(json.status +', ' + json.message);
                            
                        }

                    } else if (ajax.status != 200) {  
// status message - Server Bad
                             console.log(json);
                             printm('server error');
                             
                    }

                };  //end ajax
            ajax.send();
} // end else
                
            } // button event listener done
        
        )}); // window event listener done











