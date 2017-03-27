
/* ******************* update database with likes or dislikes ****************************** */

function like(key) {
    
let url = 'https://mein-chat.firebaseio.com/';
url += key + '/' + 'text' + '/' + 'like';
    
var upvotesRef = new Firebase(url);
                                  
upvotesRef.transaction(function (current_value) {
  let result = ((current_value || 0) + 1);

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












/* ***************** update buttons ************************** */

function listenToVotes (key,id) {
    
let url = 'https://mein-chat.firebaseio.com/';
url += key;
    
var votes = new Firebase(url);
    
votes.once('value').then(function(snapshot) {
    
  var username = (snapshot.val().text[0]) + 1;
   
  var number = snapshot.val().text.like;
  
  if (number === undefined) {
      number = 1;
  }
  let button = document.getElementById(id);
    console.log('id: ' + id);
    
    console.log(button);
  button.innerHTML = number;

});
};


function listenToVotes2 (key,id) {
    
let url = 'https://mein-chat.firebaseio.com/';
url += key;
    
var votes = new Firebase(url);
    
votes.once('value').then(function(snapshot) {
    
  var username = (snapshot.val().text[0]) + 1;
   
  var number = snapshot.val().text.dislike;
  
  if (number === undefined) {
      number = 1;
  }
  let button = document.getElementById(id);
    console.log('id: ' + id);
    
    console.log(button);
  button.innerHTML = number;

});
};