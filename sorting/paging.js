var currentPage = 0;

function nextList() {
	var res;

    firebase.database().ref('items/').once('value', function(snapshot) {res = snapshot.val()});

    var keys = Object.keys(res).sort();
	let howMany = document.getElementById('howmany').value;
	let count = Number(howMany); 
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

        console.log('pages', pages);
	
		let pageX = pages[currentPage];
		console.log(currentPage);

		let items = document.getElementById('items');
		items.innerHTML = '';

		Object.keys(pageX).forEach(function(key) {
		addItem(pageX[key]);
		
		});

	
	
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
                tr.innerHTML = `
			<td >${data.name}</td> 
			<td>${data.type}</td> 
			<td>${data.amount}</td>
			<td>${data.price}</td> 
			`;
                items.appendChild(tr);
            }
