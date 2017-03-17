var startListening = function() {
      myFirebase.on('child_added', function(snapshot) {
        var msg = snapshot.val();
      
        var msgUsernameElement = document.createElement("b");
        msgUsernameElement.textContent = msg.username;
        
        var msgTextElement = document.createElement("p");
        msgTextElement.textContent = msg.text;
  
        var msgElement = document.createElement("div");
        msgElement.appendChild(msgUsernameElement);
        msgElement.appendChild(msgTextElement);
          
          
        msgElement.className = "msg";
        document.getElementById("results").appendChild(msgElement);
      });
    }

    // Begin listening for data
    startListening();
           