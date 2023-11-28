/*
TITLE: LAB-5 Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 25 Nov 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: - 25 Nov 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
    
*/
$("#tabs").tabs(); //REQ 4: Use tab widget
$("#numberInput").spinner(); //REQ 5: use spinner widget

$("#mainForm").on("submit", function(e){ //REQ 9: Echo output
    e.preventDefault();
    var vals = $(this).serializeArray();
    $("#ageSubmit").text("Over 18: " + vals[1].value); //REQ 10: Get data using .value
    $("#emailSubmit").text("Email: " + vals[2].value);
    $("#ticketSubmit").text("Ticket Number: " + vals[0].value);
});

$("#numberInput").focus(); //REQ 12: Use form method

$("#numberInput").on("blur", function(){ //REQ 13: Use .on() with form event
    var valid = /^[0-9]+$/.test(this.value); //REQ 11: Regex validation
    if(!valid){
        $("#numFeedback").text("Feedback: Current input is INVALID");
    }else{
        $("#numFeedback").text("Feedback: Current input is valid");
    }
});

