Whac a Mole

html

<!-- make a boilerpalte -->
<!-- link css and js -->
<!-- create a h2 with a textcontent of Yourscore: -->
<!-- create a h2 with a id of score and text content 0 -->
<!-- create a h2 with id of score and text 0 -->
<!-- create a h2 with the id of time-left and textcontent of 60 -->
<!-- create a div with the class of "grid" with inside 9 div with the class of square and and id of 1 to 9 -->

css

<!-- create the square for the grid div with an width and height -->
<!-- display in a way they fit in a 9\*9 board -->
<!-- create a style for each square with a height and width -->
<!-- create border for each square -->
<!-- add a style for a class mole with a background blue -->

js

<!-- variable declaration -->

<!-- create a variable "squares" and grab all the square with the class square. -->
<!-- create a variable "mole" and grab the class of mole from the html -->
<!-- create a variable "timeLeft with the id of time-left -->
<!-- create a variable "score" and grab the id of score -->

<!-- create a variable "result" equal 0 -->
<!-- create a variable hitPosition -->

<!-- function declaration -->

<!-- 1.0 create a function "randomSquare" grab all the squares and for each square -->
<!-- 1.1 remove the class of mole from the square -->
<!-- 1.2 create a variable "randomSquare" that pick random square from the square array -->
<!-- 1.3 add the class to "mole" to the randomSquare -->
<!-- 1.4 assign to the hitPosition the value of randomSquare id -->

<!-- 2.0 create a function "moveMole" that -->
<!-- 2.1 create a variable "timerId" equal null -->
<!-- 2.2 set an interval of 500ms that call the function randomSquare -->

<!-- call the function randomSquare until u call the function moveMole -->

<!-- call the function moveMole -->

<!-- 3.0 create a for each loop on the squares that take a square and -->
<!-- 3.1 add and event listener to that square and when mousedown and -->
<!-- 3.2 if the square id equal the hitPosition then -->
<!-- 3.3 add 1 to the result -->
<!-- 3.4 assign the text content of the score to the result -->
<!-- 3.5 clear the hitPosition content with null -->

create a variable currentTime equal 60

4.0 create a function countDown that
4.1 decrease 1 the currentTime
4.2 assign the content of timeLeft with the currentTime
4.3 if the current time equal 0
clear the interval of the CountDownTimerId
set an alert of game over with the final score

create a variable CountDownTimerId and assign a set interval of 1second for the countdown function
