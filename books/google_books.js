

        // Check google books
        window.addEventListener('load', function() { // so shit loads and then runs.
            let button = document.getElementById('search_g');
            
            let book_search_field = document.getElementById('book_reviews');
            
            let author = document.getElementById('author').value;
            
            let title = document.getElementById('title').value;

            button.addEventListener('click', function() {
                
                // MAKE tests to see if values are met!!!!
                
                
                // url to access server
                let url = 'https://www.googleapis.com/books/v1/volumes?q=';
                
                url+= title + '+' + author;
   
                // AJAX request 
                let ajax = new XMLHttpRequest();

                ajax.open('GET', url);
  
                ajax.onreadystatechange = function() {
           
                    if (ajax.status == 200 && ajax.readyState == 4) {
                        
                        let json = JSON.parse(ajax.responseText);
                            console.log(json);
                        book_search_field.innerHTML = json.items[0].volumeInfo.title + ' by ' + json.items[0].volumeInfo.authors;

                    } else if (ajax.status != 200) {  

                             console.log(ajax.responseText);
                           
                    }

                };  //end ajax
            ajax.send();
                
            } // button event listener done
        
        )}); // window event listener done
