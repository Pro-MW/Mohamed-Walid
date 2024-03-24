document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = document.querySelector(this.hash);
          target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');
          if (target) {
            e.preventDefault();
            var targetPosition = target.offsetTop - 60;
            var startPosition = window.pageYOffset;
            var distance = targetPosition - startPosition;
            var duration = 1500;
            var startTime = null;
  
            function animation(currentTime) {
              if (startTime === null) startTime = currentTime;
              var timeElapsed = currentTime - startTime;
              var run = ease(timeElapsed, startPosition, distance, duration);
              window.scrollTo(0, run);
              if (timeElapsed < duration) requestAnimationFrame(animation);
            }
  
            function ease(t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
            }
  
            requestAnimationFrame(animation);
          }
        }
      });
    });
  });



  var backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  var targetPosition = 0;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 1500;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
});



document.addEventListener('DOMContentLoaded', function() {
    var homeLink = document.querySelector('.nav-link[href="#"]');
    if (homeLink) {
      homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        var targetPosition = 0;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 1500;
        var startTime = null;
  
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          var timeElapsed = currentTime - startTime;
          var run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
  
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
  
        requestAnimationFrame(animation);
      });
    }
  });


 