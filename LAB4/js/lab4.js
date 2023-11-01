/*
TITLE: LAB-4 Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 31 Oct 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: - 31 Oct 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
    31 Oct 2023 - 
*/
$(function(){
    //REQ 8: For each selection use a jQuery method to change content.
    $("span").addClass("boldFont"); //REQ 5: Select Multiple Page Elements & REQ 15: Use .addClass()
    $("#dayItem").css("font-style", "italic"); //REQ 6: Select a page element by ID
    $("span:nth-child(2)").css("text-decoration", "underline"); //REQ 7: Filter jQuery selection

    $("li").each(function() { //REQ 9: Use .each() to loop through multiple elements
        $(this).css("font-weight", "bold"); //REQ 10: Use $(this) inside loop
    })
    //REQ 11: jQuery chaining with 3 methods
    $("h1").css("font-style", "italic").css("text-decoration", "underline").attr("id", "mainHeader"); //REQ 15: Use .attr()

    $("#firstWin").css("color", "red"); //REQ 16: Use .css() to change color


    $("#removeMe").remove(); //REQ 22: Use jQuery method to remove an element
 });