				// DOM-element to display results in.
				let status = document.getElementById('1');

                // url to access server
				let url = 'https://www.forverkliga.se/JavaScript/api/crud.php?requestKey';
                
				// AJAX request 
				let ajax = new XMLHttpRequest();
				ajax.open('get', url);
				ajax.onreadystatechange = function() {
					if( ajax.status == 200 && ajax.readyState == 4 ) {
                        
                        //parse string to object
                        let json = JSON.parse(ajax.responseText);
                            
						// AJAX success report
                        console.log('ajax succes');
                        
                        // Ajax response
                        console.log(json); // Object {status: "success", key: "dJgPb"}
					}
					else if( ajax.status != 200 ) {
                        // AJAX failiure report
						console.log('ajax error');
					}
				};
				ajax.send();