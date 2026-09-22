(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (button && nav) {
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      button.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menú');
      button.textContent = '☰';
    }));
  }
  document.addEventListener('click', event => {
    document.querySelectorAll('.nav-dropdown[open]').forEach(drop => {
      if (!drop.contains(event.target)) drop.removeAttribute('open');
    });
  });
})();
