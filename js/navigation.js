/**
 * Navigation handler for the travel website
 * Controls consistent navigation behavior across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get current page name from URL
  const currentPage = window.location.pathname.split('/').pop();
  
  // Set active navigation button based on current page
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    // Remove all active classes first
    btn.classList.remove('active');
    
    // Set the correct button to active
    if (currentPage === 'home.html' && btn.getAttribute('aria-label') === 'Home') {
      btn.classList.add('active');
      btn.querySelector('svg').setAttribute('stroke', '#9CA4A9');
    } else if (currentPage === 'search.html' && btn.getAttribute('aria-label') === 'Search') {
      btn.classList.add('active');
      btn.querySelector('svg').setAttribute('stroke', '#9CA4A9');
    } else if (currentPage === 'saved.html' && btn.getAttribute('aria-label') === 'Bookmark') {
      btn.classList.add('active');
      btn.querySelector('svg').setAttribute('stroke', '#9CA4A9');
    } else if (currentPage === 'profile.html' && btn.getAttribute('aria-label') === 'Profile') {
      btn.classList.add('active');
      btn.querySelector('svg').setAttribute('stroke', '#9CA4A9');
    } else {
      // Ensure non-active buttons have the correct color
      btn.querySelector('svg').setAttribute('stroke', '#555');
    }
  });
  
  // Add click handlers to navigation buttons if they don't have them
  navButtons.forEach(btn => {
    if (!btn.hasAttribute('onclick')) {
      btn.addEventListener('click', function() {
        const label = this.getAttribute('aria-label');
        if (label === 'Home') {
          window.location.href = 'home.html';
        } else if (label === 'Search') {
          window.location.href = 'search.html';
        } else if (label === 'Bookmark') {
          window.location.href = 'saved.html';
        } else if (label === 'Profile') {
          window.location.href = 'profile.html';
        }
      });
    }
  });
});

// Universal Bookmark Toggle
function setupUniversalBookmark() {
  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      // Optional: Simpan status bookmark di localStorage jika ada data-id
      const id = this.dataset.id;
      if (id) {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
        bookmarks[id] = this.classList.contains('active');
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      }
    });
    // Optional: Set initial state from localStorage
    const id = btn.dataset.id;
    if (id) {
      let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
      if (bookmarks[id]) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setupUniversalBookmark); 