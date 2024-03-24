// تحديد واجهة التحميل
var preloader = document.querySelector('.preloader');

// تأكد من أن الواجهة مرئية قبل بدء التحميل
preloader.style.opacity = 1;

// استدعاء الدالة للتحميل بعد وقت قصير
setTimeout(function () {
  // تغيير الشفافية بنسبة تدريجية للتلاشي
  preloader.style.transition = 'opacity 0.5s';
  preloader.style.opacity = 0;

  // إخفاء واجهة التحميل بعد الانتقال في الشفافية
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 500); // زمن التأخير بالمللي ثانية
}, 1000); // زمن التأخير بالمللي ثانية

// استجابة للتمرير
window.addEventListener('scroll', function () {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 600) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// التمرير لأعلى الصفحة
var backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


 