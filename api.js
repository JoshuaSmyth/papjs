	var storybook = document.getElementById('storybook');
	
	var appendText = function(text) {
		storybook.insertAdjacentHTML('beforeend', '<div>' + text + '</div>');
	}
    
	var appendHeader = function(text) {
		storybook.insertAdjacentHTML('beforeend', '<div><h2>' + text + '</h2></div>');
	}

	var presentChoice = function() {
        
        removeOldClickHandlers();
        
        var choices = arguments;
        appendText('<hr>');
		appendText('What will you do now?');
		appendText('<br>');

        var filteredChoices = new Array();
		for(var i in choices) {
            var choice = choices[i];
            
            if (choice.showif === undefined) {
                filteredChoices.push(choice);
            } else {
                var onlyiftype = typeof choice.showif;
                console.log(onlyiftype);
                if (onlyiftype === 'function') {
                    if (choice.showif()) {
                        filteredChoices.push(choice);
                    }
                }
                if (onlyiftype === 'boolean') {
                    if (choice.showif) {
                        filteredChoices.push(choice);
                    }
                }
            }
		}
        
		var c = 1;
		for(var i in filteredChoices) {
            var choice = filteredChoices[i];
            
            var text = c + ". " + choice.text
            storybook.insertAdjacentHTML('beforeend', '<div class="choice" onclick="handleChoice(' + c + ')">' + text + '</div>');
			c++;
		}

		activeChoice = filteredChoices;
        appendText("<br>");
		scroll();
	}

    var scroll = function() {
        var lastPos = window.pageYOffset;
        var timerID = setInterval(function() {
            window.scrollBy(0, 1);
            var newPos = window.pageYOffset;
            if(lastPos === newPos)
                clearInterval(timerID);
            }, 2);		
	}