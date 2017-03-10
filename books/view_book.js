
        // View book data
        window.addEventListener('load', function() { // so shit loads and then runs.
            let button_view = document.getElementById('button2');
            
            button_view.addEventListener('click', function() {

                // url to access server
                let url = 'https://www.forverkliga.se/JavaScript/api/crud.php?op=select&key=sHx2P';

                // AJAX request 
                let ajax2 = new XMLHttpRequest();

                ajax2.open('get', url);
  
                ajax2.onreadystatechange = function() {
   

                    if (ajax2.status == 200 && ajax2.readyState == 4) {
                        //parse string to object
                        let json2 = JSON.parse(ajax2.responseText);

                        // check is status = error
                        if (json2.status !== 'error') {
                            
                            console.log('server is all good!');
                            
    // status message - Server OK
                             printm('You are now viewing a list of all the books stored.');
 
                            for (i=0; i < json2.data.length; i++) {
                                
                            var node = document.createElement("LI");
                            node.className += " list-group-item";
                               console.log('title is:' + json2.data[i].title); 
                               
                            var textnode = document.createTextNode('id: ' + json2.data[i].id + ', title:  ' + json2.data[i].title  + ', Author:  ' + json2.data[i].author  + ', updated:  ' + json2.data[i].updated + '.');         
                            node.appendChild(textnode);                              
                            document.getElementById("books").appendChild(node);
                         
                            }
                            
                            console.log(ajax2.responseText);
                            

                        } else {
                            console.log('server is no good');
                            console.log(json2);
                            
        // status message - Server BAD
                            printm('BAD');
                            myFunction();
                        }

                    } else if (ajax2.status != 200) {
                        // AJAX failiure report
                        console.log('ajax error');
                    }

                };  //end ajax
            ajax2.send();
                
            } // button event listener done
        
        )}); // window event listener done
