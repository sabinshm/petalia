// Add to Cart Animation
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.btn-add-to-card');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Create flower element
      const flower = document.createElement('span');
      flower.textContent = '🌸';
      flower.classList.add('flower-animation');

      // Add to button
      button.style.position = 'relative';
      button.appendChild(flower);

      // Remove after animation
      setTimeout(() => {
        flower.remove();
      }, 1000);
    });
  });
});

  // Ensure popup elements exist before accessing them so this script works on all pages
  document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("petaliaPopup");
    const closeBtn = document.getElementById("closePetalia");
    if (popup) {
      popup.classList.add("show");
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          popup.classList.remove("show");
        });
      }
    }
  });


function updateCountdown() {
  const now = Date.now();
  const mainEnd = new Date("2025-12-20T23:59:59").getTime();
  const mainTimerElem = document.getElementById("mainTimer");
  if (mainTimerElem) updateSingleTimer(mainEnd, mainTimerElem);
  document.querySelectorAll(".countdown-timer").forEach(timer => {
    const endAttr = timer.dataset.end;
    if (!endAttr) return; // skip if no data-end attribute
    const end = new Date(endAttr).getTime();
    if (Number.isNaN(end)) return;
    const output = timer.querySelector(".deal-time");
    if (!output) return; // skip if there's no output element
    updateSingleTimer(end, output);
  });}
function updateSingleTimer(end, element) {
  const diff = end - Date.now();
  if (diff <= 0) {
    element.textContent = "EXPIRED";
    return;}
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  if (element.id === "mainTimer") {
    element.innerHTML = `
      <span class="timer-digit">${d.toString().padStart(2,"0")}</span><span class="timer-label">d</span>
      <span class="timer-digit">${h.toString().padStart(2,"0")}</span><span class="timer-label">h</span>
      <span class="timer-digit">${m.toString().padStart(2,"0")}</span><span class="timer-label">m</span>
      <span class="timer-digit">${s.toString().padStart(2,"0")}</span><span class="timer-label">s</span>
    `;
  } else {
    element.textContent = `${d}d ${h}h ${m}m`;
  }}
setInterval(updateCountdown, 1000);
updateCountdown();
