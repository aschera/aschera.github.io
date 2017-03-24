 window.addEventListener('load', function() { // so shit loads and then runs.
     
        
        // Read value from storage, or empty array
        names = JSON.parse(localStorage.getItem('locname') || "[]");

        console.log(names);
     
       
        // load the values into a select menu
        loadSelectList();
     
 });

/* ************************ Log in via SELECT **************************** */

        function logIn2() {
		let n = document.getElementById("saved_names").selectedIndex;
        let t = document.getElementsByTagName("option")[n].value;
        
		if(n >= 1) {
			
			   let loginwindow = document.getElementById('logInWindow');
			    loginwindow.style.display = 'none';
			    
			    console.log('yes');
			    let results = document.getElementById('results');
			    results.style.display = 'block';

			    let inputText = document.getElementById('text');
			    inputText.style.display = 'inline-block';
			    
			    let postButton = document.getElementById('post');
			    postButton.style.display = 'inline-block';
            
                let writeText = document.getElementById('textline');
			    writeText.style.display = 'inline-block';
                
                let seeText = document.getElementById('chat_text');
			    seeText.style.display = 'inline-block';
			    
			    let loginInfo = document.getElementById('logininfo');
			    loginInfo.style.display = 'inline-block';
		
			    let logoutbutton = document.getElementById('logout');
			    logoutbutton.style.display = 'inline-block';
            
                let n = document.getElementById("saved_names").selectedIndex;
                let t = document.getElementsByTagName("option")[n].value;
                document.getElementById('loginname').innerText = t;
		}
		else {
			console.log('please enter a username');
			window.alert('please enter a username');
		}

         
};
   /* ************************ Log in via TEXTFIELD **************************** */

        function logIn() {
		let n = document.querySelector('#username').value;
		if(n.length > 1) {
			console.log(document.querySelector('#username'));
			   let loginwindow = document.getElementById('logInWindow');
			    loginwindow.style.display = 'none';
			    
			    console.log('yes');
			    let results = document.getElementById('results');
			    results.style.display = 'block';

			    let inputText = document.getElementById('text');
			    inputText.style.display = 'inline-block';
			    
			    let postButton = document.getElementById('post');
			    postButton.style.display = 'inline-block';
            
                let writeText = document.getElementById('textline');
			    writeText.style.display = 'inline-block';
                
                let seeText = document.getElementById('chat_text');
			    seeText.style.display = 'inline-block';
			    
			    let loginInfo = document.getElementById('logininfo');
			    loginInfo.style.display = 'inline-block';
		
			    let logoutbutton = document.getElementById('logout');
			    logoutbutton.style.display = 'inline-block';
			    
			    document.getElementById('loginname').innerText = usernameInput.value;
            
               // Begin listening for data
               startListening();
		}
		else {
			console.log('please enter a username');
			window.alert('please enter a username');
		}
        
};