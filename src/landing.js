document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const aboutSection = document.getElementById('about');
    
    aboutSection.addEventListener('click', function() {
      header.classList.add('hide-header');
    });
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        header.classList.add('hide-header');
      } else {
        header.classList.remove('hide-header');
      }
    });
  });