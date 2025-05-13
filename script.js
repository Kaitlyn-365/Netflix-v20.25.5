function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const movies = document.querySelectorAll('.movie');

  movies.forEach(movie => {
    const title = movie.getAttribute('data-title').toLowerCase();
    movie.style.display = title.includes(query) ? 'block' : 'none';
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
