// A11-K Operations Command Center — frontend logic
// Real health check, real tab switching, no fake data.

(function () {
  "use strict";

  // Tab switching
  window.switchTab = function (tabId, event) {
    document.querySelectorAll(".tab-content").forEach(function (el) {
      el.classList.remove("active");
    });
    document.querySelectorAll(".tab-btn").forEach(function (el) {
      el.classList.remove("active");
    });
    var target = document.getElementById(tabId);
    if (target) target.classList.add("active");
    if (event && event.target) event.target.classList.add("active");
  };

  // Health check
  async function checkHealth() {
    var badge = document.getElementById("status-badge");
    var healthContent = document.getElementById("health-content");

    try {
      var res = await fetch("/healthz");
      var data = await res.json();

      if (data.ok) {
        badge.textContent = "System: Online";
        badge.classList.remove("offline");
      } else {
        badge.textContent = "System: Error";
        badge.classList.add("offline");
      }

      if (healthContent) {
        healthContent.innerHTML = `
          <div class="health-grid">
            <div class="health-card">
              <div class="label">Service</div>
              <div class="value ok">${escapeHtml(data.service || "unknown")}</div>
            </div>
            <div class="health-card">
              <div class="label">Version</div>
              <div class="value">${escapeHtml(data.version || "—")}</div>
            </div>
            <div class="health-card">
              <div class="label">Uptime</div>
              <div class="value">${Math.round(data.uptime || 0)}s</div>
            </div>
            <div class="health-card">
              <div class="label">Stripe</div>
              <div class="value ${data.stripeConnected ? "ok" : "off"}">${data.stripeConnected ? "Connected" : "Not configured"}</div>
            </div>
            <div class="health-card">
              <div class="label">Coinbase</div>
              <div class="value ${data.coinbaseConnected ? "ok" : "off"}">${data.coinbaseConnected ? "Connected" : "Not configured"}</div>
            </div>
          </div>
        `;
      }
    } catch (err) {
      badge.textContent = "System: Offline";
      badge.classList.add("offline");
      if (healthContent) {
        healthContent.innerHTML = '<p class="empty-state">Server not reachable. Is <code>node src/server.js</code> running?</p>';
      }
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Run on load
  if (document.readyState !== "loading") {
    checkHealth();
  } else {
    document.addEventListener("DOMContentLoaded", checkHealth);
  }

  // Refresh health every 30s
  setInterval(checkHealth, 30000);
})();
