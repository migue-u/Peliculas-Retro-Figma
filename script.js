// Horror — interacciones de la pantalla única (sin scroll)

document.querySelectorAll('.nav-item').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

document.querySelectorAll('.mini-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.mini-card').forEach((item) => item.classList.remove('selected'));
    card.classList.add('selected');
  });
});

const playButton = document.querySelector('.btn-play');
playButton?.addEventListener('click', () => {
  playButton.innerHTML = '▶ REPRODUCIENDO…';
  window.setTimeout(() => {
    playButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg> PLAY NOW';
  }, 1800);
});
