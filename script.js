
/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const searchInput = document.getElementById('search-input');
  const movieItems = document.querySelectorAll('.movie-item');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    movieItems.forEach(item => {
      const title = item.querySelector('.movie-title').textContent.toLowerCase();
      item.style.display = title.includes(query) ? 'block' : 'none';
    });
  });

  const modal = document.getElementById('video-modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('close-modal');

  document.querySelectorAll('.movie-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const videoSrc = thumbnail.getAttribute('data-video-src');
      modalContent.innerHTML = `<video controls autoplay src="${videoSrc}"></video>`;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
    }
  });

  const carousel = document.getElementById('carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  }

  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  });

  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  });

  showItem(currentIndex);
});
