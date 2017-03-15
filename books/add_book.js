
/************************************************************************************************* */

// Add a book by entering title and author in a field.



        window.addEventListener('load', function() { // so shit loads and then runs.
            let button = document.getElementById('button');
     
            button.addEventListener('click', function() {
                
            let author = document.getElementById('author').value;
            let title = document.getElementById('title').value;

		if(author === '' && title ==='') {
			printm('Please enter a title and an author first!');
		}
		else { 
                
                // url to access server
                let url = 'https://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key=sHx2P';
                
                url+= '&title=' + title + '&author=' + author;
               
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
                           
                            let listen = document.getElementById('books');
                            
                            listen.getElementsByTagName('li').outerHTML = "";
                            
                            printm('The book: '+title+' by '+author+' was added.');
          
                            
       
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



/************************************************************************************************* */
// Add a book by mouse clicking on a google-search result.

window.addEventListener('load', function() { // so shit loads and then runs.
          
    function getEventTarget(e) { 
    e = e || window.event;
	something = e.target || e.srcElement;
    return e.target || e.srcElement; 
}
    
    var ul = document.getElementById('book_reviews');
	ul.onclick = function(event) {
	    var target = getEventTarget(event);
	    var result = target.innerHTML;

        substring = "by";
        let wow = result.indexOf(substring);
	
        let titleH = result.substring((0),(wow-1));
        let authorH = result.substring((wow+3),(result.length));
   
                // url to access server
                let url = 'https://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key=sHx2P';
                
                url+= '&title=' + titleH + '&author=' + authorH;
               
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
                           
                         target.style.backgroundColor = '#5cb85c';   
                            
                      printm('The book: '+titleH+' by '+authorH+' was added.');
       
                        } else {
// status message - Server Bad
                            
                            printm(json.status +', ' + json.message);
                         
                        }

                    } else if (ajax.status != 200) {  
// status message - Server Bad
                             printm('server error');
                             
                    }

                };  //end ajax
            ajax.send(); 
          
      }; // end listener
                 
      });

