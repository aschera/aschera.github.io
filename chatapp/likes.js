let likeCount = 0;

let dislikeCount = 0;




function like(key) {
    
let url = 'https://mein-chat.firebaseio.com/';
url += key + '/' + 'text' + '/' + 'like';
    
var upvotesRef = new Firebase(url);
                                  
upvotesRef.transaction(function (current_value) {
  let result = (current_value || 0) + 1;
    likeCount = result;
    console.log('like is ' + likeCount);
  return result;
});
   
};


function dislike(key) {
    
let url = 'https://mein-chat.firebaseio.com/';
url += key + '/' + 'text' + '/' + 'dislike';
    
var downvotesRef = new Firebase(url);
                                  
downvotesRef.transaction(function (current_value) {
  let result = (current_value || 0) + 1;
    dislikeCount = result;
    console.log('dislike is ' + dislikeCount);
  return result;
});
   
};

function updatebutton() {
    console.log('need updating');
}
