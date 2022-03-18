// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// New
jQuery(function($) {
	$(window).load(function() { 
		var seconds_pop = 3000; // 3 seconds
		var expireDate = new Date(); // todays date
		var minutes = 30; // Again appearing time
		expireDate.setTime(expireDate.getTime() + (minutes * 60 * 1000)); // 1 hour

		var BlogSiteVisit = parseInt(cookieVal("BlogSiteVisit")); // parse in convert str to int // bcus it is content
		BlogSiteVisit++; // loop by 1
		
		if(BlogSiteVisit == 1) { // if BlogSiteVisit if 1
			document.cookie = "BlogSiteVisit=" + BlogSiteVisit + ";expires=" + expireDate.toGMTString() + ";path=/"; // store cookie 
			setTimeout(function(){ // then show popup, deley in .5 second
				
				$.fancybox.showLoading();  // show loading
				setTimeout(function(){ // then show popup, deley in .5 second
					$.fancybox({ // Fancybox Properties
						'transitionIn' : 'fade',
						'transitionOut' : 'fade',
						'overlayColor' : '#000',
						'overlayOpacity' : '.6',
						'href' : '#popup_content',
						'helpers'   : { overlay : {closeClick: false } },
						'onCleanup' : function() { }
					});
				}, 500); // .5 second	
			}, seconds_pop); 
		} else { 
			return; 
		  }
		function cookieVal(cookieName) {
			var thisCookie = document.cookie.split("; "); 
			for (var i=0; i<thisCookie.length; i++) { 			
				if (cookieName == thisCookie[i].split("=")[0]) {
					return thisCookie[i].split("=")[1]; 
				}
			}
		return 0; 
		}
	});
}); // jQuery End
