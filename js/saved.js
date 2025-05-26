// Saved page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get toggle buttons
  const gridToggleBtn = document.querySelector('.toggle-btn[data-view="grid"]');
  const listToggleBtn = document.querySelector('.toggle-btn[data-view="list"]');
  const savedGrid = document.querySelector('.saved-grid');
  
  // Check if we need to create list view
  if (!document.querySelector('.saved-list')) {
    createListView();
  }
  
  const savedList = document.querySelector('.saved-list');
  
  // Add event listeners to toggle buttons
  if (gridToggleBtn && listToggleBtn) {
    gridToggleBtn.addEventListener('click', function() {
      setActiveView('grid');
    });
    
    listToggleBtn.addEventListener('click', function() {
      setActiveView('list');
    });
  }
  
  // Function to set active view
  function setActiveView(viewType) {
    if (viewType === 'grid') {
      gridToggleBtn.classList.add('active');
      listToggleBtn.classList.remove('active');
      savedGrid.style.display = 'grid';
      savedList.style.display = 'none';
    } else if (viewType === 'list') {
      gridToggleBtn.classList.remove('active');
      listToggleBtn.classList.add('active');
      savedGrid.style.display = 'none';
      savedList.style.display = 'flex';
    }
  }
  
  // Function to create list view based on grid items
  function createListView() {
    const savedCards = document.querySelectorAll('.saved-card');
    const savedListContainer = document.createElement('div');
    savedListContainer.className = 'saved-list';
    
    // For each card in grid, create a list item
    savedCards.forEach(card => {
      const image = card.querySelector('.saved-image img').src;
      const title = card.querySelector('.saved-info h3').textContent;
      const location = card.querySelector('.saved-info p').textContent;
      const rating = card.querySelector('.rating-value').textContent;
      
      // Create list item
      const listItem = document.createElement('div');
      listItem.className = 'saved-list-item';
      listItem.innerHTML = `
        <div class="saved-list-image">
          <img src="${image}" alt="${title}">
        </div>
        <div class="saved-list-info">
          <div>
            <h3>${title}</h3>
            <p>${location}</p>
          </div>
          <div class="saved-list-actions">
            <span class="stars">★★★★★</span>
            <span class="rating-value">${rating}</span>
            <button class="bookmark-btn active">
              <svg width="20" height="20" fill="#9CA4A9" viewBox="0 0 24 24">
                <path d="M6 4a2 2 0 0 0-2 2v14l8-5.333L20 20V6a2 2 0 0 0-2-2H6z"/>
              </svg>
            </button>
          </div>
        </div>
      `;
      
      savedListContainer.appendChild(listItem);
    });
    
    // Add list container after grid
    savedGrid.parentNode.insertBefore(savedListContainer, savedGrid.nextSibling);
  }
}); 