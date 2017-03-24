    
 /* ************************ log out **************************** */
	 function forgetData() {

        let name = document.getElementById('loginname').innerText;
	    
        localStorage.clear();
        
        loadSelectList();
		location.reload();
        
        
        };


/* ************************ ADD items to dropdown list **************************** */
    
function loadSelectList() {
    if (names.length > 1) {
        for (i = 0; i < names.length; i++) {
            let item = document.getElementById('saved_names');
            let option = document.createElement("option");
                option.text = names[i].name;
                option.id = names[i].name;
                option.value = names[i].name;
                item.add(option);
        }
    }
}; 


 /* ************************ ADD username to localstorage **************************** */
        // Read value from storage, or empty array
        names = JSON.parse(localStorage.getItem('locname') || "[]");

        function saveData() {

            var data = document.getElementById('username').value;

            //unique ID for the user
            let id = data.length + 'id' + Math.floor((Math.random() * 100) + 1) + data;
		
            names.push({
                id: id,
                name: data
            });

            localStorage.setItem('locname', JSON.stringify(names));

            console.log(names);
        };