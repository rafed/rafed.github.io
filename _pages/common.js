---
permalink: common.js
---

function socialMediaPopUp(url, title, width, height) {
	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);
	window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+ width +', height='+ height +', top=' + top + ', left=' + left);
} 
