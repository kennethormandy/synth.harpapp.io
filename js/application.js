$(document).ready(function(e){
	// I don't know what I'm doing. Obviously.


	var playing = false;
	var sliderFix = 100;
	// play = true;
	// Sliders are actually horizontal because you can't style the vertical ones
	// Plus they are being difficult about going top to bottom. So, 100 minus the
	// Value gives us the correct value if the orientation was correct.

	$("#module-range-volume-master").on("change", function() {
		moduleVolume = sliderFix - this.value;
		volume = (moduleVolume/50); // doubles max possible volume
		$("#module-range-volume-output").html(moduleVolume);
	});

	$("#module-range-modulate-master").on("change", function() {
		moduleCutoff = sliderFix - this.value;
		cutoff = (moduleCutoff); // doubles max possible volume
		$("#module-range-modulate-output").html(moduleCutoff);
	});

	$("#controls-play").onpress(function() {
		controlButton = $("#controls-play");
		if(playing == true) {
			startTime = undefined;
			playing = false;
			controlButton.html("Start");
		} else if(playing == false) {
			startTime = 0; // There's a problem here, because of normalising
			// the time somewhere, it doesn't start in the same spot every time.
			playing = true;
			controlButton.html("Stop");
		}

	});

	$("#module-flick-osc1").flickable({segments: 5, flickDirection: "x"});

	$("#next").click(function() {
		oscFlick = $("#module-flick-osc1");
		oscSegment = oscFlick.flickable('segment');
		if(oscSegment == 4) {
			oscFlick.flickable("scrollPrev");
			oscFlick.flickable("scrollPrev");
			oscFlick.flickable("scrollPrev");
			oscFlick.flickable("scrollPrev"); // Terrible but works for now.
		} else {
			$("#module-flick-osc1").flickable("scrollNext");
		}
	});


	$(".module .col-header").onpress(function() {
		$(".module").toggleClass("module--closed");
		$(this).parents(".module").toggleClass("module--open").removeClass("module--closed");
	});

	$(".m-play-button").onpress(function(){
		$(this).toggleClass("module--hold")
	});
});