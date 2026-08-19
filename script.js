const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("modalClose");

document.querySelectorAll('.image-card img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt || "Expanded view";
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal() {
  modal.style.display = "none";
  modalImg.removeAttribute('src');
  modal.setAttribute('aria-hidden', 'true');
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
