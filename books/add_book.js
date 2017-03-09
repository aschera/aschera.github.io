
        // Add a book
        window.addEventListener('load', function() { // so shit loads and then runs.
            let button = document.getElementById('button');
            let author = document.getElementById('author').value;
            let title = document.getElementById('title').value;

            button.addEventListener('click', function() {
                
                
                // url to access server
                let url = 'https://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key=KA2zP';
                
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
                            let title = document.getElementById('title').value;
                            let author = document.getElementById('author').value;
                            printm('The book: '+title+' by '+author+' was added.');
                            currentBook(title,author);
                            console.log(json);
       
                        } else {
// status message - Server Bad
                            console.log(json);
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
