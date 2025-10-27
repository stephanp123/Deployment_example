document.getElementById("surpriseBtn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.classList.toggle("hidden");
  
  if (!msg.classList.contains("hidden")) {
    msg.style.animation = "fadeInUp 0.6s ease-out";
  }
});
