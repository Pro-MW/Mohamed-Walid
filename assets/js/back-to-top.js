// إظهار الزر لما المستخدم ينزل لتحت
window.addEventListener('scroll', () => {
  const backToTop = document.querySelector('.back-to-top');
  if (window.scrollY > 600) {
    backToTop.style.display = 'block';
    backToTop.style.opacity = '1';
    backToTop.style.transition = 'opacity 0.3s ease';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      if (window.scrollY <= 600) backToTop.style.display = 'none';
    }, 300);
  }
});

// عند الضغط على الزر – يرجع لأعلى الصفحة بسلاسة
document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
