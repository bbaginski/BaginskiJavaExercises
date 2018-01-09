
 
 

function EX1() {
	var EnteredNumb = prompt("Enter a Number!");
	var Numb = parseInt(EnteredNumb)
	var total = 0;
	for (i = 1; i <= Numb; i++) { 	
		total += i;
	};
	console.log("Your Lucky Number is: " + total);
	alert("Your Lucky Number is: " + total)
}

function EX2() {
	var EnteredWord = "";
	var FinalWord = "";
	do{
		EnteredWord = prompt("Enter a Word."); 
		if (EnteredWord != "") {
			FinalWord = FinalWord.concat(" " + EnteredWord); 
		} else{
			FinalWord = FinalWord.concat(" " + "???");  
		}
	}
	while (confirm("Do you want to continue to play?") == true) 
	alert('GAME OVER');
	console.log(FinalWord);
}


function EX3() {	
	var EnteredName = prompt("Would you like to print your name? Please enter it.");	 
	var i = 1;
	if (EnteredName != "") {
		console.log("Hello. My name is " + EnteredName);		
		while (confirm("Would you like to print again?") == true)  {
			EnteredName = EnteredName + "!";
			console.log("Hello. My name is " + EnteredName);	
		};
		
	} else(
		alert("No Name Entered, Print Canceled.")
	)
	
}


function EX4() { 
	var x = false;	
	while (x == false)  {			
		var EnteredTime = prompt("What time of day is it? (morning, noon, or evening)"); 
		if (EnteredTime != null) {
			switch(EnteredTime.toLowerCase()) {
				case "morning": 
					console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
					x = true;
					break;
				case "noon": 
					console.log("Since it is noon, you should be eating lunch. We suggest a salad.");					
					x = true;
					break;
				case "evening": 
					console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
					x = true;
					break;
				default:
					alert("Please enter one of the suggested times!");
			}
		} else{			
			x = true;
		}			
	}	
}