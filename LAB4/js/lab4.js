/*
TITLE: LAB-4 Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 31 Oct 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: - 1 Nov  2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
    1 Nov  2023 - Added element to be removed and use of plug in for draggable
*/
$(function(){
    function getTime(){
        var objTime = new Date();
        return objTime;
    }
    function returnDayorHour(event){
        if(event.data.timeType == "DAY"){
            const strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return strDays[getTime().getDay()];
        }else{
            return "Hour: " + getTime().getHours();
        }
    }
    //REQ 8: For each selection use a jQuery method to change content.
    $("span").addClass("boldFont"); //REQ 5: Select Multiple Page Elements & REQ 15: Use .addClass()
    $("#dayItem").css("font-style", "italic"); //REQ 6: Select a page element by ID
    $("span:nth-child(2)").css("text-decoration", "underline"); //REQ 7: Filter jQuery selection

    //REQ 11: jQuery chaining with 3 methods
    $("h1").css("font-style", "italic").css("text-decoration", "underline").attr("id", "mainHeader"); //REQ 15: Use .attr()

    $("#secondWin").html("<em>5</em>"); //REQ 12: Use .html()
    $("#thirdWin").text("2"); //REQ 13: Use .text()
    $("#winningNums").append("<li>0</li>"); //REQ 14: Use .append()

    $("#firstWin").css("color", "red"); //REQ 16: Use .css() to change color

    $("li").each(function() { //REQ 9: Use .each() to loop through multiple elements
        $(this).css("font-weight", "bold"); //REQ 10: Use $(this) inside loop
    });
    //REQ 17: Use .on() to register 3 events
    $("#dayItem").on("click",{timeType:"DAY"}, function(e){
        $(this).text(returnDayorHour(e)); //REQ 18: Event object that responds diferently based on page element clicked
    });
    $("#hourItem").on("click",{timeType:"HOUR"}, function(e){
        $(this).text(returnDayorHour(e)); //REQ 18: Event object that responds diferently based on page element clicked
    });
    $("#minItem").on("mouseout", function(){
        $(this).text("Min: " + getTime().getMinutes());
    });
    $("#secItem").on("mouseover", function(){
        $(this).text("Sec: " + getTime().getSeconds());
    });
    //REQ 19: Use 3 effect methods
    $("#mainHeader").hide();
    $("#winningNums").hide();
    $("#mainHeader").fadeIn();
    $("#winningNums").slideDown();
    //REQ 20: Use 2 methods to traverse the DOM
    $("#thirdWin").next().css("color", "orange");
    $("#6Win").prev().css("color", "orange");
    //REQ 21: 2 Form selectors
    $(":submit").css("background-color", "#4D4A41").css("color", "#CFCAB5");
    $("input:text").css("background-color", "#4D4A41").css("color", "#CFCAB5");

    $("#removeMe").remove(); //REQ 22: Use jQuery method to remove an element

    //REQ 23: Use plugin
    $("#draggable").draggable();
 });