"use strict";
$(document).ready(function() {
    $("#toggleLink").click(function() {
        $("dd").toggleClass("invisible");
    });
    $( "dt" ).click(function() {
        $( this ).toggleClass( "highlight" );
    });
    // Create a button that, when clicked, makes the last li in each ul have a yellow background.
    $('.lastLi').click(function() {
        $('ul').each(function() {
            $(this).children('li').last().css('background-color', '#FF0');
        });
    });

    // When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.


    // When any list item is clicked, first li of the parent ul should have a font color of blue.

});

