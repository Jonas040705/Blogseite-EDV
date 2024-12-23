document.getElementById('category-select').addEventListener('change', function() {
  const selectedCategory = this.value;
  const articles = document.querySelectorAll('.article');

  articles.forEach(article => {
    const category = article.querySelector('.category').textContent.toLowerCase();
    if (selectedCategory === 'all' || category.includes(selectedCategory)) {
      article.style.display = 'grid';
    } else {
      article.style.display = 'none';
    }
  });
});
