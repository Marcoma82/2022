Memory Game

<!-- https://www.youtube.com/watch?v=ec8vSKJuZTk&t=661s -->

.querySelector()
.Math.random()
.length
.createElement()
.setAttribute()
.append()
.getAttribute()
alert()
.push()
setTimeout()
.querySelectorAll()
.removeEventListener()
.textContent
.sort()
this.

/// HTML file

<!-- DONE --> In the html create a div with a class of "grid";
<!-- DONE --> Create an h with a "score:" content and a span with a id "result";
<!-- DONE --> Link css and js file to the html file;

<!-- DONE --> Create a directory with the image u want to add to the memory game with on top one card back and one card blank;

/// JavaScript

<!-- DONE --> Create an array "cardArray" with the objects with names and images "img" with the path "image/...";
<!-- DONE --> Duplicate the objects times 2 because they has to be double up for the match;

<!-- Log the cardArray to be sure they log correctly -->

<!-- DONE --> sort the array casually with a random math. Use the 0.5 - in the function

<!-- Log the cardArray to be sure they sort randomly -->

<!-- DONE --> Create a variable taking the div grid in HTML "gridDisplay";

<!-- DONE --> Create a function that

<!-- DONE --> 1 with a for loop
<!-- DONE --> 2 create a variable call "card" that contain an element for each object (an img);
<!-- DONE --> 3 set an attribute to that variable an img ("src", backcard src);
<!-- DONE --> 4 set an attribute to that variable an id ("data-id", i(from the loop))
<!-- DONE --> 5 add an event listener with a click and call the function the flipcard
<!-- DONE --> 6 use the variable gridDisplay and append the card

<!-- DONE --> Call the function

<!-- /// -->

<!-- DONE --> create a variable named cardsChosen with and empty array

<!-- DONE --> create a function for flip the card

<!-- DONE --> 1 create a variable "cardId" and use this attribute to call the data-id of the clicked card;
<!-- DONE --> 2 pass in the cardArray the variable that we create with the name to find the name and push the name of the object associated in the other array CardChosen.

<!-- /// -->

<!-- DONE --> 3 push into the cardChosenIds the cardIds
<!-- DONE --> 4 use this to set the attribute to change the src of the image to the actually cardid image.

5 use if to check the length of the array cardsChosen is equal 2 (use a timeout) pass the first parameter is the function "checkMatch" and the second is the time u want to wait "500ms"

<!-- DONE --> create a variable call cardChosenIds with an empty array
<!-- create 2 variables that contain the cardChosenIds -->

<!-- DONE --> create a function "checkMatch"

<!-- DONE --> 1 create a variable call "cards" and use DOM to create an array that contain all the img in the grid ("#grid img")

<!-- DONE --> 2 use if to check the cardChosenIds are clicked twice
<!-- DONE -->2.1 pick the cards[cardChosenIds] 0 and 1 and set the attribute for the img to blank
<!-- DONE --> 2.2 return an alert

<!-- DONE -->3 use if to check id the cardChosen 0 and 1 are the same if they are
<!-- DONE -->3.1 pick the cards[cardChosenIds] 0 and 1 and set the attribute for the img to blank
<!-- DONE -->3.2 remove event listener on the cards[cardChosenIds] 0 and 1
<!-- DONE -->3.3 push in the cardWon the cardChosen

<!-- DONE -->4 if anythings else happen
<!-- DONE -->4.1 set attribute to the card[optionOne and two Id] to the backcover image
<!-- DONE -->4.2 set an alert to try again
<!-- DONE -->5 set the result display to have a content of the cardWon length
<!-- DONE -->6 empty the cardChosen
<!-- DONE -->7 empty the cardChosenIds

<!-- DONE -->8 set an if statement in case the cardsWon length is match the cardArray length divide 2
<!-- DONE -->8.1 set the text result of the result display with a winning message

<!-- DONE -->create a variable with the name of resultDisplay and using the DOM to select the result id

<!-- DONE --> create a variable with the name of "cardsWon" with an empty array;

<!-- /// -->
