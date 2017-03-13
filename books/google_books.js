


        // Check google books
        window.addEventListener('load', function() { // so shit loads and then runs.
            let button = document.getElementById('search_g');
            
            let book_search_field = document.getElementById('book_reviews');
      
            button.addEventListener('click', function() {
                
           let author = document.getElementById('S_author').value;
           let title = document.getElementById('S_title').value;
                
            if(author.length === 0  & title.length === 0) {
                printm('Please specify a title and author before you search!');
            } else {
                
                // url to access server
                let url = 'https://www.googleapis.com/books/v1/volumes?q=';
                
                url+= title + '+' + author;
   
                // AJAX request 
                let ajax = new XMLHttpRequest();

                ajax.open('GET', url);
  
                ajax.onreadystatechange = function() {
                   
                    if (ajax.status == 200 && ajax.readyState == 4) {
                        
                        let json = JSON.parse(ajax.responseText);
                        console.log(json.items.length);
                        for (i=0; i<json.items.length;i++){
                            
                            let e = document.createElement('pre');
                            
                            e.innerHTML = json.items[i].volumeInfo.title + ' by ' + json.items[i].volumeInfo.authors;
                            
                       
                            book_search_field.appendChild(e);
                        }
                        
                        printm('You found books matching your query');

                    } else if (ajax.status != 200) {  
                        printm('Error! Try again.');
                           
                    }

                };  //end ajax
            ajax.send();
            
            };
                
                
                
        
                
                    
                
            } // button event listener done
        
        )}); // window event listener done
