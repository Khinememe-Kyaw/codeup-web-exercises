(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    // planetsString = planetsString.replaceAll("|", " <br> ");
    // console.log(planetsString);
    var brPlanets = planetsArray.join("<br>");
    console.log(brPlanets);
    document.getElementById("put-here").innerHTML = brPlanets;

    /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var listPlanets = "<ul>" + "<li>" + planetsArray.join("</li><li>") + "</li>" + "</ul>";
    console.log(listPlanets);
    document.getElementById("input-here").innerHTML = listPlanets;

    // planetsString = planetsString.replaceAll("<br>", " </li><li> ");
    // var listPlanets = "<ul>" + "<li>" + planetsString + "</li>" + "</ul>";
    // console.log(listPlanets);


})();