

        // Add a book
        window.addEventListener('load', function() { // so shit loads and then runs.
            let button = document.getElementById('button');
     
            button.addEventListener('click', function() {
                
            let author = document.getElementById('author').value;
            let title = document.getElementById('title').value; 
                
                // url to access server
                let url = 'https://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key=sHx2P';
                
                url+= '&title=' + title + '&author=' + author;
                console.log(url);
                
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
                            console.log(listen);
                            listen.getElementsByTagName('li').outerHTML = "";
                            
                            printm('The book: '+title+' by '+author+' was added.');
                            currentBook(title,author);
                            
       
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
                
            } // button event listener done
        
        )}); // window event listener done
