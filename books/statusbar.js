// status bar text function
function printm(m) {
    

  let con = document.getElementById('status_field');
    
  let list = con.getElementsByTagName('pre');
  if( list.length === 0 ) { 
      let e = document.createElement('pre');
        e.style.backgroundColor = 'black';
        e.style.color = 'white';
        e.innerText = m;
        con.appendChild(e);
    };

};

