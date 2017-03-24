 
function like(name) {
    this.username = name;
    
    var hopperRef = myFirebase.child(name);
    hopperRef.update({
      "like": "yes"
    });
    
	};



function dislike(name) {
    this.username = name;
    
    var hopperRef = myFirebase.child(name);
    hopperRef.update({
      "dislike": "yes"
    });
    
	};
    
