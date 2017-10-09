$(document).ready(function() {
  console.log("==hello world==");
  var omWebpage = {
    loadTodayDate: function(){
      console.log("==loadTodayDate==");
      var n =  new Date();
      var day = n.getDay();
      var month = n.getMonth() + 1;
      var d = n.getDate();
      var yr = n.getFullYear();
      var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
          'September','October', 'November', 'December'];
      var monthName = month[n.getMonth()];
      var dayName = day[n.getDay()];
      $('#todayDate').text(dayName + ", " + monthName + " " + d + ", " + yr);
    },
    submitEmail: function(){
      console.log("==submitEmail==");
      $('#submitButton').on('click', function() {
        console.log("--submitButton--");
      });
    },
    slideShow: function(){
      console.log("==slideShow==");
      var translateX = 0;
      $('#right').on('click', function () {
        console.log("--right--");
      	if (translateX === -75) {
      		translateX = 0;
      	} else {
      		translateX -= 25;
      	};
        $('.slidesOuter').css('transform', 'translateX(' + translateX + '%)');
      });
      $('#left').on('click', function () {
        console.log("--left--");
      	if (translateX === 0) {
      		translateX = -75;
      	} else {
      		translateX += 25;
      	}
      	$('.slidesOuter').css('transform', 'translateX(' + translateX + '%)');
      });
    }
  }
  omWebpage.loadTodayDate();
  omWebpage.submitEmail();
  omWebpage.slideShow();
})
