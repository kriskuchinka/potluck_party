$(document).ready(function() {

	// hide and show information when icon is clicked on 
	$(".fa-info").click(function() {
		$(".explaination-window").toggle({"display":"block"});
		// $("#explain-site").css({"height":"100%" , "width":"100%" , "font-size":"26px"});
	});
	
	// begin sign up, bring up modal window 
	$("#modal-start").click(function(){
		$("#modal-start").hide();
		$("#modal1").show();
		// ensure user can't see other modal windows, in case they aren't on the first modal 
		$("#modal2").hide();
		$("#modal3").hide();
		$("#welcome-par").hide();		
		$("#hero-fireworks").hide();
		$(".progress-bar").show();
		$(".progress").show();
		$(".progress").css({"width":"33%"});
	});
	
	// give user exit option, show original starting point, remove progress bar 
	$(".exit").click(function() {
		$(".modal-window").hide();
		$(".progress-bar").hide();
		$("#hero-fireworks").show();
		$("#welcome-par").show();
		$("#modal-start").show();
	});

	// user option to move forward to 2nd modal window 
	$("#change-1").click(function() {
		$("#modal1").hide();
		$("#modal2").show();
		$(".progress").css({"width":"66%"});
	});
	
	// user option to switch to previous modal screen, progress bar regresses 
	$("#reverse-1").click(function() {
		$("#modal2").hide();
		$("#modal1").show();
		$(".progress").css({"width":"33%"});
	});
	
	// user option to forward to 3rd modal window 
	$("#change-2").click(function() {
		$("#modal2").hide();
		$("#modal3").show();
		$(".progress").css({"width":"100%"});
	});
	
	// user option to switch to previous modal screen, progress bar regresses 
	$("#reverse-2").click(function(){
		$("#modal3").hide()
		$("#modal2").show();
		$(".progress").css({"background-color":"red"});
		$(".progress").css({"width":"66%"});
	});
	
	// Capture form data and display on submit
	$("#change-3").click(function() {
		$(".progress-bar").hide();
		$("#modal3").hide();
		$("#form-data").show();		
	});
	
	$("#change-3").click(function() {
		$("#closing-fireworks").show()
		$("#form-header").show();
		$("#summary-message").show();
		$("#form-data").show();
		$("#confirmation").show();
		$("#main-head").hide();
		$("#second-head").hide();
		var fname = $("#first-name").val();
		var lname = $("#last-name").val();
		var email = $("#email").val();
		var phone = $("#contact-phone").val();
		var dish = $("#dish").val();
		var servings = $("#servings").val();
		var gluten;
		var vegan;
		var organic;
		var comments = $("#comments-suggestions").val();
		
		// get values from check box 
		// gluten check box 
		if ($(".gluten-check").prop("checked")) {
			gluten = "Yes";
		} else {
			gluten = "No";
		}
		
		// vegan check box 
		if ($(".vegan-check").prop("checked")) {
			vegan = "Yes";
		} else {
			vegan = "No";
		}
		
		// organic check box 
		if ($(".organic-check").prop("checked")) {
			organic = "Yes";
		} else {
			organic = "No";
		}

		// display form information on final page	
		$("#form-data").html("<p> <span class='field-data'> Name: </span> <span class='entered-data'>" + fname + " " + lname + "</span> </p> <p> <span class='field-data'> Email: </span> <span class='entered-data'>" + email + "</span> </p> <p> <span class='field-data'> Phone Number: </span> <span class='entered-data'>" + phone + "</span> </p ><p> <span class='field-data'> Potluck Dish: </span> <span class='entered-data'>" + dish + "</span> </p> <p> <span class='field-data'> Servings: </span> <span class='entered-data'>" + servings + "</span> </p> <p> <span class='field-data'> Gluten Free: </span> <span class='entered-data'>" + gluten + "</span> </p> <p> <span class='field-data'>Vegan: </span> <span class='entered-data'>" + vegan + "</span> </p> <p> <span class='field-data'> Organic: </span> <span class='entered-data'>" + organic + "</span> </p> <p> <span class='field-data'> Additional Notes: </span> <span class='entered-data'>" + comments + "</span> </p>");
		
	}); // end of change-3 click


	// Begin client side form validation
	function validateModal1() {
		var fname = document.getElementById("#first-name");
		if (fname == null || fname == "") {
			alert("Please fill out your first name.");
			// return false;
		}
	$("#change-1").click(validateModal1);
	} // end of function validateModal1
	
 }); // end of ready 