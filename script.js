
 
 

function EX1() {
	var EnteredNumb = prompt("Enter a Number!");
	var Numb = parseInt(EnteredNumb)
	var total = 0;
	for (i = 1; i <= Numb; i++) { 	
		total += i;
	};
	console.log("Your Lucky Number is: " + total);
	alert("Your Lucky Number is: " + total);
}

function EX2() {
	var EnteredWord = "";
	var FinalWord = "";
	do{
		EnteredWord = prompt("Enter a Word.");
		var FinalWord = FinalWord.concat(" " + EnteredWord); 
	}
	while (confirm("Do you want to play?") == true) 
	console.log(FinalWord);
}


function EX3() {
	
}


function EX4() { 

}