//1. Write a program that takes a positive integer from user & display the following in your browser.
document.write("<h4>1. Write a program that takes a positive integer from user & display the following in your browser.</h4>");
var num=prompt("Please enter a number:(ie:123.587) ");
document.write("You entered : "+num+"<br>");
document.write("round-off value: "+Math.round(num)+"<br>");
document.write("Floor value: "+Math.floor(num)+"<br>");
document.write("Ceil value: "+Math.ceil(num)+"<br>");

//2. Write a program that takes a negative floating point
document.write("<h4>2. Write a program that takes a negative floating point</h4>");
var nnum=prompt("Please enter a negative floating number: (i.e -1.258)")
document.write("You entered : "+nnum+"<br>");
document.write("round-off value: "+Math.round(nnum)+"<br>");
document.write("Floor value: "+Math.floor(nnum)+"<br>");
document.write("Ceil value: "+Math.ceil(nnum)+"<br>");

//3. Write a program that displays the absolute value of a number.
document.write("<h4>3. Write a program that displays the absolute value of a number.</h4>");
var numb=prompt("Please enter a negative floating number: (i.e -4)");
document.write("Absolute Value: "+Math.abs(numb));

//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
document.write("<h4>4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:</h4>");
document.write("Dice says: "+Math.floor((Math.random()*6)+1));

//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
document.write("<h4>5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser</h4>")
var toss=Math.floor((Math.random()*2)+1);
if(toss===2)
document.write(toss+"<br>Random coin value: Heads");
else if(toss===1)
document.write(toss+"<br>Random coin value: Tails");

//6. Write a program that shows a random number between 1 and 100 in your browser.
document.write("<h4>6. Write a program that shows a random number between 1 and 100 in your browser.</h4>");
document.write("Random number between 1 and 100: "+Math.floor((Math.random()*100)+1));

//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
document.write("<h4>7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.Possible user inputs can be:</h4>");
var weight=prompt("Please enter your weight in Kilograms");
var a=parseFloat(weight);
document.write("Your weight is: "+a+"<br>");

//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
//document.write("<h4>8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.</h4>");
var secret=6;
var t=prompt("Game time! Choose from 1-10: ");
if (t===secret)
{
alert("Congrats! You won!!!");
}
else
{
alert("Better luck next time!");
}


