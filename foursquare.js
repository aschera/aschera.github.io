
    
    //foursquare needs id!
    //client id:RHPTHZQRVD1O3M0AX3SREE4QJWLPPAEIFJAOGZHTTWT12A4W
    // client secret: U4SDRN4NDPX3EZSXSIK44ZZCWIT01FGS54PE3EGF2VSYD53X
    
    //test country
    var result_country = {name: 'Sweden', lat:41.878114, lng:-87.629798, city: 'Tallin'}; 
    
    
		window.addEventListener('load', function() {   // so shit loads and then runs.
            
            
			let button = document.getElementById('button');
			button.addEventListener('click', function() {
                
				// DOM-element to display results in.
				let status = document.getElementById('1');
				let res = document.getElementById('2');
                let all_json = document.getElementById('3');
			
// URL Foursquare
				let url = 'https://api.foursquare.com/v2/venues/search?';

                       // 'https://api.foursquare.com/v2/venues/explore? client_secret=****&client_id=****&v=20161101&limit=50&near=San Francisco, CA&section=food&offset=' 
                        
                        
                //date
                url += 'v=' + '20170221' + '&';
                
                //limit 5
                url += 'limit=' + 50 + '&';
                
                // coordinates
				//url += 'll=' + result_country.lat + ',' + result_country.lng + '&';
                
                // near city
                url += 'near=' + result_country.city + '&';

                //radius
                let radius = 200;
                url += 'radius=' + radius + '&';
                
                //what
                let categoryId = 'coffee' + '&';
				url += 'query=' + categoryId;
                
                //identification
                url += 'client_id=RHPTHZQRVD1O3M0AX3SREE4QJWLPPAEIFJAOGZHTTWT12A4W&client_secret=U4SDRN4NDPX3EZSXSIK44ZZCWIT01FGS54PE3EGF2VSYD53X';
                
                
                console.log (url);
                
				// AJAX request Foursquare
				let ajax = new XMLHttpRequest();
				ajax.open('get', url);
				ajax.onreadystatechange = function() {
					if( ajax.status == 200 && ajax.readyState == 4 ) {
                        
						// AJAX success
						let json = JSON.parse(ajax.responseText);
						status.innerHTML = 'foursquare good';

                        //res.innerHTML = 'response is: ' + json.response.venues ;
                        
                        for (i = 0; i < json.response.venues.length; i++ ) {
                            
                        var node = document.createElement("LI");                 
                        var textnode = document.createTextNode('name: ' + json.response.venues[i].name + '. Adress: ' + json.response.venues[i].location.address + '. Count: ' + json.response.venues[i].id.likes);         
                        node.appendChild(textnode);                              
                        document.getElementById("list").appendChild(node);     
                        }
                        
                        
						//console.log(`${ajax.responseText}`);
                        all_json.innerHTML = ajax.responseText;
					}
					else if( ajax.status != 200 ) {
						status.innerHTML = 'Error';
					}
				};
				ajax.send();
                
                
                
                
                
                
                
                
                
              
                
                

			});
            
            
            

		});  

                  

