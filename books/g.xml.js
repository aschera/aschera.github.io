<script>
let author = 'Ernest%20Cline';
 let title = 'Ready%20Player%20One';
                
 // Get the reviews for a book given a title string
 let url = 'https://www.goodreads.com/book/title.jsonp?key=UbcveEn4lwZc7stWIyiWQ&author=';  

console.log(url);


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xml) {
  
  var xmlDoc = xml.responseXML;
  console.log(xmlDoc);
}
</script>