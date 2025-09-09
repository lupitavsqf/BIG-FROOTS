function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    this.reset();
  });
  
  document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    let index = 0;
  
    function showImage(i) {
      images.forEach(img => img.classList.remove('active'));
      images[i].classList.add('active');
    }
  
    prev.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });
  
    next.addEventListener('click', () => {
      index = (index + 1) % images.length;
      showImage(index);
    });
  });
  