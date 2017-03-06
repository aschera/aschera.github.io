/*Chess board */

var line= '';


for (var b=0; b<8; b++;){
	if (b % 0 ===0)
		for (var a=0; a<8; a++){
			if (a%2 ===0){
			line = line+ '';
			}else (a%2 ===1){
			line = line+ '#';
			}
}else (b % 0 ===1)
		for (var a=0; a<8; a++){
			if (a%2 ===0){
			line = line+ '#';
			}else (a%2 ===1){
			line = line+ '';
			}
}
line = line +'backslash n';
}
