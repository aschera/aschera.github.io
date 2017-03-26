
function like(key) {
    
let url = 'https://mein-chat.firebaseio.com/';
url += key + '/' + 'text' + '/' + 'like';
    
var upvotesRef = new Firebase(url);
                                  
upvotesRef.transaction(function (current_value) {
  let result = (current_value || 0) + 1;
    
 listenToLikes(key);
    
  return result;
});
   
};


function dislike(key) {
    
let url = 'https://mein-chat.firebaseio.com/';
url += key + '/' + 'text' + '/' + 'dislike';
    
var downvotesRef = new Firebase(url);
                                  
downvotesRef.transaction(function (current_value) {
  let result = (current_value || 0) + 1;
    
  return result;
});
   
};



var listenToLikes = function(key) {
    
let url = 'https://mein-chat.firebaseio.com/';
url += key;
    
var votes = new Firebase(url);
    
votes.once('value').then(function(snapshot) {
    
  var username = snapshot.val().username;
  console.log(username); // good!

  var likes = snapshot.val().text.like;
  console.log(likes); // good!
});
};