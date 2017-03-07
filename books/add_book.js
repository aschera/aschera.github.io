
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
                            console.log('server is all good!');
                            
                            // response for success looks like this: 
                            //Object { status: "success", id: 115 }
                            status = 'good';
// status message - Server OK
                            printm('OK');
                            console.log(json);
                            

                        } else {
                            console.log('server is no good');
                            myFunction();
                        }

                    } else if (ajax.status != 200) {
                        // AJAX failiure report
                        console.log('ajax error');
// status message - Server Bad
                             printm('BAD');
                             myFunction();
                    }

                };  //end ajax
            ajax.send();
                
            } // button event listener done
        
        )}); // window event listener done
