document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  // Internship technology filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const techCards = document.querySelectorAll('.tech-card');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      techCards.forEach(card => {
        const categories = (card.dataset.category || '').split(' ');
        card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
      });
    });
  });

  // MOOC reel/video slots. If a local MP4 exists, the video is shown.
  // If it does not exist, a clean upload placeholder remains visible.
  document.querySelectorAll('[data-video-card]').forEach(card => {
    const video = card.querySelector('[data-course-video]');
    if (!video) return;
    const source = video.querySelector('source');
    if (!source) return;

    const markReady = () => card.classList.add('video-ready');
    const markMissing = () => card.classList.remove('video-ready');
    video.addEventListener('loadedmetadata', markReady, { once: true });
    video.addEventListener('error', markMissing, { once: true });
    source.addEventListener('error', markMissing, { once: true });
    video.load();
  });
});
