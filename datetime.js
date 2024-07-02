//date and time

//stores dates in utc time and displays in local timezone of browser


var now = new Date();
gs.info(now);

gs.info('the year is: ' + now.getFullYear());

gs.info('the month is: ' + (now.getMonth()+1)); //month will be off bc months are zero indexed
//put in () to treat it as integers and not strings
gs.info('the day is ' + now.getDate());

now.setFullYear(2020);
gs.info('Changed year ' + now.getFullYear());

gs.info('Local date string: ' + now.toLocaleDateString()); 

//want to know what the date would be if it was 30 days after today's date
var date = new Date();
var later = date.getDate() + 30;
gs.info(later);

//doesn't know to wrap dates, so you need to modify

var later2 = date.setDate(date.getDate() + 30);
gs.info(new Date(later));

//instead of taking date.getDate and adding thirty, taking number and setting date
//set Date knows to follow the calendar. 


