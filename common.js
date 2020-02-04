// Google custom search
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

// Sharing
function socialMediaPopUp(url, title, width, height) {
	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);
	window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+ width +', height='+ height +', top=' + top + ', left=' + left);
} 

/*
// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
	ga('create', 'UA-106132552-1', 'auto');
	ga('send', 'pageview'); */