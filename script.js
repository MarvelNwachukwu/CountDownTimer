var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

var x = setInterval(function() 
{

  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = seconds + "s";
}, 1000);