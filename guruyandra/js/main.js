// ── MOBILE NAV ──
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('mobileClose');
  if (!hamburger || !overlay) return;
  hamburger.addEventListener('click', () => overlay.classList.add('open'));
  closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
}
document.addEventListener('DOMContentLoaded', initNav);
