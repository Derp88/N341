/*
TITLE: LAB-1 Getting Started
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 24 Aug 2023
PURPOSE: First intro project to using JavaScript
LAST MODIFIED ON: 24 Aug 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
- None
*/


setInterval(main, 10);
function main(){
    var objTime = new Date();
    //Code for getting the current time
    var strLocalHour = objTime.getHours().toString(); //Get the local time in hours as a string
    var strLocalMin = objTime.getMinutes().toString(); //Get the local time in mins as a string
    var strLocalSec = objTime.getSeconds().toString(); //Get the local time in seconds as a string
    var elementLocalTime = document.getElementById("liveTime"); //Get the HTML element to put the data in
    elementLocalTime.innerHTML = "Local Time: " + strLocalHour + ":" + strLocalMin + ":"+ strLocalSec;

    //Code for getting the UTC time
    var strUTCHour = objTime.getUTCHours().toString(); //Get the UTC time in hours as a string
    var strUTCMin = objTime.getUTCMinutes().toString(); //Get the UTC time in mins as a string
    var strUTCSec = objTime.getUTCSeconds().toString(); //Get the UTC time in secs as a string
    var elementUTCTime = document.getElementById("utcTime"); //Get the HTML element to put the data in
    elementUTCTime.innerHTML = "Universal Time: " + strUTCHour + ":" + strUTCMin + ":"+ strUTCSec;
}







