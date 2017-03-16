var something = '';


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

                        // status message - Server OK
                        printm('You are now viewing a list of all the books stored.');
                        
                        
                        // Hide some, show others!
                        //show!
                        let listen = document.getElementById('books');
                        listen.style.display = 'block';
                        let row_color = document.getElementById('V_bg_color');
                        row_color.style.display = 'block';
                        
                        let fields = document.getElementById('input_fields');
                        fields.style.display = 'block';
                       
                        
                         //hide!
                        let theViewButton = document.getElementById('button2');
                        theViewButton.style.display = 'none';
                        let thetitle = document.getElementById('heading_view');
                        thetitle.style.display = 'none';
				
			
                        for (i = 0; i < json2.data.length; i++) {

                            var node = document.createElement("LI");
                            node.className += " list-group-item";
                            node.id += 'check' + i;
                            
                            
                            // add a checkbox to every item.
                            var checkbox = document.createElement("INPUT");
                            checkbox.setAttribute("type", "radio");
                            checkbox.onclick = "handleClick()";
                            checkbox.value = node.id;
                            checkbox.name = 'views';
                            node.appendChild(checkbox);
                          
                            node.style.overflowX = 'scroll';
                            node.style.backgroundColor = '#e3e0cf';
                            node.style.fontSize = '1em'
                            
                            node.style.lineHeight ='1.42857143';
                            

                            var textnode = document.createTextNode(' id: ' + json2.data[i].id + ', title:  ' + json2.data[i].title + ', Author:  ' + json2.data[i].author + ', updated:  ' + json2.data[i].updated + '.');
                            node.appendChild(textnode);

                            document.getElementById("books").appendChild(node);
                            
                            //  save this items id in the global variable.
                            //something = node.id;
                        }

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
printm(json2.status + ' : ' + json2.message);
                }

            }; //end ajax
            ajax2.send();


            //delete element
            function deleteListitem() {
                document.getElementById(something).outerHTML = "";
            };
        } // button event listener done

    )
}); // window event listener done
