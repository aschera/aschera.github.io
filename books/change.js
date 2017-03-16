/* radio check listener */

var changeHandler = (function initChangeHandler() {
    var previousCheckedRadio = null;
    
    function logInfo(info) {
        if (!console || !console.log) return;
            
        console.log(info);
    }
    
    function logPrevious(element) {
        if (!element) return;
            
        var message = element.value + ' was unchecked';
        
        let the_li = previousCheckedRadio.value; // the li that was selected previousCheckedRadio
        document.getElementById(the_li).style.backgroundColor = '#e3e0cf';
        logInfo(message);
    }
    
    function logCurrent(element) {
        if (!element) return;
            
        var message = element.value + ' is checked';
        
        
        logInfo(message);
    }
    
    var result = function (event) {
        var currentCheckedRadio = event.target;
        var name = currentCheckedRadio.name;
        
        if (name !== 'views') return;
            
        logPrevious(previousCheckedRadio);
        logCurrent(currentCheckedRadio);
        
        previousCheckedRadio = currentCheckedRadio;
        
        // change text fields.
        let title = document.getElementById('V_title'); ;
        let author = document.getElementById('V_author');;
        
        // passing new data into them
        let the_li = currentCheckedRadio.value; // the li that is selected
        let element = document.getElementById(the_li).innerText; // the li that is selected
        
        let new_id = element.substring(5, element.indexOf(','));
        let new_title = element.substring( element.indexOf("e:") + 3, element.indexOf(" A") + -1 );
        let new_author = element.substring( element.indexOf("r:") + 3, element.length );
        
        document.getElementById('V_title').value = new_title;
        document.getElementById('V_author').value = new_author;
        
        document.getElementById(the_li).style.backgroundColor = '#9fa8a3';
    };
    
    return result;
})();

document.addEventListener('change', changeHandler, false);









/*********************************************************************************************** */
// click and write on spans


    
    
        
        function clickChange() { 
            
        var elts = document.getElementsByClassName('editable');
    
        for (var i = 0; i < elts.length; ++i) {
            
        let itme = elts[i].innerText;
        
        elts[i].innerHTML = '<input type="text" value=" ' + itme + ' "/>';
        
        }
        
        
    }

    


/*var textInputElement = document.getElementById('textInput');
      nameDivElement = document.getElementById('nameDiv');
      textInputElement.addEventListener('keyup', function(){
        var text = textInputElement.value;
        nameDivElement.innerHTML = text;
      });
      */
