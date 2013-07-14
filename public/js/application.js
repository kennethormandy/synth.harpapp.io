

$(document).ready(function(e){
	// I don't know what I'm doing. Obviously.
try{Typekit.load();}catch(e){}

	var playing = false;
	var sliderFix = 100;
	// play = true;
	// Sliders are actually horizontal because you can't style the vertical ones
	// Plus they are being difficult about going top to bottom. So, 100 minus the
	// Value gives us the correct value if the orientation was correct.

	$("#module-range-volume-master").on("change", function() {
		var moduleVolume = sliderFix - this.value;
		volume = (moduleVolume/50); // doubles max possible volumeOneTwoThreeFourFive
		$("#module-range-volume-output").html(moduleVolume);
	});

	$("#module-range-effect-envelope").on("change", function() {
		var moduleEnvAmount = sliderFix - this.value;
		envAmount = (moduleEnvAmount/100);
		$("#module-range-effect-envelope-output").html(moduleEnvAmount);
	});

	$("#module-range-effect-resonance").on("change", function() {
		var moduleResonance = sliderFix - this.value;
		resonance = (moduleResonance * 0.4);
		$("#module-range-effect-resonance-output").html(moduleResonance);
	});

	$("#module-range-effect-cutoff").on("change", function() {
		var moduleCutoff = sliderFix - this.value;
		cutoff = (moduleCutoff/100);
		$("#module-range-effect-cutoff-output").html(moduleCutoff);
	});

	$("#module-range-effect-delay-wd").on("change", function() {
		var moduleDelayWD = sliderFix - this.value;
		cutoff = (moduleDelayWD/100);
		$("#module-range-effect-delay-wd-output").html(moduleDelayWD);
	});

	$("#module-range-osc-detune").on("change", function() {
		var moduleDetune = sliderFix - this.value;
		cutoff = (moduleDetune/100);
		$("#module-range-osc-detune-output").html(moduleDetune);
	});

	$("#module-range-osc-width").on("change", function() {
		var moduleWidth = sliderFix - this.value;
		cutoff = (moduleWidth/100);
		$("#module-range-osc-width-output").html(moduleWidth);
	});

	$("#controls-tempo").on("change", function() {
		var controlTempo = this.value;
		console.log(controlTempo);
		if(controlTempo >= 240) {
			this.value = 240;

		} else if(controlTempo <= 20) {
			controlTempo = 20;
		}
		tempo = controlTempo;
	});


	$("#controls-play").onpress(function() {
		var controlButton = $("#controls-play");
		if(playing == true) {
			startTime = undefined;
			playing = false;
			controlButton.html("Play");
		} else if(playing == false) {
			startTime = 0; // There's a problem here, because of normalising
			// the time somewhere, it doesn't start in the same spot every time.
			playing = true;
			controlButton.html("Stop");
		}

	});

	$("#module-button-osc-poly").onpress(function() {
		polyButton = $("#module-button-osc-poly");
		playMonophonic = !playMonophonic;
		if(playMonophonic) {
			polyButton.html("On");
		} else {
			polyButton.html("Off");
		}
	});

        Flickable('.module-flick', {
            width: 60,
            enableMouseEvents: true,
            callback: function(n) {
                if(n === 0) {
                	setWaveTable1("01_Saw");
                } else if(n === 1) {
                	setWaveTable1("02_Triangle");
                } else if(n === 2) {
                	setWaveTable1("03_Square");
                } else if(n === 3) {
                	setWaveTable1("04_Noise");
                } else if(n === 4) {
                	setWaveTable1("05_Pulse"); // Temp, for some reason changing file names messes with the sounds.
                }
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