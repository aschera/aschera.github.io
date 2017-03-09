// key RGQodFKJ5ALvdp95DU4oA
        
let author = 'Ernest%20Cline';
 let title = 'Ready%20Player%20One';
                
 // Get the reviews for a book given a title string
 let url = 'https://www.goodreads.com/search/index.xml?key=RGQodFKJ5ALvdp95DU4oA&q=';  
        
 url+= title;
        
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
