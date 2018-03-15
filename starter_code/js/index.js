console.log("working")

// Prevent link from being followed with the event.preventDefault() function

	$("a").click(function() {
	    event.preventDefault();
	    console.log("prevent")
	});

// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded

	$("document").ready()

// Select the appropriate DOM elements with CSS selectors upon a user's click using the $.click() handler

// If a user clicks "Read More" on the primary column:
	// have the text in the <p> tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
	// hide the "Read More" link using $.hide()

	$(".readmore").click(function () {
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		$(".readmore").hide();
	});

// If a user clicks "Read Less" on the primary column:
	// have the <p> slide up and hide the "Read Less" link using $.slideUp() and $.hide()
	// show the "Read More" link using $.show()

	$(".readless").click(function() {
		$("#show-this-on-click").slideUp();
		$(".readmore").show();
		$(".readless").hide();
	});

// Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the <span> inside that <p> slide down and hide the "Learn More" link using $.slideDown() and $.hide()

	$(".learnmore").click(function() {
		$("span").slideDown();
		$(".learnmore").hide();
	});