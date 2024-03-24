const filters = document.querySelectorAll('#portfolio-flters li');
const items = document.querySelectorAll('.portfolio-box');

filters.forEach(filter => {
  filter.addEventListener('click', function () {
    filters.forEach(f => f.classList.remove('filter-active'));
    this.classList.add('filter-active');

    const selectedFilter = this.getAttribute('data-filter');

    items.forEach(item => {
      if (selectedFilter === '*' || item.classList.contains(selectedFilter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Show all images when "All" button is clicked
const allButton = document.querySelector('[data-filter="*"]');
allButton.addEventListener('click', function () {
  items.forEach(item => {
    item.style.display = 'block';
  });
});

// Show specific images when a specific button is clicked
const webButton = document.querySelector('[data-filter=".filter-app"]');
webButton.addEventListener('click', function () {
  items.forEach(item => {
    item.style.display = 'none';
  });
  const webItems = document.querySelectorAll('.filter-app');
  webItems.forEach(item => {
    item.style.display = 'block';
  });
});

const designButton = document.querySelector('[data-filter=".filter-card"]');
designButton.addEventListener('click', function () {
  items.forEach(item => {
    item.style.display = 'none';
  });
  const designItems = document.querySelectorAll('.filter-card');
  designItems.forEach(item => {
    item.style.display = 'block';
  });
});

const appButton = document.querySelector('[data-filter=".filter-web"]');
appButton.addEventListener('click', function () {
  items.forEach(item => {
    item.style.display = 'none';
  });
  const appItems = document.querySelectorAll('.filter-web');
  appItems.forEach(item => {
    item.style.display = 'block';
  });
});


