const lateral = document.querySelector('.lateral');
const toggleBtn = document.querySelector('.toggle-btn');

if (toggleBtn && lateral) {
  toggleBtn.addEventListener('click', () => {
    lateral.classList.toggle('collapsed');
    document.body.classList.toggle('sidebar-collapsed');

    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('bi-justify');
      icon.classList.toggle('bi-list');
    }
  });
}
