//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var a = prompt("What is your first name?");
var b = prompt("What is your last name?");
var c = alert("Welcome! "+a+b);

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
document.write("<h4>2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser</h4>");
var fav = prompt("What is your favourite mobile phone model?");
document.write("My favorite phone is: "+fav+"<br>Length of string: "+fav.length)+"<br>";

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser. 
document.write("<h4>3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser:</h4>");
var ind = "Pakistani";
document.write("Index of n : "+ind.indexOf("n")+"<br>");

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
document.write("<h4>4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.</h4>")
var st="Hello World";
document.write("Index of last 'l' in 'Hello World' : "+st.lastIndexOf("l")+"<br>");

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
document.write("<h4>5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.</h4>");
var sr="Pakistan";
document.write("Character at index 3 is: "+sr.charAt(3)+"<br>");

//6. Repeat Q1 using string concat() method.
var a = prompt("What is your first name?");
var b = prompt("What is your last name?");
var con = a.concat(b);
alert("Welcome! "+con);

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
document.write("<h4>7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.</h4>");
var city="Hyderabad";
document.write("City: "+city+"<br>");
var city=city.replace("Hyder","Islam");
document.write("After replacement city: "+city+"<br>");

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
document.write("<h4>8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.</h4>");
var message = "Ali and Sami are best friends.They play cricket and football together.";
var message = message.replace(/and/g,"&");
document.write(message+"<br>");

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
document.write("<h4>9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.</h4>");
var str="472";
document.write("Value: "+str+"<br>");
document.write("Type: String<br>");
var num=Number(str);
document.write("Value: "+num+"<br>");
document.write("Type: Number<br>");

//10. Write a program that takes user input. Convert and show the input in capital letters.
var input=prompt("Enter a word: ");
alert("Your entered word: "+input+"\nUpper case: "+input.toUpperCase());

//11. Write a program that takes user input. Convert and show the input in title case.
var input=prompt("Enter a word: ");
alert("Your entered word: "+input+"\nTitle case: "+input.toLocaleUpperCase());

//12. Write a program that converts the variable num to string.
document.write("<h4>12. Write a program that converts the variable num to string.</h4>")
var num = 35.36 ;
document.write("Number: "+num+"<br>");
var str=num.toString();
document.write("String: "+str+"<br>");

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
//document.write("<h4>13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. </h4>");
var username=prompt("Please enter your username:");
var index=0;
var code=username.charCodeAt(index);
if(code===33 && code===44 && code===46 && code===64)
{
alert("Please enter a valid username!");
}
else
{
alert("Your Username is: "+username);
}

//14.Write a program to enable “search by user input” in an array
//document.write("<h4>Write a program to enable “search by user input” in an array</h4>");
var A=["cake","apple pie","cookie","chips","patties"];
var cus=prompt("Welcome to ABC Bakery! What do want to Order Sir/Ma'm?","cake,apple pie,cookie,chips,patties");
var n = A.includes(cus);
if(n===A)
{
    alert(cus+" is available at our bakery at index: "+A.indexOf(cus));
}
else
{
    alert("Sorry! "+cus+" is not available at our bakery!");
}

//15. Write a program to take password as an input from user. The password must qualify these requirements:
//document.write("<h4>15. Write a program to take password as an input from user. The password must qualify these requirements:</h4>");
var pass=prompt("Please enter the password: ");
var alp=pass.charCodeAt(0);
var numb=pass.includes
var num=pass.charCodeAt(0);
if(num>=48 && num<=57)
{
alert("Password cannot start with a number.")
}
else if(pass.length<6)
{
    alert("Password should be ateast 6 characters long.");
}
else if(alp>=65 && alp<=90 && alp>=97 && alp<=122 && numb>=48  && numb<=57)
{
alert("Your entered password is correct.");
}
else{
    alert("Invalid answer!");
}

//16. Write a program to convert the following string to an array using string split method.Display the elements of array in your browser
document.write("<h4>16. Write a program to convert the following string to an array using string split method.Display the elements of array in your browser</h4>");
var university = "University of Karachi";
var arr = university.split('');
for(var i=0;i<=arr.length;i++)
{
    document.write(arr[i]+"<br>");
}

//17. Write a program to display the last character of a user input.
document.write("<h4>17. Write a program to display the last character of a user input.</h4>");
var usin=prompt("Please enter a word: ");
var res=usin.charAt(usin.length-1);
document.write(res+"<br>");

//18. You have a string “The quick brown fox jumps over thelazy dog”. Write a program to count number of occurrences of word “the” in given string.
document.write("<h4>18. You have a string “The quick brown fox jumps over thelazy dog”. Write a program to count number of occurrences of word “the” in given string.</h4>");
var str="The quick brown fox jumps over the lazy dog.";
var arra=str.split('');
var charcount=0;
for(var i=0;i<=arra.length;i++)
{
    if (arra.charAt(i)==="the" && arra.charAt(i)==="The")
    {
        charcount=charcount+1 ;
    }
    document.write("The comes :"+charcount+" times." );

}


