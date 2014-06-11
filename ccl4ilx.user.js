// ==UserScript==
// @name CCL4Illinois-X
// @description Adds some additional features to the ccl4illinois website
// @namespace ilcarry
// @author s0beit
// @include https://www.ccl4illinois.com/ccw/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @version 2.0
// ==/UserScript==

function additionalStatusMyApp() {
	var originalStatus = $('#lblStatus').text();
	var extraStatusData = $('#lblStatus').attr('class');
	$('#lblStatus').text(originalStatus + " (" + extraStatusData + ")");
}

function additionalStatusDash() {
	var selectedDiv = $('#divMyStatus').children().last();
	var originalStatus = selectedDiv.text();
	var extraStatusData = selectedDiv.attr('class');

	selectedDiv.html(originalStatus + "<br />(" + extraStatusData + ")");
}

$(document).ready(function() {
	var pathArray = window.location.pathname.split( '/' );
	
	if(pathArray.length) {
		var asp = pathArray[pathArray.length - 1].toLowerCase();

		if(asp == 'dash.aspx') {
			additionalStatusDash();
			$('#aCancelLicensePrompt').remove();
		} else if(asp == 'myapp.aspx') {
			additionalStatusMyApp();
		}
	}
});
