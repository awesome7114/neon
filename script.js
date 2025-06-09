
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const popupMenu = document.getElementById('popupMenu');

  menuIcon.addEventListener('click', function() {
    popupMenu.classList.toggle('active');
  });

  // Optional: close popup when a link is clicked
  popupMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      popupMenu.classList.remove('active');
    });
  });

  // Optional: close popup when clicking outside
  document.addEventListener('click', function(e) {
    if (!popupMenu.contains(e.target) && !menuIcon.contains(e.target)) {
      popupMenu.classList.remove('active');
    }
  });
});