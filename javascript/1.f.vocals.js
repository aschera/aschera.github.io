
<script type="text/javascript">

var str = prompt("Which word would you like to try?", "");

var patt = new RegExp("a");
var ras = patt.test(str);

var pett = new RegExp("e");
var res = patt.test(str);

var pitt = new RegExp("o");
var ris = pitt.test(str);

var patt = new RegExp("u");
var res = patt.test(str);

    switch (true) {
      case ras:
        console.log=(ras);
        break;
      case res:
        console.log=(res);
        break;
      case ris:
        console.log=(ris);
        break;
    }





</script>
