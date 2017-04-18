// Need to install jQuery validation plugin and make it work.
// Plugin validator should affect progress bar either way (working or not working)
$(document).ready(function() {
	// load explanatory modal window when project first loads
	$("#font-awesome-info").hide();

	$("#explain-site").show(function() {
		$("#font-awesome-info").hide();
		$(".explaination-window").fadeIn();
	});

	$("#explain-close").click(function() {
		$(".explaination-window").hide();
		$("#font-awesome-info").show();
	});

	// hide and show information when icon is clicked on 
	$(".fa-info").click(function() {
		$(".explaination-window").toggle({"display":"block"});
		$("#font-awesome-info").hide();
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
		$(".progress").css({"width":"0%"});
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
		// begin form validation using plugin
		$(function() {
			$("form[name='modal1']").validate({
				rules: {
					"first-name": "required",
					"last-name": "required",
					"email-contact": {
						required: true,
						email: true
					},
					"phone-contact": "required"

				}, // end of rules
				messages: {
					"first-name": "Please enter your first name.",
					"last-name": "Please enter your last name.",
					"email-contact": "Please enter your email address.",
					"phone-contact": "Please enter your phone number."
				}, // end of messages
				submitHandler : function(form) {
					form.submit();
				} // end of submit handler
			}); // end of validate()
		}); // end of function for form validation
		$("#modal1").hide();
		$("#modal2").show();
		$(".progress").css({"width":"33%"});
	});
	
	// user option to switch to previous modal screen, progress bar regresses 
	$("#reverse-1").click(function() {
		$("#modal2").hide();
		$("#modal1").show();
		$(".progress").css({"width":"0%"});
	});
	
	// user option to forward to 3rd modal window 
	$("#change-2").click(function() {
		$("#modal2").hide();
		$("#modal3").show();
		$(".progress").css({"width":"66%"});
	});
	
	// user option to switch to previous modal screen, progress bar regresses 
	$("#reverse-2").click(function(){
		$("#modal3").hide();
		$("#modal2").show();
		$(".progress").css({"background-color":"red"});
		$(".progress").css({"width":"33%"});
	});
	
	// Capture form data and display on submit
	$("#change-3").click(function() {
		$(".progress").css({"background-color":"red"});
		$(".progress").css({"width":"100%"});
		$("#modal3").hide();
		$("#form-data").show();
	});

	$("#change-3").click(function() {
		$("#closing-fireworks").show();
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
		if ($("#gluten-check").prop("checked")) {
			gluten = "Yes";
		} else {
			gluten = "No";
		}
		
		// vegan check box 
		if ($("#vegan-check").prop("checked")) {
			vegan = "Yes";
		} else {
			vegan = "No";
		}
		
		// organic check box 
		if ($("#organic-check").prop("checked")) {
			organic = "Yes";
		} else {
			organic = "No";
		}

		// display form information on final page	
		$("#form-data").html("<p> <span class='field-data'> Name: </span> <span class='entered-data'>" + fname + " " + lname + "</span> </p> <p> <span class='field-data'> Email: </span> <span class='entered-data'>" + email + "</span> </p> <p> <span class='field-data'> Phone Number: </span> <span class='entered-data'>" + phone + "</span> </p ><p> <span class='field-data'> Potluck Dish: </span> <span class='entered-data'>" + dish + "</span> </p> <p> <span class='field-data'> Servings: </span> <span class='entered-data'>" + servings + "</span> </p> <p> <span class='field-data'> Gluten Free: </span> <span class='entered-data'>" + gluten + "</span> </p> <p> <span class='field-data'>Vegan: </span> <span class='entered-data'>" + vegan + "</span> </p> <p> <span class='field-data'> Organic: </span> <span class='entered-data'>" + organic + "</span> </p> <p> <span class='field-data'> Additional Notes: </span> <span class='entered-data'>" + comments + "</span> </p>");
		
	}); // end of change-3 click
	
 }); // end of ready 