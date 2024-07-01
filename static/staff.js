// // function info(param, type){
// //     var element = param.parentNode.parentNode.firstElementChild;
// // 	    element.classList.toggle("show-info");
// //     	element.nextElementSibling.classList.toggle("show-info");
// //     	element.nextElementSibling.nextElementSibling.classList.toggle("show-info");	
// // }

// function info(param, type){
//     var elem = param.parentNode.parentNode.firstElementChild;
// 	var name = elem.nextElementSibling;
// 	var bio = elem.nextElementSibling.nextElementSibling;
// 	var quote = elem.nextElementSibling.nextElementSibling.nextElementSibling;
// 	if (type == 'bio') {
// 		if (quote.classList.contains("show-info")) {
// 			quote.classList.toggle("show-info");
// 			bio.classList.toggle("show-info");
// 		} else {
// 			name.classList.toggle("show-info");
// 			bio.classList.toggle("show-info");			
// 		}
// 	} else if (type == 'quote') {
// 		if (bio.classList.contains("show-info")) {
// 			quote.classList.toggle("show-info");
// 			bio.classList.toggle("show-info");
// 		} else {
// 			name.classList.toggle("show-info");
// 			quote.classList.toggle("show-info");			
// 		}	
// 	}
// }


// window.onload = function() {
// 	var officerLink = document.getElementById('officerLink');
// 	var facilitatorLink = document.getElementById('facilitatorLink');
// 	var mentorLink = document.getElementById('mentorLink');

// 	var officerPage = document.getElementById('officerPage');
// 	var facilitatorPage = document.getElementById('facilitatorPage');
// 	var mentorPage = document.getElementById('mentorPage');

// 	function resetDecal() {
// 		officerPage.setAttribute('class', 'hidden');
// 		facilitatorPage.setAttribute('class', 'hidden');
// 		mentorPage.setAttribute('class', 'hidden');
// 		officerLink.setAttribute('class', 'notselected');
// 		facilitatorLink.setAttribute('class', 'notselected');
// 		mentorLink.setAttribute('class', 'notselected');
// 	}

// 	officerLink.onclick = function() {
// 		resetDecal();
// 		officerPage.setAttribute('class', 'visible');
// 		officerLink.setAttribute('class', 'selected');
// 	};

// 	facilitatorLink.onclick = function() {
// 		resetDecal();
// 		facilitatorPage.setAttribute('class', 'visible');
// 		facilitatorLink.setAttribute('class', 'selected');
// 	};

// 	mentorLink.onclick = function() {
// 		resetDecal();
// 		mentorPage.setAttribute('class', 'visible');
// 		mentorLink.setAttribute('class', 'selected');
// 	};

// 	const urlParams = new URLSearchParams(window.location.search);
// 	const tabParam = urlParams.get('tab');

// 	switch (tabParam) {
// 		case "officer":
// 			officerLink.click();
// 			break;
// 		case "facilitator":
// 			facilitatorLink.click();
// 			break;
// 		case "mentor":
// 			mentorLink.click();
// 			break;
// 		default:
// 			officerLink.click();
// 	}
// }