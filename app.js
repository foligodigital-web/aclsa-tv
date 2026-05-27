const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const notifyButton = document.querySelector("#notify-button");
const notificationState = document.querySelector("#notification-state");
const contactForm = document.querySelector(".contact-form");

const liveVideoUrl = "";
const liveWatchUrl = "https://www.youtube.com/@aclsatv/live";
const liveFrame = document.querySelector(".player-frame iframe");
const livePlaceholder = document.querySelector(".player-placeholder");
const liveWatchLink = document.querySelector(".player-link");

if (liveWatchLink) {
  liveWatchLink.href = liveWatchUrl;
}

if (liveVideoUrl && liveFrame) {
  liveFrame.src = liveVideoUrl;
  livePlaceholder.hidden = true;
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

function updateNotificationCopy() {
  const saved = localStorage.getItem("aclsa-notifications") === "enabled";

  if (saved) {
    notificationState.textContent = "Les notifications sont activees pour les nouveaux contenus.";
    notifyButton.textContent = "Active";
    notifyButton.disabled = true;
  }
}

notifyButton?.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    notificationState.textContent = "Ce navigateur ne prend pas en charge les notifications.";
    return;
  }

  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    localStorage.setItem("aclsa-notifications", "enabled");
    updateNotificationCopy();
    new Notification("ACLSA TV", {
      body: "Vous recevrez les prochaines publications.",
    });
  } else {
    notificationState.textContent = "Autorisation refusee. Vous pouvez la modifier dans le navigateur.";
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name")?.toString().trim() || "Visiteur";
  const message = data.get("message")?.toString().trim() || "";
  const whatsappNumber = "33651141167";
  const text = encodeURIComponent(`Bonjour ACLSA, je suis ${name}. ${message}`);

  if (whatsappNumber) {
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    return;
  }

  alert("Message pret. Ajoutez le numero WhatsApp dans app.js pour activer l'envoi direct.");
});

updateNotificationCopy();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // The app still works normally when service workers are unavailable.
    });
  });
}
