var currentPage = 1;

function showButton(x){
    
    let button = document.getElementById('nextItems');
    button.style.display = x;
}


function nextList() {
	var res;

    firebase.database().ref('items/').once('value', function(snapshot) {res = snapshot.val()});

    var keys = Object.keys(res).sort();
	let howMany = document.getElementById('howmany').value;
	var count = Number(howMany); 
    var pageLength = count;

    var pageCount = keys.length / pageLength;
    //var currentPage = 1;
    var promises = [];
    var nextKey;
    var query;
    
    
    for (var i = 0; i < pageCount; i++) {
      key = keys[i * pageLength];
      
      query = firebase.database().ref('items/').orderByKey().limitToFirst(pageLength).startAt(key);
      promises.push(query.once('value'));
    }

    Promise.all(promises)
      .then(function (snaps) {
        
        
        
        var pages = [];
        
        
        snaps.forEach(function (snap) {
          pages.push(snap.val());
        });

		let pageX = pages[currentPage];
       
        
        try{
            var size = Object.keys(pages[currentPage]).length;
        }
        catch (Error){
            showButton('none');
            console.log('no more pages');
        }
       
		let items = document.getElementById('items');
		items.innerHTML = '';
       
            
          if(size > 0) {
           
            Object.keys(pageX).forEach(function(key) {
		      addItem(pageX[key]);
                
            });
          }
            
       currentPage = currentPage +1;

	/*
	Object.keys(pageone).forEach(function(key) {
    	console.log(key, pageone[key]);
	});
	Object.keys(pagetwo).forEach(function(key) {
    	console.log(key, pagetwo[key]);
	});*/



})};




function addItem(data) {
                let items = document.getElementById('items');
                let tr = document.createElement('tr');
                tr.style.margin = '1em';
		tr.style.color = 'black';
		
                tr.innerHTML = `
			<td style="padding:1em;" >${data.name}</td> 
			<td style="padding:1em;" >${data.type}</td> 
			<td style="padding:1em;"  >${data.amount}</td>
			<td style="padding:1em;" >${data.price}</td> 
			`;
                items.appendChild(tr);
            }
