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
if(nm===0 || nm===6)
{
   document.write("It's fun day!");
}
else{
    document.write("Today: "+nm);
}

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
document.write("<h4>5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.</h4>");
var date=new Date();
if(date<=15)
{
    document.write("“First fifteen days of the month”");
}
else if(date>15)
{
    document.write("“Last days of the month”");
}

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
document.write("<h4>6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.</h4>");
var d1=new Date("Jan 1, 1970");
var d2=new Date();
var diff=d2-d1;
diff=Math.floor(diff);
document.write("Elapsed miliseconds since Jan 1 1970: : "+diff+"<br>");
var ddiff=diff/(1000*60*24);
ddiff=Math.floor(ddiff);
document.write("Elapsed minutes since Jan 1 1970:  "+ddiff);

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
document.write("<h4>7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.</h4>");
var da = new Date();
var tim = da.getTime();
if(tim<12)
{
    document.write("It's AM"+"<br>");
}
else
if(tim>=12)
{
    document.write("It's PM"+"<br>");
}

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
document.write("<h4>8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable namedlaterDate.</h4>");
var laterDate=new Date("Dec 31, 2020");
document.write("Later Date : "+laterDate+"<br>");


//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
document.write("<h4>9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?</h4>");
var sdate= new Date("June 18,2015");
var diff=da-sdate;
var sdiff=diff/(1000*60*60*24);
sdiff=Math.floor(sdiff);
document.write("Ramadan was "+sdiff+" days ago.");

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
document.write("<h4>10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.</h4>");
var bdate=new Date("Jan 1 2015 00:00:00 GMT+0500 (PKT)");
var rdate=new Date("Dec 5 2015 22:50:16 GMT+0500 (PKT)");
var bdiff=rdate-bdate;
bdiff=Math.floor(bdiff);
document.write(bdiff+" seconds have passed since beginning of 2015 and reference date Sat Dec 5 2015 22:50:16");

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
document.write("<h4>11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.</h4>");
var ddate=new Date();
ddate.setUTCHours(ddate.getUTCHours()-1);
document.write("Time before 1 hour was: "+ddate+"<br>");

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
document.write("<h4>12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?</h4>");
var b=new Date();
b.setUTCHours(b.getUTCHours()-(876000));
document.write("Time 100 years ago was: "+b+"<br>");

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
document.write("<h4>13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.</h4>");
var age=prompt("What is your age?");
var dy=new Date();
var year=dy.getFullYear();
var cage=year-age;
document.write("Your birth year is : "+cage+"<br>");

//14. Write a program to generate your K-Electric bill in yourbrowser. All the amounts should be rounded off to 2 decimal places. 
document.write("<h4>14. Write a program to generate your K-Electric bill in yourbrowser. All the amounts should be rounded off to 2 decimal places. </h4>");
document.write("<h3>K-Electric Bill</h3>");
var cus="ABC Customer";
var mon="February";
var unit=410;
var perunit=16;
document.write("Customer Name: "+cus+"<br>Customer Name"+mon+"<br>Number of units: "+unit+"<br>Number of units: "+unit+"<br>Charges per unit: "+perunit+"<br><br>Net amount payable(Within Due Date): "+(unit*perunit)+"<br>Late payment surcharge: "+350+"<br>Gross amount payable(after due date): "+((unit*perunit)+350));