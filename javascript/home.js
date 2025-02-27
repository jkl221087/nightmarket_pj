console.log('home.js loaded');

(function() {
  window.addEventListener('load', function() {
    const sliderContent = document.querySelector('.slider-content');
    const items = document.querySelectorAll('.content-item');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    let currentIndex = 0;
    let autoPlayInterval;
    const autoPlayDelay = 3000;

    if (!sliderContent || !items.length || !prevButton || !nextButton) return;

    function updateSlider() {
      const translateX = -currentIndex * 100;
      sliderContent.style.transform = `translateX(${translateX}%)`;
      sliderContent.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
      sliderContent.style.perspective = '1000px';
      items.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.add('active');
          item.style.transform = 'rotateY(0deg)';
          item.style.opacity = '1';
        } else {
          item.classList.remove('active');
          item.style.transform = 'rotateY(15deg)';
          item.style.opacity = '0.7';
        }
      });
    }

    function nextSlide() {
      currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      updateSlider();
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    sliderContent.addEventListener('mouseenter', stopAutoPlay);
    sliderContent.addEventListener('mouseleave', startAutoPlay);

    prevButton.addEventListener('click', function(e) {
      e.preventDefault();
      prevSlide();
      stopAutoPlay();
      setTimeout(startAutoPlay, autoPlayDelay);
    });

    nextButton.addEventListener('click', function(e) {
      e.preventDefault();
      nextSlide();
      stopAutoPlay();
      setTimeout(startAutoPlay, autoPlayDelay);
    });

    updateSlider();
    startAutoPlay();
  });
})();
