//1. Write a function that displays current date & time in your browser.
document.write("<h4>1. Write a function that displays current date & time in your browser.</h4>");
function cdatetime(){
    var cdt=new Date();
    document.write("Current Date and Time: "+cdt+"<br>");
}
cdatetime();

//2. Write a function that takes first & last name and then it greets the user using his full name.

function greet()
{
var fname=prompt("What is your first name?");
var lname=prompt("What is your last name?");
var space=" ";
var g="Welcome! ";
alert(g+fname+space+lname)
}
greet();

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function  add(){
    var a=+prompt("Enter a number: ");
    var b=+prompt("Enter another number: ");
    var ad=a+b;
    document.write("<h4>3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.</h4>")
    document.write("Sum of two numbers is :"+(a+b))
    +alert("Sum of two numbers: "+(a+b))
}
add();

//4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
function Calculator(){
    var num1=+prompt("Calculator,Enter a number:");
    var num2=+prompt("Calculator,Enter another number:");
    var op=prompt("Calculator,Which operation you want to perform:, (+,-,*,/,%)");
    var result;
    if(op==="+")
    {
        result=num1+num2;
    }
    else if(op==="-")
    {
        result=num1-num2;
    }
    else if(op==="*")
    {
        result=num1*num2;
    }
    else if(op==="/")
    {
        result=num1/num2;
    }
    else
    {
        result=num1%num2;
    }
    alert("Result: "+result)
    document.write("<h4>4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.    </h4>")
    document.write("Result: "+result+"<br>")
}
Calculator();

//5. Write a function that squares its argument.
function square(){
document.write("<h4>5. Write a function that squares its argument.</h4>")
    var n=+prompt("Enter a number: ");
    document.write("Square of n is: "+(n*n))
    alert("Square of "+n+" is: "+(n*n))
}
square();

//6. Write a function that computes factorial of a number.
function fictor(){
    document.write("<h4>6. Write a function that computes factorial of a number.</h4> ")
var numf=prompt("Please Enter a number: ");
var fictorial=1;
for(i=1;i<=numf;++i)
{
    fictorial=fictorial*i;
}
alert("Fictorial of "+numf+" is "+fictorial)
document.write("Fictorial of "+numf+" is "+fictorial)
}
fictor();

//7. Write a function that take start and end number as inputs & display counting in your browser.
function counting(){
    document.write("<h4>7. Write a function that take start and end number as inputs & display counting in your browser.</h4>")
    var snum=+prompt("Enter starting number for counting: ");
    var ennum=+prompt("Enter ending number for counting: ");
    document.write("Counting from "+snum+" to "+ennum+" is:<br> ")
    for(i=snum;i<=ennum;i++)
    {
       document.write(i+"<br>") 
    }
}
counting();

//8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare()
var base=+prompt("Please enter a value for Base:");
var perpendicular=+prompt("Please enter a value for Perpendicular:");

function calculateHypotenuse(base,perpendicular){
    var s=((base*base)+(perpendicular*perpendicular));
    alert("Hypotenuse: "+(Math.sqrt(s)))

    function calculateSquare(){
    var cs=+prompt("Enter a number to calculate its square: ");
    alert("Square of "+cs+" is "+(cs*cs))
    }
    calculateSquare();
}
calculateHypotenuse();

//9. Write a function that calculates the area of a rectangle.
function area(){
    document.write("<h4>9. Write a function that calculates the area of a rectangle.</h4>")
    var l=5;
    var w=10;
    var are=l*w;
    document.write("Area of Rectangle:"+are)

}
area();

//10. Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindrome(){
document.write("<h4>10. Write a JavaScript function that checks whether a passed string is palindrome or not?</h4>")
var myString="Iqra Tahir";

    /* remove special characters, spaces and make lowercase*/
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');
    
    /* Check to see if myString is a Palindrome*/
    if(removeChar === checkPalindrome){
      
      document.write("<div>"+ myString + " is a Palindrome <div>");
    }else{
      
      document.write("<div>" + myString + " is not a Palindrome </div>");
    }
}
    
palindrome();

//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function capital(){
var str = prompt("Enter a string:");
var output = str.substring(0, 1).toUpperCase() + str.substring(1);
alert("After capitalizing first letter: "+output)
}
capital();

