"use strict";
$(document).ready(function() {
                $("#toggleLink").click(function() {
                        $("dd").toggleClass("invisible");
                });
    $( "dt" ).click(function() {
        $( this ).toggleClass( "highlight" );
    });

});

