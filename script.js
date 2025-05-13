function performSearch() {
  const query = document.getElementById('searchInput').value;
  if (query.trim() === "") {
    alert("Please enter a search term.");
    return;
  }
  alert("You searched for: " + query);
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
