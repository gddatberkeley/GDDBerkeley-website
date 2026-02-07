// On hover, display the bio and quote
function showBioQuote(params) {
	var bq = params.parentElement.children[1];
	if (bq.style.visibility != "visible") {
		bq.style.visibility = "visible";
	}
}

function hideBioQuote(params) {
	if (params.style.visibility != "hidden") {
		params.style.visibility = "hidden";
	}
}