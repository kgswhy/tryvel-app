// Saved page functionality
document.addEventListener('DOMContentLoaded', () => {
  const viewToggle = document.querySelector('.view-toggle');
  const savedGrid = document.querySelector('.saved-grid');
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  // Handle view toggle
  viewToggle.addEventListener('click', (e) => {
    const button = e.target.closest('.toggle-btn');
    if (!button) return;

    // Update active state
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Update grid view
    const view = button.dataset.view;
    savedGrid.className = 'saved-grid';
    if (view === 'list') {
      savedGrid.classList.add('list-view');
    }
  });

  // Handle bookmark button clicks
  const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
  bookmarkButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      button.classList.toggle('active');
      // Here you would typically make an API call to update the saved state
    });
  });
}); 