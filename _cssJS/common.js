---
permalink: common.js
---

function socialMediaPopUp(url, title, width, height) {
	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);
	window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+ width +', height='+ height +', top=' + top + ', left=' + left);
} 

(function() {
	var cx = '000151824860492892407:kd5zijxwj6a';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
})();

function executeQuery() {
	var input = document.getElementById('cse-search-input-box-id');
	var element = google.search.cse.element.getElement('searchresults-only0');
	if (input.value == '') {
		element.clearAllResults();
	} else {
		element.execute(input.value);
	}
	return false;
}


