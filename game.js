function game() {
	this.start = function() {
		appendHeader("Welcome to the test game.");
		this.p0();
	}

	this.p0 = function() {
		appendText("You are standing by a lake. The wind is starting to ramp up and the air is begining to cool. Night is approaching.");
		presentChoice(
			{ text: "Go towards the waterfall", goto: game.p1},
            { text: "Exit to the south", goto: game.p2, showif:function() { return true; } },
			{ text: "Go north", goto: game.p3}
		);		
	}

	this.p1 = function() {
		appendText("You are at the waterfall.");
		presentChoice(
			{ text: "Go for a swim", goto: game.p4},
            { text: "Go back", goto: game.p0}
        );
	}

	this.p2 = function() {
		appendText("You travel south");
		presentChoice(
            { text: "Go back", goto: game.p0}
        );
	}

	this.p3 = function() {
		appendText("You go north");
		presentChoice(
            { text: "Go back", goto: game.p0}
		);
	}

	this.p4 = function() {
		appendText("TODO WRITE ME");
		presentChoice(
            { text: "Go back", goto: game.p0}
		);		
	}
}