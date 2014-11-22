function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>Line 1</p>",
"<p onClick=nextLine(2)>Line 2</p>",
"<p onClick=nextLine(3)>Line 3</p>",
"<p onClick=nextLine(4)>Line 4</p>",
"<p onClick=nextLine(5)>Line 5</p>"); 
	if(line==5){
		line=0;
	}

	document.getElementById("line").innerHTML=poem[line];
}