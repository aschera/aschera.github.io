// error message bar text function
function printm(m) {

  let con = document.getElementById('status_field_v');
  let list = con.getElementsByTagName('pre');
  
  if( list.length === 0) { 
      let e = document.createElement('pre');
        e.style.backgroundColor = 'rgba(255,0,0,0.5)';
        e.style.color = 'white';
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
        e.style.backgroundColor = 'rgba(255,0,0,0.5)';
        e.style.color = 'white';
        e.innerText = title + ' ' + author;
        con.appendChild(e);
    } else if (list.length > 0) {
        document.getElementsByTagName('pre')[0].innerHTML = title + ' ' + author;
        
    }
    };


//display or hide content
function mySecret(ele) {
    document.getElementById(ele).style.display = "block";
}