 window.addEventListener('load', function() { // so shit loads and then runs.
     
        
        // Read value from storage, or empty array
        names = JSON.parse(localStorage.getItem('locname') || "[]");

        
        // load the values into a select menu
        //loadSelectList();
        
     
        if (names.length === 0) {
            console.log ('no one logged in');
        }
        else {
            document.getElementById('username').value = names[0].name;
            console.log ('someone logged in: ' + names[0].name);
            logIn();
        }
     
 });

/* ************************ Log in via SELECT **************************** */

        function logIn2() {
		let n = document.getElementById("saved_names").selectedIndex;
        let t = document.getElementsByTagName("option")[n].value;
        
		if(n >= 1) {
			
			   let loginwindow = document.getElementById('logInWindow');
			    loginwindow.style.display = 'none';
			    
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
		if(n.length >= 1) {
			
			   let loginwindow = document.getElementById('logInWindow');
			    loginwindow.style.display = 'none';
            
                let GreetingHeader= document.getElementById('greeting');
			    GreetingHeader.style.display = 'none';
            
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
            
                localStorage.setItem('username', JSON.stringify(usernameInput.value));
            
               // Begin listening for data
               startListening();
		}
		else {
			console.log('please enter a username');
			window.alert('please enter a username');
		}
        
};