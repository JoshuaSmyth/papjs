	var GAMESTATE = {
		READING: 0,
		WAITING_INPUT:1
	}
	var CURRENTGAMESTATE = GAMESTATE.READING;
	var activeChoice;
    
    function handleChoice(choiceIndex) {
        if (choiceIndex <= activeChoice.length) {
            
            var selectedItem = activeChoice[choiceIndex-1];
            appendText('<br>');
            appendText('<br>');
            appendText('<i>' + selectedItem.text + '</i>');
            var func = selectedItem.goto;
            activeChoice = null;
            func();
        }    
    }
    
    function removeOldClickHandlers() {
        var x = document.getElementsByClassName("choice");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].onclick = undefined;
            x[i].className = 'chosen';
        }
    }
    
	document.onkeydown = function(evt) {
		if (activeChoice) {
    		evt = evt || window.event;
    		if (evt.keyCode > 48 && evt.keyCode <= 57) {
        		var choiceIndex = evt.keyCode - 48;
                handleChoice(choiceIndex);
    		}
    	}
	};