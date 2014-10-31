/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
//$("p").css("background-color", "blueviolet");

// the p element with an ID of "intro"
//$("p#intro").css("background-color", "orange");

// all elements with a class of "note"
//$(".note").css("background-color", "cyan")

// all DIV elements with a class of note
// $("div.note").css("background-color", "gray")

// all p elements in the article element
//$("article p").css("background-color", "fuchsia");

// the last element in any section which is a p tag
//$("p").eq(-1).css("background-color", "fuchsia");

// the first paragraph on the page
//$("p").first().css("background-color", "forestgreen");

// all p elements which have a link
//$("p").has("a").css("background-color", "brown");

// the second li within nested ul element
//$("ul li ul li").eq(1).css("background-color", "magenta");

// every second and third p element
$("p").filter(function(i) { return (i % 3); }).css("background-color", "yellow");