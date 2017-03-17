// error message bar text function
function printm(m) {

  let con = document.getElementById('status_field_v');
  let list = con.getElementsByTagName('pre');
  
  if( list.length === 0) { 
      let e = document.createElement('pre');
        e.style.backgroundColor = '#9fa8a3';
        e.style.color = '#f1dcc9';
        e.innerText = m;
        con.appendChild(e);
    } else if (list.length > 0) {
        document.getElementsByTagName('pre')[0].innerHTML = m;
        
    }
    };


// current selected book function
function currentBook(title,author) {

  let con = document.getElementById('status_field_selection');
  let list = con.getElementsByTagName('pre');
  
  if( list.length === 0) { 
      let e = document.createElement('pre');
        e.style.backgroundColor = '#9fa8a3';
        e.style.color = '#f1dcc9';
        e.innerText = title + ' by ' + author;
        con.appendChild(e);
    } else if (list.length > 0) {
        document.getElementsByTagName('pre')[0].innerHTML = title + ' ' + author;
        
    }
    };


//display or hide content
function mySecret(ele) {
    document.getElementById(ele).style.display = "block";
}


// server not responding function - popup annoyance
function myFunction() {
    confirm("The server didnt respond. Please Try again!");
}


// fucntion to switch from one menu tab to another
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
	x[i].style.color = "red";
  
    }
    let tab = document.getElementById(cityName);
	tab.style.display = "block";  
	
}


