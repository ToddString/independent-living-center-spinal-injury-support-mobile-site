// ==========================================================
// IMAGE MODAL
// Used on Home, Gallery, and People4People
// ==========================================================

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("modalClose");

if (modal && modalImg && closeBtn) {
  document.querySelectorAll(".image-card img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.currentSrc || img.src;
      modalImg.alt = img.alt || "Expanded view";
      modal.setAttribute("aria-hidden", "false");
    });
  });

  function closeModal() {
    modal.style.display = "none";
    modalImg.removeAttribute("src");
    modal.setAttribute("aria-hidden", "true");
  }

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}


// ==========================================================
// FAQ HASH LINKS
// Opens a specific FAQ question when linked with #faq-name
// ==========================================================

function openFAQfromHash() {
  const id = decodeURIComponent(location.hash.slice(1));

  if (!id) return;

  const el = document.getElementById(id);

  if (el && el.tagName.toLowerCase() === "details") {
    el.setAttribute("open", "");

    const summary = el.querySelector("summary");

    if (summary) {
      summary.focus({ preventScroll: true });
    }

    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

window.addEventListener("DOMContentLoaded", openFAQfromHash);
window.addEventListener("hashchange", openFAQfromHash);
