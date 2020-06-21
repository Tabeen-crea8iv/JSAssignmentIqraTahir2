//1. Write a program that displays current date and time in your browser.
document.write("<h4>1. Write a program that displays current date and time in your browser.</h4>");
var rightNow=new Date();
document.write("Current Date and Time:  "+rightNow+"<br>");

//2. Write a program that alerts the current month in words.For example December.
document.write("<h4>2. Write a program that alerts the current month in words.For example December.</h4>");
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[rightNow.getMonth()];
document.write("Current Month: "+n);

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
document.write("<h4>3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.</h4>");
var day = new Array(7);
day[0] = "Mon";
day[1] = "Tue";
day[2] = "Wed";
day[3] = "Thu";
day[4] = "Fri";
day[5] = "Sat";
day[6] = "Sun";
var w = day[rightNow.getDay()];
document.write("Current day: "+w);

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today
document.write("<h4>4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.</h4>");
var d= new Date();
var nm =d.getDay();
if(nm===5 || nm===6)
{
   document.write("It's fun day!");
}
else{
    document.write("Today: "+nm);

}