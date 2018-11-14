var usedNums = new Array(options.length); // Get the number of options

function fillBoard() {
	// loop through each square 
	for(var i=0; i < 24; i++) {
		setSquare(i); // for each square, set it using the setSquare function
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;	

	do {
	// do-while loop: get a new option to fill the square with from the list of unused squares.
	// The "do" loop happens until it finds a value that results in False (meaning its unused).
	// This is probably an easy area for improvement of this system
		newNum = Math.floor(Math.random() * Math.floor(options.length));
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true; // Note that we've used this option, so it is ineligible for future squares
	document.getElementById(currSquare).innerHTML = options[newNum]; // Put this text into the square, then move to the next one
}

function anotherCard() {
	// This resets the options pool then starts the fillBoard function
	for(var i=0; i<usedNums.length; i++) {
		usedNums[i] = false;
	}
	fillBoard();
}