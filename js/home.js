// Greeting card animation
window.addEventListener('DOMContentLoaded', () => {
  const greeting = document.querySelector('.greeting-card');
  if (greeting) {
    greeting.style.opacity = 0;
    greeting.style.transform = 'translateY(-16px)';
    setTimeout(() => {
      greeting.style.transition = 'opacity 0.7s, transform 0.7s';
      greeting.style.opacity = 1;
      greeting.style.transform = 'translateY(0)';
    }, 300);
  }

  // Bookmark toggle
  document.querySelectorAll('.pick-bookmark').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
    });
  });

  // Bottom nav active state
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}); 