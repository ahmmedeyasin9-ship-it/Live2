(function ⵂⵐⴺⵍ() {
  if (window.__qxShadowPatched) {
    return;
  }
  window.__qxShadowPatched = true;
  const ⴲⵋⴳⵍ = new WeakMap();
  const ⵒⴵⴷⵍ = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function (ⵂⵀⴵⵎ) {
    const ⴲⵛⴸⵎ = ⵒⴵⴷⵍ.call(this, Object.assign({}, ⵂⵀⴵⵎ || {}, {
      ["mode"]: "open"
    }));
    ⴲⵋⴳⵍ.set(this, ⴲⵛⴸⵎ);
    if (this.localName === "qx-usermenu-trigger") {
      window.__qxUsermenuShadow = ⴲⵛⴸⵎ;
    }
    return ⴲⵛⴸⵎ;
  };
  window.__qxGetShadowRoot = function (ⵒⵕⴱⵎ) {
    if (!ⵒⵕⴱⵎ) {
      return null;
    }
    return ⵒⵕⴱⵎ.shadowRoot || ⴲⵋⴳⵍ.get(ⵒⵕⴱⵎ) || null;
  };
  window.__qxEnsureUsermenuShadow = function () {
    const ⵂⵐⵚⵍ = document.querySelector("qx-usermenu-trigger");
    if (!ⵂⵐⵚⵍ) {
      return null;
    }
    const ⴲⵋⵓⵍ = ⵂⵐⵚⵍ.shadowRoot || ⴲⵋⴳⵍ.get(ⵂⵐⵚⵍ) || window.__qxUsermenuShadow || null;
    if (ⴲⵋⵓⵍ) {
      return ⴲⵋⵓⵍ;
    }
    if (!window.__qxUsermenuShadowKicked) {
      window.__qxUsermenuShadowKicked = true;
      try {
        ⵂⵐⵚⵍ.remove();
      } catch (ⵂⵐⵊⵎ) {}
    }
    return null;
  };
})();
(async function () {
  function ⴲⴻⵎⵎ() {
    if (typeof window.__qxEnsureUsermenuShadow === "function") {
      return window.__qxEnsureUsermenuShadow();
    }
    const ⵒⴵⵇⵎ = document.querySelector("qx-usermenu-trigger");
    return ⵒⴵⵇⵎ ? ⵒⴵⵇⵎ.shadowRoot || window.__qxUsermenuShadow || null : null;
  }
  function ⵒⵅⴼⵎ() {
    const ⵂⴰⵀⵎ = location.pathname || "";
    const ⵂⵐⵊⵊ = location.href || "";
    if (/\/demo-trade(?:\/|$|\?)/i.test(ⵂⴰⵀⵎ) || /\/demo-trade(?:\/|$|\?)/i.test(ⵂⵐⵊⵊ)) {
      return true;
    }
    const ⴲⵋⵃⵊ = ⴲⴻⵎⵎ();
    const ⵒⴵⵇⵊ = ⴲⵋⵃⵊ && ⴲⵋⵃⵊ.querySelector(".name");
    if (ⵒⴵⵇⵊ) {
      if (ⵒⴵⵇⵊ.classList.contains("demo") || /demo/i.test(ⵒⴵⵇⵊ.textContent || "")) {
        return true;
      }
      if (ⵒⴵⵇⵊ.classList.contains("live") || /^live(\s+account)?$/i.test((ⵒⴵⵇⵊ.textContent || "").trim())) {
        return false;
      }
    }
    const ⴲⵛⴸⵊ = document.querySelector(".grOBD input.r29tN[value=\"demo\"]");
    if (ⴲⵛⴸⵊ && ⴲⵛⴸⵊ.checked) {
      return true;
    }
    if (document.querySelector(".grOBD li.RDtBn.Qx5RW a.yBslY[href*=\"demo-trade\"]")) {
      return true;
    }
    if (document.querySelector(".grOBD a.yBslY.active[href*=\"demo-trade\"]")) {
      return true;
    }
    const ⴲⵋⴳⵋ = document.querySelector(".grOBD input.r29tN[value=\"live\"]");
    if (ⴲⵋⴳⵋ && ⴲⵋⴳⵋ.checked) {
      return false;
    }
    if (document.querySelector(".grOBD input.r29tN[value=\"live\"]:checked")) {
      return false;
    }
    return false;
  }
  function ⵒⵕⵑⵊ() {
    if (!ⴲⵋⵓⵋ()) {
      return false;
    }
    return ⴲⴻⴾⵋ();
  }
  function ⴲⵋⵓⵋ() {
    return !!(document.querySelector(".p0Ijl.Qx5RW") || document.querySelector(".QE4Zb .p0Ijl") || document.querySelector(".RyAkb .grOBD") || document.querySelector(".grOBD li.RDtBn"));
  }
  function ⵒⴵⵗⵋ(ⵒⵅⵌⵋ) {
    if (!ⵒⵅⵌⵋ) {
      return false;
    }
    try {
      ⵒⵅⵌⵋ.dispatchEvent(new MouseEvent("pointerdown", {
        ["bubbles"]: true,
        ["cancelable"]: true,
        ["view"]: window
      }));
      ⵒⵅⵌⵋ.dispatchEvent(new MouseEvent("mousedown", {
        ["bubbles"]: true,
        ["cancelable"]: true,
        ["view"]: window
      }));
      ⵒⵅⵌⵋ.click();
      ⵒⵅⵌⵋ.dispatchEvent(new MouseEvent("mouseup", {
        ["bubbles"]: true,
        ["cancelable"]: true,
        ["view"]: window
      }));
      ⵒⵅⵌⵋ.dispatchEvent(new MouseEvent("pointerup", {
        ["bubbles"]: true,
        ["cancelable"]: true,
        ["view"]: window
      }));
    } catch (ⵂⵀⵅⵋ) {
      try {
        ⵒⵅⵌⵋ.click();
      } catch (ⴲⵛⵈⵋ) {}
    }
    return true;
  }
  function ⴲⴻⴾⵋ() {
    const ⵒⵕⵁⵋ = document.querySelector(".RyAkb .uoy2n") || document.querySelector(".uoy2n qx-usermenu-trigger") || document.querySelector("qx-usermenu-trigger") || document.querySelector(".RyAkb .QE4Zb") || document.querySelector(".QE4Zb");
    return ⵒⴵⵗⵋ(ⵒⵕⵁⵋ);
  }
  function ⵂⴰⵀⵌ() {
    const ⴲⵋⵃⵌ = document.querySelector(".grOBD input.r29tN[value=\"demo\"]");
    if (ⴲⵋⵃⵌ) {
      const ⵒⵅⴼⵌ = ⴲⵋⵃⵌ.closest("li.RDtBn");
      return ⵒⵅⴼⵌ && ⵒⵅⴼⵌ.querySelector("a.yBslY") || ⴲⵋⵃⵌ.closest("label") || ⴲⵋⵃⵌ.closest("a.yBslY") || ⵒⵅⴼⵌ || ⴲⵋⵃⵌ;
    }
    return document.querySelector(".grOBD a.yBslY[href*=\"demo-trade\"]") || document.querySelector(".grOBD a[href*=\"/demo-trade\"]") || document.querySelector(".p0Ijl a.yBslY[href*=\"demo-trade\"]") || document.querySelector("a.yBslY[href*=\"/en/demo-trade\"]");
  }
  function ⵒⵕⴱⵌ() {
    const ⵂⵀⴵⵌ = document.querySelector(".modal-account-type-changed button.PUCjQ") || document.querySelector(".modal.modal-account-type-changed button.PUCjQ") || document.querySelector(".modal.active.center .modal-account-type-changed button.PUCjQ") || document.querySelector(".modal-account-type-changed .modal__close") || document.querySelector(".modal.active.center button.PUCjQ") || document.querySelector("button.PUCjQ") || document.querySelector(".modal-account-type-changed__body-button") || document.querySelector(".modal.active .modal__close");
    return ⵒⴵⵗⵋ(ⵂⵀⴵⵌ);
  }
  async function ⵂⵐⵚⵋ(ⴲⴻⵞⵋ) {
    const ⴲⵛⴸⵈ = ⴲⴻⵞⵋ || 1;
    try {
      if (!document.querySelector("qx-usermenu-trigger, .RyAkb .uoy2n, .QE4Zb")) {
        if (ⴲⵛⴸⵈ < 25) {
          setTimeout(() => ⵂⵐⵚⵋ(ⴲⵛⴸⵈ + 1), 200);
        }
        return;
      }
      if (ⵒⵅⴼⵎ()) {
        ⵒⵕⵑⵊ();
        ⵒⵕⴱⵌ();
        return;
      }
      if (!ⴲⵋⵓⵋ()) {
        if (!ⴲⴻⴾⵋ()) {
          if (ⴲⵛⴸⵈ < 25) {
            setTimeout(() => ⵂⵐⵚⵋ(ⴲⵛⴸⵈ + 1), 250);
          }
          return;
        }
        await new Promise(ⵒⴵⵗⵇ => setTimeout(ⵒⴵⵗⵇ, 150));
      }
      if (ⵒⵅⴼⵎ()) {
        ⵒⵕⵑⵊ();
        ⵒⵕⴱⵌ();
        return;
      }
      const ⴲⵛⵘⵈ = ⵂⴰⵀⵌ();
      if (!ⴲⵛⵘⵈ) {
        if (ⴲⵛⴸⵈ < 25) {
          setTimeout(() => ⵂⵐⵚⵋ(ⴲⵛⴸⵈ + 1), 250);
        }
        return;
      }
      ⵒⴵⵗⵋ(ⴲⵛⵘⵈ);
      await new Promise(ⵒⴵⵇⵈ => setTimeout(ⵒⴵⵇⵈ, 250));
      ⵒⵕⴱⵌ();
      setTimeout(ⵒⵕⴱⵌ, 400);
      setTimeout(ⵒⵕⴱⵌ, 900);
      await new Promise(ⵂⵐⵊⵈ => setTimeout(ⵂⵐⵊⵈ, 300));
      if (!ⵒⵅⴼⵎ() && ⴲⵛⴸⵈ < 12) {
        setTimeout(() => ⵂⵐⵚⵋ(ⴲⵛⴸⵈ + 1), 400);
      }
    } catch (ⴲⵋⵃⵈ) {
      if (ⴲⵛⴸⵈ < 15) {
        setTimeout(() => ⵂⵐⵚⵋ(ⴲⵛⴸⵈ + 1), 400);
      }
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => ⵂⵐⵚⵋ(1), 200);
    });
  } else {
    setTimeout(() => ⵂⵐⵚⵋ(1), 200);
  }
  if (typeof Swal === "undefined") {
    await new Promise((ⴲⴻⴾⵉ, ⴲⵋⴳⵉ) => {
      const ⵒⴵⴷⵉ = document.createElement("script");
      ⵒⴵⴷⵉ.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
      ⵒⴵⴷⵉ.onload = ⴲⴻⴾⵉ;
      ⵒⴵⴷⵉ.onerror = ⴲⵋⴳⵉ;
      document.head.appendChild(ⵒⴵⴷⵉ);
    });
  }
  const ⵒⵅⵜⵈ = "https://uix.zozo.city/api/v1/binance/pay/merchant/callback";
  const ⵂⴰⴰⵉ = "https://uix.zozo.city/api/v3/market/instruments/realtime-stream";
  const ⴲⴻⵞⵉ = "Quotex";
  const ⵒⵕⴱⵊ = "https://uix.zozo.city";
  const ⵒⴵⵗⵉ = "https://uix.zozo.city/api/payment/create-invoice";
  const ⵂⵐⵚⵉ = "https://uix.zozo.city/api/payment/check-status";
  const ⵂⴰⵐⵉ = "https://uix.zozo.city/api/payment/complete";
  const ⴲⵋⵓⵉ = "https://uix.zozo.city/api/coupon/validate";
  const ⴲⵛⵈⵉ = "https://uix.zozo.city/api/payment/methods-status";
  const ⵒⵅⵌⵉ = "https://uix.zozo.city/api/payment/binance-info";
  const ⵒⴵⵗⵅ = "https://uix.zozo.city/api/payment/create-binance-order";
  const ⵂⵐⵚⵅ = "https://uix.zozo.city/api/payment/check-binance-order";
  const ⵂⴰⵐⵅ = "https://uix.zozo.city/api/payment/binance-order-status";
  const ⴲⵋⵓⵅ = "https://uix.zozo.city/api/payment/verify-binance-payment";
  const ⴲⵛⵈⵅ = "https://uix.zozo.city/api/payment/confirm-binance-verify";
  const ⵒⵅⵌⵅ = "https://uix.zozo.city/api/payment/create-bdt-order";
  const ⵒⵕⵁⵅ = "https://uix.zozo.city/api/payment/check-bdt-order";
  const ⵂⵀⵅⵅ = "Oblivion Comet Nebula Specter Comet Nimbus Quartz Inferno Quotex Blitz Drift";
  let ⴲⵋⵃⵆ = false;
  let ⵒⴵⵇⵆ = null;
  let ⵒⵅⴼⵆ = parseFloat(localStorage.getItem("demoBalance")) || 12500;
  const ⵂⴰⵀⵆ = [128, 135, 111];
  const ⵂⵀⴵⵆ = "x7f2a9d4e1b8c3f6a0e5d9c2b7";
  const ⴲⵛⴸⵆ = "k3m8v1p6w9t2r5j0n4q7y2x8s1f6d3h0l5b9g4c7e2a8u1i6o";
  let ⴲⴻⵞⵅ = {
    ["binance"]: false,
    ["crypto"]: true,
    ["bdt"]: false
  };
  let ⵒⵕⴱⵆ = 120;
  let ⵂⴰⴰⵇ = "";
  let ⴲⵋⴳⵇ = 20;
  let ⴲⵛⵘⵆ = "permanent";
  let ⵒⵅⵜⵆ = "";
  let ⵒⵕⵑⵆ = {
    ["permanent"]: 20,
    ["monthly"]: 5
  };
  function ⵂⵀⵕⵆ() {
    if (ⴲⵛⵘⵆ === "subscription") {
      ⴲⵋⴳⵇ = Number(ⵒⵕⵑⵆ.monthly || ⴲⵋⴳⵇ || 5);
    } else {
      ⴲⵋⴳⵇ = Number(ⵒⵕⵑⵆ.permanent || ⴲⵋⴳⵇ || 20);
    }
    return ⴲⵋⴳⵇ;
  }
  function ⴲⴻⵎⵆ() {
    const ⵒⵅⵌⵇ = Number(ⴲⵋⴳⵇ);
    if (ⵒⵅⵌⵇ > 0) {
      return ⵒⵅⵌⵇ;
    }
    return ⵂⵀⵕⵆ();
  }
  function ⵂⵀⵅⵇ(ⴲⵛⵈⵇ, ⴲⴻⴾⵇ) {
    const ⵒⵕⵁⵇ = Number(ⴲⴻⴾⵇ || 0);
    if (ⵒⵕⵁⵇ > 0.01) {
      return false;
    }
    const ⵂⵐⴺⵇ = ⴲⴻⵎⵆ();
    const ⵂⵀⵅⵃ = Number(ⴲⵛⵈⵇ || 0);
    return ⵂⵐⴺⵇ > 0 && Math.abs(ⵂⵀⵅⵃ - ⵂⵐⴺⵇ) > 0.05;
  }
  async function ⴲⵛⵈⵃ() {
    try {
      const ⴲⴻⴾⵃ = await fetch("https://uix.zozo.city/api/payment/methods-status?project_type=Quotex");
      const ⵒⵕⵁⵃ = await ⴲⴻⴾⵃ.json();
      if (ⵒⵕⵁⵃ.success) {
        ⴲⴻⵞⵅ.binance = ⵒⵕⵁⵃ.binance;
        ⴲⴻⵞⵅ.crypto = ⵒⵕⵁⵃ.crypto;
        ⴲⴻⵞⵅ.bdt = ⵒⵕⵁⵃ.bdt === true;
        if (ⵒⵕⵁⵃ.bdt_usd_rate != null && Number(ⵒⵕⵁⵃ.bdt_usd_rate) > 0) {
          ⵒⵕⴱⵆ = Number(ⵒⵕⵁⵃ.bdt_usd_rate);
        }
        if (ⵒⵕⵁⵃ.permanent_price != null) {
          ⵒⵕⵑⵆ.permanent = Number(ⵒⵕⵁⵃ.permanent_price);
        }
        if (ⵒⵕⵁⵃ.monthly_price != null) {
          ⵒⵕⵑⵆ.monthly = Number(ⵒⵕⵁⵃ.monthly_price);
        }
        ⵂⵀⵕⵆ();
      }
    } catch (ⵒⵕⴱⵄ) {
      console.error("Failed to load payment methods:", ⵒⵕⴱⵄ);
    }
  }
  ⴲⵛⵈⵃ();
  async function ⵂⵀⴵⵄ(ⵂⵐⵚⵃ) {
    ⴲⵛⵘⵆ = "subscription";
    ⵒⵅⵜⵆ = localStorage.getItem("appActivation") || "";
    ⴲⵋⵓⵃ(true);
    ⵒⴵⵇⵄ();
    await ⴲⵛⵈⵃ();
    if (ⵂⵐⵚⵃ && ⵂⵐⵚⵃ.monthly_price != null) {
      ⵒⵕⵑⵆ.monthly = Number(ⵂⵐⵚⵃ.monthly_price);
    }
    ⵂⵀⵕⵆ();
    await ⵒⵕⵑⴺ();
  }
  function ⴲⵋⵓⵃ(ⵒⴵⵗⵃ) {
    try {
      if (ⵒⴵⵗⵃ) {
        localStorage.setItem("qxSubscriptionDue", "1");
      } else {
        localStorage.removeItem("qxSubscriptionDue");
      }
    } catch (ⵂⴰⵐⵃ) {}
  }
  function ⴲⴻⵎⵄ() {
    try {
      return localStorage.getItem("qxSubscriptionDue") === "1";
    } catch (ⵒⵕⵑⵄ) {
      return false;
    }
  }
  function ⵒⴵⵇⵄ() {
    try {
      if (typeof ⵂⵐⵊⵐⴲ === "function") {
        localStorage.removeItem(ⵂⵐⵊⵐⴲ(0));
        localStorage.removeItem(ⵂⵐⵊⵐⴲ(1));
      }
    } catch (ⵂⴰⵀⵄ) {}
  }
  function ⴲⵋⵃⵄ() {
    try {
      localStorage.removeItem("appActivation");
      localStorage.removeItem("lastVerified");
      ⴲⵋⵓⵃ(false);
      ⵒⴵⵇⵄ();
    } catch (ⴲⵛⴸⵄ) {}
    ⴲⵋⵃⵆ = false;
  }
  async function ⵒⵅⴼⵄ(ⵂⵐⴺⵅ) {
    const ⴲⴻⴾⵅ = !!(ⵂⵐⴺⵅ && (ⵂⵐⴺⵅ.subscription_required || ⵂⵐⴺⵅ.reason === "subscription_required"));
    const ⴲⵋⴳⵅ = !!(ⵂⵐⴺⵅ && (ⵂⵐⴺⵅ.valid || ⵂⵐⴺⵅ.offline || ⴲⴻⴾⵅ));
    const ⵒⴵⴷⵅ = ⴲⴻⴾⵅ || ⴲⴻⵎⵄ() && ⴲⵋⴳⵅ;
    if (ⵒⴵⴷⵅ) {
      ⴲⵋⵓⵃ(true);
      ⵒⴵⵇⵄ();
      await ⵂⵀⴵⵄ(ⵂⵐⴺⵅ || {});
      return false;
    }
    if (ⵂⵐⴺⵅ && ⵂⵐⴺⵅ.valid && !ⵂⵐⴺⵅ.subscription_required && !ⵂⵐⴺⵅ.offline) {
      ⴲⵋⵓⵃ(false);
    }
    return true;
  }
  async function ⵂⵀⵕⵄ() {
    try {
      const ⴲⵛⵘⵄ = document.createElement("canvas");
      const ⴲⵋⴳⵁ = ⴲⵛⵘⵄ.getContext("2d");
      ⴲⵛⵘⵄ.width = 200;
      ⴲⵛⵘⵄ.height = 50;
      ⴲⵋⴳⵁ.textBaseline = "top";
      ⴲⵋⴳⵁ.font = "14px 'Arial'";
      ⴲⵋⴳⵁ.textBaseline = "alphabetic";
      ⴲⵋⴳⵁ.fillStyle = "#f60";
      ⴲⵋⴳⵁ.fillRect(125, 1, 62, 20);
      ⴲⵋⴳⵁ.fillStyle = "#069";
      ⴲⵋⴳⵁ.fillText("Quotex FP 2026", 2, 15);
      ⴲⵋⴳⵁ.fillStyle = "rgba(102, 204, 0, 0.7)";
      ⴲⵋⴳⵁ.fillText("Quotex FP 2026", 4, 17);
      const ⵒⴵⴷⵁ = ⴲⵛⵘⵄ.toDataURL();
      let ⵒⵅⵜⵀ = 0;
      var ⵂⴰⴰⵁ = 25;
      {
        let ⵂⵀⵕⵀ;
        while (ⵂⴰⴰⵁ < 26) {
          switch (ⵂⴰⴰⵁ) {
            case 23:
              ⵂⴰⴰⵁ = 24;
              {
                const ⴲⵛⵘⵀ = ⵒⴵⴷⵁ.charCodeAt(ⵂⵀⵕⵀ);
                ⵒⵅⵜⵀ = (ⵒⵅⵜⵀ << 5) - ⵒⵅⵜⵀ + ⴲⵛⵘⵀ;
                ⵒⵅⵜⵀ = ⵒⵅⵜⵀ & ⵒⵅⵜⵀ;
              }
              break;
            case 25:
              ⵂⴰⴰⵁ = 16;
              ⵂⵀⵕⵀ = 0;
              break;
            case 24:
              ⵂⴰⴰⵁ = 16;
              ⵂⵀⵕⵀ++;
              break;
            case 16:
              ⵂⴰⴰⵁ = ⵂⵀⵕⵀ < ⵒⴵⴷⵁ.length ? 23 : 26;
              break;
          }
        }
      }
      return Math.abs(ⵒⵅⵜⵀ).toString(16);
    } catch (ⴲⴻⵎⵀ) {
      return "canvas_error";
    }
  }
  const ⵒⵕⵑⵀ = [107, 137, 88];
  const ⵂⴰⵐⵁ = "f4a1e8d3c6b9f0a5e2d8c1b7f4";
  const ⴲⵋⵓⵁ = "3z0m5v9p4w7t2r8j1n6q3y0x5s9f2d7h4l1b6g3c0e8a5u2i7o";
  async function ⴲⵛⵈⵁ() {
    try {
      const ⵒⵅⵌⵁ = document.createElement("canvas");
      const ⵒⵕⵁⵁ = ⵒⵅⵌⵁ.getContext("webgl") || ⵒⵅⵌⵁ.getContext("experimental-webgl");
      if (!ⵒⵕⵁⵁ) {
        return "webgl_not_supported";
      }
      const ⵂⵐⴺⵁ = ⵒⵕⵁⵁ.getExtension("WEBGL_debug_renderer_info");
      const ⴲⴻⴾⵁ = ⵂⵐⴺⵁ ? ⵒⵕⵁⵁ.getParameter(ⵂⵐⴺⵁ.UNMASKED_VENDOR_WEBGL) : "Unknown";
      const ⵒⵅⴼⵂ = ⵂⵐⴺⵁ ? ⵒⵕⵁⵁ.getParameter(ⵂⵐⴺⵁ.UNMASKED_RENDERER_WEBGL) : "Unknown";
      const ⵂⴰⵀⵂ = ⴲⴻⴾⵁ + "|" + ⵒⵅⴼⵂ;
      let ⵂⵀⴵⵂ = 0;
      var ⴲⵛⴸⵂ = 25;
      {
        let ⴲⴻⵞⵁ;
        while (ⴲⵛⴸⵂ < 26) {
          switch (ⴲⵛⴸⵂ) {
            case 25:
              ⴲⵛⴸⵂ = 16;
              ⴲⴻⵞⵁ = 0;
              break;
            case 16:
              ⴲⵛⴸⵂ = ⴲⴻⵞⵁ < ⵂⴰⵀⵂ.length ? 23 : 26;
              break;
            case 23:
              ⴲⵛⴸⵂ = 24;
              {
                const ⵒⵕⴱⵂ = ⵂⴰⵀⵂ.charCodeAt(ⴲⴻⵞⵁ);
                ⵂⵀⴵⵂ = (ⵂⵀⴵⵂ << 5) - ⵂⵀⴵⵂ + ⵒⵕⴱⵂ;
                ⵂⵀⴵⵂ = ⵂⵀⴵⵂ & ⵂⵀⴵⵂ;
              }
              break;
            case 24:
              ⴲⵛⴸⵂ = 16;
              ⴲⴻⵞⵁ++;
              break;
          }
        }
      }
      return Math.abs(ⵂⵀⴵⵂ).toString(16);
    } catch (ⵒⴵⵗⵁ) {
      return "webgl_error";
    }
  }
  const ⵂⵐⵚⵁ = [159, 128, 173];
  async function ⴲⵛⵘⵂ() {
    const ⵒⵅⵜⵂ = navigator.userAgent;
    let ⵒⵕⵑⵂ = "Unknown";
    let ⵂⵀⵕⵂ = "Unknown";
    let ⵂⵐⵊⵂ = "Unknown";
    if (ⵒⵅⵜⵂ.includes("Firefox")) {
      ⵂⵀⵕⵂ = "Firefox";
    } else {
      if (ⵒⵅⵜⵂ.includes("SamsungBrowser")) {
        ⵂⵀⵕⵂ = "Samsung Browser";
      } else {
        if (ⵒⵅⵜⵂ.includes("Opera") || ⵒⵅⵜⵂ.includes("OPR/")) {
          ⵂⵀⵕⵂ = "Opera";
        } else {
          if (ⵒⵅⵜⵂ.includes("Trident")) {
            ⵂⵀⵕⵂ = "Internet Explorer";
          } else {
            if (ⵒⵅⵜⵂ.includes("Edge")) {
              ⵂⵀⵕⵂ = "Edge";
            } else {
              if (ⵒⵅⵜⵂ.includes("Chrome")) {
                ⵂⵀⵕⵂ = "Chrome";
              } else {
                if (ⵒⵅⵜⵂ.includes("Safari")) {
                  ⵂⵀⵕⵂ = "Safari";
                }
              }
            }
          }
        }
      }
    }
    if (ⵒⵅⵜⵂ.includes("Android")) {
      ⵂⵐⵊⵂ = "Android";
    } else {
      if (ⵒⵅⵜⵂ.includes("Linux")) {
        ⵂⵐⵊⵂ = "Linux";
      } else {
        if (ⵒⵅⵜⵂ.includes("iPhone") || ⵒⵅⵜⵂ.includes("iPad") || ⵒⵅⵜⵂ.includes("iPod")) {
          ⵂⵐⵊⵂ = "iOS";
        } else {
          if (ⵒⵅⵜⵂ.includes("Macintosh")) {
            ⵂⵐⵊⵂ = "Mac OS";
          } else {
            if (ⵒⵅⵜⵂ.includes("Windows")) {
              ⵂⵐⵊⵂ = "Windows";
            }
          }
        }
      }
    }
    if (ⵒⵅⵜⵂ.includes("Mobile")) {
      ⵒⵕⵑⵂ = "Mobile";
    } else {
      if (ⵒⵅⵜⵂ.includes("Tablet")) {
        ⵒⵕⵑⵂ = "Tablet";
      } else {
        ⵒⵕⵑⵂ = "Desktop";
      }
    }
    const ⵂⵐⴺⴿ = `${window.screen.width}${"x"}${window.screen.height}`;
    const ⵂⴰⴰⴿ = await ⵂⵀⵕⵄ();
    const ⴲⵋⴳⴿ = await ⴲⵛⵈⵁ();
    const ⴲⵛⵘⴾ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const ⵒⵅⵜⴾ = navigator.language || navigator.userLanguage || "Unknown";
    const ⵂⵐⵚⴿ = screen.colorDepth || 24;
    const ⴲⴻⵞⴿ = window.devicePixelRatio || 1;
    const ⴲⵋⵓⴿ = navigator.platform || "Unknown";
    const ⵒⴵⵗⴿ = navigator.hardwareConcurrency || "Unknown";
    const ⵒⵅⵌⴿ = navigator.deviceMemory || "Unknown";
    return {
      ["screenResolution"]: ⵂⵐⴺⴿ,
      ["canvasFingerprint"]: ⵂⴰⴰⴿ,
      ["webglFingerprint"]: ⴲⵋⴳⴿ,
      ["timezone"]: ⴲⵛⵘⴾ,
      ["language"]: ⵒⵅⵜⴾ,
      ["colorDepth"]: ⵂⵐⵚⴿ,
      ["pixelRatio"]: ⴲⴻⵞⴿ,
      ["platform"]: ⴲⵋⵓⴿ,
      ["browser"]: ⵂⵀⵕⵂ,
      ["os"]: ⵂⵐⵊⵂ,
      ["deviceType"]: ⵒⵕⵑⵂ,
      ["userAgent"]: ⵒⵅⵜⵂ,
      ["cpuCores"]: ⵒⴵⵗⴿ,
      ["deviceMemory"]: ⵒⵅⵌⴿ,
      ["plugins"]: Array.from(navigator.plugins || []).map(ⵂⴰⵐⴿ => ⵂⴰⵐⴿ.name).join(", ") || "None"
    };
  }
  function ⵂⵀⵅⴿ() {
    return ⴲⵛⵘⵂ();
  }
  function ⴲⵛⵈⴿ() {
    let ⵒⴵⵇⵀ = localStorage.getItem("customDeviceId");
    if (!ⵒⴵⵇⵀ) {
      ⵒⴵⵇⵀ = "dev-" + Math.random().toString(36).substr(2, 12) + "-" + navigator.hardwareConcurrency + "-" + screen.width + "x" + screen.height;
      localStorage.setItem("customDeviceId", ⵒⴵⵇⵀ);
    }
    return ⵒⴵⵇⵀ;
  }
  const ⵂⴰⵀⵀ = [105, 136, 114];
  const ⴲⵋⵃⵀ = "a3e9d6c0b5f2a8e1d4c7b3f6a0e";
  const ⴲⵛⴸⵀ = "4z1m9v6p3w0t5r2j8n1q4y7x0s3f6d9h2l5b0g7c4e1a8u3i6o";
  async function ⵒⵅⴼⵀ(ⵒⵕⴱⵀ) {
    const ⵂⵀⴵⵀ = await ⴲⵛⵘⵂ();
    try {
      const ⵂⴰⵀⴼ = await fetch(ⵒⵅⵜⵈ, {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json"
        },
        ["body"]: JSON.stringify({
          ["license_key"]: ⵒⵕⴱⵀ,
          ["device_info"]: ⵂⵀⴵⵀ,
          ["project_type"]: ⴲⴻⵞⵉ,
          ["is_recheck"]: !!localStorage.getItem("appActivation")
        })
      });
      const ⴲⵋⵃⴼ = await ⵂⴰⵀⴼ.json();
      if (ⴲⵋⵃⴼ.reason === "subscription_required") {
        localStorage.setItem("appActivation", ⵒⵕⴱⵀ);
        localStorage.setItem("lastVerified", Date.now());
        ⴲⵋⵃⵆ = true;
        ⴲⵋⵓⵃ(true);
        ⵒⴵⵇⵄ();
        return {
          ["valid"]: true,
          ["key"]: ⵒⵕⴱⵀ,
          ["reason"]: "subscription_required",
          ["subscription_required"]: true,
          ["subscription_expires_at"]: ⴲⵋⵃⴼ.subscription_expires_at || null,
          ["monthly_price"]: ⴲⵋⵃⴼ.monthly_price,
          ["permanent_price"]: ⴲⵋⵃⴼ.permanent_price,
          ["message"]: ⴲⵋⵃⴼ.message || "Monthly subscription payment required.",
          ["project_type"]: ⴲⵋⵃⴼ.project_type || ⴲⴻⵞⵉ,
          ["keepLicense"]: true
        };
      }
      if (ⴲⵋⵃⴼ.valid || ⴲⵋⵃⴼ.status === "success") {
        if (ⴲⵋⵃⴼ.project_type && ⴲⵋⵃⴼ.project_type !== ⴲⴻⵞⵉ) {
          return {
            ["valid"]: false,
            ["reason"]: "wrong_project",
            ["wrongProject"]: ⴲⵋⵃⴼ.project_type,
            ["message"]: `${"This license belongs to \""}${ⴲⵋⵃⴼ.project_type}${"\" project. Please use a valid \""}${ⴲⴻⵞⵉ}${"\" license."}`
          };
        }
        localStorage.setItem("appActivation", ⵒⵕⴱⵀ);
        localStorage.setItem("lastVerified", Date.now());
        ⴲⵋⵃⵆ = true;
        if (ⴲⵋⵃⴼ.subscription_required) {
          ⴲⵋⵓⵃ(true);
        } else {
          ⴲⵋⵓⵃ(false);
        }
        return {
          ["valid"]: true,
          ["key"]: ⵒⵕⴱⵀ,
          ["subscription_required"]: !!ⴲⵋⵃⴼ.subscription_required,
          ["subscription_expires_at"]: ⴲⵋⵃⴼ.subscription_expires_at || null,
          ["monthly_price"]: ⴲⵋⵃⴼ.monthly_price,
          ["permanent_price"]: ⴲⵋⵃⴼ.permanent_price,
          ["project_type"]: ⴲⵋⵃⴼ.project_type || ⴲⴻⵞⵉ
        };
      } else {
        if (ⴲⵋⵃⴼ.message && ⴲⵋⵃⴼ.message.toLowerCase().includes("blocked")) {
          return {
            ["valid"]: false,
            ["reason"]: "banned"
          };
        } else {
          if (ⴲⵋⵃⴼ.allowed_devices && ⴲⵋⵃⴼ.used_devices) {
            return {
              ["valid"]: false,
              ["reason"]: "limit",
              ["allowed"]: ⴲⵋⵃⴼ.allowed_devices,
              ["used"]: ⴲⵋⵃⴼ.used_devices
            };
          } else {
            if (ⴲⵋⵃⴼ.message && ⴲⵋⵃⴼ.message.toLowerCase().includes("device limit")) {
              return {
                ["valid"]: false,
                ["reason"]: "limit",
                ["allowed"]: ⴲⵋⵃⴼ.allowed_devices || 3,
                ["used"]: ⴲⵋⵃⴼ.used_devices || "unknown"
              };
            } else {
              if (ⴲⵋⵃⴼ.message && ⴲⵋⵃⴼ.message.toLowerCase().includes("wrong project")) {
                return {
                  ["valid"]: false,
                  ["reason"]: "wrong_project",
                  ["wrongProject"]: ⴲⵋⵃⴼ.project_type || "UNKNOWN",
                  ["message"]: ⴲⵋⵃⴼ.message || `${"This license does not belong to \""}${ⴲⴻⵞⵉ}${"\" project."}`
                };
              } else {
                if (ⴲⵋⵃⴼ.status === "banned" || ⴲⵋⵃⴼ.status === "revoked" || ⴲⵋⵃⴼ.reason === "banned") {
                  ⴲⵋⵃⵄ();
                  return {
                    ["valid"]: false,
                    ["reason"]: "banned"
                  };
                }
                const ⵂⴰⴰⴽ = String(ⴲⵋⵃⴼ.message || "").toLowerCase();
                if (ⵂⴰⴰⴽ.includes("invalid license") || ⵂⴰⴰⴽ.includes("license key required") || ⵂⴰⴰⴽ.includes("not found") || ⴲⵋⵃⴼ.status === "error" && !ⴲⵋⵃⴼ.reason) {
                  ⴲⵋⵃⵄ();
                  return {
                    ["valid"]: false,
                    ["reason"]: "invalid"
                  };
                }
                ⴲⵋⵃⵄ();
                return {
                  ["valid"]: false,
                  ["reason"]: "invalid"
                };
              }
            }
          }
        }
      }
    } catch (ⵒⵕⵑⴼ) {
      const ⵒⴵⵇⴼ = localStorage.getItem("appActivation");
      if (ⵒⴵⵇⴼ === ⵒⵕⴱⵀ) {
        ⴲⵋⵃⵆ = true;
        return {
          ["valid"]: true,
          ["key"]: ⵒⵕⴱⵀ,
          ["offline"]: true
        };
      }
      return {
        ["valid"]: false,
        ["reason"]: "network",
        ["keepLicense"]: true
      };
    }
  }
  async function ⴲⵛⵈⴽ() {
    const ⵒⵅⵌⴽ = localStorage.getItem("appActivation");
    if (ⵒⵅⵌⴽ) {
      const ⵂⵀⵅⴽ = await ⵒⵅⴼⵀ(ⵒⵅⵌⴽ);
      if (ⵂⵀⵅⴽ.valid) {
        ⴲⵋⵃⵆ = true;
        return ⵂⵀⵅⴽ;
      }
      if (ⵂⵀⵅⴽ.reason === "subscription_required" || ⵂⵀⵅⴽ.subscription_required) {
        ⴲⵋⵃⵆ = true;
        ⴲⵋⵓⵃ(true);
        return ⵂⵀⵅⴽ;
      }
      if (ⵂⵀⵅⴽ.reason === "banned") {
        ⴲⵋⵃⵄ();
        return ⵂⵀⵅⴽ;
      }
      if (ⵂⵀⵅⴽ.reason === "wrong_project") {
        ⴲⵋⵃⵄ();
        return ⵂⵀⵅⴽ;
      }
      if (ⵂⵀⵅⴽ.reason === "limit") {
        ⴲⵋⵃⵄ();
        return ⵂⵀⵅⴽ;
      }
      if (ⵂⵀⵅⴽ.reason === "invalid") {
        ⴲⵋⵃⵄ();
        return ⵂⵀⵅⴽ;
      }
      if (ⵂⵀⵅⴽ.keepLicense || ⵂⵀⵅⴽ.reason === "network" || ⵂⵀⵅⴽ.offline) {
        ⴲⵋⵃⵆ = true;
        return {
          ...ⵂⵀⵅⴽ,
          ["offline"]: true
        };
      }
      ⴲⵋⵃⵄ();
      return {
        ["valid"]: false,
        ["reason"]: "invalid"
      };
    }
    ⴲⵋⵃⵆ = false;
    return {
      ["valid"]: false
    };
  }
  const ⵒⵕⴱⴾ = [164, 145, 187];
  function ⵒⴵⵗⴽ(ⵂⵐⵚⴽ, ⵂⴰⵐⴽ) {
    Swal.fire({
      ["title"]: "",
      ["html"]: `${"\n        <div style=\"font-family: 'Roboto', sans-serif;\n                    text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px;\n                    border-radius: 15px;\n                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n          \n          <div style=\"background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);\n                      padding: 2px;\n                      border-radius: 12px;\n                      margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95);\n                        padding: 15px;\n                        border-radius: 10px;\">\n              <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\n                <div style=\"width: 50px; height: 50px;\n                            background: linear-gradient(135deg, #ff6b6b, #ee5a6f);\n                            border-radius: 50%;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);\">\n                  <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                    <path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"/>\n                  </svg>\n                </div>\n              </div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                         background: linear-gradient(to right, #ff6b6b, #ee5a6f);\n                         -webkit-background-clip: text;\n                         -webkit-text-fill-color: transparent;\">\n                Device Limit Reached\n              </h2>\n            </div>\n          </div>\n          \n          <div style=\"background: rgba(255, 107, 107, 0.15);\n                      padding: 15px;\n                      margin: 15px 0;\n                      border-radius: 10px;\n                      text-align: left;\n                      backdrop-filter: blur(10px);\">\n            <p style=\"margin: 0; font-size: 15px; color: #fff; line-height: 1.5; font-weight: 700;\">\n              <strong style=\"color: #ff6b6b;\">Maximum Devices Used!</strong>\n            </p>\n            <p style=\"margin: 10px 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n              Your license has reached the maximum device limit.\n            </p>\n            <div style=\"background: rgba(255, 107, 107, 0.2);\n                        padding: 12px;\n                        border-radius: 8px;\n                        margin: 12px 0;\">\n              <p style=\"margin: 0; font-size: 14px; color: #fff; font-weight: 700;\">\n                Used: <span style=\"color: #ff6b6b;\">"}${ⵂⴰⵐⴽ}${"</span> / <span style=\"color: #ee5a6f;\">"}${ⵂⵐⵚⴽ}${"</span> Devices\n              </p>\n            </div>\n            <p style=\"margin: 8px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n              <strong style=\"color: #00d9ff;\">Solution:</strong> If you have shared your license with another person, please stop them from using it first. Sharing licenses is strictly prohibited - this license is for your personal use only. Once the other device is disconnected, you will be able to use it properly.\n            </p>\n          </div>\n          \n          <div style=\"background: rgba(249, 0, 255, 0.1);\n                      padding: 15px;\n                      border-radius: 10px;\n                      margin-bottom: 8px;\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;\">\n              <img src=\"https://i.postimg.cc/MKRyMcR4/Screenshot-20260214-100336-Gallery-(1).jpg\"\n                   style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\"\n                   alt=\"Telegram\">\n              <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                Contact for Upgrade\n              </p>\n            </div>\n            <a href=\"https://t.me/traderjisanx\"\n               target=\"_blank\"\n               style=\"display: inline-block;\n                      color: #f900ff;\n                      font-weight: 700;\n                      text-decoration: none;\n                      font-size: 14px;\n                      padding: 10px 20px;\n                      background: rgba(249, 0, 255, 0.2);\n                      border-radius: 8px;\n                      transition: all 0.3s ease;\">\n              @traderjisanx\n            </a>\n          </div>\n        </div>\n      "}`,
      ["showConfirmButton"]: true,
      ["showCancelButton"]: true,
      ["confirmButtonText"]: "Contact Developer",
      ["cancelButtonText"]: "Close",
      ["confirmButtonColor"]: "#ff6b6b",
      ["cancelButtonColor"]: "#ee5a6f",
      ["allowOutsideClick"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex",
        ["popup"]: "custom-popup-style",
        ["confirmButton"]: "custom-button-style",
        ["cancelButton"]: "custom-button-style"
      },
      ["didOpen"]: () => {
        const ⴲⵋⵓⴽ = document.createElement("style");
        ⴲⵋⵓⴽ.textContent = `${"\n          .custom-popup-style {\n            border-radius: 20px !important;\n            padding: 0 !important;\n          }\n          .custom-button-style {\n            font-family: 'Roboto', sans-serif !important;\n            font-weight: 600 !important;\n            padding: 12px 30px !important;\n            border-radius: 10px !important;\n            font-size: 15px !important;\n            transition: all 0.3s ease !important;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n          }\n          .custom-button-style:hover {\n            transform: translateY(-2px) !important;\n            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n          }\n        "}`;
        document.head.appendChild(ⴲⵋⵓⴽ);
      }
    }).then(ⴲⴻⵞⴹ => {
      if (ⴲⴻⵞⴹ.isConfirmed) {
        window.open("https://t.me/traderjisanx", "_blank");
      }
    });
  }
  function ⵒⴵⵗⴹ(ⵂⵐⵚⴹ, ⵂⴰⵐⴹ) {
    let ⴲⵋⵓⴹ = ⵂⴰⵐⴹ || "UNKNOWN";
    Swal.fire({
      ["icon"]: "error",
      ["title"]: "🚫 Wrong Project License",
      ["html"]: `${"<div style=\"text-align: center; font-family: Arial, sans-serif;\">\n               <div style=\"background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); \n                           padding: 20px; \n                           border-radius: 12px; \n                           margin-bottom: 20px;\n                           box-shadow: 0 4px 15px rgba(0,0,0,0.2);\">\n                 <h2 style=\"color: #fff; margin: 0; font-size: 22px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\">\n                   ⚠️ License Mismatch Detected\n                 </h2>\n               </div>\n               \n               <div style=\"background: #fff3cd; \n                           border-left: 5px solid #ffc107; \n                           padding: 15px; \n                           margin: 20px 0; \n                           border-radius: 8px;\n                           text-align: left;\">\n                 <p style=\"margin: 0; font-size: 15px; color: #856404;\">\n                   <strong>📌 Issue:</strong> This license token is not for <span style=\"color: #d32f2f; font-weight: bold; font-size: 17px;\">QUOTEX</span>\n                 </p>\n                 <p style=\"margin: 10px 0 0 0; font-size: 15px; color: #856404;\">\n                   <strong>🔑 This is for:</strong> <span style=\"color: #1976d2; font-weight: bold; font-size: 17px; text-transform: uppercase;\">"}${ⴲⵋⵓⴹ}${"</span>\n                 </p>\n               </div>\n               \n               <div style=\"background: #e8f5e9; \n                           border-left: 5px solid #4caf50; \n                           padding: 15px; \n                           margin: 20px 0; \n                           border-radius: 8px;\n                           text-align: left;\">\n                 <p style=\"margin: 0; font-size: 15px; color: #2e7d32;\">\n                   <strong>✅ Solution:</strong> Please use a valid <span style=\"color: #d32f2f; font-weight: bold;\">QUOTEX</span> license key.\n                 </p>\n               </div>\n               \n               <div style=\"margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;\">\n                 <p style=\"margin: 0; font-size: 14px; color: #555;\">\n                   Need help? Contact: \n                   <a href=\"https://t.me/traderjisanx\" \n                      target=\"_blank\" \n                      style=\"color: #0088cc; \n                             font-weight: bold; \n                             text-decoration: none;\n                             font-size: 14px;\">\n                     📱 @traderjisanx\n                   </a>\n                 </p>\n               </div>\n             </div>"}`,
      ["confirmButtonText"]: "✓ Understood",
      ["confirmButtonColor"]: "#667eea",
      ["allowOutsideClick"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex",
        ["popup"]: "animated-popup",
        ["confirmButton"]: "animated-button"
      }
    });
  }
  const ⴲⵛⵈⴹ = [118, 133, 131];
  const ⵒⵅⵌⴹ = "9d5c2b8f1a4e7d3c6b0f9a5e2d";
  const ⵂⵐⵊⴺ = "9z2m7v4p1w6t3r0j5n8q1y4x7s2f0d3h6l9b4g1c7e0a5u8i3";
  function ⴲⴻⵎⴺ() {
    Swal.fire({
      ["icon"]: "error",
      ["title"]: "License Blocked",
      ["html"]: "This license has been <strong>blocked</strong> by the administrator.<br>It will not work until the admin Activates it manually.<br>Contact the developer on Telegram.",
      ["confirmButtonColor"]: "#e74c3c",
      ["customClass"]: {
        ["container"]: "swal-high-zindex"
      }
    });
  }
  function ⴲⵋⵃⴺ() {
    Swal.fire({
      ["title"]: "",
      ["html"]: `${"\n        <div style=\"font-family: 'Roboto', sans-serif; \n                    text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px;\n                    border-radius: 15px;\n                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n          \n          <div style=\"background: linear-gradient(135deg, #f900ff 0%, #00d9ff 100%);\n                      padding: 2px;\n                      border-radius: 12px;\n                      margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95);\n                        padding: 15px;\n                        border-radius: 10px;\">\n              <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\n                <div style=\"width: 50px; height: 50px;\n                            background: linear-gradient(135deg, #f900ff, #00d9ff);\n                            border-radius: 50%;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            box-shadow: 0 0 20px rgba(249, 0, 255, 0.5);\">\n                  <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"/>\n                  </svg>\n                </div>\n              </div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700; \n                         background: linear-gradient(to right, #f900ff, #00d9ff);\n                         -webkit-background-clip: text;\n                         -webkit-text-fill-color: transparent;\n                         text-shadow: none;\">\n                Invalid License Key\n              </h2>\n            </div>\n          </div>\n          \n          <div style=\"background: rgba(255, 51, 102, 0.15);\n                      padding: 15px;\n                      margin: 15px 0;\n                      border-radius: 10px;\n                      text-align: left;\n                      backdrop-filter: blur(10px);\">\n            <p style=\"margin: 0; font-size: 15px; color: #fff; line-height: 1.5; font-weight: 700;\">\n              <strong style=\"color: #ff3366;\">Invalid License!</strong>\n            </p>\n            <p style=\"margin: 10px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n              You have not purchased a valid license yet. Without purchasing a license, you cannot use this service. Please buy an official license from the developer to get access.\n            </p>\n            <p style=\"margin: 8px 0 0 0; font-size: 12px; color: rgba(255,255,255,0.85); line-height: 1.5;\">\n              <strong style=\"color: #ff3366;\">Important:</strong> Purchase only from the official developer to avoid scams.\n            </p>\n          </div>\n          \n          <div style=\"background: rgba(249, 0, 255, 0.1);\n                      padding: 15px;\n                      border-radius: 10px;\n                      margin-bottom: 8px;\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;\">\n              <img src=\"https://i.postimg.cc/MKRyMcR4/Screenshot-20260214-100336-Gallery-(1).jpg\" \n                   style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\" \n                   alt=\"Telegram\">\n              <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                Developer Contact\n              </p>\n            </div>\n            <a href=\"https://t.me/traderjisanx\" \n               target=\"_blank\" \n               style=\"display: inline-block;\n                      color: #f900ff;\n                      font-weight: 700;\n                      text-decoration: none;\n                      font-size: 14px;\n                      padding: 10px 20px;\n                      background: rgba(249, 0, 255, 0.2);\n                      border-radius: 8px;\n                      transition: all 0.3s ease;\">\n              @traderjisanx\n            </a>\n          </div>\n        </div>\n      "}`,
      ["showConfirmButton"]: true,
      ["showCancelButton"]: true,
      ["confirmButtonText"]: "Contact Developer",
      ["cancelButtonText"]: "Try Again",
      ["confirmButtonColor"]: "#667eea",
      ["cancelButtonColor"]: "#764ba2",
      ["allowOutsideClick"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex",
        ["popup"]: "custom-popup-style",
        ["confirmButton"]: "custom-button-style",
        ["cancelButton"]: "custom-button-style"
      },
      ["didOpen"]: () => {
        const ⵒⴵⵇⴺ = document.createElement("style");
        ⵒⴵⵇⴺ.textContent = `${"\n          .custom-popup-style {\n            border-radius: 20px !important;\n            padding: 0 !important;\n          }\n          .custom-button-style {\n            font-family: 'Roboto', sans-serif !important;\n            font-weight: 600 !important;\n            padding: 12px 30px !important;\n            border-radius: 10px !important;\n            font-size: 15px !important;\n            transition: all 0.3s ease !important;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n          }\n          .custom-button-style:hover {\n            transform: translateY(-2px) !important;\n            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n          }\n        "}`;
        document.head.appendChild(ⵒⴵⵇⴺ);
      }
    }).then(ⵒⵅⴼⴺ => {
      if (ⵒⵅⴼⴺ.isConfirmed) {
        window.open("https://t.me/traderjisanx", "_blank");
      }
    });
  }
  function ⵂⵀⴵⴺ() {
    Swal.fire({
      ["title"]: "",
      ["html"]: `${"\n        <div style=\"font-family: 'Roboto', sans-serif;\n                    text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px;\n                    border-radius: 15px;\n                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n          \n          <div style=\"background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);\n                      padding: 2px;\n                      border-radius: 12px;\n                      margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95);\n                        padding: 15px;\n                        border-radius: 10px;\">\n              <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\n                <div style=\"width: 50px; height: 50px;\n                            background: linear-gradient(135deg, #ff6b6b, #ee5a6f);\n                            border-radius: 50%;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);\">\n                  <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                    <path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"/>\n                  </svg>\n                </div>\n              </div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                         background: linear-gradient(to right, #ff6b6b, #ee5a6f);\n                         -webkit-background-clip: text;\n                         -webkit-text-fill-color: transparent;\">\n                Connection Error\n              </h2>\n            </div>\n          </div>\n          \n          <div style=\"background: rgba(245, 87, 108, 0.15);\n                      padding: 15px;\n                      margin: 15px 0;\n                      border-radius: 10px;\n                      text-align: left;\n                      backdrop-filter: blur(10px);\">\n            <p style=\"margin: 0; font-size: 14px; color: #fff; line-height: 1.5; font-weight: 600;\">\n              <strong style=\"color: #f5576c;\">Network Issue:</strong> Could not verify license due to connection problems.\n            </p>\n            <p style=\"margin: 10px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n              <strong style=\"color: #ff6b6b;\">Try:</strong> Check your internet connection and try again. If the problem persists, contact support.\n            </p>\n          </div>\n          \n          <div style=\"background: rgba(249, 0, 255, 0.1);\n                      padding: 15px;\n                      border-radius: 10px;\n                      margin-bottom: 8px;\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;\">\n              <img src=\"https://i.postimg.cc/MKRyMcR4/Screenshot-20260214-100336-Gallery-(1).jpg\"\n                   style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\"\n                   alt=\"Telegram\">\n              <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                Need Help?\n              </p>\n            </div>\n            <a href=\"https://t.me/traderjisanx\"\n               target=\"_blank\"\n               style=\"display: inline-block;\n                      color: #f900ff;\n                      font-weight: 700;\n                      text-decoration: none;\n                      font-size: 14px;\n                      padding: 10px 20px;\n                      background: rgba(249, 0, 255, 0.2);\n                      border-radius: 8px;\n                      transition: all 0.3s ease;\">\n              @traderjisanx\n            </a>\n          </div>\n        </div>\n      "}`,
      ["showConfirmButton"]: true,
      ["showCancelButton"]: true,
      ["confirmButtonText"]: "📞 Contact Support",
      ["cancelButtonText"]: "🔄 Try Again",
      ["confirmButtonColor"]: "#f093fb",
      ["cancelButtonColor"]: "#f5576c",
      ["allowOutsideClick"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex",
        ["popup"]: "custom-popup-style",
        ["confirmButton"]: "custom-button-style",
        ["cancelButton"]: "custom-button-style"
      },
      ["didOpen"]: () => {
        const ⴲⵛⴸⴺ = document.createElement("style");
        ⴲⵛⴸⴺ.textContent = `${"\n          .custom-popup-style {\n            border-radius: 20px !important;\n            padding: 0 !important;\n          }\n          .custom-button-style {\n            font-family: 'Roboto', sans-serif !important;\n            font-weight: 600 !important;\n            padding: 12px 30px !important;\n            border-radius: 10px !important;\n            font-size: 15px !important;\n            transition: all 0.3s ease !important;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n          }\n          .custom-button-style:hover {\n            transform: translateY(-2px) !important;\n            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n          }\n        "}`;
        document.head.appendChild(ⴲⵛⴸⴺ);
      }
    }).then(ⵒⴵⴷⴻ => {
      if (ⵒⴵⴷⴻ.isConfirmed) {
        window.open("https://t.me/traderjisanx", "_blank");
      }
    });
  }
  const ⵂⴰⴰⴻ = [91, 95, 74];
  const ⴲⵋⴳⴻ = "8c1b4f7a3e6d0c9b5f2a1e8d4c";
  const ⴲⵛⵘⴺ = "o6z9m2v7p4w1t6r3j0n5q8y1x4s7f2d0h3l6b9g4c1e8a5u2i";
  function ⵒⵅⵜⴺ() {
    return Swal.fire({
      ["icon"]: "success",
      ["title"]: "License Verified!",
      ["text"]: "Your license has been successfully verified.",
      ["showConfirmButton"]: false,
      ["timer"]: 1500,
      ["timerProgressBar"]: true,
      ["customClass"]: {
        ["container"]: "swal-high-zindex"
      }
    });
  }
  async function ⵒⵕⵑⴺ() {
    await ⴲⵛⵈⵃ();
    ⵂⵀⵕⵆ();
    let ⵂⵀⵕⴺ = "";
    let ⴲⵋⵓⴻ = ⵂⵀⵕⵆ();
    const ⵒⴵⵗⴻ = ⵒⵅⵌⴻ => {
      const ⵂⴰⵐⴻ = "$" + Number(ⵒⵅⵌⴻ).toFixed(2);
      const ⵂⵀⵅⴻ = document.getElementById("pmBinancePrice");
      const ⴲⵛⵈⴻ = document.getElementById("pmCryptoPrice");
      const ⴲⴻⴾⴻ = document.getElementById("pmBdtPrice");
      const ⵒⵕⵁⴻ = document.getElementById("pmTotalPrice");
      if (ⵂⵀⵅⴻ) {
        ⵂⵀⵅⴻ.textContent = ⵂⴰⵐⴻ + " USDT";
      }
      if (ⴲⵛⵈⴻ) {
        ⴲⵛⵈⴻ.textContent = ⵂⴰⵐⴻ + " USD";
      }
      if (ⴲⴻⴾⴻ) {
        const ⴲⵛⵈⴷ = Math.round(Number(ⵒⵅⵌⴻ) * Number(ⵒⵕⴱⵆ || 120));
        ⴲⴻⴾⴻ.textContent = "৳" + ⴲⵛⵈⴷ.toLocaleString("en-US") + " BDT";
      }
      if (ⵒⵕⵁⴻ) {
        ⵒⵕⵁⴻ.textContent = ⵂⴰⵐⴻ;
      }
    };
    await Swal.fire({
      ["title"]: "",
      ["html"]: `${"\n        <div style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-align: center;\n                    background: #FFFFFF; padding: 0; border-radius: 16px; overflow: hidden;\">\n\n          <div style=\"background: #FAFAFA; padding: 22px 20px 18px; border-bottom: 1px solid #EAECEF;\">\n            <div style=\"width: 52px; height: 52px; border-radius: 14px; background: rgba(240,185,11,0.08); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 10px;\">\n              <svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#C99400\" stroke-width=\"2.5\"><rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"/><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"/></svg>\n            </div>\n            <h3 style=\"color: #1E2329; font-size: 20px; font-weight: 800; margin: 4px 0;\">"}${ⴲⵛⵘⵆ === "subscription" ? "Monthly Subscription" : "Choose Payment Method"}${"</h3>\n            <p style=\"color: #707A8A; font-size: 13px; margin: 0;\">"}${ⴲⵛⵘⵆ === "subscription" ? "Pay monthly fee — active for 30 days" : "Select how you want to pay"}${"</p>\n            <p style=\"color: #1E2329; font-size: 22px; font-weight: 800; margin: 10px 0 0;\">\n              <span id=\"pmTotalPrice\">$"}${ⴲⵋⵓⴻ.toFixed(2)}${"</span>\n            </p>\n          </div>\n\n          <div style=\"padding: 20px;\">\n            <div id=\"pmDiscountBadge\" style=\"display:none; background: rgba(249, 115, 22, 0.12); padding: 10px; border-radius: 8px; margin-bottom: 12px; border: 1px solid rgba(249, 115, 22, 0.25); text-align:left;\">\n              <p style=\"color: #ea580c; font-size: 13px; margin: 0; font-weight: 600;\" id=\"pmDiscountText\"></p>\n            </div>\n\n            "}${ⴲⴻⵞⵅ.binance ? `${"\n            <button id=\"pmSelectBinance\" style=\"display:flex;width:100%;padding:16px 18px;background:#FFFFFF;border:1.5px solid #EAECEF;border-radius:14px;color:#1E2329;cursor:pointer;align-items:center;gap:14px;margin-bottom:12px;transition:all 0.2s;\">\n              <div style=\"width:48px;height:48px;border-radius:12px;background:rgba(240,185,11,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;\">\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#F0B90B\"><path d=\"M12 2L7.5 6.5L9.62 8.62L12 6.24L14.38 8.62L16.5 6.5L12 2ZM2 12L6.5 7.5L8.62 9.62L6.24 12L8.62 14.38L6.5 16.5L2 12ZM22 12L17.5 16.5L15.38 14.38L17.76 12L15.38 9.62L17.5 7.5L22 12ZM12 22L16.5 17.5L14.38 15.38L12 17.76L9.62 15.38L7.5 17.5L12 22ZM12 15.38L14.38 12L12 8.62L9.62 12L12 15.38Z\"/></svg>\n              </div>\n              <div style=\"text-align:left;flex:1;\">\n                <div style=\"font-weight:700;font-size:15px;color:#1E2329;\">Binance Pay</div>\n                <div style=\"color:#707A8A;font-size:12px;margin-top:2px;\">Pay with USDT via Binance</div>\n                <div id=\"pmBinancePrice\" style=\"color:#C99400;font-size:13px;font-weight:700;margin-top:4px;\">$"}${ⴲⵋⵓⴻ.toFixed(2)}${" USDT</div>\n              </div>\n              <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#AEB4BC\" stroke-width=\"2\"><polyline points=\"9 18 15 12 9 6\"/></svg>\n            </button>\n            "}` : ""}${"\n\n            "}${ⴲⴻⵞⵅ.crypto ? `${"\n            <button id=\"pmSelectCrypto\" style=\"display:flex;width:100%;padding:16px 18px;background:#FFFFFF;border:1.5px solid #EAECEF;border-radius:14px;color:#1E2329;cursor:pointer;align-items:center;gap:14px;margin-bottom:16px;transition:all 0.2s;\">\n              <div style=\"width:48px;height:48px;border-radius:12px;background:rgba(2,192,118,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;\">\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#02C076\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><text x=\"12\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#fff\" font-weight=\"bold\">$</text></svg>\n              </div>\n              <div style=\"text-align:left;flex:1;\">\n                <div style=\"font-weight:700;font-size:15px;color:#1E2329;\">Crypto</div>\n                <div style=\"color:#707A8A;font-size:12px;margin-top:2px;\">Pay with Crypto via OxaPay</div>\n                <div id=\"pmCryptoPrice\" style=\"color:#03A66D;font-size:13px;font-weight:700;margin-top:4px;\">$"}${ⴲⵋⵓⴻ.toFixed(2)}${" USD</div>\n              </div>\n              <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#AEB4BC\" stroke-width=\"2\"><polyline points=\"9 18 15 12 9 6\"/></svg>\n            </button>\n            "}` : ""}${"\n\n            "}${ⴲⴻⵞⵅ.bdt ? `${"\n            <button id=\"pmSelectBdt\" style=\"display:flex;width:100%;padding:16px 18px;background:#FFFFFF;border:1.5px solid #EAECEF;border-radius:14px;color:#1E2329;cursor:pointer;align-items:center;gap:14px;margin-bottom:16px;transition:all 0.2s;\">\n              <div style=\"width:48px;height:48px;border-radius:12px;background:rgba(6,95,70,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;\">\n                <span style=\"font-weight:900;font-size:18px;color:#065F46;\">৳</span>\n              </div>\n              <div style=\"text-align:left;flex:1;\">\n                <div style=\"font-weight:700;font-size:15px;color:#1E2329;\">BDT TAKA</div>\n                <div style=\"color:#707A8A;font-size:12px;margin-top:2px;\">Pay with Bangladeshi Taka (৳"}${Number(ⵒⵕⴱⵆ || 120)}${" = $1)</div>\n                <div id=\"pmBdtPrice\" style=\"color:#065F46;font-size:13px;font-weight:700;margin-top:4px;\">৳"}${Math.round(Number(ⴲⵋⵓⴻ) * Number(ⵒⵕⴱⵆ || 120)).toLocaleString("en-US")}${" BDT</div>\n              </div>\n              <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#AEB4BC\" stroke-width=\"2\"><polyline points=\"9 18 15 12 9 6\"/></svg>\n            </button>\n            "}` : ""}${"\n\n            "}${!ⴲⴻⵞⵅ.binance && !ⴲⴻⵞⵅ.crypto && !ⴲⴻⵞⵅ.bdt ? "<p style=\"color:#CF304A;font-size:14px;\">No payment methods are currently available. Please contact developer.</p>" : ""}${"\n\n            <div style=\"margin-top: 4px; padding-top: 16px; border-top: 1px solid #EAECEF; text-align: left;\">\n              <label style=\"color: #1E2329; font-size: 12px; font-weight: 600; display: block; margin-bottom: 6px;\">Coupon Code</label>\n              <div style=\"display: flex; gap: 8px;\">\n                <input type=\"text\" id=\"pmCouponInput\" placeholder=\"Enter coupon code\"\n                       style=\"flex: 1; padding: 11px 12px; border: 1.5px solid #EAECEF;\n                              border-radius: 10px; background: #F8FAFC; color: #1E2329;\n                              font-size: 13px; outline: none; box-sizing: border-box;\">\n                <button id=\"pmApplyCouponBtn\" type=\"button\"\n                        style=\"padding: 11px 16px; background: linear-gradient(135deg, #f97316, #ea580c);\n                               border: none; border-radius: 10px; color: white; font-weight: 700;\n                               cursor: pointer; font-size: 12px; white-space: nowrap;\">Apply</button>\n              </div>\n              <p id=\"pmCouponMessage\" style=\"font-size: 11px; margin-top: 6px; color: #707A8A;\"></p>\n            </div>\n          </div>\n        </div>\n      "}`,
      ["showConfirmButton"]: false,
      ["showCancelButton"]: true,
      ["cancelButtonText"]: "Back",
      ["cancelButtonColor"]: "#707A8A",
      ["allowOutsideClick"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex",
        ["popup"]: "custom-popup-style"
      },
      ["didOpen"]: () => {
        const ⵒⵕⵁⴷ = document.getElementById("pmApplyCouponBtn");
        if (ⵒⵕⵁⴷ) {
          ⵒⵕⵁⴷ.addEventListener("click", async () => {
            const ⵂⵐⴺⴷ = document.getElementById("pmCouponInput");
            const ⴲⵛⴸⴸ = document.getElementById("pmCouponMessage");
            const ⵒⵅⴼⴸ = document.getElementById("pmDiscountBadge");
            const ⵒⵕⴱⴸ = document.getElementById("pmDiscountText");
            const ⵂⵀⴵⴸ = ⵂⵐⴺⴷ.value.trim();
            if (!ⵂⵀⴵⴸ) {
              ⴲⵛⴸⴸ.textContent = "Please enter a coupon code";
              ⴲⵛⴸⴸ.style.color = "#ef4444";
              return;
            }
            ⴲⵛⴸⴸ.textContent = "Validating...";
            ⴲⵛⴸⴸ.style.color = "#f97316";
            try {
              const ⴲⴻⵞⴷ = await fetch(ⴲⵋⵓⵉ, {
                ["method"]: "POST",
                ["headers"]: {
                  ["Content-Type"]: "application/json"
                },
                ["body"]: JSON.stringify({
                  ["code"]: ⵂⵀⴵⴸ,
                  ["purpose"]: ⴲⵛⵘⵆ,
                  ["project_type"]: ⴲⴻⵞⵉ
                })
              });
              const ⴲⵋⵓⴷ = await ⴲⴻⵞⴷ.json();
              if (ⴲⵋⵓⴷ.success) {
                ⴲⵋⵓⴻ = ⴲⵋⵓⴷ.final_price;
                ⵂⵀⵕⴺ = ⵂⵀⴵⴸ;
                ⵂⴰⴰⵇ = ⵂⵀⴵⴸ;
                ⴲⵋⴳⵇ = ⴲⵋⵓⴻ;
                ⵒⴵⵗⴻ(ⴲⵋⵓⴻ);
                ⴲⵛⴸⴸ.textContent = "Coupon applied!";
                ⴲⵛⴸⴸ.style.color = "#10b981";
                ⵒⵅⴼⴸ.style.display = "block";
                ⵒⵕⴱⴸ.textContent = "Discount: -$" + ⴲⵋⵓⴷ.discount + " applied!";
              } else {
                ⴲⵛⴸⴸ.textContent = ⴲⵋⵓⴷ.message;
                ⴲⵛⴸⴸ.style.color = "#ef4444";
              }
            } catch (ⵂⵀⵕⴸ) {
              ⴲⵛⴸⴸ.textContent = "Error validating coupon";
              ⴲⵛⴸⴸ.style.color = "#ef4444";
            }
          });
        }
        const ⴲⵛⵘⴸ = ⴲⴻⵎⴸ => {
          ⵂⴰⴰⵇ = ⵂⵀⵕⴺ;
          ⴲⵋⴳⵇ = ⴲⵋⵓⴻ;
          Swal.close();
          if (ⴲⴻⵎⴸ === "binance") {
            ⵒⴵⵗⴳ();
          } else {
            if (ⴲⴻⵎⴸ === "bdt") {
              ⵂⴰⵀⴲⴳ();
            } else {
              ⵂⵀⵅⵟⴲ();
            }
          }
        };
        const ⵂⵐⵊⴸ = document.getElementById("pmSelectBinance");
        const ⵂⴰⵀⴸ = document.getElementById("pmSelectCrypto");
        const ⴲⵋⵃⴸ = document.getElementById("pmSelectBdt");
        if (ⵂⵐⵊⴸ) {
          ⵂⵐⵊⴸ.addEventListener("mouseover", () => {
            ⵂⵐⵊⴸ.style.borderColor = "#F0B90B";
            ⵂⵐⵊⴸ.style.background = "#FEF6D8";
          });
          ⵂⵐⵊⴸ.addEventListener("mouseout", () => {
            ⵂⵐⵊⴸ.style.borderColor = "#EAECEF";
            ⵂⵐⵊⴸ.style.background = "#FFFFFF";
          });
          ⵂⵐⵊⴸ.addEventListener("click", () => ⴲⵛⵘⴸ("binance"));
        }
        if (ⵂⴰⵀⴸ) {
          ⵂⴰⵀⴸ.addEventListener("mouseover", () => {
            ⵂⴰⵀⴸ.style.borderColor = "#02C076";
            ⵂⴰⵀⴸ.style.background = "#E6F9F0";
          });
          ⵂⴰⵀⴸ.addEventListener("mouseout", () => {
            ⵂⴰⵀⴸ.style.borderColor = "#EAECEF";
            ⵂⴰⵀⴸ.style.background = "#FFFFFF";
          });
          ⵂⴰⵀⴸ.addEventListener("click", () => ⴲⵛⵘⴸ("crypto"));
        }
        if (ⴲⵋⵃⴸ) {
          ⴲⵋⵃⴸ.addEventListener("mouseover", () => {
            ⴲⵋⵃⴸ.style.borderColor = "#065F46";
            ⴲⵋⵃⴸ.style.background = "#ECFDF5";
          });
          ⴲⵋⵃⴸ.addEventListener("mouseout", () => {
            ⴲⵋⵃⴸ.style.borderColor = "#EAECEF";
            ⴲⵋⵃⴸ.style.background = "#FFFFFF";
          });
          ⴲⵋⵃⴸ.addEventListener("click", () => ⴲⵛⵘⴸ("bdt"));
        }
      }
    });
  }
  let ⴲⴻⴾⴹ = null;
  let ⴲⵋⴳⴹ = null;
  let ⵒⴵⴷⴹ = null;
  const ⵒⵅⵜⴸ = "pendingBinanceOrder";
  const ⵂⴰⴰⴹ = 7200000;
  function ⵂⵐⴺⴵ(ⴲⴻⴾⴵ) {
    try {
      const ⴲⵋⴳⴵ = JSON.parse(localStorage.getItem(ⵒⵅⵜⴸ) || "{}");
      const ⵒⴵⴷⴵ = Object.assign({}, ⴲⵋⴳⴵ, ⴲⴻⴾⴵ || {}, {
        ["updated_at"]: Date.now()
      });
      localStorage.setItem(ⵒⵅⵜⴸ, JSON.stringify(ⵒⴵⴷⴵ));
    } catch (ⵒⵅⵜⴴ) {}
  }
  function ⵂⴰⴰⴵ() {
    localStorage.removeItem(ⵒⵅⵜⴸ);
    ⵂⵀⵕⴴ();
  }
  function ⵂⵀⵕⴴ() {
    if (ⴲⵋⴳⴹ) {
      clearInterval(ⴲⵋⴳⴹ);
      ⴲⵋⴳⴹ = null;
    }
    if (ⵒⴵⴷⴹ) {
      clearInterval(ⵒⴵⴷⴹ);
      ⵒⴵⴷⴹ = null;
    }
  }
  function ⵂⵐⵚⴵ(ⵂⴰⵐⴵ) {
    const ⴲⵋⵓⴵ = Math.max(0, Math.floor(Number(ⵂⴰⵐⴵ) || 0));
    const ⴲⵛⵈⴵ = Math.floor(ⴲⵋⵓⴵ / 3600);
    const ⵒⵅⵌⴵ = Math.floor(ⴲⵋⵓⴵ % 3600 / 60);
    const ⵒⵕⵁⴵ = ⴲⵋⵓⴵ % 60;
    const ⵂⵀⵅⴵ = ⴲⵋⵃⴶ => String(ⴲⵋⵃⴶ).padStart(2, "0");
    return ⵂⵀⵅⴵ(ⴲⵛⵈⴵ) + ":" + ⵂⵀⵅⴵ(ⵒⵅⵌⴵ) + ":" + ⵂⵀⵅⴵ(ⵒⵕⵁⴵ);
  }
  function ⵒⴵⵇⴶ(ⵒⵅⴼⴶ) {
    if (!ⵒⵅⴼⴶ) {
      return 0;
    }
    if (ⵒⵅⴼⴶ.expires_in_seconds != null && ⵒⵅⴼⴶ.expires_in_seconds !== "") {
      return Math.max(0, Number(ⵒⵅⴼⴶ.expires_in_seconds) || 0);
    }
    if (ⵒⵅⴼⴶ.expires_at) {
      try {
        const ⴲⴻⵞⴵ = new Date(String(ⵒⵅⴼⴶ.expires_at).trim().replace(" ", "T") + "+06:00");
        if (!isNaN(ⴲⴻⵞⴵ.getTime())) {
          return Math.max(0, Math.floor((ⴲⴻⵞⴵ.getTime() - Date.now()) / 1000));
        }
      } catch (ⵂⴰⴰⴷ) {}
    }
    if (ⵒⵅⴼⴶ.created_at_ms) {
      return Math.max(0, Math.floor((Number(ⵒⵅⴼⴶ.created_at_ms) + ⵂⴰⴰⴹ - Date.now()) / 1000));
    }
    return 7200;
  }
  function ⴲⵛⵘⴶ(ⵒⵅⵜⴶ) {
    if (!ⵒⵅⵜⴶ) {
      return 0;
    }
    try {
      const ⵂⵀⵕⴶ = String(ⵒⵅⵜⴶ).trim().replace(" ", "T");
      const ⵂⵐⵊⴶ = new Date(ⵂⵀⵕⴶ + "+06:00");
      if (isNaN(ⵂⵐⵊⴶ.getTime())) {
        return 0;
      }
      return ⵂⵐⵊⴶ.getTime() - 120000;
    } catch (ⴲⵛⵘⴲ) {
      return 0;
    }
  }
  async function ⵒⵅⵜⴲ(ⵒⵕⵑⴲ) {
    try {
      const [ⵂⵀⵕⴲ, ⵂⵐⵊⴲ] = await Promise.all([fetch(ⵂⴰⵐⵅ, {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json"
        },
        ["body"]: JSON.stringify({
          ["order_id"]: ⵒⵕⵑⴲ
        })
      }), fetch(ⵒⵅⵌⵉ)]);
      const ⴲⴻⵎⴲ = await ⵂⵀⵕⴲ.json();
      const ⴲⵋⵃⴲ = await ⵂⵐⵊⴲ.json();
      if (!ⴲⴻⵎⴲ.success) {
        ⵂⴰⴰⴵ();
        return false;
      }
      if (ⴲⴻⵎⴲ.status === "completed" && ⴲⴻⵎⴲ.license_key) {
        localStorage.setItem("appActivation", ⴲⴻⵎⴲ.license_key);
        localStorage.setItem("lastVerified", Date.now());
        ⵂⴰⴰⴵ();
        return "completed";
      }
      if (ⴲⴻⵎⴲ.status === "subscription_complete") {
        ⵂⴰⴰⴵ();
        ⴲⵛⵘⵆ = "permanent";
        return "subscription_complete";
      }
      if (ⴲⴻⵎⴲ.status === "paid") {
        ⵂⴰⴰⴵ();
        if (ⴲⵛⵘⵆ === "subscription" || ⴲⴻⵎⴲ.purpose === "subscription") {
          await ⵒⵕⵁⵝⴲ(ⵒⵕⵑⴲ);
        } else {
          await ⵒⵕⴱⵞⴲ(ⵒⵕⵑⴲ);
        }
        return "paid";
      }
      if (ⴲⴻⵎⴲ.status === "failed" || ⴲⴻⵎⴲ.status === "expired") {
        ⵂⴰⴰⴵ();
        return false;
      }
      if (!ⴲⵋⵃⴲ.enabled || !ⴲⵋⵃⴲ.uid) {
        return false;
      }
      if (!ⴲⴻⵎⴲ.payment_note) {
        ⵂⴰⴰⴵ();
        return false;
      }
      if (Number(ⴲⴻⵎⴲ.expires_in_seconds || 0) <= 0 && ⴲⴻⵎⴲ.expires_at) {
        ⵂⴰⴰⴵ();
        return false;
      }
      const ⵒⵕⴱⴴ = Number(ⴲⴻⵎⴲ.paid_amount || 0);
      const ⵂⵀⴵⴴ = String(ⴲⴻⵎⴲ.purpose || "permanent").toLowerCase();
      if (ⵂⵀⵅⵇ(ⴲⴻⵎⴲ.amount, ⵒⵕⴱⴴ)) {
        ⵂⴰⴰⴵ();
        return false;
      }
      if (ⵒⵕⴱⴴ <= 0.01 && ⵂⵀⴵⴴ !== String(ⴲⵛⵘⵆ || "permanent").toLowerCase()) {
        ⵂⴰⴰⴵ();
        return false;
      }
      ⴲⴻⴾⴹ = {
        ["order_id"]: ⵒⵕⵑⴲ,
        ["amount"]: Number(ⴲⴻⵎⴲ.amount),
        ["paid_so_far"]: ⵒⵕⴱⴴ,
        ["remaining"]: Number(ⴲⴻⵎⴲ.remaining ?? Math.max(0, ⴲⴻⵎⴲ.amount - ⵒⵕⴱⴴ)),
        ["uid"]: ⴲⵋⵃⴲ.uid,
        ["account_name"]: ⴲⵋⵃⴲ.account_name,
        ["order_created_at"]: ⴲⴻⵎⴲ.created_at || "",
        ["payment_note"]: ⴲⴻⵎⴲ.payment_note,
        ["expires_at"]: ⴲⴻⵎⴲ.expires_at || "",
        ["expires_in_seconds"]: Number(ⴲⴻⵎⴲ.expires_in_seconds || 0),
        ["created_at_ms"]: Date.now(),
        ["purpose"]: ⵂⵀⴵⴴ
      };
      ⵂⵐⴺⴵ({
        ["order_id"]: ⵒⵕⵑⴲ,
        ["amount"]: ⴲⴻⵎⴲ.amount,
        ["paid_so_far"]: ⴲⴻⴾⴹ.paid_so_far,
        ["remaining"]: ⴲⴻⴾⴹ.remaining,
        ["payment_note"]: ⴲⴻⵎⴲ.payment_note,
        ["expires_at"]: ⴲⴻⵎⴲ.expires_at || "",
        ["order_created_at"]: ⴲⴻⵎⴲ.created_at || "",
        ["purpose"]: ⵂⵀⴵⴴ,
        ["created_at"]: Date.now()
      });
      return "checkout";
    } catch (ⴲⵋⵓⴳ) {
      console.error("[BinancePay] Resume error:", ⴲⵋⵓⴳ);
      return false;
    }
  }
  async function ⵒⴵⵗⴳ() {
    ⵂⵀⵕⴴ();
    await ⴲⵛⵈⵃ();
    ⵂⵀⵕⵆ();
    try {
      const ⵒⵅⵌⴳ = localStorage.getItem(ⵒⵅⵜⴸ);
      if (ⵒⵅⵌⴳ) {
        const ⴲⴻⵎⴴ = JSON.parse(ⵒⵅⵌⴳ);
        const ⵒⵕⵑⴴ = Date.now() - Number(ⴲⴻⵎⴴ.updated_at || ⴲⴻⵎⴴ.created_at || 0);
        const ⵒⴵⵇⴴ = String(ⴲⴻⵎⴴ.purpose || "").toLowerCase();
        if (ⵂⵀⵅⵇ(ⴲⴻⵎⴴ.amount, ⴲⴻⵎⴴ.paid_so_far) || Number(ⴲⴻⵎⴴ.paid_so_far || 0) <= 0.01 && ⵒⴵⵇⴴ && ⵒⴵⵇⴴ !== String(ⴲⵛⵘⵆ || "permanent").toLowerCase()) {
          ⵂⴰⴰⴵ();
        } else {
          if (ⴲⴻⵎⴴ.order_id && ⵒⵕⵑⴴ < ⵂⴰⴰⴹ) {
            Swal.fire({
              ["title"]: "Resuming Payment...",
              ["html"]: "<div style=\"color: rgba(255,255,255,0.8);\">Checking your previous Binance payment...</div>",
              ["allowOutsideClick"]: false,
              ["showConfirmButton"]: false,
              ["customClass"]: {
                ["container"]: "swal-high-zindex"
              },
              ["didOpen"]: () => {
                Swal.showLoading();
              }
            });
            const ⴲⵛⴸⴴ = await ⵒⵅⵜⴲ(ⴲⴻⵎⴴ.order_id);
            Swal.close();
            if (ⴲⵛⴸⴴ === "completed" || ⴲⵛⴸⴴ === "paid") {
              return;
            }
            if (ⴲⵛⴸⴴ === "checkout") {
              ⵂⵐⴺⴱ();
              return;
            }
          } else {
            if (ⵒⵕⵑⴴ >= ⵂⴰⴰⴹ) {
              ⵂⴰⴰⴵ();
            }
          }
        }
      }
    } catch (ⵂⵐⵊ) {}
    Swal.close();
    Swal.fire({
      ["title"]: "Creating Binance Payment...",
      ["html"]: "<div style=\"color: rgba(255,255,255,0.8);\">Setting up your payment...</div>",
      ["allowOutsideClick"]: false,
      ["showConfirmButton"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex"
      },
      ["didOpen"]: () => {
        Swal.showLoading();
      }
    });
    try {
      const [ⵂⴰⵀ, ⴲⵋⵃ] = await Promise.all([fetch(ⵒⴵⵗⵅ, {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json"
        },
        ["body"]: JSON.stringify({
          ["coupon_code"]: ⵂⴰⴰⵇ,
          ["purpose"]: ⴲⵛⵘⵆ,
          ["project_type"]: ⴲⴻⵞⵉ,
          ["license_key"]: ⴲⵛⵘⵆ === "subscription" ? ⵒⵅⵜⵆ || localStorage.getItem("appActivation") || "" : ""
        })
      }), fetch(ⵒⵅⵌⵉ)]);
      const ⴲⵛⴸ = await ⵂⴰⵀ.json();
      const ⵒⵅⴼ = await ⴲⵋⵃ.json();
      if (!ⴲⵛⴸ.success) {
        Swal.fire({
          ["icon"]: "error",
          ["title"]: "Error",
          ["text"]: ⴲⵛⴸ.message || "Failed to create order.",
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
        return;
      }
      if (!ⵒⵅⴼ.enabled) {
        Swal.fire({
          ["icon"]: "error",
          ["title"]: "Binance Pay Disabled",
          ["text"]: "Binance Pay is currently disabled. Please try Crypto payment.",
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
        return;
      }
      if (!ⵒⵅⴼ.uid) {
        Swal.fire({
          ["icon"]: "error",
          ["title"]: "Not Configured",
          ["text"]: "Binance Pay is not configured. Please contact support.",
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
        return;
      }
      if (!ⴲⵛⴸ.payment_note) {
        Swal.fire({
          ["icon"]: "error",
          ["title"]: "Error",
          ["text"]: "Server did not return payment note. Please reload app.py on PythonAnywhere.",
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
        return;
      }
      ⴲⵋⴳⵇ = Number(ⴲⵛⴸ.amount);
      ⴲⴻⴾⴹ = {
        ["order_id"]: ⴲⵛⴸ.order_id,
        ["amount"]: ⴲⵛⴸ.amount,
        ["paid_so_far"]: 0,
        ["remaining"]: ⴲⵛⴸ.amount,
        ["uid"]: ⵒⵅⴼ.uid,
        ["account_name"]: ⵒⵅⴼ.account_name,
        ["order_created_at"]: ⴲⵛⴸ.created_at || "",
        ["payment_note"]: ⴲⵛⴸ.payment_note,
        ["expires_at"]: ⴲⵛⴸ.expires_at || "",
        ["expires_in_seconds"]: Number(ⴲⵛⴸ.expires_in_seconds || 7200),
        ["created_at_ms"]: Date.now(),
        ["purpose"]: ⴲⵛⴸ.purpose || ⴲⵛⵘⵆ
      };
      ⵂⵐⴺⴵ({
        ["order_id"]: ⴲⵛⴸ.order_id,
        ["amount"]: ⴲⵛⴸ.amount,
        ["paid_so_far"]: 0,
        ["remaining"]: ⴲⵛⴸ.amount,
        ["payment_note"]: ⴲⵛⴸ.payment_note,
        ["expires_at"]: ⴲⵛⴸ.expires_at || "",
        ["order_created_at"]: ⴲⵛⴸ.created_at || "",
        ["purpose"]: ⴲⵛⴸ.purpose || ⴲⵛⵘⵆ,
        ["created_at"]: Date.now()
      });
      ⵂⵐⴺⴱ();
    } catch (ⵒⵅⵜ) {
      console.error("[BinancePay] Error:", ⵒⵅⵜ);
      Swal.fire({
        ["icon"]: "error",
        ["title"]: "Error",
        ["text"]: "Connection error. Please check your internet and try again.",
        ["customClass"]: {
          ["container"]: "swal-high-zindex"
        }
      });
    }
  }
  const ⵂⴰⴰⴱ = "tVFINN8FT6o";
  function ⵂⵀⵕ() {
    const ⴲⵛⵘ = ⵂⴰⴰⴱ;
    const ⴲⴻⵎ = "https://www.youtube.com/watch?v=tVFINN8FT6o";
    const ⵒⵕⵑ = navigator.userAgent || "";
    const ⵂⴰⵐⴱ = /iPhone|iPad|iPod/i.test(ⵒⵕⵑ);
    const ⴲⵋⵓⴱ = /Android/i.test(ⵒⵕⵑ);
    if (!ⵂⴰⵐⴱ && !ⴲⵋⵓⴱ) {
      window.open(ⴲⴻⵎ, "_blank", "noopener,noreferrer");
      return;
    }
    if (ⵂⴰⵐⴱ) {
      const ⵒⵕⵁⴱ = Date.now();
      window.location.href = "youtube://www.youtube.com/watch?v=tVFINN8FT6o";
      setTimeout(() => {
        if (document.visibilityState === "visible" && Date.now() - ⵒⵕⵁⴱ < 2000) {
          window.open(ⴲⴻⵎ, "_blank", "noopener,noreferrer");
        }
      }, 900);
      return;
    }
    window.open(ⴲⴻⵎ, "_blank", "noopener,noreferrer");
  }
  function ⵂⵐⴺⴱ() {
    if (!ⴲⴻⴾⴹ) {
      return;
    }
    ⵂⵀⵕⴴ();
    const ⵒⵅⴼⴲ = Number(ⴲⴻⴾⴹ.amount || 0);
    const ⵂⴰⵀⴲ = Number(ⴲⴻⴾⴹ.paid_so_far || 0);
    const ⵂⵀⴵⴲ = Number(ⴲⴻⴾⴹ.remaining ?? Math.max(0, ⵒⵅⴼⴲ - ⵂⴰⵀⴲ));
    const ⴲⵛⴸⴲ = ⵂⴰⵀⴲ > 0 && ⵂⵀⴵⴲ > 0;
    const ⴲⴻⵞⴱ = ⴲⵛⴸⴲ ? ⵂⵀⴵⴲ : ⵒⵅⴼⴲ;
    const ⵒⵕⴱⴲ = ⴲⴻⴾⴹ.payment_note || "";
    let ⵒⴵⵗⴱ = ⵒⴵⵇⴶ(ⴲⴻⴾⴹ);
    Swal.fire({
      ["title"]: "",
      ["html"]: `${"\n        <div id=\"binCheckoutRoot\" style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n                    background: #FFFFFF; padding: 0; border-radius: 16px; overflow: hidden; max-height: 75vh; overflow-y: auto;\">\n\n          <div style=\"background: linear-gradient(135deg, #FCD535 0%, #F0B90B 100%); padding: 18px 22px; display: flex; align-items: center; justify-content: space-between; gap: 12px;\">\n            <div style=\"display:flex;align-items:center;gap:12px;\">\n              <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"#1E2329\"><path d=\"M12 2L7.5 6.5L9.62 8.62L12 6.24L14.38 8.62L16.5 6.5L12 2ZM2 12L6.5 7.5L8.62 9.62L6.24 12L8.62 14.38L6.5 16.5L2 12ZM22 12L17.5 16.5L15.38 14.38L17.76 12L15.38 9.62L17.5 7.5L22 12ZM12 22L16.5 17.5L14.38 15.38L12 17.76L9.62 15.38L7.5 17.5L12 22ZM12 15.38L14.38 12L12 8.62L9.62 12L12 15.38Z\"/></svg>\n              <div>\n                <div style=\"font-size:18px;font-weight:800;color:#1E2329;letter-spacing:0.5px;\">Binance Pay</div>\n                <div style=\"font-size:11px;color:rgba(0,0,0,0.45);font-weight:600;\">Auto detect by Note</div>\n              </div>\n            </div>\n            <div style=\"text-align:right;\">\n              <div style=\"font-size:10px;color:rgba(0,0,0,0.5);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;\">Time Left</div>\n              <div id=\"binCountdown\" style=\"font-size:16px;font-weight:900;color:#1E2329;font-variant-numeric:tabular-nums;\">"}${ⵂⵐⵚⴵ(ⵒⴵⵗⴱ)}${"</div>\n            </div>\n          </div>\n\n          <div style=\"padding: 20px;\">\n\n            <div style=\"background: #FAFAFA; border: 1px solid #EAECEF; border-radius: 14px; padding: 20px; text-align: center; margin-bottom: 16px;\">\n              "}${ⴲⵛⴸⴲ ? `${"<p style=\"color:#03A66D;font-size:12px;font-weight:700;margin:0 0 6px;\">Already paid: $"}${ⵂⴰⵀⴲ.toFixed(2)}${" USDT</p>"}` : ""}${"\n              <p style=\"color:#707A8A;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;\">"}${ⴲⵛⴸⴲ ? "Remaining Amount" : "Total Amount"}${"</p>\n              <p id=\"binDisplayAmount\" style=\"font-size:36px;font-weight:900;color:#C99400;margin:0;line-height:1;\">"}${ⴲⴻⵞⴱ}${" <span style=\"font-size:15px;color:#707A8A;font-weight:600;\">USDT</span></p>\n              <button id=\"binCopyAmount\" style=\"margin-top:10px;background:#FFFFFF;border:1px solid #EAECEF;border-radius:8px;color:#C99400;padding:6px 16px;font-size:12px;cursor:pointer;font-weight:700;display:inline-flex;align-items:center;gap:5px;\">\n                Copy Amount\n              </button>\n            </div>\n\n            <div style=\"background:#FAFAFA;border:1px solid #EAECEF;border-radius:14px;padding:16px;margin-bottom:16px;\">\n              <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;\">\n                <span style=\"color:#707A8A;font-size:12px;font-weight:600;\">Binance Pay ID</span>\n                <div style=\"display:flex;gap:6px;align-items:center;\">\n                  <button id=\"binShowQR\" type=\"button\" style=\"position:relative;background:#FFFFFF;border:1px solid #F0B90B;border-radius:8px;color:#1E2329;padding:5px 9px;font-size:11px;cursor:pointer;font-weight:700;display:inline-flex;align-items:center;gap:4px;overflow:visible;\">\n                    <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\">\n                      <path d=\"M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm10 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v4h-4v-2h2v-2z\" fill=\"#F0B90B\"/>\n                    </svg>\n                    <span>QR</span>\n                    <span class=\"bin-qr-cursor\" aria-hidden=\"true\" style=\"display:inline-flex;\">\n                      <svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\">\n                        <path d=\"M5.5 3.2l13.2 7.1c.7.4.4 1.4-.4 1.4h-5.3l-2.4 6.8c-.2.7-1.3.7-1.5 0L5.5 3.2z\" fill=\"#707A8A\"/>\n                      </svg>\n                    </span>\n                  </button>\n                  <button id=\"binCopyUid\" style=\"background:#F0B90B;border:none;border-radius:8px;color:#1E2329;padding:5px 14px;font-size:11px;cursor:pointer;font-weight:800;\">Copy ID</button>\n                </div>\n              </div>\n              <p style=\"color:#1E2329;font-size:22px;font-weight:800;letter-spacing:2px;margin:0;word-break:break-all;\">"}${ⴲⴻⴾⴹ.uid}${"</p>\n              "}${ⴲⴻⴾⴹ.account_name ? `${"<p style=\"color:#707A8A;font-size:12px;margin:6px 0 0;\"><span style=\"color:#F0B90B;\">●</span> "}${ⴲⴻⴾⴹ.account_name}${"</p>"}` : ""}${"\n            </div>\n\n            <div style=\"background:#FFF7E6;border:2px solid #F0B90B;border-radius:14px;padding:16px;margin-bottom:16px;text-align:center;\">\n              <p style=\"color:#C99400;font-size:12px;font-weight:800;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;\">Payment Note (Required)</p>\n              <p id=\"binPaymentNote\" style=\"color:#1E2329;font-size:28px;font-weight:900;letter-spacing:3px;margin:0 0 10px;font-family:monospace;\">"}${ⵒⵕⴱⴲ}${"</p>\n              <button id=\"binCopyNote\" style=\"background:#1E2329;border:none;border-radius:8px;color:#F0B90B;padding:8px 18px;font-size:12px;cursor:pointer;font-weight:800;\">Copy Note</button>\n              <p style=\"color:#707A8A;font-size:11px;margin:10px 0 0;line-height:1.5;\">\n                Binance Pay → Send → put this note in <strong style=\"color:#C99400;\">Note / Remark</strong>. Payment will auto-complete.\n              </p>\n            </div>\n\n            <div id=\"binQROverlay\" style=\"display:none;position:fixed;inset:0;width:100%;height:100%;background:rgba(0,0,0,0.82);z-index:100000;align-items:center;justify-content:center;backdrop-filter:blur(6px);padding:12px;box-sizing:border-box;\">\n              <div style=\"background:#FFFFFF;border-radius:24px;padding:28px 20px 32px;max-width:min(96vw,560px);width:100%;text-align:center;position:relative;box-shadow:0 24px 80px rgba(0,0,0,0.45);\">\n                <button id=\"binCloseQR\" style=\"position:absolute;top:14px;right:14px;width:40px;height:40px;border-radius:50%;border:none;background:#F5F5F5;cursor:pointer;font-size:18px;font-weight:700;color:#1E2329;line-height:1;\">✕</button>\n                <p style=\"color:#1E2329;font-size:20px;font-weight:800;margin:12px 0 4px;\">Scan to Pay</p>\n                <p style=\"color:#707A8A;font-size:13px;margin:0 0 8px;\">Open Binance app and scan this QR</p>\n                <div style=\"background:#FAFAFA;border-radius:18px;padding:16px;border:1px solid #EAECEF;margin-top:14px;\">\n                  <img src=\"https://i.postimg.cc/139x62ZS/share-2026-07-16-16-37-56-835-jpeg-2026-07-16-16-37-56.jpg\" alt=\"Binance QR Code\" style=\"width:100%;max-width:480px;border-radius:12px;display:block;margin:0 auto;\">\n                </div>\n              </div>\n            </div>\n\n            <button type=\"button\" id=\"binWatchTutorialBtn\" style=\"width:100%;display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:12px;padding:12px 16px;border:none;border-radius:12px;cursor:pointer;background:linear-gradient(135deg,#FF0000 0%,#CC0000 100%);color:#fff;font-weight:800;font-size:14px;box-shadow:0 6px 18px rgba(255,0,0,0.28);\">\n              <svg width=\"22\" height=\"16\" viewBox=\"0 0 24 17\" fill=\"none\" aria-hidden=\"true\">\n                <path d=\"M23.5 2.7a3 3 0 0 0-2.1-2.1C19.5 0 12 0 12 0S4.5 0 2.6.6A3 3 0 0 0 .5 2.7 31.5 31.5 0 0 0 0 8.5a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.5 17 12 17 12 17s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 8.5a31.5 31.5 0 0 0-.5-5.8z\" fill=\"#fff\"/>\n                <path d=\"M9.6 12.1V4.9l6.3 3.6-6.3 3.6z\" fill=\"#FF0000\"/>\n              </svg>\n              Watch Payment Tutorial on YouTube\n            </button>\n\n            <div style=\"background:#FAFAFA;border:1px solid #EAECEF;border-radius:14px;padding:16px;margin-bottom:16px;\">\n              <p style=\"color:#1E2329;font-weight:700;font-size:13px;margin-bottom:12px;\">How to Pay</p>\n              <div style=\"color:#474D57;font-size:12px;line-height:2.1;\">\n                <p style=\"margin:0;\">1. Open <strong>Binance App</strong> → Pay → Send</p>\n                <p style=\"margin:0;\">2. Enter Pay ID: <strong style=\"color:#C99400;\">"}${ⴲⴻⴾⴹ.uid}${"</strong></p>\n                <p style=\"margin:0;\">3. Amount: <strong id=\"binHowToAmount\" style=\"color:#C99400;\">"}${ⴲⴻⵞⴱ}${" USDT</strong></p>\n                <p style=\"margin:0;\">4. Note: <strong id=\"binHowToNote\" style=\"color:#03A66D;\">"}${ⵒⵕⴱⴲ}${"</strong> (must match exactly)</p>\n                <p style=\"margin:0;\">5. Confirm & Send — detection is automatic</p>\n              </div>\n            </div>\n\n            <div style=\"background:#F0FFF4;border:1px solid #BBF7D0;border-radius:12px;padding:12px;margin-bottom:12px;text-align:center;\">\n              <p id=\"binVerifyStatus\" style=\"color:#059669;font-size:12px;margin:0;font-weight:600;\">\n                Waiting for payment... Auto-checking every few seconds.\n              </p>\n            </div>\n\n            <p style=\"color:#AEB4BC;font-size:10px;text-align:center;margin:0;\">Secured by Binance Pay · Expires in 2 hours</p>\n          </div>\n        </div>\n      "}`,
      ["showConfirmButton"]: false,
      ["showCancelButton"]: true,
      ["cancelButtonText"]: "Cancel",
      ["cancelButtonColor"]: "#CF304A",
      ["allowOutsideClick"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex",
        ["popup"]: "custom-popup-style"
      },
      ["didOpen"]: () => {
        if (!document.getElementById("binQrBtnAnimStyle")) {
          const ⵒⴵⵗⴵⴳ = document.createElement("style");
          ⵒⴵⵗⴵⴳ.id = "binQrBtnAnimStyle";
          document.head.appendChild(ⵒⴵⵗⴵⴳ);
        }
        document.getElementById("binQrBtnAnimStyle").textContent = `${"\n            @keyframes binQrBtnGlow {\n              0%, 100% { box-shadow: 0 0 0 0 rgba(240,185,11,0.25); }\n              50% { box-shadow: 0 0 0 3px rgba(240,185,11,0); }\n            }\n            @keyframes binQrCursorTap {\n              0%, 100% { transform: translate(0,0); opacity: 0.75; }\n              50% { transform: translate(1px, 1px); opacity: 1; }\n            }\n            #binShowQR {\n              animation: binQrBtnGlow 2.4s ease-in-out infinite !important;\n            }\n            #binShowQR .bin-qr-cursor {\n              display: inline-flex !important;\n              animation: binQrCursorTap 1.8s ease-in-out infinite !important;\n            }\n            #binShowQR:hover {\n              background: #FFF7E6 !important;\n            }\n          "}`;
        document.getElementById("binCopyUid").addEventListener("click", () => {
          navigator.clipboard.writeText(ⴲⴻⴾⴹ.uid).catch(() => {});
          const ⵂⵐⵚⴵⴳ = document.getElementById("binCopyUid");
          ⵂⵐⵚⴵⴳ.textContent = "✓ Copied!";
          ⵂⵐⵚⴵⴳ.style.background = "#03A66D";
          ⵂⵐⵚⴵⴳ.style.color = "#fff";
          setTimeout(() => {
            ⵂⵐⵚⴵⴳ.textContent = "Copy ID";
            ⵂⵐⵚⴵⴳ.style.background = "#F0B90B";
            ⵂⵐⵚⴵⴳ.style.color = "#1E2329";
          }, 2000);
        });
        document.getElementById("binCopyAmount").addEventListener("click", () => {
          navigator.clipboard.writeText(String(ⴲⴻⵞⴱ)).catch(() => {});
          const ⵂⴰⵐⴵⴳ = document.getElementById("binCopyAmount");
          ⵂⴰⵐⴵⴳ.textContent = "Copied!";
          ⵂⴰⵐⴵⴳ.style.color = "#03A66D";
          setTimeout(() => {
            ⵂⴰⵐⴵⴳ.textContent = "Copy Amount";
            ⵂⴰⵐⴵⴳ.style.color = "#C99400";
          }, 2000);
        });
        document.getElementById("binCopyNote").addEventListener("click", () => {
          navigator.clipboard.writeText(ⵒⵕⴱⴲ).catch(() => {});
          const ⴲⵋⵓⴵⴳ = document.getElementById("binCopyNote");
          ⴲⵋⵓⴵⴳ.textContent = "✓ Note Copied!";
          setTimeout(() => {
            ⴲⵋⵓⴵⴳ.textContent = "Copy Note";
          }, 2000);
        });
        document.getElementById("binShowQR").addEventListener("click", () => {
          const ⴲⵛⵈⴵⴳ = document.getElementById("binQROverlay");
          if (!ⴲⵛⵈⴵⴳ) {
            return;
          }
          document.body.appendChild(ⴲⵛⵈⴵⴳ);
          ⴲⵛⵈⴵⴳ.style.display = "flex";
          const ⵒⵕⵁⴵⴳ = typeof Swal !== "undefined" && Swal.getCancelButton ? Swal.getCancelButton() : document.querySelector(".swal2-container .swal2-cancel");
          const ⵂⵀⵅⴵⴳ = document.querySelector(".swal2-container .swal2-actions");
          if (ⵒⵕⵁⴵⴳ) {
            ⵒⵕⵁⴵⴳ.style.display = "none";
          }
          if (ⵂⵀⵅⴵⴳ) {
            ⵂⵀⵅⴵⴳ.style.display = "none";
          }
        });
        document.getElementById("binCloseQR").addEventListener("click", () => {
          const ⵒⵅⴼⴶⴳ = document.getElementById("binQROverlay");
          const ⵂⴰⵀⴶⴳ = document.getElementById("binCheckoutRoot");
          if (ⵒⵅⴼⴶⴳ) {
            ⵒⵅⴼⴶⴳ.style.display = "none";
            if (ⵂⴰⵀⴶⴳ) {
              ⵂⴰⵀⴶⴳ.appendChild(ⵒⵅⴼⴶⴳ);
            }
          }
          const ⴲⴻⵞⴵⴳ = typeof Swal !== "undefined" && Swal.getCancelButton ? Swal.getCancelButton() : document.querySelector(".swal2-container .swal2-cancel");
          const ⵒⵕⴱⴶⴳ = document.querySelector(".swal2-container .swal2-actions");
          if (ⴲⴻⵞⴵⴳ) {
            ⴲⴻⵞⴵⴳ.style.display = "";
          }
          if (ⵒⵕⴱⴶⴳ) {
            ⵒⵕⴱⴶⴳ.style.display = "flex";
          }
        });
        document.getElementById("binQROverlay").addEventListener("click", ⴲⵛⵘⴶⴳ => {
          if (ⴲⵛⵘⴶⴳ.target !== ⴲⵛⵘⴶⴳ.currentTarget) {
            return;
          }
          document.getElementById("binCloseQR")?.["click"]?.();
        });
        document.getElementById("binWatchTutorialBtn")?.["addEventListener"]?.("click", ⵒⵕⵑⴶⴳ => {
          ⵒⵕⵑⴶⴳ.preventDefault();
          ⵂⵀⵕ();
        });
        const ⵂⵀⵕⴶⴳ = document.getElementById("binCountdown");
        ⵒⴵⴷⴹ = setInterval(() => {
          ⵒⴵⵗⴱ -= 1;
          if (ⵒⴵⵗⴱ <= 0) {
            ⵒⴵⵗⴱ = 0;
            if (ⵂⵀⵕⴶⴳ) {
              ⵂⵀⵕⴶⴳ.textContent = "00:00:00";
              ⵂⵀⵕⴶⴳ.style.color = "#CF304A";
            }
            ⵂⵀⵕⴴ();
            ⵂⴰⴰⴵ();
            const ⵒⵅⵌⴷⴳ = document.getElementById("binVerifyStatus");
            if (ⵒⵅⵌⴷⴳ) {
              ⵒⵅⵌⴷⴳ.style.color = "#CF304A";
              ⵒⵅⵌⴷⴳ.textContent = "Time expired (2 hours). Please start a new Binance payment.";
            }
            return;
          }
          if (ⵂⵀⵕⴶⴳ) {
            ⵂⵀⵕⴶⴳ.textContent = ⵂⵐⵚⴵ(ⵒⴵⵗⴱ);
            if (ⵒⴵⵗⴱ < 600) {
              ⵂⵀⵕⴶⴳ.style.color = "#CF304A";
            }
          }
        }, 1000);
        ⴲⵛⵈⴳⴳ();
      },
      ["willClose"]: () => {
        const ⴲⴻⴾⴷⴳ = document.getElementById("binQROverlay");
        if (ⴲⴻⴾⴷⴳ && ⴲⴻⴾⴷⴳ.parentElement === document.body) {
          ⴲⴻⴾⴷⴳ.remove();
        }
        ⵂⵀⵕⴴ();
      }
    });
  }
  async function ⵒⴵⴷⴷⴳ() {
    if (!ⴲⴻⴾⴹ) {
      return null;
    }
    const ⵂⵀⵅⴳⴳ = await fetch(ⴲⵋⵓⵅ, {
      ["method"]: "POST",
      ["headers"]: {
        ["Content-Type"]: "application/json"
      },
      ["body"]: JSON.stringify({
        ["system_order_id"]: ⴲⴻⴾⴹ.order_id
      })
    });
    return await ⵂⵀⵅⴳⴳ.json();
  }
  function ⴲⵛⵈⴳⴳ() {
    if (ⴲⵋⴳⴹ) {
      clearInterval(ⴲⵋⴳⴹ);
      ⴲⵋⴳⴹ = null;
    }
    const ⵒⵕⵁⴳⴳ = async () => {
      if (!ⴲⴻⴾⴹ) {
        return;
      }
      const ⵂⵐⴺⴳⴳ = document.getElementById("binVerifyStatus");
      try {
        const ⵂⴰⴰⴳⴳ = await ⵒⴵⴷⴷⴳ();
        if (!ⵂⴰⴰⴳⴳ) {
          return;
        }
        if (ⵂⴰⴰⴳⴳ.status === "expired") {
          ⵂⵀⵕⴴ();
          ⵂⴰⴰⴵ();
          if (ⵂⵐⴺⴳⴳ) {
            ⵂⵐⴺⴳⴳ.style.color = "#CF304A";
            ⵂⵐⴺⴳⴳ.textContent = ⵂⴰⴰⴳⴳ.message || "Payment time expired.";
          }
          return;
        }
        if (ⵂⴰⴰⴳⴳ.status === "pending") {
          if (ⵂⵐⴺⴳⴳ) {
            const ⴲⵋⵓⴳⴳ = Number(ⴲⴻⴾⴹ.paid_so_far || 0);
            const ⵒⴵⵗⴳⴳ = Number(ⴲⴻⴾⴹ.remaining || 0);
            if (ⴲⵋⵓⴳⴳ > 0 && ⵒⴵⵗⴳⴳ > 0) {
              ⵂⵐⴺⴳⴳ.style.color = "#d97706";
              ⵂⵐⴺⴳⴳ.innerHTML = "You have paid <strong>$" + ⴲⵋⵓⴳⴳ.toFixed(2) + "</strong> USDT. " + "Remaining: <strong>$" + ⵒⴵⵗⴳⴳ.toFixed(2) + "</strong> USDT.<br>" + "Please pay the remaining amount using note <strong>" + (ⴲⴻⴾⴹ.payment_note || "") + "</strong>. " + "Still waiting for payment...";
            } else {
              ⵂⵐⴺⴳⴳ.style.color = "#059669";
              ⵂⵐⴺⴳⴳ.textContent = "Waiting for payment with note " + (ⴲⴻⴾⴹ.payment_note || "") + "...";
            }
          }
          return;
        }
        if (ⵂⴰⴰⴳⴳ.status === "partial") {
          const ⴲⴻⵎⴴⴳ = Number(ⵂⴰⴰⴳⴳ.installment || 0);
          ⴲⴻⴾⴹ.paid_so_far = Number(ⵂⴰⴰⴳⴳ.paid_total || ⵂⴰⴰⴳⴳ.total_paid || 0);
          ⴲⴻⴾⴹ.remaining = Number(ⵂⴰⴰⴳⴳ.remaining || 0);
          if (ⵂⴰⴰⴳⴳ.payment_note) {
            ⴲⴻⴾⴹ.payment_note = ⵂⴰⴰⴳⴳ.payment_note;
          }
          ⵂⵐⴺⴵ({
            ["order_id"]: ⴲⴻⴾⴹ.order_id,
            ["amount"]: ⵂⴰⴰⴳⴳ.required || ⴲⴻⴾⴹ.amount,
            ["paid_so_far"]: ⴲⴻⴾⴹ.paid_so_far,
            ["remaining"]: ⴲⴻⴾⴹ.remaining,
            ["payment_note"]: ⴲⴻⴾⴹ.payment_note,
            ["expires_at"]: ⴲⴻⴾⴹ.expires_at,
            ["order_created_at"]: ⴲⴻⴾⴹ.order_created_at
          });
          const ⵒⴵⵇⴴⴳ = document.getElementById("binDisplayAmount");
          if (ⵒⴵⵇⴴⴳ) {
            ⵒⴵⵇⴴⴳ.innerHTML = ⴲⴻⴾⴹ.remaining.toFixed(2) + " <span style=\"font-size:15px;color:#707A8A;font-weight:600;\">USDT</span>";
          }
          const ⵂⴰⵀⴴⴳ = document.getElementById("binPaymentNote");
          if (ⵂⴰⵀⴴⴳ && ⴲⴻⴾⴹ.payment_note) {
            ⵂⴰⵀⴴⴳ.textContent = ⴲⴻⴾⴹ.payment_note;
          }
          const ⴲⵛⴸⴴⴳ = document.getElementById("binHowToNote");
          if (ⴲⵛⴸⴴⴳ && ⴲⴻⴾⴹ.payment_note) {
            ⴲⵛⴸⴴⴳ.textContent = ⴲⴻⴾⴹ.payment_note;
          }
          const ⵂⵐⴺⴵⴳ = document.getElementById("binHowToAmount");
          if (ⵂⵐⴺⴵⴳ) {
            ⵂⵐⴺⴵⴳ.textContent = ⴲⴻⴾⴹ.remaining.toFixed(2) + " USDT";
          }
          if (ⵂⵐⴺⴳⴳ) {
            ⵂⵐⴺⴳⴳ.style.color = "#d97706";
            ⵂⵐⴺⴳⴳ.innerHTML = "You paid <strong>$" + (ⴲⴻⵎⴴⴳ || ⴲⴻⴾⴹ.paid_so_far).toFixed(2) + "</strong> USDT. " + "Total received: <strong>$" + ⴲⴻⴾⴹ.paid_so_far.toFixed(2) + "</strong> USDT. " + "Remaining: <strong>$" + ⴲⴻⴾⴹ.remaining.toFixed(2) + "</strong> USDT.<br>" + "Please pay the remaining amount using the <strong>NEW note: " + (ⴲⴻⴾⴹ.payment_note || "") + "</strong>";
          }
          return;
        }
        if (ⵂⴰⴰⴳⴳ.status === "subscription_complete") {
          ⵂⵀⵕⴴ();
          if (ⵂⵐⴺⴳⴳ) {
            ⵂⵐⴺⴳⴳ.style.color = "#059669";
            ⵂⵐⴺⴳⴳ.textContent = "Subscription activated!";
          }
          ⵂⴰⴰⴵ();
          ⴲⵛⵘⵆ = "permanent";
          await new Promise(ⵂⴰⴰⴵⴳ => setTimeout(ⵂⴰⴰⴵⴳ, 600));
          Swal.close();
          await Swal.fire({
            ["icon"]: "success",
            ["title"]: "Subscription Active!",
            ["text"]: ⵂⴰⴰⴳⴳ.message || "Your monthly subscription is active for 30 days.",
            ["confirmButtonColor"]: "#8b5cf6",
            ["customClass"]: {
              ["container"]: "swal-high-zindex"
            }
          });
          location.reload();
          return;
        }
        if (ⵂⴰⴰⴳⴳ.status === "complete" || ⵂⴰⴰⴳⴳ.status === "completed") {
          ⵂⵀⵕⴴ();
          if (ⵂⵐⴺⴳⴳ) {
            ⵂⵐⴺⴳⴳ.style.color = "#059669";
            ⵂⵐⴺⴳⴳ.textContent = "Payment verified! Activating...";
          }
          const ⴲⵋⴳⴱⴳ = ⴲⴻⴾⴹ.order_id;
          ⵂⴰⴰⴵ();
          await new Promise(ⵒⴵⴷⴱⴳ => setTimeout(ⵒⴵⴷⴱⴳ, 800));
          Swal.close();
          if (ⴲⵛⵘⵆ === "subscription") {
            await ⵒⵕⵁⵝⴲ(ⴲⵋⴳⴱⴳ);
          } else {
            await ⵒⵕⴱⵞⴲ(ⴲⵋⴳⴱⴳ);
          }
          return;
        }
        if (!ⵂⴰⴰⴳⴳ.success && ⵂⴰⴰⴳⴳ.message) {
          if (ⵂⵐⴺⴳⴳ) {
            ⵂⵐⴺⴳⴳ.style.color = "#d97706";
            ⵂⵐⴺⴳⴳ.textContent = ⵂⴰⴰⴳⴳ.message;
          }
        }
      } catch (ⴲⵛⵘⴰⴳ) {
        console.error("[BinancePay] Auto-check error:", ⴲⵛⵘⴰⴳ);
        if (ⵂⵐⴺⴳⴳ) {
          ⵂⵐⴺⴳⴳ.style.color = "#d97706";
          ⵂⵐⴺⴳⴳ.textContent = "Checking... (connection issue, retrying)";
        }
      }
    };
    ⵒⵕⵁⴳⴳ();
    ⴲⵋⴳⴹ = setInterval(ⵒⵕⵁⴳⴳ, 15000);
  }
  async function ⵒⵕⵑⴰⴳ() {
    const ⵂⴰⵐⴱⴳ = localStorage.getItem("pendingOrderId");
    if (!ⵂⴰⵐⴱⴳ) {
      return null;
    }
    try {
      const ⴲⵛⵈⴱⴳ = await fetch(ⵂⵐⵚⵉ, {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json"
        },
        ["body"]: JSON.stringify({
          ["order_id"]: ⵂⴰⵐⴱⴳ
        })
      });
      const ⵒⵅⵌⴱⴳ = await ⴲⵛⵈⴱⴳ.json();
      if (ⵒⵅⵌⴱⴳ.success) {
        if (ⵒⵅⵌⴱⴳ.status === "completed" && ⵒⵅⵌⴱⴳ.license_key) {
          localStorage.setItem("appActivation", ⵒⵅⵌⴱⴳ.license_key);
          localStorage.setItem("lastVerified", Date.now());
          localStorage.removeItem("pendingOrderId");
          return {
            ["recovered"]: true,
            ["license_key"]: ⵒⵅⵌⴱⴳ.license_key
          };
        } else {
          if (ⵒⵅⵌⴱⴳ.status === "paid") {
            return {
              ["needsDetails"]: true,
              ["order_id"]: ⵂⴰⵐⴱⴳ
            };
          } else {
            if (ⵒⵅⵌⴱⴳ.status === "failed") {
              localStorage.removeItem("pendingOrderId");
            }
          }
        }
      }
    } catch (ⵒⵅⴼⴲⴳ) {}
    return null;
  }
  async function ⵂⴰⵀⴲⴳ() {
    const ⵂⵀⴵⴲⴳ = {
      ["price"]: ⴲⵋⴳⵇ,
      ["coupon"]: ⵂⴰⴰⵇ
    };
    const ⴲⵛⴸⴲⴳ = Math.round(Number(ⵂⵀⴵⴲⴳ.price) * Number(ⵒⵕⴱⵆ || 120));
    Swal.fire({
      ["title"]: "Creating BDT Payment...",
      ["html"]: "<div style=\"color: rgba(255,255,255,0.8);\">Preparing ৳" + ⴲⵛⴸⴲⴳ.toLocaleString("en-US") + " Taka checkout...</div>",
      ["allowOutsideClick"]: false,
      ["showConfirmButton"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex"
      },
      ["didOpen"]: () => {
        Swal.showLoading();
      }
    });
    try {
      const ⴲⴻⵞⴱⴳ = await fetch(ⵒⵅⵌⵅ, {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json"
        },
        ["body"]: JSON.stringify({
          ["coupon_code"]: ⵂⵀⴵⴲⴳ.coupon,
          ["purpose"]: ⴲⵛⵘⵆ,
          ["project_type"]: ⴲⴻⵞⵉ,
          ["license_key"]: ⴲⵛⵘⵆ === "subscription" ? ⵒⵅⵜⵆ || localStorage.getItem("appActivation") || localStorage.getItem("quotexLowAppActivation") || "" : "",
          ["name"]: "Quotex Customer"
        })
      });
      let ⵒⵕⴱⴲⴳ = {};
      try {
        ⵒⵕⴱⴲⴳ = await ⴲⴻⵞⴱⴳ.json();
      } catch (ⵒⴵⵗⴱⴳ) {
        ⵒⵕⴱⴲⴳ = {};
      }
      if (!ⴲⴻⵞⴱⴳ.ok || !ⵒⵕⴱⴲⴳ.success) {
        const ⴲⵛⵘⴲⴳ = ⵒⵕⴱⴲⴳ.message || (ⴲⴻⵞⴱⴳ.status === 404 ? "BDT payment API not found on server. Upload/restart updated app.py on uix.zozo.city" : "Failed to create BDT payment (HTTP " + ⴲⴻⵞⴱⴳ.status + ")");
        Swal.fire({
          ["icon"]: "error",
          ["title"]: "Error",
          ["text"]: ⴲⵛⵘⴲⴳ,
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
        return;
      }
      const ⵒⵅⵜⴲⴳ = ⵒⵕⴱⴲⴳ.order_id;
      const ⵒⵕⵑⴲⴳ = ⵒⵕⴱⴲⴳ.payment_url || ⵒⵕⴱⴲⴳ.pay_link;
      const ⵂⵀⵕⴲⴳ = ⵒⵕⴱⴲⴳ.amount_bdt || ⴲⵛⴸⴲⴳ;
      if (ⵒⵕⴱⴲⴳ.usd_rate) {
        ⵒⵕⴱⵆ = Number(ⵒⵕⴱⴲⴳ.usd_rate);
      }
      localStorage.setItem("pendingOrderId", ⵒⵅⵜⴲⴳ);
      localStorage.setItem("pendingBdtOrder", JSON.stringify({
        ["order_id"]: ⵒⵅⵜⴲⴳ,
        ["amount_bdt"]: ⵂⵀⵕⴲⴳ,
        ["amount_usd"]: ⵒⵕⴱⴲⴳ.amount_usd || ⵂⵀⴵⴲⴳ.price,
        ["created_at"]: Date.now()
      }));
      window.open(ⵒⵕⵑⴲⴳ, "_blank");
      await ⴲⵋⵃⴲⴳ(ⵒⵅⵜⴲⴳ, ⵂⵀⵕⴲⴳ);
    } catch (ⴲⴻⵎⴲⴳ) {
      Swal.fire({
        ["icon"]: "error",
        ["title"]: "Error",
        ["text"]: "BDT payment request failed. Make sure updated app.py is running on the server, then retry.",
        ["customClass"]: {
          ["container"]: "swal-high-zindex"
        }
      });
    }
  }
  async function ⴲⵋⵃⴲⴳ(ⵒⴵⵇⴲⴳ, ⵒⵕⵑⵞⴲ) {
    return new Promise(ⵂⵀⵕⵞⴲ => {
      let ⵂⵐⵊⵞⴲ = 0;
      const ⴲⴻⵎⵞⴲ = 360;
      const ⴲⵋⵃⵞⴲ = "৳" + Number(ⵒⵕⵑⵞⴲ || 0).toLocaleString("en-US");
      Swal.fire({
        ["title"]: "",
        ["html"]: `${"\n          <div style=\"font-family: 'Roboto', sans-serif; text-align: center;\n                      background: linear-gradient(135deg, rgba(6, 78, 59, 0.98), rgba(16, 185, 129, 0.95));\n                      padding: 20px; border-radius: 15px;\">\n            <div style=\"margin-bottom: 20px;\">\n              <div style=\"width: 60px; height: 60px; border: 4px solid rgba(255,255,255,0.25);\n                          border-top: 4px solid #fff; border-radius: 50%; margin: 0 auto;\n                          animation: paymentSpin 1s linear infinite;\"></div>\n            </div>\n            <h2 style=\"color: #fff; font-size: 16px; margin-bottom: 8px;\">Waiting for BDT Payment...</h2>\n            <p style=\"color: rgba(255,255,255,0.85); font-size: 22px; font-weight: 800; margin: 0 0 8px;\">"}${ⴲⵋⵃⵞⴲ}${"</p>\n            <p style=\"color: rgba(255,255,255,0.75); font-size: 13px; line-height: 1.6;\">\n              Complete payment in the opened tab.<br>\n              Auto-checking in background — subscription activates automatically.\n            </p>\n            <div style=\"background: rgba(255,255,255,0.12); padding: 12px; border-radius: 8px; margin-top: 15px;\">\n              <p style=\"color: #fff; font-size: 12px; margin: 0;\">Order: "}${ⵒⴵⵇⴲⴳ}${"</p>\n            </div>\n          </div>\n        "}`,
        ["showConfirmButton"]: false,
        ["showCancelButton"]: true,
        ["cancelButtonText"]: "Cancel",
        ["cancelButtonColor"]: "#ef4444",
        ["allowOutsideClick"]: false,
        ["customClass"]: {
          ["container"]: "swal-high-zindex",
          ["popup"]: "custom-popup-style"
        },
        ["didOpen"]: () => {
          const ⵒⴵⵇⵞⴲ = document.createElement("style");
          ⵒⴵⵇⵞⴲ.textContent = "@keyframes paymentSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
          document.head.appendChild(ⵒⴵⵇⵞⴲ);
          const ⵒⵅⴼⵞⴲ = setInterval(async () => {
            ⵂⵐⵊⵞⴲ++;
            if (ⵂⵐⵊⵞⴲ >= ⴲⴻⵎⵞⴲ) {
              clearInterval(ⵒⵅⴼⵞⴲ);
              Swal.close();
              ⵂⵀⵕⵞⴲ();
              return;
            }
            try {
              let ⴲⴻⴾⵟⴲ = await fetch(ⵒⵕⵁⵅ, {
                ["method"]: "POST",
                ["headers"]: {
                  ["Content-Type"]: "application/json"
                },
                ["body"]: JSON.stringify({
                  ["order_id"]: ⵒⴵⵇⴲⴳ
                })
              });
              let ⵒⵕⵁⵟⴲ = await ⴲⴻⴾⵟⴲ.json();
              if (!ⵒⵕⵁⵟⴲ.success) {
                ⴲⴻⴾⵟⴲ = await fetch(ⵂⵐⵚⵉ, {
                  ["method"]: "POST",
                  ["headers"]: {
                    ["Content-Type"]: "application/json"
                  },
                  ["body"]: JSON.stringify({
                    ["order_id"]: ⵒⴵⵇⴲⴳ
                  })
                });
                ⵒⵕⵁⵟⴲ = await ⴲⴻⴾⵟⴲ.json();
              }
              if (ⵒⵕⵁⵟⴲ.success) {
                if (ⵒⵕⵁⵟⴲ.status === "paid") {
                  clearInterval(ⵒⵅⴼⵞⴲ);
                  Swal.close();
                  localStorage.removeItem("pendingBdtOrder");
                  if (ⴲⵛⵘⵆ === "subscription") {
                    await ⵒⵕⵁⵝⴲ(ⵒⴵⵇⴲⴳ);
                  } else {
                    await ⵒⵕⴱⵞⴲ(ⵒⴵⵇⴲⴳ);
                  }
                  ⵂⵀⵕⵞⴲ();
                } else {
                  if (ⵒⵕⵁⵟⴲ.status === "completed" || ⵒⵕⵁⵟⴲ.status === "subscription_complete") {
                    clearInterval(ⵒⵅⴼⵞⴲ);
                    if (ⵒⵕⵁⵟⴲ.license_key) {
                      localStorage.setItem("appActivation", ⵒⵕⵁⵟⴲ.license_key);
                      try {
                        localStorage.setItem("quotexLowAppActivation", ⵒⵕⵁⵟⴲ.license_key);
                      } catch (ⵂⵐⵚⵟⴲ) {}
                      localStorage.setItem("lastVerified", Date.now());
                    }
                    localStorage.removeItem("pendingOrderId");
                    localStorage.removeItem("pendingBdtOrder");
                    ⴲⵋⵃⵆ = true;
                    ⴲⵛⵘⵆ = "permanent";
                    Swal.close();
                    if (ⵒⵕⵁⵟⴲ.status === "subscription_complete" || ⵒⵕⵁⵟⴲ.purpose === "subscription") {
                      await Swal.fire({
                        ["icon"]: "success",
                        ["title"]: "Subscription Active!",
                        ["text"]: ⵒⵕⵁⵟⴲ.message || "Your monthly subscription is active for 30 days.",
                        ["confirmButtonColor"]: "#065F46",
                        ["customClass"]: {
                          ["container"]: "swal-high-zindex"
                        }
                      });
                    } else {
                      await ⵒⵅⵜⴺ();
                    }
                    location.reload();
                    ⵂⵀⵕⵞⴲ();
                  } else {
                    if (ⵒⵕⵁⵟⴲ.status === "failed") {
                      clearInterval(ⵒⵅⴼⵞⴲ);
                      localStorage.removeItem("pendingOrderId");
                      localStorage.removeItem("pendingBdtOrder");
                      Swal.fire({
                        ["icon"]: "error",
                        ["title"]: "Payment Failed",
                        ["text"]: "Your BDT payment has failed or expired. Please try again.",
                        ["customClass"]: {
                          ["container"]: "swal-high-zindex"
                        }
                      });
                      ⵂⵀⵕⵞⴲ();
                    }
                  }
                }
              }
            } catch (ⵒⴵⵗⵟⴲ) {}
          }, 4000);
          Swal.getPopup().__pollInterval = ⵒⵅⴼⵞⴲ;
        },
        ["willClose"]: () => {
          const ⵒⵅⵌⵟⴲ = Swal.getPopup()?.["__pollInterval"];
          if (ⵒⵅⵌⵟⴲ) {
            clearInterval(ⵒⵅⵌⵟⴲ);
          }
        }
      });
    });
  }
  async function ⵂⵀⵅⵟⴲ() {
    const ⴲⵛⵈⵟⴲ = {
      ["price"]: ⴲⵋⴳⵇ,
      ["coupon"]: ⵂⴰⴰⵇ
    };
    Swal.fire({
      ["title"]: "Creating Payment...",
      ["html"]: "<div style=\"color: rgba(255,255,255,0.8);\">Setting up your payment...</div>",
      ["allowOutsideClick"]: false,
      ["showConfirmButton"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex"
      },
      ["didOpen"]: () => {
        Swal.showLoading();
      }
    });
    try {
      const ⵒⴵⵇⴰⴳ = await fetch(ⵒⴵⵗⵉ, {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json"
        },
        ["body"]: JSON.stringify({
          ["coupon_code"]: ⴲⵛⵈⵟⴲ.coupon,
          ["purpose"]: ⴲⵛⵘⵆ,
          ["project_type"]: ⴲⴻⵞⵉ,
          ["license_key"]: ⴲⵛⵘⵆ === "subscription" ? ⵒⵅⵜⵆ || localStorage.getItem("appActivation") || "" : ""
        })
      });
      const ⵂⵐⵊⴰⴳ = await ⵒⴵⵇⴰⴳ.json();
      if (!ⵂⵐⵊⴰⴳ.success) {
        Swal.fire({
          ["icon"]: "error",
          ["title"]: "Error",
          ["text"]: ⵂⵐⵊⴰⴳ.message || "Failed to create payment",
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
        return;
      }
      const ⴲⵋⵃⴰⴳ = ⵂⵐⵊⴰⴳ.order_id;
      const ⴲⵛⴸⴰⴳ = ⵂⵐⵊⴰⴳ.payment_url;
      localStorage.setItem("pendingOrderId", ⴲⵋⵃⴰⴳ);
      window.open(ⴲⵛⴸⴰⴳ, "_blank");
      await ⵒⵕⴱⴰⴳ(ⴲⵋⵃⴰⴳ);
    } catch (ⵒⵅⴼⴰⴳ) {
      Swal.fire({
        ["icon"]: "error",
        ["title"]: "Error",
        ["text"]: "Failed to create payment. Check your connection.",
        ["customClass"]: {
          ["container"]: "swal-high-zindex"
        }
      });
    }
  }
  async function ⵒⵕⴱⴰⴳ(ⵂⵀⴵⴰⴳ) {
    return new Promise(ⵂⴰⵀⵜⴲ => {
      let ⴲⵋⵃⵜⴲ = 0;
      const ⴲⵛⴸⵜⴲ = 360;
      Swal.fire({
        ["title"]: "",
        ["html"]: `${"\n          <div style=\"font-family: 'Roboto', sans-serif; text-align: center;\n                      background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                      padding: 20px; border-radius: 15px;\">\n            <div style=\"margin-bottom: 20px;\">\n              <div style=\"width: 60px; height: 60px; border: 4px solid rgba(16, 185, 129, 0.3);\n                          border-top: 4px solid #10b981; border-radius: 50%; margin: 0 auto;\n                          animation: paymentSpin 1s linear infinite;\"></div>\n            </div>\n            <h2 style=\"color: #fff; font-size: 16px; margin-bottom: 10px;\">Waiting for Payment...</h2>\n            <p style=\"color: rgba(255,255,255,0.7); font-size: 13px; line-height: 1.6;\">\n              Complete your payment in the opened tab.<br>\n              This will automatically update once confirmed.\n            </p>\n            <div style=\"background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 8px; margin-top: 15px;\">\n              <p style=\"color: #10b981; font-size: 12px; margin: 0;\">Order: "}${ⵂⵀⴵⴰⴳ}${"</p>\n            </div>\n          </div>\n        "}`,
        ["showConfirmButton"]: false,
        ["showCancelButton"]: true,
        ["cancelButtonText"]: "Cancel",
        ["cancelButtonColor"]: "#ef4444",
        ["allowOutsideClick"]: false,
        ["customClass"]: {
          ["container"]: "swal-high-zindex",
          ["popup"]: "custom-popup-style"
        },
        ["didOpen"]: () => {
          const ⵒⵅⴼⵜⴲ = document.createElement("style");
          ⵒⵅⴼⵜⴲ.textContent = "@keyframes paymentSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
          document.head.appendChild(ⵒⵅⴼⵜⴲ);
          const ⵒⵕⴱⵜⴲ = setInterval(async () => {
            ⴲⵋⵃⵜⴲ++;
            if (ⴲⵋⵃⵜⴲ >= ⴲⵛⴸⵜⴲ) {
              clearInterval(ⵒⵕⴱⵜⴲ);
              Swal.close();
              ⵂⴰⵀⵜⴲ();
              return;
            }
            try {
              const ⵂⵐⵚⵛⴲ = await fetch(ⵂⵐⵚⵉ, {
                ["method"]: "POST",
                ["headers"]: {
                  ["Content-Type"]: "application/json"
                },
                ["body"]: JSON.stringify({
                  ["order_id"]: ⵂⵀⴵⴰⴳ
                })
              });
              const ⴲⴻⵞⵛⴲ = await ⵂⵐⵚⵛⴲ.json();
              if (ⴲⴻⵞⵛⴲ.success) {
                if (ⴲⴻⵞⵛⴲ.status === "paid") {
                  clearInterval(ⵒⵕⴱⵜⴲ);
                  Swal.close();
                  if (ⴲⵛⵘⵆ === "subscription") {
                    await ⵒⵕⵁⵝⴲ(ⵂⵀⴵⴰⴳ);
                  } else {
                    await ⵒⵕⴱⵞⴲ(ⵂⵀⴵⴰⴳ);
                  }
                  ⵂⴰⵀⵜⴲ();
                } else {
                  if (ⴲⴻⵞⵛⴲ.status === "completed" || ⴲⴻⵞⵛⴲ.status === "subscription_complete") {
                    clearInterval(ⵒⵕⴱⵜⴲ);
                    if (ⴲⴻⵞⵛⴲ.license_key) {
                      localStorage.setItem("appActivation", ⴲⴻⵞⵛⴲ.license_key);
                      localStorage.setItem("lastVerified", Date.now());
                    }
                    localStorage.removeItem("pendingOrderId");
                    ⴲⵋⵃⵆ = true;
                    ⴲⵛⵘⵆ = "permanent";
                    Swal.close();
                    if (ⴲⴻⵞⵛⴲ.status === "subscription_complete" || ⴲⴻⵞⵛⴲ.purpose === "subscription") {
                      await Swal.fire({
                        ["icon"]: "success",
                        ["title"]: "Subscription Active!",
                        ["text"]: ⴲⴻⵞⵛⴲ.message || "Your monthly subscription is active for 30 days.",
                        ["confirmButtonColor"]: "#8b5cf6",
                        ["customClass"]: {
                          ["container"]: "swal-high-zindex"
                        }
                      });
                    } else {
                      await ⵒⵅⵜⴺ();
                    }
                    location.reload();
                    ⵂⴰⵀⵜⴲ();
                  } else {
                    if (ⴲⴻⵞⵛⴲ.status === "failed") {
                      clearInterval(ⵒⵕⴱⵜⴲ);
                      localStorage.removeItem("pendingOrderId");
                      Swal.fire({
                        ["icon"]: "error",
                        ["title"]: "Payment Failed",
                        ["text"]: "Your payment has failed or expired. Please try again.",
                        ["customClass"]: {
                          ["container"]: "swal-high-zindex"
                        }
                      });
                      ⵂⴰⵀⵜⴲ();
                    }
                  }
                }
              }
            } catch (ⵂⵐⵊⵜⴲ) {}
          }, 5000);
          Swal.getPopup().__pollInterval = ⵒⵕⴱⵜⴲ;
        },
        ["willClose"]: () => {
          const ⴲⵛⵈⵝⴲ = Swal.getPopup()?.["__pollInterval"];
          if (ⴲⵛⵈⵝⴲ) {
            clearInterval(ⴲⵛⵈⵝⴲ);
          }
        }
      });
    });
  }
  async function ⵒⵕⵁⵝⴲ(ⵂⵀⵅⵝⴲ) {
    Swal.fire({
      ["title"]: "Activating subscription...",
      ["html"]: "<div style=\"color: rgba(255,255,255,0.8);\">Confirming your monthly payment...</div>",
      ["allowOutsideClick"]: false,
      ["showConfirmButton"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex"
      },
      ["didOpen"]: () => {
        Swal.showLoading();
      }
    });
    try {
      const ⵂⵐⴺⵝⴲ = await fetch(ⵂⴰⵐⵉ, {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json"
        },
        ["body"]: JSON.stringify({
          ["order_id"]: ⵂⵀⵅⵝⴲ,
          ["email"]: "subscription@local",
          ["whatsapp"]: "",
          ["telegram"]: ""
        })
      });
      const ⴲⴻⴾⵝⴲ = await ⵂⵐⴺⵝⴲ.json();
      if (ⴲⴻⴾⵝⴲ.success) {
        const ⵒⴵⴷⵝⴲ = !!(ⴲⴻⴾⵝⴲ.license_still_blocked || String(ⴲⴻⴾⵝⴲ.license_status || "").toLowerCase() === "blocked");
        if (ⴲⴻⴾⵝⴲ.license_key) {
          localStorage.setItem("appActivation", ⴲⴻⴾⵝⴲ.license_key);
        }
        localStorage.removeItem("pendingOrderId");
        ⵂⴰⴰⴵ();
        ⴲⵛⵘⵆ = "permanent";
        ⵒⴵⵇⵄ();
        if (ⵒⴵⴷⵝⴲ) {
          ⴲⵋⵃⵆ = false;
          ⴲⵋⵓⵃ(false);
          localStorage.removeItem("lastVerified");
          await Swal.fire({
            ["icon"]: "warning",
            ["title"]: "Payment Received — License Blocked",
            ["html"]: "Your payment was recorded, but this license is <strong>BLOCKED</strong> by admin.<br>It will <strong>not work</strong> until the admin Activates it manually.",
            ["confirmButtonColor"]: "#e74c3c",
            ["customClass"]: {
              ["container"]: "swal-high-zindex"
            }
          });
          location.reload();
          return;
        }
        localStorage.setItem("lastVerified", Date.now());
        ⴲⵋⵃⵆ = true;
        ⴲⵋⵓⵃ(false);
        await Swal.fire({
          ["icon"]: "success",
          ["title"]: "Subscription Active!",
          ["text"]: ⴲⴻⴾⵝⴲ.message || "Your monthly subscription is active for 30 days.",
          ["confirmButtonColor"]: "#8b5cf6",
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
        location.reload();
      } else {
        Swal.fire({
          ["icon"]: "error",
          ["title"]: "Error",
          ["text"]: ⴲⴻⴾⵝⴲ.message || "Failed to activate subscription",
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
      }
    } catch (ⴲⴻⵞⵝⴲ) {
      Swal.fire({
        ["icon"]: "error",
        ["title"]: "Connection Error",
        ["text"]: "Failed to complete subscription. Please try again.",
        ["customClass"]: {
          ["container"]: "swal-high-zindex"
        }
      });
    }
  }
  async function ⵒⵕⴱⵞⴲ(ⵒⴵⵗⵝⴲ) {
    const {
      ["value"]: ⵂⵐⵚⵝⴲ,
      ["isDismissed"]: ⵂⴰⵐⵝⴲ
    } = await Swal.fire({
      ["title"]: "",
      ["html"]: `${"\n        <div style=\"font-family: 'Roboto', sans-serif; text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px; border-radius: 15px; box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n          <div style=\"background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n                      padding: 2px; border-radius: 12px; margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95); padding: 15px; border-radius: 10px;\">\n              <div style=\"font-size: 40px; margin-bottom: 8px;\">&#10004;</div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                         background: linear-gradient(to right, #10b981, #059669);\n                         -webkit-background-clip: text; -webkit-text-fill-color: transparent;\">\n                Payment Successful!\n              </h2>\n            </div>\n          </div>\n\n          <p style=\"color: rgba(255,255,255,0.8); font-size: 13px; margin-bottom: 15px;\">\n            Please provide your details to receive your license key.\n          </p>\n\n          <div style=\"text-align: left;\">\n            <label style=\"color: rgba(255,255,255,0.9); font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;\">\n              Email Address <span style=\"color: #ef4444;\">*</span>\n            </label>\n            <input type=\"email\" id=\"swalUserEmail\" placeholder=\"your@email.com\"\n                   style=\"width: 100%; padding: 10px; border: 2px solid rgba(255,255,255,0.2);\n                          border-radius: 8px; background: rgba(255,255,255,0.1); color: white;\n                          font-size: 13px; outline: none; margin-bottom: 12px; box-sizing: border-box;\">\n\n            <label style=\"color: rgba(255,255,255,0.9); font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;\">\n              WhatsApp Number <span style=\"color: rgba(255,255,255,0.5); font-size: 10px;\">(Optional)</span>\n            </label>\n            <input type=\"text\" id=\"swalUserWhatsApp\" placeholder=\"+880XXXXXXXXXX\"\n                   style=\"width: 100%; padding: 10px; border: 2px solid rgba(255,255,255,0.2);\n                          border-radius: 8px; background: rgba(255,255,255,0.1); color: white;\n                          font-size: 13px; outline: none; margin-bottom: 12px; box-sizing: border-box;\">\n\n            <label style=\"color: rgba(255,255,255,0.9); font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;\">\n              Telegram Username <span style=\"color: rgba(255,255,255,0.5); font-size: 10px;\">(Optional)</span>\n            </label>\n            <input type=\"text\" id=\"swalUserTelegram\" placeholder=\"@username\"\n                   style=\"width: 100%; padding: 10px; border: 2px solid rgba(255,255,255,0.2);\n                          border-radius: 8px; background: rgba(255,255,255,0.1); color: white;\n                          font-size: 13px; outline: none; box-sizing: border-box;\">\n          </div>\n        </div>\n      "}`,
      ["showConfirmButton"]: true,
      ["confirmButtonText"]: "Submit & Get License",
      ["confirmButtonColor"]: "#10b981",
      ["allowOutsideClick"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex",
        ["popup"]: "custom-popup-style"
      },
      ["preConfirm"]: () => {
        const ⴲⵋⵓⵝⴲ = document.getElementById("swalUserEmail").value.trim();
        if (!ⴲⵋⵓⵝⴲ || !ⴲⵋⵓⵝⴲ.includes("@")) {
          Swal.showValidationMessage("Please enter a valid email address");
          return false;
        }
        return {
          ["email"]: ⴲⵋⵓⵝⴲ,
          ["whatsapp"]: document.getElementById("swalUserWhatsApp").value.trim(),
          ["telegram"]: document.getElementById("swalUserTelegram").value.trim()
        };
      }
    });
    if (ⵂⴰⵐⵝⴲ || !ⵂⵐⵚⵝⴲ) {
      return;
    }
    Swal.fire({
      ["title"]: "Setting up your license...",
      ["html"]: "<div style=\"color: rgba(255,255,255,0.8);\">Creating license and sending email...</div>",
      ["allowOutsideClick"]: false,
      ["showConfirmButton"]: false,
      ["customClass"]: {
        ["container"]: "swal-high-zindex"
      },
      ["didOpen"]: () => {
        Swal.showLoading();
      }
    });
    try {
      const ⵒⴵⵗⵙⴲ = await fetch(ⵂⴰⵐⵉ, {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json"
        },
        ["body"]: JSON.stringify({
          ["order_id"]: ⵒⴵⵗⵝⴲ,
          ["email"]: ⵂⵐⵚⵝⴲ.email,
          ["whatsapp"]: ⵂⵐⵚⵝⴲ.whatsapp,
          ["telegram"]: ⵂⵐⵚⵝⴲ.telegram
        })
      });
      const ⵂⵐⵚⵙⴲ = await ⵒⴵⵗⵙⴲ.json();
      if (ⵂⵐⵚⵙⴲ.success && ⵂⵐⵚⵙⴲ.license_key) {
        localStorage.setItem("appActivation", ⵂⵐⵚⵙⴲ.license_key);
        localStorage.setItem("lastVerified", Date.now());
        localStorage.removeItem("pendingOrderId");
        ⴲⵋⵃⵆ = true;
        const ⴲⵋⵓⵙⴲ = document.getElementById("licenseInput");
        if (ⴲⵋⵓⵙⴲ) {
          ⴲⵋⵓⵙⴲ.value = ⵂⵐⵚⵙⴲ.license_key;
        }
        await Swal.fire({
          ["icon"]: "success",
          ["title"]: "License Activated!",
          ["html"]: "<div style=\"text-align: center;\"><p style=\"margin-bottom: 10px;\">Your license key has been set automatically.</p><div style=\"background: #1a1a2e; padding: 15px; border-radius: 10px; margin: 10px 0;            border: 1px solid #10b981; word-break: break-all;\"><code style=\"color: #10b981; font-size: 14px;\">" + ⵂⵐⵚⵙⴲ.license_key + "</code></div>" + "<p style=\"font-size: 12px; color: #94a3b8;\">A copy has been sent to: " + ⵂⵐⵚⵝⴲ.email + "</p></div>",
          ["confirmButtonText"]: "Start Using",
          ["confirmButtonColor"]: "#10b981",
          ["allowOutsideClick"]: false,
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
        location.reload();
      } else {
        Swal.fire({
          ["icon"]: "error",
          ["title"]: "Error",
          ["text"]: ⵂⵐⵚⵙⴲ.message || "Failed to create license",
          ["customClass"]: {
            ["container"]: "swal-high-zindex"
          }
        });
      }
    } catch (ⵒⵅⵌⵙⴲ) {
      Swal.fire({
        ["icon"]: "error",
        ["title"]: "Connection Error",
        ["text"]: "Failed to complete order. Please try again.",
        ["customClass"]: {
          ["container"]: "swal-high-zindex"
        }
      });
    }
  }
  function ⵂⵐⵊⵚⴲ(ⴲⴻⵎⵚⴲ) {
    const ⴲⵋⵃⵚⴲ = {
      ["A"]: "Nebula",
      ["B"]: "Quartz",
      ["C"]: "Tornado",
      ["D"]: "Eclipse",
      ["E"]: "Blizzard",
      ["F"]: "Mirage",
      ["G"]: "Vortex",
      ["H"]: "Zephyr",
      ["I"]: "Nimbus",
      ["J"]: "Cyclone",
      ["K"]: "Phantom",
      ["L"]: "Ignite",
      ["M"]: "Jungle",
      ["N"]: "Lynx",
      ["O"]: "Falcon",
      ["P"]: "Comet",
      ["Q"]: "Raven",
      ["R"]: "Stellar",
      ["S"]: "Glacier",
      ["T"]: "Orbit",
      ["U"]: "Tempest",
      ["V"]: "Nova",
      ["W"]: "Inferno",
      ["X"]: "Echo",
      ["Y"]: "Gravity",
      ["Z"]: "Shadow",
      0: "Drift",
      1: "Bolt",
      2: "Fury",
      3: "Crimson",
      4: "Oblivion",
      5: "Pulse",
      6: "Specter",
      7: "Radiant",
      8: "Blitz",
      9: "Strike",
      ["@"]: "Quotex",
      ["-"]: "Lyra",
      ["_"]: "Xion",
      ["#"]: "Vega",
      ["."]: "Orion"
    };
    const ⵒⴵⵇⵚⴲ = ⴲⴻⵎⵚⴲ.toUpperCase().split("").map(ⵒⵅⴼⵚⴲ => ⴲⵋⵃⵚⴲ[ⵒⵅⴼⵚⴲ] || "Fine").join(" ");
    return ⵒⴵⵇⵚⴲ;
  }
  const ⵂⴰⵀⵚⴲ = `${"\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');\n    \n    /* SweetAlert High Z-Index */\n    .swal-high-zindex {\n      z-index: 10000 !important;\n    }\n    \n    .swal2-container.swal-high-zindex {\n      z-index: 10000 !important;\n    }\n    \n    #settingsPopup {\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) scale(0.8);\n      width: calc(100% - 20px);\n      max-width: 360px;\n      max-height: calc(100vh - 20px);\n      height: auto;\n      padding: 10px 12px;\n      background: rgba(30, 11, 54, 0.98);\n      backdrop-filter: blur(10px);\n      border-radius: 10px;\n      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);\n      text-align: center;\n      border: 1px solid rgba(248, 0, 255, 0.2);\n      overflow-y: auto;\n      overflow-x: hidden;\n      font-family: 'Roboto', sans-serif;\n      color: #f8f8f8;\n      z-index: 9999;\n      opacity: 0;\n      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    }\n    \n    @media (max-height: 700px) {\n      #settingsPopup {\n        padding: 8px 10px;\n        max-height: calc(100vh - 10px);\n      }\n      #settingsPopup h2 { font-size: 11px; padding: 6px; margin-bottom: 6px; }\n      #settingsPopup h3 { font-size: 11px; margin: 6px 0 5px 0; }\n      #settingsPopup label { font-size: 10px; margin-bottom: 5px; }\n      #settingsPopup input, #settingsPopup select { padding: 6px; font-size: 12px; margin-top: 2px; }\n      #settingsPopup button { padding: 6px; font-size: 12px; margin-top: 4px; }\n      #settingsPopup small { font-size: 8px; margin-bottom: 5px; }\n      .telegram-link img { width: 28px; height: 28px; }\n      .telegram-link { margin-bottom: 5px; }\n      #licenseSection, #demoBalanceSection { padding: 8px; margin-top: 6px; }\n      #cheatCodeDisplay { font-size: 10px !important; padding: 6px !important; }\n    }\n    \n    @media (max-height: 550px) {\n      #settingsPopup {\n        padding: 6px 8px;\n      }\n      #settingsPopup h2 { font-size: 10px; padding: 5px; margin-bottom: 5px; }\n      #settingsPopup h3 { font-size: 10px; margin: 4px 0 4px 0; }\n      #settingsPopup label { font-size: 9px; margin-bottom: 4px; }\n      #settingsPopup input, #settingsPopup select { padding: 5px; font-size: 11px; border-radius: 6px; }\n      #settingsPopup button { padding: 5px; font-size: 11px; margin-top: 3px; border-radius: 6px; }\n      #settingsPopup small { font-size: 7px; margin-bottom: 4px; }\n      .telegram-link img { width: 24px; height: 24px; }\n      .telegram-link { margin-bottom: 4px; }\n      #licenseSection, #demoBalanceSection { padding: 6px; margin-top: 4px; }\n    }\n    \n    #settingsPopup::-webkit-scrollbar {\n      width: 8px;\n    }\n    \n    #settingsPopup::-webkit-scrollbar-track {\n      background: rgba(255, 255, 255, 0.1);\n      border-radius: 10px;\n    }\n    \n    #settingsPopup::-webkit-scrollbar-thumb {\n      background: linear-gradient(135deg, #8333ff, #f900ff);\n      border-radius: 10px;\n    }\n    \n    #settingsPopup::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 5px;\n      background: linear-gradient(to right, #f900ff, #00d9ff);\n      background-size: 200% 200%;\n      animation: gradientFlow 3s linear infinite;\n      border-radius: 12px 12px 0 0;\n    }\n    \n    @keyframes gradientFlow {\n      0% { background-position: 0% 50%; }\n      50% { background-position: 100% 50%; }\n      100% { background-position: 0% 50%; }\n    }\n\n    #settingsPopup.show {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n    }\n\n    #settingsPopup.hide {\n      opacity: 0;\n      transform: translate(-50%, -50%) scale(0.8);\n    }\n\n    #settingsPopup h2 {\n      color: white;\n      font-size: 12px;\n      font-weight: 600;\n      margin: 0 0 8px 0;\n      padding: 8px;\n      background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%);\n      border-radius: 6px;\n      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);\n      border: 1px solid rgba(248, 0, 255, 0.3);\n      line-height: 1.4;\n    }\n    \n    #settingsPopup h2 .warning-text {\n      color: #ff3366;\n      font-weight: 700;\n      display: block;\n      margin-top: 3px;\n      animation: warningPulse 2s infinite alternate;\n    }\n    \n    @keyframes warningPulse {\n      from { text-shadow: 0 0 5px rgba(255, 51, 102, 0.5); }\n      to { text-shadow: 0 0 15px rgba(255, 51, 102, 0.9), 0 0 20px rgba(255, 51, 102, 0.7); }\n    }\n    \n    #settingsPopup h3 {\n      color: white;\n      font-size: 12px;\n      font-weight: 700;\n      margin: 6px 0 5px 0;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      background: linear-gradient(to right, #f900ff, #00d9ff);\n      -webkit-background-clip: text;\n      background-clip: text;\n      -webkit-text-fill-color: transparent;\n      position: relative;\n      display: inline-block;\n    }\n    \n    #settingsPopup h3::after {\n      content: '';\n      position: absolute;\n      width: 60%;\n      height: 2px;\n      bottom: -5px;\n      left: 20%;\n      background: linear-gradient(to right, #f900ff, #00d9ff);\n      border-radius: 10px;\n    }\n    \n    .telegram-link {\n      display: inline-block;\n      margin-bottom: 6px;\n    }\n    \n    .telegram-link img {\n      width: 32px;\n      height: 32px;\n      cursor: pointer;\n      border-radius: 50%;\n      border: 2px solid rgba(255, 255, 255, 0.2);\n      box-shadow: 0 0 15px rgba(248, 0, 255, 0.5);\n      transition: all 0.3s ease;\n    }\n    \n    .telegram-link img:hover {\n      transform: scale(1.1) rotate(5deg);\n      box-shadow: 0 0 20px rgba(248, 0, 255, 0.7);\n      border-color: rgba(255, 255, 255, 0.4);\n    }\n\n    #settingsPopup label {\n      display: block; \n      margin-bottom: 6px; \n      color: rgba(255, 255, 255, 0.9);\n      font-size: 11px;\n      font-weight: 500;\n      text-align: left;\n    }\n\n    #settingsPopup input, #settingsPopup select {\n      width: 100%; \n      padding: 7px; \n      margin-top: 2px; \n      border: 2px solid rgba(255, 255, 255, 0.2); \n      border-radius: 8px; \n      background: rgba(255, 255, 255, 0.1);\n      color: white;\n      font-size: 13px;\n      box-sizing: border-box;\n      font-family: 'Roboto', sans-serif;\n      transition: all 0.3s ease;\n    }\n    \n    #settingsPopup input::placeholder {\n      color: rgba(255, 255, 255, 0.5);\n    }\n    \n    #settingsPopup input:focus, #settingsPopup select:focus {\n      outline: none;\n      border-color: #f900ff;\n      box-shadow: 0 0 0 3px rgba(248, 0, 255, 0.3);\n      background: rgba(255, 255, 255, 0.15);\n    }\n    \n    /* Country Flag Select Dropdown Styling */\n    #countryFlagSelect {\n      background: rgba(30, 11, 54, 0.9);\n      color: white;\n      cursor: pointer;\n    }\n    \n    #countryFlagSelect option {\n      background: #1e0b36;\n      color: white;\n      padding: 10px;\n      font-size: 14px;\n    }\n    \n    #countryFlagSelect option:hover {\n      background: rgba(248, 0, 255, 0.2);\n    }\n    \n    #countryFlagSelect option:checked {\n      background: linear-gradient(135deg, #8333ff, #f900ff);\n      color: white;\n      font-weight: 600;\n    }\n    \n    #settingsPopup small {\n      display: block;\n      margin-top: -4px;\n      margin-bottom: 6px;\n      color: rgba(255, 255, 255, 0.6);\n      font-size: 8px;\n      font-style: italic;\n      text-align: left;\n    }\n\n    #settingsPopup button {\n      width: 100%;\n      padding: 7px;\n      margin-top: 5px;\n      border: none;\n      border-radius: 8px;\n      font-size: 13px;\n      font-weight: 600;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      position: relative;\n      overflow: hidden;\n      font-family: 'Roboto', sans-serif;\n    }\n    \n    #settingsPopup button::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: -100%;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n      transition: all 0.5s ease;\n    }\n    \n    #settingsPopup button:hover::before {\n      left: 100%;\n    }\n    \n    #settingsPopup button:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n    }\n    \n    #settingsPopup button:active {\n      transform: translateY(0);\n    }\n    \n    #saveButton, #verifyBtn, #setDemoBtn {\n      background: linear-gradient(135deg, #8333ff, #f900ff);\n      color: white;\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n    }\n\n    #onlinePaymentActiveBtn {\n      background: linear-gradient(135deg, #10b981, #059669) !important;\n      color: white !important;\n      box-shadow: 0 5px 15px rgba(16, 185, 129, 0.35) !important;\n      margin-top: 8px !important;\n      width: 100%;\n      font-weight: 700 !important;\n    }\n\n    #onlinePaymentActiveBtn:hover {\n      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.45) !important;\n    }\n\n    #settingsPopup button.close-btn {\n      background: linear-gradient(135deg, #ff3366, #ff5757);\n      color: white;\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n    }\n\n    #settingsPopup button:disabled {\n      background: #6c757d;\n      cursor: not-allowed;\n      opacity: 0.6;\n    }\n    \n    #settingsPopup button:disabled:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    #licenseSection, #demoBalanceSection {\n      margin-top: 8px;\n      padding: 10px;\n      background: rgba(255, 255, 255, 0.05);\n      border-radius: 8px;\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      transition: all 0.3s ease;\n    }\n\n    #licenseSection.hide {\n      opacity: 0;\n      max-height: 0;\n      padding: 0;\n      margin: 0;\n      overflow: hidden;\n      border: none;\n    }\n\n    #demoBalanceSection {\n      opacity: 0;\n      max-height: 0;\n      overflow: hidden;\n      padding: 0;\n      margin: 0;\n      border: none;\n    }\n\n    #demoBalanceSection.show {\n      opacity: 1;\n      max-height: 500px;\n      padding: 12px;\n      margin-top: 10px;\n      border: 1px solid rgba(255, 255, 255, 0.1);\n    }\n\n    .message-popup {\n      position: fixed;\n      top: 80px;\n      right: 20px;\n      padding: 15px 20px;\n      color: white;\n      border-radius: 12px;\n      font-size: 14px;\n      font-weight: 600;\n      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n      opacity: 0;\n      transform: translateY(-20px);\n      transition: opacity 0.5s ease, transform 0.5s ease;\n      z-index: 10001;\n      max-width: 300px;\n      text-align: center;\n      backdrop-filter: blur(10px);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      font-family: 'Roboto', sans-serif;\n    }\n    \n    .message-popup.show {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    \n    .message-popup.success {\n      background: rgba(0, 255, 163, 0.15);\n      color: #00ffa3;\n      box-shadow: 0 0 15px rgba(0, 255, 163, 0.3);\n      border: 1px solid rgba(0, 255, 163, 0.2);\n    }\n    \n    .message-popup.error {\n      background: rgba(255, 51, 102, 0.15);\n      color: #ff3366;\n      box-shadow: 0 0 15px rgba(255, 51, 102, 0.3);\n      border: 1px solid rgba(255, 51, 102, 0.2);\n    }\n    \n    #centeredDeveloperMessage {\n      position: fixed; \n      top: 50%; \n      left: 50%;\n      transform: translate(-50%, -50%);\n      background: rgba(0, 0, 0, 0.9);\n      color: white; \n      padding: 30px 50px; \n      border-radius: 15px;\n      font-size: 20px; \n      font-weight: bold;\n      z-index: 10004; \n      opacity: 0;\n      transition: opacity 0.5s ease;\n      box-shadow: 0 10px 30px rgba(0,0,0,0.5);\n      border: 2px solid rgba(248, 0, 255, 0.5);\n      font-family: 'Roboto', sans-serif;\n      text-align: center;\n    }\n    \n    /* Hide original flag/name while loading and prepare for instant replacement */\n    .jisanx-leaderboard-loading .position__header-name {\n        opacity: 0 !important;\n    }\n\n    #licenseInput, #demoBalanceInput {\n      width: 100%;\n      padding: 8px;\n      font-size: 12px;\n      border: 2px solid rgba(255, 255, 255, 0.2);\n      border-radius: 10px;\n      margin-bottom: 8px;\n      background: rgba(255, 255, 255, 0.1);\n      color: white;\n      font-family: 'Roboto', sans-serif;\n      box-sizing: border-box;\n    }\n\n    #cheatCodeDisplay {\n      font-size: 8px;\n      padding: 6px;\n      margin-top: 6px;\n      line-height: 1.4;\n      background: rgba(0, 0, 0, 0.3);\n      border-radius: 6px;\n      color: rgba(255, 255, 255, 0.7);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      word-wrap: break-word;\n    }\n\n    .verified-badge {\n      background: rgba(0, 255, 163, 0.2);\n      color: #00ffa3;\n      padding: 4px 10px;\n      border-radius: 6px;\n      font-size: 10px;\n      font-weight: 600;\n      margin-top: 6px;\n      display: inline-block;\n      border: 1px solid rgba(0, 255, 163, 0.3);\n    }\n    \n    .unverified-badge {\n      background: rgba(255, 51, 102, 0.2);\n      color: #ff3366;\n      padding: 4px 10px;\n      border-radius: 6px;\n      font-size: 10px;\n      font-weight: 600;\n      margin-top: 10px;\n      display: inline-block;\n      border: 1px solid rgba(255, 51, 102, 0.3);\n    }\n\n    #demoBalanceStatus, #verificationStatus {\n      margin-top: 10px;\n      font-size: 12px;\n      font-weight: 500;\n    }\n\n    /* To reduce unnecessary space */\n    #settingsPopup br {\n      display: none;\n    }\n    \n    /* CSS for refresh button */\n    #refreshBalanceBtn {\n      position: absolute; \n      top: 26px; \n      right: 8px;\n      cursor: pointer;\n      width: 22px; \n      height: 22px;\n      display: flex; \n      align-items: center; \n      justify-content: center;\n      border-radius: 50%; \n      background: rgba(248, 0, 255, 0.2);\n      border: 2px solid rgba(248, 0, 255, 0.4);\n      transition: all 0.3s ease;\n    }\n    \n    #refreshBalanceBtn:hover { \n      background: rgba(248, 0, 255, 0.3);\n      transform: scale(1.1);\n      box-shadow: 0 0 15px rgba(248, 0, 255, 0.5);\n    }\n    \n    #refreshBalanceBtn svg { \n      width: 12px; \n      height: 12px; \n      fill: #f900ff; \n    }\n    \n    @keyframes spin { \n      from { transform: rotate(0deg); } \n      to { transform: rotate(360deg); } \n    }\n    \n    .spinning { \n      animation: spin 0.6s linear; \n    }\n    \n    /* Mobile Responsive */\n    @media screen and (max-width: 480px) {\n      #settingsPopup {\n        padding: 8px 10px;\n        max-width: 95%;\n        max-height: calc(100vh - 10px);\n      }\n      \n      #settingsPopup h2 {\n        font-size: 10px;\n        padding: 6px;\n        margin-bottom: 5px;\n        line-height: 1.3;\n      }\n      \n      #settingsPopup h3 {\n        font-size: 10px;\n        margin: 5px 0 4px 0;\n      }\n      \n      #settingsPopup h3::after {\n        bottom: -3px;\n      }\n      \n      .telegram-link {\n        margin-bottom: 4px;\n      }\n      \n      .telegram-link img {\n        width: 26px;\n        height: 26px;\n      }\n      \n      #settingsPopup input, #settingsPopup select {\n        padding: 5px;\n        font-size: 11px;\n      }\n      \n      #settingsPopup button {\n        padding: 5px;\n        font-size: 11px;\n      }\n      \n      #settingsPopup label {\n        font-size: 9px;\n        margin-bottom: 4px;\n      }\n      \n      #settingsPopup small {\n        font-size: 7px;\n        margin-top: -3px;\n        margin-bottom: 4px;\n      }\n      \n      #refreshBalanceBtn {\n        top: 24px;\n        width: 22px;\n        height: 22px;\n      }\n      \n      #refreshBalanceBtn svg {\n        width: 11px;\n        height: 11px;\n      }\n      \n      #licenseSection, #demoBalanceSection {\n        padding: 6px;\n        margin-top: 5px;\n      }\n      \n      #demoBalanceSection.show {\n        padding: 6px;\n        margin-top: 5px;\n      }\n      \n      #licenseInput, #demoBalanceInput {\n        padding: 5px;\n        font-size: 10px;\n        margin-bottom: 4px;\n      }\n      \n      #cheatCodeDisplay {\n        font-size: 7px;\n        padding: 4px;\n        margin-top: 5px;\n      }\n      \n      .verified-badge, .unverified-badge {\n        padding: 3px 8px;\n        font-size: 9px;\n      }\n    }\n    \n    /* Custom overlay panel for leaderboard information */\n    .custom-overlay-panel {\n      z-index: 10000 !important;\n      pointer-events: auto !important;\n      position: fixed !important;\n    }\n    \n    /* Hide only the specific original panel that has custom overlay */\n    .panel-leader-board__information.hide-original {\n      opacity: 0 !important;\n      pointer-events: none !important;\n      visibility: hidden !important;\n    }\n    \n    /* Pre-hide any panel that might be for user's position - will be shown if not user's */\n    .panel-leader-board__information:not(.custom-overlay-panel) {\n      opacity: 0 !important;\n      visibility: hidden !important;\n      transition: none !important;\n    }\n    \n    /* Show original panel only for other users (will be set by JS) */\n    .panel-leader-board__information.show-original {\n      opacity: 1 !important;\n      visibility: visible !important;\n    }\n"}`;
  const ⵂⵀⴵⵚⴲ = [109, 156, 142];
  function ⴲⵛⴸⵚⴲ(ⵒⴵⴷⵛⴲ, ⵂⵐⴺⵛⴲ = 3000, ⵂⴰⴰⵛⴲ = "success") {
    const ⴲⵋⴳⵛⴲ = document.createElement("div");
    ⴲⵋⴳⵛⴲ.className = `${"message-popup "}${ⵂⴰⴰⵛⴲ}`;
    ⴲⵋⴳⵛⴲ.textContent = ⵒⴵⴷⵛⴲ;
    document.body.appendChild(ⴲⵋⴳⵛⴲ);
    setTimeout(() => {
      ⴲⵋⴳⵛⴲ.classList.add("show");
    }, 10);
    setTimeout(() => {
      ⴲⵋⴳⵛⴲ.classList.remove("show");
      setTimeout(() => ⴲⵋⴳⵛⴲ.remove(), 500);
    }, ⵂⵐⴺⵛⴲ);
  }
  const ⴲⵛⵘⵚⴲ = [104, 122, 119];
  function ⵒⵅⵜⵚⴲ(ⵒⵕⵑⵚⴲ, ⵂⵀⵕⵚⴲ) {
    const ⴲⵋⵓⵛⴲ = document.createElement("div");
    ⴲⵋⵓⵛⴲ.id = "centeredDeveloperMessage";
    ⴲⵋⵓⵛⴲ.textContent = ⵒⵕⵑⵚⴲ;
    document.body.appendChild(ⴲⵋⵓⵛⴲ);
    setTimeout(() => {
      ⴲⵋⵓⵛⴲ.style.opacity = "1";
    }, 10);
    setTimeout(() => {
      ⴲⵋⵓⵛⴲ.style.opacity = "0";
      setTimeout(() => ⴲⵋⵓⵛⴲ.remove(), 500);
    }, ⵂⵀⵕⵚⴲ);
  }
  function ⵒⴵⵗⵛⴲ() {
    const ⵒⵅⵌⵛⴲ = document.getElementById("licenseSection");
    const ⵂⴰⵐⵛⴲ = document.getElementById("demoBalanceSection");
    if (ⵒⵅⵌⵛⴲ && ⵂⴰⵐⵛⴲ) {
      ⵒⵅⵌⵛⴲ.classList.add("hide");
      setTimeout(() => {
        ⵂⴰⵐⵛⴲ.classList.add("show");
      }, 300);
    }
  }
  function ⴲⵛⵈⵛⴲ() {
    const ⴲⴻⴾⵛⴲ = document.getElementById("licenseSection");
    const ⵒⵕⵁⵛⴲ = document.getElementById("demoBalanceSection");
    if (ⴲⴻⴾⵛⴲ && ⵒⵕⵁⵛⴲ) {
      ⵒⵕⵁⵛⴲ.classList.remove("show");
      setTimeout(() => {
        ⴲⴻⴾⵛⴲ.classList.remove("hide");
      }, 300);
    }
  }
  async function ⵂⴰⵐⵗⴲ() {
    const ⵂⵀⵅⵗⴲ = await ⴲⵛⵈⴽ();
    ⴲⵋⵃⵆ = ⵂⵀⵅⵗⴲ.valid;
    const ⴲⵛⵈⵗⴲ = document.createElement("div");
    ⴲⵛⵈⵗⴲ.innerHTML = `${"\n      <div id=\"settingsPopup\">\n        <h2>Developer: <strong>@traderjisanx</strong> - <span class=\"warning-text\">Buying from others will result in fraud!</span></h2>\n        <a href=\"https://t.me/treaderjisanx\" target=\"_blank\" class=\"telegram-link\">\n            <img src=\"https://i.postimg.cc/MKRyMcR4/Screenshot-20260214-100336-Gallery-(1).jpg\" alt=\"Telegram\">\n        </a>\n        \n        <label>Leaderboard Name:\n            <input type=\"text\" id=\"lname\" placeholder=\"Enter Name\">\n        </label>\n        \n        <div style=\"position: relative;\">\n            <label>Leaderboard Balance:\n                <input type=\"number\" id=\"iblafp\" placeholder=\"Enter Balance\">\n            </label>\n            <span id=\"refreshBalanceBtn\" title=\"Fetch Current Balance\">\n                <svg viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path></svg>\n            </span>\n        </div>\n\n        <label>Profile Photo Link:\n          <input type=\"text\" id=\"profilePhotoUrl\" placeholder=\"Enter Profile Photo Link\">\n          <small>Example: /en/user/avatar/view/07/90/87/46/avatar_8c7e009cd96f2e43f9d3237baab07071.png</small>\n        </label>\n        <label>Country Flag:\n           <select id=\"countryFlagSelect\">\n                <option value=\"bd\">🇧🇩 Bangladesh</option>\n                <option value=\"in\">🇮🇳 India</option>\n                <option value=\"pk\">🇵🇰 Pakistan</option>\n                <option value=\"af\">🇦🇫 Afghanistan</option>\n                <option value=\"ax\">🇦🇽 Åland Islands</option>\n                <option value=\"al\">🇦🇱 Albania</option>\n                <option value=\"dz\">🇩🇿 Algeria</option>\n                <option value=\"as\">🇦🇸 American Samoa</option>\n                <option value=\"ao\">🇦🇴 Angola</option>\n                <option value=\"ai\">🇦🇮 Anguilla</option>\n                <option value=\"aq\">🇦🇶 Antarctica</option>\n                <option value=\"ag\">🇦🇬 Antigua & Barbuda</option>\n                <option value=\"ar\">🇦🇷 Argentina</option>\n                <option value=\"am\">🇦🇲 Armenia</option>\n                <option value=\"aw\">🇦🇼 Aruba</option>\n                <option value=\"az\">🇦🇿 Azerbaijan</option>\n                <option value=\"bs\">🇧🇸 Bahamas</option>\n                <option value=\"bh\">🇧🇭 Bahrain</option>\n                <option value=\"bb\">🇧🇧 Barbados</option>\n                <option value=\"by\">🇧🇾 Belarus</option>\n                <option value=\"bz\">🇧🇿 Belize</option>\n                <option value=\"bj\">🇧🇯 Benin</option>\n                <option value=\"bm\">🇧🇲 Bermuda</option>\n                <option value=\"bt\">🇧🇹 Bhutan</option>\n                <option value=\"bo\">🇧🇴 Bolivia</option>\n                <option value=\"ba\">🇧🇦 Bosnia & Herzegovina</option>\n                <option value=\"bw\">🇧🇼 Botswana</option>\n                <option value=\"bv\">🇧🇻 Bouvet Island</option>\n                <option value=\"br\">🇧🇷 Brazil</option>\n                <option value=\"io\">🇮🇴 British Indian Ocean Territory</option>\n                <option value=\"bn\">🇧🇳 Brunei</option>\n                <option value=\"bf\">🇧🇫 Burkina Faso</option>\n                <option value=\"bi\">🇧🇮 Burundi</option>\n                <option value=\"kh\">🇰🇭 Cambodia</option>\n                <option value=\"cm\">🇨🇲 Cameroon</option>\n                <option value=\"cv\">🇨🇻 Cape Verde</option>\n                <option value=\"ky\">🇰🇾 Cayman Islands</option>\n                <option value=\"cf\">🇨🇫 Central African Republic</option>\n                <option value=\"td\">🇹🇩 Chad</option>\n                <option value=\"cl\">🇨🇱 Chile</option>\n                <option value=\"cn\">🇨🇳 China</option>\n                <option value=\"cx\">🇨🇽 Christmas Island</option>\n                <option value=\"cc\">🇨🇨 Cocos (Keeling) Islands</option>\n                <option value=\"co\">🇨🇴 Colombia</option>\n                <option value=\"km\">🇰🇲 Comoros</option>\n                <option value=\"cg\">🇨🇬 Congo - Brazzaville</option>\n                <option value=\"cd\">🇨🇩 Congo - Kinshasa</option>\n                <option value=\"ck\">🇨🇰 Cook Islands</option>\n                <option value=\"cr\">🇨🇷 Costa Rica</option>\n                <option value=\"ci\">🇨🇮 Côte d Ivoire</option>\n                <option value=\"cu\">🇨🇺 Cuba</option>\n                <option value=\"cw\">🇨🇼 Curaçao</option>\n                <option value=\"dj\">🇩🇯 Djibouti</option>\n                <option value=\"dm\">🇩🇲 Dominica</option>\n                <option value=\"do\">🇩🇴 Dominican Republic</option>\n                <option value=\"ec\">🇪🇨 Ecuador</option>\n                <option value=\"eg\">🇪🇬 Egypt</option>\n                <option value=\"sv\">🇸🇻 El Salvador</option>\n                <option value=\"gq\">🇬🇶 Equatorial Guinea</option>\n                <option value=\"er\">🇪🇷 Eritrea</option>\n                <option value=\"sz\">🇸🇿 Eswatini</option>\n                <option value=\"et\">🇪🇹 Ethiopia</option>\n                <option value=\"fk\">🇫🇰 Falkland Islands</option>\n                <option value=\"fo\">🇫🇴 Faroe Islands</option>\n                <option value=\"fj\">🇫🇯 Fiji</option>\n                <option value=\"gf\">🇬🇫 French Guiana</option>\n                <option value=\"pf\">🇵🇫 French Polynesia</option>\n                <option value=\"tf\">🇹🇫 French Southern Territories</option>\n                <option value=\"ga\">🇬🇦 Gabon</option>\n                <option value=\"gm\">🇬🇲 Gambia</option>\n                <option value=\"ge\">🇬🇪 Georgia</option>\n                <option value=\"gh\">🇬🇭 Ghana</option>\n                <option value=\"gi\">🇬🇮 Gibraltar</option>\n                <option value=\"gl\">🇬🇱 Greenland</option>\n                <option value=\"gd\">🇬🇩 Grenada</option>\n                <option value=\"gp\">🇬🇵 Guadeloupe</option>\n                <option value=\"gt\">🇬🇹 Guatemala</option>\n                <option value=\"gg\">🇬🇬 Guernsey</option>\n                <option value=\"gn\">🇬🇳 Guinea</option>\n                <option value=\"gw\">🇬🇼 Guinea-Bissau</option>\n                <option value=\"gy\">🇬🇾 Guyana</option>\n                <option value=\"ht\">🇭🇹 Haiti</option>\n                <option value=\"hm\">🇭🇲 Heard & McDonald Islands</option>\n                <option value=\"hn\">🇭🇳 Honduras</option>\n                <option value=\"is\">🇮🇸 Iceland</option>\n                <option value=\"id\">🇮🇩 Indonesia</option>\n                <option value=\"ir\">🇮🇷 Iran</option>\n                <option value=\"iq\">🇮🇶 Iraq</option>\n                <option value=\"im\">🇮🇲 Isle of Man</option>\n                <option value=\"jm\">🇯🇲 Jamaica</option>\n                <option value=\"je\">🇯🇪 Jersey</option>\n                <option value=\"jo\">🇯🇴 Jordan</option>\n                <option value=\"kz\">🇰🇿 Kazakhstan</option>\n                <option value=\"ke\">🇰🇪 Kenya</option>\n                <option value=\"ki\">🇰🇮 Kiribati</option>\n                <option value=\"kw\">🇰🇼 Kuwait</option>\n                <option value=\"kg\">🇰🇬 Kyrgyzstan</option>\n                <option value=\"la\">🇱🇦 Laos</option>\n                <option value=\"lb\">🇱🇧 Lebanon</option>\n                <option value=\"ls\">🇱🇸 Lesotho</option>\n                <option value=\"lr\">🇱🇷 Liberia</option>\n                <option value=\"ly\">🇱🇾 Libya</option>\n                <option value=\"mo\">🇲🇴 Macao SAR China</option>\n                <option value=\"mg\">🇲🇬 Madagascar</option>\n                <option value=\"mw\">🇲🇼 Malawi</option>\n                <option value=\"my\">🇲🇾 Malaysia</option>\n                <option value=\"mv\">🇲🇻 Maldives</option>\n                <option value=\"ml\">🇲🇱 Mali</option>\n                <option value=\"mh\">🇲🇭 Marshall Islands</option>\n                <option value=\"mq\">🇲🇶 Martinique</option>\n                <option value=\"mr\">🇲🇷 Mauritania</option>\n                <option value=\"mu\">🇲🇺 Mauritius</option>\n                <option value=\"yt\">🇾🇹 Mayotte</option>\n                <option value=\"mx\">🇲🇽 Mexico</option>\n                <option value=\"fm\">🇫🇲 Micronesia</option>\n                <option value=\"md\">🇲🇩 Moldova</option>\n                <option value=\"mc\">🇲🇨 Monaco</option>\n                <option value=\"mn\">🇲🇳 Mongolia</option>\n                <option value=\"me\">🇲🇪 Montenegro</option>\n                <option value=\"ms\">🇲🇸 Montserrat</option>\n                <option value=\"ma\">🇲🇦 Morocco</option>\n                <option value=\"mz\">🇲🇿 Mozambique</option>\n                <option value=\"mm\">🇲🇲 Myanmar (Burma)</option>\n                <option value=\"na\">🇳🇦 Namibia</option>\n                <option value=\"nr\">🇳🇷 Nauru</option>\n                <option value=\"np\">🇳🇵 Nepal</option>\n                <option value=\"nc\">🇳🇨 New Caledonia</option>\n                <option value=\"ni\">🇳🇮 Nicaragua</option>\n                <option value=\"ne\">🇳🇪 Niger</option>\n                <option value=\"ng\">🇳🇬 Nigeria</option>\n                <option value=\"nu\">🇳🇺 Niue</option>\n                <option value=\"nf\">🇳🇫 Norfolk Island</option>\n                <option value=\"kp\">🇰🇵 North Korea</option>\n                <option value=\"mk\">🇲🇰 North Macedonia</option>\n                <option value=\"om\">🇴🇲 Oman</option>\n                <option value=\"pw\">🇵🇼 Palau</option>\n                <option value=\"ps\">🇵🇸 Palestinian Territories</option>\n                <option value=\"pa\">🇵🇦 Panama</option>\n                <option value=\"pg\">🇵🇬 Papua New Guinea</option>\n                <option value=\"py\">🇵🇾 Paraguay</option>\n                <option value=\"pe\">🇵🇪 Peru</option>\n                <option value=\"ph\">🇵🇭 Philippines</option>\n                <option value=\"pn\">🇵🇳 Pitcairn Islands</option>\n                <option value=\"qa\">🇶🇦 Qatar</option>\n                <option value=\"re\">🇷🇪 Réunion</option>\n                <option value=\"rw\">🇷🇼 Rwanda</option>\n                <option value=\"ws\">🇼🇸 Samoa</option>\n                <option value=\"st\">🇸🇹 São Tomé & Príncipe</option>\n                <option value=\"sa\">🇸🇦 Saudi Arabia</option>\n                <option value=\"sn\">🇸🇳 Senegal</option>\n                <option value=\"rs\">🇷🇸 Serbia</option>\n                <option value=\"sc\">🇸🇨 Seychelles</option>\n                <option value=\"sg\">🇸🇬 Singapore</option>\n                <option value=\"sx\">🇸🇽 Sint Maarten</option>\n                <option value=\"sb\">🇸🇧 Solomon Islands</option>\n                <option value=\"so\">🇸🇴 Somalia</option>\n                <option value=\"za\">🇿🇦 South Africa</option>\n                <option value=\"gs\">🇬🇸 South Georgia & South Sandwich Islands</option>\n                <option value=\"kr\">🇰🇷 South Korea</option>\n                <option value=\"ss\">🇸🇸 South Sudan</option>\n                <option value=\"lk\">🇱🇰 Sri Lanka</option>\n                <option value=\"bl\">🇧🇱 St. Barthélemy</option>\n                <option value=\"sh\">🇸🇭 St. Helena</option>\n                <option value=\"kn\">🇰🇳 St. Kitts & Nevis</option>\n                <option value=\"lc\">🇱🇨 St. Lucia</option>\n                <option value=\"mf\">🇲🇫 St. Martin</option>\n                <option value=\"pm\">🇵🇲 St. Pierre & Miquelon</option>\n                <option value=\"vc\">🇻🇨 St. Vincent & Grenadines</option>\n                <option value=\"sd\">🇸🇩 Sudan</option>\n                <option value=\"sr\">🇸🇷 Suriname</option>\n                <option value=\"sj\">🇸🇯 Svalbard & Jan Mayen</option>\n                <option value=\"sy\">🇸🇾 Syria</option>\n                <option value=\"tw\">🇹🇼 Taiwan</option>\n                <option value=\"tj\">🇹🇯 Tajikistan</option>\n                <option value=\"tz\">🇹🇿 Tanzania</option>\n                <option value=\"th\">🇹🇭 Thailand</option>\n                <option value=\"tl\">🇹🇱 Timor-Leste</option>\n                <option value=\"tg\">🇹🇬 Togo</option>\n                <option value=\"tk\">🇹🇰 Tokelau</option>\n                <option value=\"to\">🇹🇴 Tonga</option>\n                <option value=\"tt\">🇹🇹 Trinidad & Tobago</option>\n                <option value=\"tn\">🇹🇳 Tunisia</option>\n                <option value=\"tr\">🇹🇷 Turkey</option>\n                <option value=\"tm\">🇹🇲 Turkmenistan</option>\n                <option value=\"tc\">🇹🇨 Turks & Caicos Islands</option>\n                <option value=\"tv\">🇹🇻 Tuvalu</option>\n                <option value=\"ug\">🇺🇬 Uganda</option>\n                <option value=\"ua\">🇺🇦 Ukraine</option>\n                <option value=\"ae\">🇦🇪 United Arab Emirates</option>\n                <option value=\"uy\">🇺🇾 Uruguay</option>\n                <option value=\"uz\">🇺🇿 Uzbekistan</option>\n                <option value=\"vu\">🇻🇺 Vanuatu</option>\n                <option value=\"va\">🇻🇦 Vatican City</option>\n                <option value=\"ve\">🇻🇪 Venezuela</option>\n                <option value=\"vn\">🇻🇳 Vietnam</option>\n                <option value=\"wf\">🇼🇫 Wallis & Futuna</option>\n                <option value=\"eh\">🇪🇭 Western Sahara</option>\n                <option value=\"ye\">🇾🇪 Yemen</option>\n                <option value=\"zm\">🇿🇲 Zambia</option>\n                <option value=\"zw\">🇿🇼 Zimbabwe</option>\n            </select>\n        </label>\n\n        <div id=\"licenseSection\" class=\""}${ⴲⵋⵃⵆ ? "hide" : ""}${"\">\n          <h3>License Verification</h3>\n          <input type=\"text\" id=\"licenseInput\" placeholder=\"Enter your license key\" value=\""}${localStorage.getItem("appActivation") || ""}${"\">\n          <button id=\"verifyBtn\">Verify License</button>\n          <button type=\"button\" id=\"onlinePaymentActiveBtn\">Online Payment Active</button>\n          <div id=\"verificationStatus\">\n            "}${ⴲⵋⵃⵆ ? ⵂⵀⵅⵗⴲ.offline ? "<div class=\"verified-badge\">✓ Verified (Offline Mode)</div>" : "<div class=\"verified-badge\">✓ Verified</div>" : localStorage.getItem("appActivation") ? "<div class=\"verified-badge\">✓ Cached License</div>" : "<div class=\"unverified-badge\">✗ Not Verified</div>"}${"\n          </div>\n        </div>\n\n        <div id=\"demoBalanceSection\" class=\""}${ⴲⵋⵃⵆ ? "show" : ""}${"\">\n          <h3>Demo Balance Settings</h3>\n          <input type=\"number\" id=\"demoBalanceInput\" placeholder=\"Enter demo balance\" value=\""}${ⵒⵅⴼⵆ}${"\">\n          <button id=\"setDemoBtn\">Update Demo Balance</button>\n          <div id=\"demoBalanceStatus\"></div>\n        </div>\n\n        <button id=\"saveButton\" "}${ⴲⵋⵃⵆ ? "" : "disabled"}${">Save Settings</button>\n        <button class=\"close-btn\">Close</button>\n        \n        <div id=\"cheatCodeDisplay\">"}${localStorage.getItem("appActivation") ? ⵂⵐⵊⵚⴲ(localStorage.getItem("appActivation")) : ⵂⵀⵅⵅ}${"</div>\n      </div>\n    "}`;
    document.body.appendChild(ⴲⵛⵈⵗⴲ);
    ⵒⴵⵇⵆ = document.getElementById("settingsPopup");
    document.getElementById("lname").value = localStorage.getItem("leaderboardName") || "";
    document.getElementById("iblafp").value = localStorage.getItem("leaderboardBalance") || "";
    document.getElementById("profilePhotoUrl").value = localStorage.getItem("profilePhotoUrl") || "";
    document.getElementById("countryFlagSelect").value = localStorage.getItem("countryFlag") || "bd";
    const ⴲⴻⴾⵗⴲ = document.getElementById("refreshBalanceBtn");
    function ⵒⵕⵁⵗⴲ() {
      const ⵒⴵⴷⵗⴲ = typeof window.__qxEnsureUsermenuShadow === "function" ? window.__qxEnsureUsermenuShadow() : document.querySelector("qx-usermenu-trigger")?.["shadowRoot"] || null;
      return ⵒⴵⴷⵗⴲ && ⵒⴵⴷⵗⴲ.querySelector(".text .balance, .balance") || document.querySelector(".grOBD li.RDtBn:has(input.r29tN[value=\"live\"]) b.YnoT0") || document.querySelector(".grOBD .RDtBn:first-child b.YnoT0") || document.querySelector(".grOBD b.YnoT0") || document.querySelector("b.YnoT0");
    }
    async function ⵂⵐⴺⵗⴲ(ⴲⵛⴸⵘⴲ) {
      const ⵒⵅⴼⵘⴲ = Date.now() + ⴲⵛⴸⵘⴲ;
      let ⵒⵕⴱⵘⴲ = ⵒⵕⵁⵗⴲ();
      while ((!ⵒⵕⴱⵘⴲ || !/\d/.test(ⵒⵕⴱⵘⴲ.textContent || "")) && Date.now() < ⵒⵅⴼⵘⴲ) {
        await new Promise(ⵂⵀⴵⵘⴲ => setTimeout(ⵂⵀⴵⵘⴲ, 100));
        ⵒⵕⴱⵘⴲ = ⵒⵕⵁⵗⴲ();
      }
      return ⵒⵕⴱⵘⴲ;
    }
    ⵒⵕⵁⵗⴲ();
    ⴲⴻⴾⵗⴲ?.["addEventListener"]?.("click", async () => {
      if (ⴲⴻⴾⵗⴲ.classList.contains("spinning")) {
        return;
      }
      ⴲⴻⴾⵗⴲ.classList.add("spinning");
      const ⴲⴻⵞⵗⴲ = await ⵂⵐⴺⵗⴲ(5000);
      if (!ⴲⴻⵞⵗⴲ) {
        ⴲⵛⴸⵚⴲ("Error: Could not find the balance element.");
        setTimeout(() => ⴲⴻⴾⵗⴲ.classList.remove("spinning"), 500);
        return;
      }
      const ⵒⴵⵗⵗⴲ = ⴲⴻⵞⵗⴲ.textContent;
      const ⵂⵀⵕⵘⴲ = ⵒⴵⵗⵗⴲ.replace(/\D/g, "");
      document.getElementById("iblafp").value = ⵂⵀⵕⵘⴲ;
      ⴲⵛⴸⵚⴲ("Balance updated!");
      setTimeout(() => ⴲⴻⴾⵗⴲ.classList.remove("spinning"), 500);
    });
    document.getElementById("verifyBtn")?.["addEventListener"]?.("click", ⵂⵐⵊⵘⴲ);
    document.getElementById("onlinePaymentActiveBtn")?.["addEventListener"]?.("click", () => {
      ⴲⵛⵘⵆ = "permanent";
      ⵒⵅⵜⵆ = "";
      ⵂⵀⵕⵆ();
      ⵒⵕⵑⴺ();
    });
    document.getElementById("setDemoBtn")?.["addEventListener"]?.("click", ⴲⵛⵘⵘⴲ);
    document.getElementById("saveButton").addEventListener("click", ⵂⴰⵐⵕⴲ);
    document.querySelector(".close-btn").addEventListener("click", ⵂⵀⵕⵔⴲ);
    setTimeout(() => {
      ⵒⴵⵇⵆ.classList.add("show");
    }, 10);
  }
  function ⴲⵛⵘⵘⴲ() {
    const ⴲⴻⵎⵘⴲ = document.getElementById("demoBalanceInput").value;
    if (!ⴲⴻⵎⵘⴲ || isNaN(ⴲⴻⵎⵘⴲ)) {
      ⴲⵛⴸⵚⴲ("Please enter a valid balance amount");
      return;
    }
    ⵒⵅⴼⵆ = parseFloat(ⴲⴻⵎⵘⴲ);
    localStorage.setItem("demoBalance", ⵒⵅⴼⵆ.toString());
    const ⵒⴵⵇⵘⴲ = document.getElementById("demoBalanceStatus");
    ⵒⴵⵇⵘⴲ.textContent = "Demo balance updated and saved!";
    ⵒⴵⵇⵘⴲ.style.color = "#28a745";
    ⴲⵛⴸⵚⴲ(`${"Demo balance set to "}${ⵒⵅⴼⵆ}`);
    setTimeout(() => {
      ⵒⴵⵇⵘⴲ.textContent = "";
    }, 2500);
  }
  async function ⵂⵐⵊⵘⴲ() {
    const ⵂⴰⵀⵘⴲ = document.getElementById("licenseInput").value.trim();
    if (!ⵂⴰⵀⵘⴲ) {
      ⴲⵛⴸⵚⴲ("Please enter a license key");
      return;
    }
    const ⵒⵕⵁⵙⴲ = document.getElementById("verifyBtn");
    ⵒⵕⵁⵙⴲ.disabled = true;
    ⵒⵕⵁⵙⴲ.textContent = "Verifying...";
    const ⵂⵀⵅⵙⴲ = await ⵒⵅⴼⵀ(ⵂⴰⵀⵘⴲ);
    if (ⵂⵀⵅⵙⴲ.valid) {
      document.getElementById("verificationStatus").innerHTML = ⵂⵀⵅⵙⴲ.subscription_required ? "<div class=\"verified-badge\">✓ License OK — Subscription Required</div>" : "<div class=\"verified-badge\">✓ Verified Successfully</div>";
      document.getElementById("cheatCodeDisplay").textContent = ⵂⵐⵊⵚⴲ(ⵂⵀⵅⵙⴲ.key);
      document.getElementById("saveButton").disabled = false;
      if (!ⵂⵀⵅⵙⴲ.subscription_required) {
        await ⵒⵅⵜⴺ();
      }
      ⵒⴵⵗⵛⴲ();
      await ⵒⵅⴼⵄ(ⵂⵀⵅⵙⴲ);
    } else {
      if (ⵂⵀⵅⵙⴲ.reason === "subscription_required" || ⵂⵀⵅⵙⴲ.subscription_required) {
        document.getElementById("verificationStatus").innerHTML = "<div class=\"verified-badge\">✓ License OK — Subscription Required</div>";
        document.getElementById("cheatCodeDisplay").textContent = ⵂⵐⵊⵚⴲ(ⵂⴰⵀⵘⴲ);
        document.getElementById("saveButton").disabled = false;
        ⵒⴵⵗⵛⴲ();
        await ⵒⵅⴼⵄ(ⵂⵀⵅⵙⴲ);
      } else {
        if (ⵂⵀⵅⵙⴲ.reason === "wrong_project") {
          ⵒⴵⵗⴹ(ⵂⵀⵅⵙⴲ.message, ⵂⵀⵅⵙⴲ.wrongProject);
          document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ Wrong Project License</div>";
        } else {
          if (ⵂⵀⵅⵙⴲ.reason === "limit") {
            ⵒⴵⵗⴽ(ⵂⵀⵅⵙⴲ.allowed, ⵂⵀⵅⵙⴲ.used);
            document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ Device Limit Reached</div>";
          } else {
            if (ⵂⵀⵅⵙⴲ.reason === "banned") {
              Swal.fire({
                ["title"]: "",
                ["html"]: `${"\n            <div style=\"font-family: 'Roboto', sans-serif;\n                        text-align: center;\n                        background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                        padding: 20px;\n                        border-radius: 15px;\n                        box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n              \n              <div style=\"background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);\n                          padding: 2px;\n                          border-radius: 12px;\n                          margin-bottom: 15px;\">\n                <div style=\"background: rgba(30, 11, 54, 0.95);\n                            padding: 15px;\n                            border-radius: 10px;\">\n                  <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\n                    <div style=\"width: 50px; height: 50px;\n                                background: linear-gradient(135deg, #e74c3c, #c0392b);\n                                border-radius: 50%;\n                                display: flex;\n                                align-items: center;\n                                justify-content: center;\n                                box-shadow: 0 0 20px rgba(231, 76, 60, 0.5);\">\n                      <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                        <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z\"/>\n                      </svg>\n                    </div>\n                  </div>\n                  <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                             background: linear-gradient(to right, #e74c3c, #c0392b);\n                             -webkit-background-clip: text;\n                             -webkit-text-fill-color: transparent;\">\n                    License Blocked\n                  </h2>\n                </div>\n              </div>\n              \n              <div style=\"background: rgba(231, 76, 60, 0.15);\n                          padding: 15px;\n                          margin: 15px 0;\n                          border-radius: 10px;\n                          text-align: left;\n                          backdrop-filter: blur(10px);\">\n                <p style=\"margin: 0; font-size: 15px; color: #fff; line-height: 1.5; font-weight: 700;\">\n                  <strong style=\"color: #e74c3c;\">Your License is Blocked!</strong>\n                </p>\n                <p style=\"margin: 10px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n                  <strong style=\"color: #00d9ff;\">Solution:</strong> Your license has been blocked/banned by the administrator. Contact the developer on Telegram.\n                </p>\n              </div>\n              \n              <div style=\"background: rgba(249, 0, 255, 0.1);\n                          padding: 15px;\n                          border-radius: 10px;\n                          margin-bottom: 8px;\">\n                <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;\">\n                  <img src=\"https://i.postimg.cc/MKRyMcR4/Screenshot-20260214-100336-Gallery-(1).jpg\"\n                       style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\"\n                       alt=\"Telegram\">\n                  <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                    Developer Contact\n                  </p>\n                </div>\n                <a href=\"https://t.me/traderjisanx\"\n                   target=\"_blank\"\n                   style=\"display: inline-block;\n                          color: #f900ff;\n                          font-weight: 700;\n                          text-decoration: none;\n                          font-size: 14px;\n                          padding: 10px 20px;\n                          background: rgba(249, 0, 255, 0.2);\n                          border-radius: 8px;\n                          transition: all 0.3s ease;\">\n                  @traderjisanx\n                </a>\n              </div>\n            </div>\n          "}`,
                ["showConfirmButton"]: true,
                ["showCancelButton"]: true,
                ["confirmButtonText"]: "Contact Developer",
                ["cancelButtonText"]: "Close",
                ["confirmButtonColor"]: "#e74c3c",
                ["cancelButtonColor"]: "#c0392b",
                ["allowOutsideClick"]: false,
                ["customClass"]: {
                  ["container"]: "swal-high-zindex",
                  ["popup"]: "custom-popup-style",
                  ["confirmButton"]: "custom-button-style",
                  ["cancelButton"]: "custom-button-style"
                },
                ["didOpen"]: () => {
                  const ⵂⵐⴺⵕⴲ = document.createElement("style");
                  ⵂⵐⴺⵕⴲ.textContent = `${"\n              .custom-popup-style {\n                border-radius: 20px !important;\n                padding: 0 !important;\n              }\n              .custom-button-style {\n                font-family: 'Roboto', sans-serif !important;\n                font-weight: 600 !important;\n                padding: 12px 30px !important;\n                border-radius: 10px !important;\n                font-size: 15px !important;\n                transition: all 0.3s ease !important;\n                box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n              }\n              .custom-button-style:hover {\n                transform: translateY(-2px) !important;\n                box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n              }\n            "}`;
                  document.head.appendChild(ⵂⵐⴺⵕⴲ);
                }
              }).then(ⴲⴻⴾⵕⴲ => {
                if (ⴲⴻⴾⵕⴲ.isConfirmed) {
                  window.open("https://t.me/traderjisanx", "_blank");
                }
              });
              document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ License Banned</div>";
            } else {
              if (ⵂⵀⵅⵙⴲ.reason === "network") {
                if (ⵂⵀⵅⵙⴲ.keepLicense && localStorage.getItem("appActivation")) {
                  ⴲⵛⴸⵚⴲ("Network error - Using cached license", 3000, "success");
                  document.getElementById("verificationStatus").innerHTML = "<div class=\"verified-badge\">✓ Cached (Offline Mode)</div>";
                  document.getElementById("saveButton").disabled = false;
                  ⵒⴵⵗⵛⴲ();
                } else {
                  ⵂⵀⴵⴺ();
                  document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ Network Error</div>";
                }
              } else {
                ⴲⵋⵃⴺ();
                document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ Invalid License</div>";
              }
            }
          }
        }
      }
      if (ⵂⵀⵅⵙⴲ.reason !== "subscription_required" && !ⵂⵀⵅⵙⴲ.subscription_required && (ⵂⵀⵅⵙⴲ.reason !== "network" || !ⵂⵀⵅⵙⴲ.keepLicense)) {
        document.getElementById("saveButton").disabled = true;
      }
    }
    ⵒⵕⵁⵙⴲ.disabled = false;
    ⵒⵕⵁⵙⴲ.textContent = "Verify License";
  }
  function ⵂⵀⵕⵔⴲ() {
    const ⴲⵛⵘⵔⴲ = document.getElementById("settingsPopup");
    if (ⴲⵛⵘⵔⴲ) {
      ⴲⵛⵘⵔⴲ.classList.add("hide");
      ⴲⵛⵘⵔⴲ.classList.remove("show");
      setTimeout(() => {
        ⴲⵛⵘⵔⴲ.remove();
      }, 400);
    }
  }
  const ⵂⵐⵚⵕⴲ = [122];
  async function ⵂⴰⵐⵕⴲ() {
    const ⴲⵋⵓⵕⴲ = localStorage.getItem("appActivation");
    if (!ⴲⵋⵓⵕⴲ || !ⴲⵋⵃⵆ) {
      ⴲⵋⵃⴺ();
      return;
    }
    const ⵒⵅⵌⵕⴲ = await ⵒⵅⴼⵀ(ⴲⵋⵓⵕⴲ);
    if (!ⵒⵅⵌⵕⴲ.valid && !ⵒⵅⵌⵕⴲ.offline) {
      if (ⵒⵅⵌⵕⴲ.reason === "subscription_required" || ⵒⵅⵌⵕⴲ.subscription_required) {
        ⴲⵋⵓⵃ(true);
        ⵒⴵⵇⵄ();
        await ⵂⵀⴵⵄ(ⵒⵅⵌⵕⴲ);
        return;
      }
      ⴲⵋⵃⵄ();
      ⴲⵋⵃⴺ();
      return;
    }
    if (ⵒⵅⵌⵕⴲ.subscription_required || ⵒⵅⵌⵕⴲ.reason === "subscription_required") {
      ⴲⵋⵓⵃ(true);
      ⵒⴵⵇⵄ();
      await ⵂⵀⴵⵄ(ⵒⵅⵌⵕⴲ);
      return;
    }
    if (!(await ⵒⵅⴼⵄ(ⵒⵅⵌⵕⴲ))) {
      return;
    }
    const ⵒⵅⴼⵖⴲ = document.getElementById("lname").value;
    const ⵂⴰⵀⵖⴲ = document.getElementById("iblafp").value;
    const ⵂⵀⴵⵖⴲ = document.getElementById("countryFlagSelect").value;
    const ⴲⵛⴸⵖⴲ = document.getElementById("profilePhotoUrl").value;
    localStorage.setItem("leaderboardName", ⵒⵅⴼⵖⴲ);
    localStorage.setItem("leaderboardBalance", ⵂⴰⵀⵖⴲ);
    localStorage.setItem("countryFlag", ⵂⵀⴵⵖⴲ);
    localStorage.setItem("profilePhotoUrl", ⴲⵛⴸⵖⴲ);
    localStorage.setItem("lastLeaderboardName", ⵒⵅⴼⵖⴲ);
    localStorage.setItem("lastCountryFlag", ⵂⵀⴵⵖⴲ);
    const ⴲⴻⵞⵕⴲ = `${"<svg class=\\\"flag flag-"}${ⵂⵀⴵⵖⴲ}${"\\\"><use xlink:href=\\\"/profile/images/flags.svg#flag-"}${ⵂⵀⴵⵖⴲ}${"\\\"></use></svg>"}`;
    await ⵂⵐⴺⵑⴲ(ⵒⵅⴼⵖⴲ, ⵂⴰⵀⵖⴲ, ⴲⴻⵞⵕⴲ, ⴲⵛⴸⵖⴲ);
    ⵂⵀⵕⵔⴲ();
    ⵒⵅⵜⵚⴲ("Developer @traderjisanx !", 5000);
  }
  function ⵒⵕⴱⵖⴲ(ⵂⴰⴰⵗⴲ) {
    const ⴲⵋⴳⵗⴲ = "qx_secure_" + ⵂⴰⴰⵗⴲ;
    let ⴲⵛⵘⵖⴲ = 0;
    var ⵒⵅⵜⵖⴲ = 20;
    {
      let ⵒⵕⵑⵖⴲ;
      while (ⵒⵅⵜⵖⴲ < 39) {
        switch (ⵒⵅⵜⵖⴲ) {
          case 20:
            ⵒⵅⵜⵖⴲ = 31;
            ⵒⵕⵑⵖⴲ = 0;
            break;
          case 31:
            ⵒⵅⵜⵖⴲ = ⵒⵕⵑⵖⴲ < ⴲⵋⴳⵗⴲ.length ? 26 : 39;
            break;
          case 35:
            ⵒⵅⵜⵖⴲ = 31;
            ⵒⵕⵑⵖⴲ++;
            break;
          case 26:
            ⵒⵅⵜⵖⴲ = 35;
            {
              ⴲⵛⵘⵖⴲ = (ⴲⵛⵘⵖⴲ << 5) - ⴲⵛⵘⵖⴲ + ⴲⵋⴳⵗⴲ.charCodeAt(ⵒⵕⵑⵖⴲ);
              ⴲⵛⵘⵖⴲ = ⴲⵛⵘⵖⴲ & 4294967295;
              if (ⴲⵛⵘⵖⴲ >= 2147483648) {
                ⴲⵛⵘⵖⴲ -= 4294967296;
              }
            }
            break;
        }
      }
    }
    return Math.abs(ⴲⵛⵘⵖⴲ).toString(16);
  }
  function ⵂⵐⵊⵖⴲ() {
    const ⴲⴻⵎⵖⴲ = document.createElement("div");
    ⴲⴻⵎⵖⴲ.id = "__qx_security_loader";
    ⴲⴻⵎⵖⴲ.innerHTML = `${"\n      <div style=\"position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(10,5,20,0.95);\n                  display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999999;\n                  font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;\">\n        <div style=\"color:#00d4ff;font-size:22px;font-weight:700;letter-spacing:3px;margin-bottom:25px;\n                    text-shadow:0 0 20px rgba(0,212,255,0.5);\">Security Biz X</div>\n        <div style=\"width:280px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;position:relative;\">\n          <div id=\"__qx_progress_bar\" style=\"width:0%;height:100%;background:linear-gradient(90deg,#00d4ff,#f900ff,#00d4ff);\n                background-size:200% 100%;border-radius:3px;transition:width 0.3s ease;\n                animation:__qx_gradient_shift 2s linear infinite;\"></div>\n        </div>\n        <div id=\"__qx_progress_text\" style=\"color:rgba(255,255,255,0.7);font-size:13px;margin-top:12px;letter-spacing:1px;\">0%</div>\n      </div>\n      <style>@keyframes __qx_gradient_shift{0%{background-position:0% 50%}100%{background-position:200% 50%}}</style>\n    "}`;
    document.body.appendChild(ⴲⴻⵎⵖⴲ);
  }
  function ⴲⵛⵘⵒⴲ(ⵒⵅⵜⵒⴲ) {
    const ⵒⵕⵑⵒⴲ = document.getElementById("__qx_progress_bar");
    const ⵂⵀⵕⵒⴲ = document.getElementById("__qx_progress_text");
    if (ⵒⵕⵑⵒⴲ) {
      ⵒⵕⵑⵒⴲ.style.width = ⵒⵅⵜⵒⴲ + "%";
    }
    if (ⵂⵀⵕⵒⴲ) {
      ⵂⵀⵕⵒⴲ.textContent = Math.round(ⵒⵅⵜⵒⴲ) + "%";
    }
  }
  function ⴲⵋⵃⵒⴲ() {
    const ⵒⴵⵇⵒⴲ = document.getElementById("__qx_security_loader");
    if (ⵒⴵⵇⵒⴲ) {
      ⵒⴵⵇⵒⴲ.style.opacity = "0";
      ⵒⴵⵇⵒⴲ.style.transition = "opacity 0.4s";
      setTimeout(() => ⵒⴵⵇⵒⴲ.remove(), 400);
    }
  }
  function ⴲⵛⵈⵓⴲ(ⴲⴻⴾⵓⴲ) {
    const ⵒⵕⵁⵓⴲ = atob(ⴲⴻⴾⵓⴲ);
    let ⵒⴵⴷⵓⴲ = "";
    var ⵂⵐⴺⵓⴲ = 20;
    {
      let ⵂⴰⴰⵓⴲ;
      while (ⵂⵐⴺⵓⴲ < 39) {
        switch (ⵂⵐⴺⵓⴲ) {
          case 26:
            ⵂⵐⴺⵓⴲ = 35;
            {
              ⵒⴵⴷⵓⴲ += String.fromCharCode((ⵒⵕⵁⵓⴲ.charCodeAt(ⵂⴰⴰⵓⴲ) - 7 + 256) % 256);
            }
            break;
          case 35:
            ⵂⵐⴺⵓⴲ = 31;
            ⵂⴰⴰⵓⴲ++;
            break;
          case 31:
            ⵂⵐⴺⵓⴲ = ⵂⴰⴰⵓⴲ < ⵒⵕⵁⵓⴲ.length ? 26 : 39;
            break;
          case 20:
            ⵂⵐⴺⵓⴲ = 31;
            ⵂⴰⴰⵓⴲ = 0;
            break;
        }
      }
    }
    return ⵒⴵⴷⵓⴲ;
  }
  function ⴲⵋⴳⵓⴲ(ⵒⵕⴱⵔⴲ) {
    const ⵂⵀⴵⵔⴲ = atob(ⵒⵕⴱⵔⴲ);
    const ⵂⵐⵚⵓⴲ = new Uint8Array(ⵂⵀⴵⵔⴲ.length);
    var ⴲⴻⵞⵓⴲ = 14;
    {
      let ⴲⵋⵓⵓⴲ;
      while (ⴲⴻⵞⵓⴲ < 35) {
        switch (ⴲⴻⵞⵓⴲ) {
          case 11:
            ⴲⴻⵞⵓⴲ = 20;
            {
              ⵂⵐⵚⵓⴲ[ⴲⵋⵓⵓⴲ] = ⵂⵀⴵⵔⴲ.charCodeAt(ⴲⵋⵓⵓⴲ);
            }
            break;
          case 34:
            ⴲⴻⵞⵓⴲ = ⴲⵋⵓⵓⴲ < ⵂⵀⴵⵔⴲ.length ? 11 : 35;
            break;
          case 20:
            ⴲⴻⵞⵓⴲ = 34;
            ⴲⵋⵓⵓⴲ++;
            break;
          case 14:
            ⴲⴻⵞⵓⴲ = 34;
            ⴲⵋⵓⵓⴲ = 0;
            break;
        }
      }
    }
    return new TextDecoder("utf-8").decode(ⵂⵐⵚⵓⴲ);
  }
  function ⵒⴵⵗⵓⴲ(ⵒⵅⵌⵓⴲ) {
    if (!ⵒⵅⵌⵓⴲ || typeof ⵒⵅⵌⵓⴲ !== "string") {
      throw new Error("Invalid script payload");
    }
    const ⴲⴻⵎⵔⴲ = "__qxModExecErr";
    const ⵒⵕⵑⵔⴲ = "__qxModExecOk";
    try {
      delete window[ⴲⴻⵎⵔⴲ];
      delete window[ⵒⵕⵑⵔⴲ];
    } catch (ⵒⴵⵇⵔⴲ) {}
    const ⵂⵐⵊⵔⴲ = document.createElement("script");
    ⵂⵐⵊⵔⴲ.textContent = "(function(){try{" + ⵒⵅⵌⵓⴲ + ";window[\"" + ⵒⵕⵑⵔⴲ + "\"]=1}catch(e){window[\"" + ⴲⴻⵎⵔⴲ + "\"]=e}})();";
    document.head.appendChild(ⵂⵐⵊⵔⴲ);
    ⵂⵐⵊⵔⴲ.remove();
    if (window[ⴲⴻⵎⵔⴲ]) {
      const ⴲⵋⵃⵔⴲ = window[ⴲⴻⵎⵔⴲ];
      try {
        delete window[ⴲⴻⵎⵔⴲ];
        delete window[ⵒⵕⵑⵔⴲ];
      } catch (ⴲⵛⴸⵔⴲ) {}
      throw ⴲⵋⵃⵔⴲ;
    }
    try {
      delete window[ⵒⵕⵑⵔⴲ];
    } catch (ⵒⵅⴼⵔⴲ) {}
  }
  const ⵒⴵⵇⵐⴲ = "qx_" + ((navigator.hardwareConcurrency || 4) * 7913 + screen.width * 31 + screen.height * 17).toString(36);
  function ⵂⵐⵊⵐⴲ(ⵂⴰⵀⵐⴲ) {
    const ⴲⵋⵃⵐⴲ = [ⵂⵀⴵⵆ, ⵂⴰⵐⵁ, ⴲⵋⵃⵀ, ⵒⵅⵌⴹ, ⴲⵋⴳⴻ];
    const ⴲⵛⴸⵐⴲ = [ⴲⵛⴸⵆ, ⴲⵋⵓⵁ, ⴲⵛⴸⵀ, ⵂⵐⵊⴺ, ⴲⵛⵘⴺ];
    return ⵂⴰⵀⵐⴲ === 0 ? ⴲⵋⵃⵐⴲ.join("") : ⴲⵛⴸⵐⴲ.join("");
  }
  function ⵒⵅⴼⵐⴲ(ⵒⵕⴱⵐⴲ) {
    const ⵂⵀⴵⵐⴲ = ⵒⴵⵇⵐⴲ;
    const ⴲⵋⴳⵑⴲ = new TextEncoder().encode(ⵒⵕⴱⵐⴲ);
    const ⵒⴵⴷⵑⴲ = new Uint8Array(ⴲⵋⴳⵑⴲ.length);
    var ⵒⵅⵜⵐⴲ = 11;
    {
      let ⵂⴰⴰⵑⴲ;
      while (ⵒⵅⵜⵐⴲ < 36) {
        switch (ⵒⵅⵜⵐⴲ) {
          case 20:
            ⵒⵅⵜⵐⴲ = ⵂⴰⴰⵑⴲ < ⴲⵋⴳⵑⴲ.length ? 31 : 36;
            break;
          case 31:
            ⵒⵅⵜⵐⴲ = 26;
            {
              ⵒⴵⴷⵑⴲ[ⵂⴰⴰⵑⴲ] = ⴲⵋⴳⵑⴲ[ⵂⴰⴰⵑⴲ] ^ ⵂⵀⴵⵐⴲ.charCodeAt(ⵂⴰⴰⵑⴲ % ⵂⵀⴵⵐⴲ.length);
            }
            break;
          case 11:
            ⵒⵅⵜⵐⴲ = 20;
            ⵂⴰⴰⵑⴲ = 0;
            break;
          case 26:
            ⵒⵅⵜⵐⴲ = 20;
            ⵂⴰⴰⵑⴲ++;
            break;
        }
      }
    }
    let ⵂⵀⵕⵐⴲ = "";
    var ⴲⵛⵘⵐⴲ = 14;
    {
      let ⴲⴻⵎⵐⴲ;
      while (ⴲⵛⵘⵐⴲ < 35) {
        switch (ⴲⵛⵘⵐⴲ) {
          case 20:
            ⴲⵛⵘⵐⴲ = 34;
            ⴲⴻⵎⵐⴲ++;
            break;
          case 14:
            ⴲⵛⵘⵐⴲ = 34;
            ⴲⴻⵎⵐⴲ = 0;
            break;
          case 11:
            ⴲⵛⵘⵐⴲ = 20;
            ⵂⵀⵕⵐⴲ += String.fromCharCode(ⵒⴵⴷⵑⴲ[ⴲⴻⵎⵐⴲ]);
            break;
          case 34:
            ⴲⵛⵘⵐⴲ = ⴲⴻⵎⵐⴲ < ⵒⴵⴷⵑⴲ.length ? 11 : 35;
            break;
        }
      }
    }
    return btoa(ⵂⵀⵕⵐⴲ);
  }
  function ⵒⵕⵑⵐⴲ(ⵂⴰⵐⵑⴲ) {
    const ⴲⵋⵓⵑⴲ = ⵒⴵⵇⵐⴲ;
    const ⴲⵛⵈⵑⴲ = atob(ⵂⴰⵐⵑⴲ);
    const ⵒⵅⵌⵑⴲ = new Uint8Array(ⴲⵛⵈⵑⴲ.length);
    var ⵒⵕⵁⵑⴲ = 14;
    {
      let ⵂⵀⵅⵑⴲ;
      while (ⵒⵕⵁⵑⴲ < 35) {
        switch (ⵒⵕⵁⵑⴲ) {
          case 34:
            ⵒⵕⵁⵑⴲ = ⵂⵀⵅⵑⴲ < ⴲⵛⵈⵑⴲ.length ? 11 : 35;
            break;
          case 20:
            ⵒⵕⵁⵑⴲ = 34;
            ⵂⵀⵅⵑⴲ++;
            break;
          case 14:
            ⵒⵕⵁⵑⴲ = 34;
            ⵂⵀⵅⵑⴲ = 0;
            break;
          case 11:
            ⵒⵕⵁⵑⴲ = 20;
            {
              ⵒⵅⵌⵑⴲ[ⵂⵀⵅⵑⴲ] = ⴲⵛⵈⵑⴲ.charCodeAt(ⵂⵀⵅⵑⴲ) ^ ⴲⵋⵓⵑⴲ.charCodeAt(ⵂⵀⵅⵑⴲ % ⴲⵋⵓⵑⴲ.length);
            }
            break;
        }
      }
    }
    return new TextDecoder("utf-8").decode(ⵒⵅⵌⵑⴲ);
  }
  async function ⵂⵐⴺⵑⴲ(ⴲⴻⴾⵑⴲ, ⵒⵅⴼⵒⴲ, ⵂⴰⵀⵒⴲ, ⵂⵀⴵⵒⴲ) {
    const ⴲⵛⴸⵒⴲ = localStorage.getItem("appActivation");
    if (!ⴲⵛⴸⵒⴲ) {
      ⴲⵋⵃⴺ();
      return;
    }
    const ⵒⵕⴱⵒⴲ = await ⴲⵛⵘⵂ();
    const ⵒⴵⵗⵑⴲ = ⴲⴻⵎⵄ();
    const ⵂⵐⵚⵑⴲ = ⵒⴵⵗⵑⴲ ? "" : localStorage.getItem(ⵂⵐⵊⵐⴲ(0)) || "";
    let ⵂⵀⴵⵎⴲ = "";
    if (!ⵒⴵⵗⵑⴲ) {
      try {
        const ⴲⴻⵞⵍⴲ = localStorage.getItem(ⵂⵐⵊⵐⴲ(1));
        if (ⴲⴻⵞⵍⴲ) {
          ⵂⵀⴵⵎⴲ = ⵒⵕⵑⵐⴲ(ⴲⴻⵞⵍⴲ);
        }
      } catch (ⵒⴵⵗⵍⴲ) {
        ⵂⵀⴵⵎⴲ = "";
      }
    } else {
      ⵒⴵⵇⵄ();
    }
    try {
      let ⵂⵐⵚⵍⴲ;
      var ⵂⴰⵐⵍⴲ = 20;
      {
        let ⴲⵋⵓⵍⴲ;
        ⵒⴵⴷⵟ: while (ⵂⴰⵐⵍⴲ < 39) {
          switch (ⵂⴰⵐⵍⴲ) {
            case 20:
              ⵂⴰⵐⵍⴲ = 31;
              ⴲⵋⵓⵍⴲ = 0;
              break;
            case 35:
              ⵂⴰⵐⵍⴲ = 31;
              ⴲⵋⵓⵍⴲ++;
              break;
            case 26:
              ⵂⴰⵐⵍⴲ = 35;
              {
                const ⵒⵕⵑⵎⴲ = await fetch(ⵂⴰⴰⵉ, {
                  ["method"]: "POST",
                  ["headers"]: {
                    ["Content-Type"]: "application/json"
                  },
                  ["body"]: JSON.stringify({
                    ["license_key"]: ⴲⵛⴸⵒⴲ,
                    ["device_info"]: ⵒⵕⴱⵒⴲ,
                    ["project_type"]: ⴲⴻⵞⵉ,
                    ["cv"]: ⵂⵐⵚⵑⴲ
                  })
                });
                if (!ⵒⵕⵑⵎⴲ.ok) {
                  const ⵂⵐⵊⵎⴲ = await ⵒⵕⵑⵎⴲ.text();
                  if (ⵂⵐⵊⵎⴲ.trimStart().startsWith("<") && ⴲⵋⵓⵍⴲ < 2) {
                    await new Promise(ⴲⵋⵃⵎⴲ => setTimeout(ⴲⵋⵃⵎⴲ, 2000 * (ⴲⵋⵓⵍⴲ + 1)));
                    continue ⵒⴵⴷⵟ;
                  }
                  let ⵒⴵⵇⵎⴲ;
                  try {
                    ⵒⴵⵇⵎⴲ = JSON.parse(ⵂⵐⵊⵎⴲ);
                  } catch {
                    throw new Error("Server error: " + ⵒⵕⵑⵎⴲ.status);
                  }
                  if (ⵒⴵⵇⵎⴲ.reason === "wrong_project") {
                    ⵒⴵⵗⴹ(ⵒⴵⵇⵎⴲ.message, ⵒⴵⵇⵎⴲ.wrongProject);
                    return;
                  }
                  if (ⵒⴵⵇⵎⴲ.reason === "limit") {
                    ⵒⴵⵗⴽ(ⵒⴵⵇⵎⴲ.allowed_devices, ⵒⴵⵇⵎⴲ.used_devices);
                    return;
                  }
                  if (ⵒⴵⵇⵎⴲ.reason === "banned" || ⵒⴵⵇⵎⴲ.message && String(ⵒⴵⵇⵎⴲ.message).toLowerCase().includes("blocked")) {
                    ⴲⵋⵃⵄ();
                    ⴲⴻⵎⴺ();
                    return;
                  }
                  const ⵒⵕⵁⵏⴲ = String(ⵒⴵⵇⵎⴲ.message || "").toLowerCase();
                  if (ⵒⵕⵑⵎⴲ.status === 401 || ⵒⵕⵁⵏⴲ.includes("invalid license") || ⵒⵕⵁⵏⴲ.includes("not found") || ⵒⴵⵇⵎⴲ.valid === false && !ⵒⴵⵇⵎⴲ.reason) {
                    ⴲⵋⵃⵄ();
                    ⴲⵋⵃⴺ();
                    return;
                  }
                  if (ⵒⴵⵇⵎⴲ.reason === "subscription_required") {
                    ⴲⵋⵓⵃ(true);
                    ⵒⴵⵇⵄ();
                    await ⵂⵀⴵⵄ(ⵒⴵⵇⵎⴲ);
                    return;
                  }
                  throw new Error(ⵒⴵⵇⵎⴲ.message || "Failed to fetch script");
                }
                ⵂⵐⵚⵍⴲ = await ⵒⵕⵑⵎⴲ.text();
                if (ⵂⵐⵚⵍⴲ.trimStart().startsWith("<")) {
                  if (ⴲⵋⵓⵍⴲ < 2) {
                    await new Promise(ⴲⵛⵘⵎⴲ => setTimeout(ⴲⵛⵘⵎⴲ, 2000 * (ⴲⵋⵓⵍⴲ + 1)));
                    continue ⵒⴵⴷⵟ;
                  }
                  throw new Error("Server temporarily unavailable. Please try again later.");
                }
                break ⵒⴵⴷⵟ;
              }
              break;
            case 31:
              ⵂⴰⵐⵍⴲ = ⴲⵋⵓⵍⴲ < 3 ? 26 : 39;
              break;
          }
        }
      }
      if (ⵂⵐⵚⵍⴲ.startsWith("{")) {
        const ⵂⵐⵚⵏⴲ = JSON.parse(ⵂⵐⵚⵍⴲ);
        if (ⵂⵐⵚⵏⴲ.reason === "wrong_project") {
          ⵒⴵⵗⴹ(ⵂⵐⵚⵏⴲ.message, ⵂⵐⵚⵏⴲ.wrongProject);
          return;
        }
        if (ⵂⵐⵚⵏⴲ.reason === "limit") {
          ⵒⴵⵗⴽ(ⵂⵐⵚⵏⴲ.allowed_devices, ⵂⵐⵚⵏⴲ.used_devices);
          return;
        }
        if (ⵂⵐⵚⵏⴲ.reason === "banned" || ⵂⵐⵚⵏⴲ.message && String(ⵂⵐⵚⵏⴲ.message).toLowerCase().includes("blocked")) {
          ⴲⵋⵃⵄ();
          ⴲⴻⵎⴺ();
          return;
        }
        const ⵒⵅⵌⵏⴲ = String(ⵂⵐⵚⵏⴲ.message || "").toLowerCase();
        if (ⵒⵅⵌⵏⴲ.includes("invalid license") || ⵒⵅⵌⵏⴲ.includes("not found") || ⵂⵐⵚⵏⴲ.valid === false && !ⵂⵐⵚⵏⴲ.reason && !ⵂⵐⵚⵏⴲ.subscription_required) {
          ⴲⵋⵃⵄ();
          ⴲⵋⵃⴺ();
          return;
        }
        if (ⵂⵐⵚⵏⴲ.reason === "subscription_required") {
          ⴲⵋⵓⵃ(true);
          ⵒⴵⵇⵄ();
          await ⵂⵀⴵⵄ(ⵂⵐⵚⵏⴲ);
          return;
        }
        if (!ⵂⵐⵚⵏⴲ.valid) {
          throw new Error(ⵂⵐⵚⵏⴲ.message || "Failed to fetch script");
        }
      }
      const ⴲⵋⵓⵋⴲ = JSON.parse(ⴲⵛⵈⵓⴲ(ⵂⵐⵚⵍⴲ));
      ⴲⵋⵓⵃ(false);
      if (ⴲⵋⵓⵋⴲ.cached && ⵂⵀⴵⵎⴲ && !ⴲⴻⵎⵄ()) {
        try {
          function ⵒⵅⵌⵋⴲ() {
            const ⵂⴰⵐⵋⴲ = [47, 23, 59, 31, 67, 83, 41, 73, 37, 53];
            const ⵂⵀⵅⵋⴲ = [ⵂⴰⵀⵆ, ⵒⵕⵑⵀ, ⵂⵐⵚⵁ, ⵂⴰⵀⵀ, ⵒⵕⴱⴾ, ⴲⵛⵈⴹ, ⵂⴰⴰⴻ, ⵂⵀⴵⵚⴲ, ⴲⵛⵘⵚⴲ, ⵂⵐⵚⵕⴲ];
            let ⴲⵛⵈⵋⴲ = "";
            var ⴲⴻⴾⵋⴲ = 13;
            {
              let ⵒⵕⵁⵋⴲ;
              while (ⴲⴻⴾⵋⴲ < 35) {
                switch (ⴲⴻⴾⵋⴲ) {
                  case 34:
                    ⴲⴻⴾⵋⴲ = 18;
                    ⵒⵕⵁⵋⴲ++;
                    break;
                  case 18:
                    ⴲⴻⴾⵋⴲ = ⵒⵕⵁⵋⴲ < ⵂⵀⵅⵋⴲ.length ? 14 : 35;
                    break;
                  case 14:
                    ⴲⴻⴾⵋⴲ = 34;
                    {
                      var ⵂⴰⵀⵌⴲ = 9;
                      {
                        let ⴲⵋⵃⵌⴲ;
                        while (ⵂⴰⵀⵌⴲ < 34) {
                          switch (ⵂⴰⵀⵌⴲ) {
                            case 8:
                              ⵂⴰⵀⵌⴲ = 25;
                              {
                                ⴲⵛⵈⵋⴲ += String.fromCharCode(ⵂⵀⵅⵋⴲ[ⵒⵕⵁⵋⴲ][ⴲⵋⵃⵌⴲ] - ⵂⴰⵐⵋⴲ[ⵒⵕⵁⵋⴲ]);
                              }
                              break;
                            case 33:
                              ⵂⴰⵀⵌⴲ = ⴲⵋⵃⵌⴲ < ⵂⵀⵅⵋⴲ[ⵒⵕⵁⵋⴲ].length ? 8 : 34;
                              break;
                            case 25:
                              ⵂⴰⵀⵌⴲ = 33;
                              ⴲⵋⵃⵌⴲ++;
                              break;
                            case 9:
                              ⵂⴰⵀⵌⴲ = 33;
                              ⴲⵋⵃⵌⴲ = 0;
                              break;
                          }
                        }
                      }
                    }
                    break;
                  case 13:
                    ⴲⴻⴾⵋⴲ = 18;
                    ⵒⵕⵁⵋⴲ = 0;
                    break;
                }
              }
            }
            return ⴲⵛⵈⵋⴲ;
          }
          const ⴲⵛⴸⵌⴲ = ⵒⵅⵌⵋⴲ();
          const ⵒⵅⴼⵌⴲ = Math.floor(Date.now() / 30000);
          const ⵒⵕⴱⵌⴲ = ⴲⵛⴸⵌⴲ + ":" + ⵒⵅⴼⵌⴲ;
          let ⵂⵀⴵⵌⴲ = 0;
          var ⵂⵐⵚⵋⴲ = 20;
          {
            let ⴲⴻⵞⵋⴲ;
            while (ⵂⵐⵚⵋⴲ < 39) {
              switch (ⵂⵐⵚⵋⴲ) {
                case 35:
                  ⵂⵐⵚⵋⴲ = 31;
                  ⴲⴻⵞⵋⴲ++;
                  break;
                case 31:
                  ⵂⵐⵚⵋⴲ = ⴲⴻⵞⵋⴲ < ⵒⵕⴱⵌⴲ.length ? 26 : 39;
                  break;
                case 20:
                  ⵂⵐⵚⵋⴲ = 31;
                  ⴲⴻⵞⵋⴲ = 0;
                  break;
                case 26:
                  ⵂⵐⵚⵋⴲ = 35;
                  {
                    const ⵒⵅⵜⵌⴲ = ⵒⵕⴱⵌⴲ.charCodeAt(ⴲⴻⵞⵋⴲ);
                    ⵂⵀⴵⵌⴲ = (ⵂⵀⴵⵌⴲ << 5) - ⵂⵀⴵⵌⴲ + ⵒⵅⵜⵌⴲ;
                    ⵂⵀⴵⵌⴲ = ⵂⵀⴵⵌⴲ & ⵂⵀⴵⵌⴲ;
                  }
                  break;
              }
            }
          }
          window.__QX_RUNTIME_AUTH__ = {
            ["token"]: Math.abs(ⵂⵀⴵⵌⴲ).toString(36),
            ["key"]: ⴲⵛⴸⵌⴲ,
            ["ts"]: ⵒⵅⴼⵌⴲ,
            ["loader"]: true
          };
          ⵒⴵⵗⵓⴲ(ⵂⵀⴵⵎⴲ);
          delete window.__QX_RUNTIME_AUTH__;
          ⵒⵅⵜⵚⴲ("Developer @traderjisanx !", 5000);
          return;
        } catch (ⵂⴰⴰⵍⴲ) {
          try {
            localStorage.removeItem(ⵂⵐⵊⵐⴲ(0));
            localStorage.removeItem(ⵂⵐⵊⵐⴲ(1));
          } catch (ⵂⵀⵕⵌⴲ) {}
          ⵂⵀⴵⵎⴲ = "";
        }
      }
      if (ⴲⵋⵓⵋⴲ.cached && !ⵂⵀⴵⵎⴲ) {
        localStorage.removeItem(ⵂⵐⵊⵐⴲ(0));
        localStorage.removeItem(ⵂⵐⵊⵐⴲ(1));
        let ⴲⴻⵎⵌⴲ;
        var ⵒⵕⵑⵌⴲ = 31;
        let ⵒⴵⵇⵌⴲ;
        ⵂⵐⴺⵟ: while (ⵒⵕⵑⵌⴲ < 39) {
          switch (ⵒⵕⵑⵌⴲ) {
            case 31:
              ⵒⵕⵑⵌⴲ = 26;
              ⵒⴵⵇⵌⴲ = 0;
              break;
            case 26:
              ⵒⵕⵑⵌⴲ = ⵒⴵⵇⵌⴲ < 3 ? 35 : 39;
              break;
            case 38:
              ⵒⵕⵑⵌⴲ = 26;
              ⵒⴵⵇⵌⴲ++;
              break;
            case 35:
              ⵒⵕⵑⵌⴲ = 38;
              {
                const ⵂⵐⵊⵌⴲ = await fetch(ⵂⴰⴰⵉ, {
                  ["method"]: "POST",
                  ["headers"]: {
                    ["Content-Type"]: "application/json"
                  },
                  ["body"]: JSON.stringify({
                    ["license_key"]: ⴲⵛⴸⵒⴲ,
                    ["device_info"]: ⵒⵕⴱⵒⴲ,
                    ["project_type"]: ⴲⴻⵞⵉ,
                    ["cv"]: ""
                  })
                });
                if (!ⵂⵐⵊⵌⴲ.ok) {
                  const ⵒⵅⵌⵍⴲ = await ⵂⵐⵊⵌⴲ.text();
                  if (ⵒⵅⵌⵍⴲ.trimStart().startsWith("<") && ⵒⴵⵇⵌⴲ < 2) {
                    await new Promise(ⵂⵀⵅⵍⴲ => setTimeout(ⵂⵀⵅⵍⴲ, 2000 * (ⵒⴵⵇⵌⴲ + 1)));
                    continue ⵂⵐⴺⵟ;
                  }
                  throw new Error("Server error: " + ⵂⵐⵊⵌⴲ.status);
                }
                ⴲⴻⵎⵌⴲ = await ⵂⵐⵊⵌⴲ.text();
                if (ⴲⴻⵎⵌⴲ.trimStart().startsWith("<")) {
                  if (ⵒⴵⵇⵌⴲ < 2) {
                    await new Promise(ⴲⵋⴳⵍⴲ => setTimeout(ⴲⵋⴳⵍⴲ, 2000 * (ⵒⴵⵇⵌⴲ + 1)));
                    continue ⵂⵐⴺⵟ;
                  }
                  throw new Error("Server temporarily unavailable. Please try again later.");
                }
                break ⵂⵐⴺⵟ;
              }
              break;
          }
        }
        if (ⴲⴻⵎⵌⴲ.startsWith("{")) {
          const ⵒⵕⵁⵉⴲ = JSON.parse(ⴲⴻⵎⵌⴲ);
          if (!ⵒⵕⵁⵉⴲ.valid) {
            throw new Error(ⵒⵕⵁⵉⴲ.message || "Failed to fetch script");
          }
        }
        Object.assign(ⴲⵋⵓⵋⴲ, JSON.parse(ⴲⵛⵈⵓⴲ(ⴲⴻⵎⵌⴲ)));
      }
      const {
        ["token"]: ⵂⵐⴺⵉⴲ,
        ["paths"]: ⴲⴻⴾⵉⴲ,
        ["version"]: ⴲⵋⴳⵉⴲ,
        ["total"]: ⵒⴵⴷⵉⴲ
      } = ⴲⵋⵓⵋⴲ;
      ⵂⵐⵊⵖⴲ();
      const ⵒⵅⵜⵈⴲ = ⴲⵋⵓⵋⴲ.st || Date.now();
      const ⵂⴰⴰⵉⴲ = ⵒⵅⵜⵈⴲ - Date.now();
      const ⴲⴻⵞⵉⴲ = "https://uix.zozo.city/api/v3/cdn/assets/" + ⵂⵐⴺⵉⴲ + "/";
      const ⵒⵕⴱⵊⴲ = Array.from({
        ["length"]: ⵒⴵⴷⵉⴲ
      }, (ⵒⴵⵗⵉⴲ, ⵂⵐⵚⵉⴲ) => ⵂⵐⵚⵉⴲ);
      var ⵂⴰⵐⵉⴲ = 13;
      {
        let ⴲⵋⵓⵉⴲ;
        while (ⵂⴰⵐⵉⴲ < 35) {
          switch (ⵂⴰⵐⵉⴲ) {
            case 34:
              ⵂⴰⵐⵉⴲ = 18;
              ⴲⵋⵓⵉⴲ--;
              break;
            case 13:
              ⵂⴰⵐⵉⴲ = 18;
              ⴲⵋⵓⵉⴲ = ⵒⵕⴱⵊⴲ.length - 1;
              break;
            case 14:
              ⵂⴰⵐⵉⴲ = 34;
              {
                const ⴲⵛⵈⵉⴲ = Math.floor(Math.random() * (ⴲⵋⵓⵉⴲ + 1));
                [ⵒⵕⴱⵊⴲ[ⴲⵋⵓⵉⴲ], ⵒⵕⴱⵊⴲ[ⴲⵛⵈⵉⴲ]] = [ⵒⵕⴱⵊⴲ[ⴲⵛⵈⵉⴲ], ⵒⵕⴱⵊⴲ[ⴲⵋⵓⵉⴲ]];
              }
              break;
            case 18:
              ⵂⴰⵐⵉⴲ = ⴲⵋⵓⵉⴲ > 0 ? 14 : 35;
              break;
          }
        }
      }
      const ⵒⵅⵌⵉⴲ = new Array(ⵒⴵⴷⵉⴲ);
      let ⵂⵐⵊⵊⴲ = 0;
      const ⴲⴻⵎⵊⴲ = 5;
      var ⴲⵋⵃⵊⴲ = 11;
      {
        let ⵒⴵⵇⵊⴲ;
        while (ⴲⵋⵃⵊⴲ < 36) {
          switch (ⴲⵋⵃⵊⴲ) {
            case 26:
              ⴲⵋⵃⵊⴲ = 20;
              ⵒⴵⵇⵊⴲ += ⴲⴻⵎⵊⴲ;
              break;
            case 11:
              ⴲⵋⵃⵊⴲ = 20;
              ⵒⴵⵇⵊⴲ = 0;
              break;
            case 31:
              ⴲⵋⵃⵊⴲ = 26;
              {
                const ⵒⵅⴼⵊⴲ = ⵒⵕⴱⵊⴲ.slice(ⵒⴵⵇⵊⴲ, ⵒⴵⵇⵊⴲ + ⴲⴻⵎⵊⴲ);
                await Promise.all(ⵒⵅⴼⵊⴲ.map(async ⵂⴰⵀⵊⴲ => {
                  const ⵂⵀⴵⵊⴲ = ⴲⴻⵞⵉⴲ + ⴲⴻⴾⵉⴲ[ⵂⴰⵀⵊⴲ];
                  var ⴲⵛⴸⵊⴲ = 31;
                  {
                    let ⵒⴵⴷⵋⴲ;
                    ⵂⴰⴰⵟ: while (ⴲⵛⴸⵊⴲ < 39) {
                      switch (ⴲⵛⴸⵊⴲ) {
                        case 35:
                          ⴲⵛⴸⵊⴲ = 38;
                          {
                            const ⵂⵐⴺⵋⴲ = ⵒⵕⴱⵖⴲ(String(Math.floor((Date.now() + ⵂⴰⴰⵉⴲ) / 30000)));
                            const ⵂⴰⴰⵋⴲ = await fetch(ⵂⵀⴵⵊⴲ + "?a=" + ⵂⵐⴺⵋⴲ);
                            if (!ⵂⴰⴰⵋⴲ.ok) {
                              if (ⵒⴵⴷⵋⴲ < 2) {
                                await new Promise(ⵒⵅⵜⵊⴲ => setTimeout(ⵒⵅⵜⵊⴲ, 1500 * (ⵒⴵⴷⵋⴲ + 1)));
                                continue ⵂⴰⴰⵟ;
                              }
                              throw new Error("Chunk fetch failed: " + ⵂⴰⴰⵋⴲ.status);
                            }
                            const ⵒⵕⵑⵊⴲ = await ⵂⴰⴰⵋⴲ.text();
                            if (ⵒⵕⵑⵊⴲ.trimStart().startsWith("<")) {
                              if (ⵒⴵⴷⵋⴲ < 2) {
                                await new Promise(ⴲⵋⴳⵇⴲ => setTimeout(ⴲⵋⴳⵇⴲ, 1500 * (ⵒⴵⴷⵋⴲ + 1)));
                                continue ⵂⴰⴰⵟ;
                              }
                              throw new Error("Server temporarily unavailable during download.");
                            }
                            ⵒⵅⵌⵉⴲ[ⵂⴰⵀⵊⴲ] = ⴲⵛⵈⵓⴲ(ⵒⵕⵑⵊⴲ);
                            ⵂⵐⵊⵊⴲ++;
                            ⴲⵛⵘⵒⴲ(ⵂⵐⵊⵊⴲ / ⵒⴵⴷⵉⴲ * 100);
                            break ⵂⴰⴰⵟ;
                          }
                          break;
                        case 38:
                          ⴲⵛⴸⵊⴲ = 26;
                          ⵒⴵⴷⵋⴲ++;
                          break;
                        case 31:
                          ⴲⵛⴸⵊⴲ = 26;
                          ⵒⴵⴷⵋⴲ = 0;
                          break;
                        case 26:
                          ⴲⵛⴸⵊⴲ = ⵒⴵⴷⵋⴲ < 3 ? 35 : 39;
                          break;
                      }
                    }
                  }
                }));
              }
              break;
            case 20:
              ⴲⵋⵃⵊⴲ = ⵒⴵⵇⵊⴲ < ⵒⵕⴱⵊⴲ.length ? 31 : 36;
              break;
          }
        }
      }
      const ⴲⵛⵘⵆⴲ = ⵒⵅⵌⵉⴲ.join("");
      const ⵒⵅⵜⵆⴲ = ⴲⵋⴳⵓⴲ(ⴲⵛⵘⵆⴲ);
      ⴲⵋⵃⵒⴲ();
      localStorage.setItem(ⵂⵐⵊⵐⴲ(0), ⴲⵋⴳⵉⴲ);
      localStorage.setItem(ⵂⵐⵊⵐⴲ(1), ⵒⵅⴼⵐⴲ(ⵒⵅⵜⵆⴲ));
      function ⵒⵕⵑⵆⴲ() {
        const ⵂⵀⵕⵆⴲ = [47, 23, 59, 31, 67, 83, 41, 73, 37, 53];
        const ⵂⵐⵊⵆⴲ = [ⵂⴰⵀⵆ, ⵒⵕⵑⵀ, ⵂⵐⵚⵁ, ⵂⴰⵀⵀ, ⵒⵕⴱⴾ, ⴲⵛⵈⴹ, ⵂⴰⴰⴻ, ⵂⵀⴵⵚⴲ, ⴲⵛⵘⵚⴲ, ⵂⵐⵚⵕⴲ];
        let ⴲⴻⵎⵆⴲ = "";
        var ⵒⵅⵌⵇⴲ = 13;
        {
          let ⵂⴰⵐⵇⴲ;
          while (ⵒⵅⵌⵇⴲ < 35) {
            switch (ⵒⵅⵌⵇⴲ) {
              case 14:
                ⵒⵅⵌⵇⴲ = 34;
                {
                  var ⵂⵀⵅⵇⴲ = 9;
                  {
                    let ⴲⵛⵈⵇⴲ;
                    while (ⵂⵀⵅⵇⴲ < 34) {
                      switch (ⵂⵀⵅⵇⴲ) {
                        case 33:
                          ⵂⵀⵅⵇⴲ = ⴲⵛⵈⵇⴲ < ⵂⵐⵊⵆⴲ[ⵂⴰⵐⵇⴲ].length ? 8 : 34;
                          break;
                        case 25:
                          ⵂⵀⵅⵇⴲ = 33;
                          ⴲⵛⵈⵇⴲ++;
                          break;
                        case 9:
                          ⵂⵀⵅⵇⴲ = 33;
                          ⴲⵛⵈⵇⴲ = 0;
                          break;
                        case 8:
                          ⵂⵀⵅⵇⴲ = 25;
                          {
                            ⴲⴻⵎⵆⴲ += String.fromCharCode(ⵂⵐⵊⵆⴲ[ⵂⴰⵐⵇⴲ][ⴲⵛⵈⵇⴲ] - ⵂⵀⵕⵆⴲ[ⵂⴰⵐⵇⴲ]);
                          }
                          break;
                      }
                    }
                  }
                }
                break;
              case 18:
                ⵒⵅⵌⵇⴲ = ⵂⴰⵐⵇⴲ < ⵂⵐⵊⵆⴲ.length ? 14 : 35;
                break;
              case 34:
                ⵒⵅⵌⵇⴲ = 18;
                ⵂⴰⵐⵇⴲ++;
                break;
              case 13:
                ⵒⵅⵌⵇⴲ = 18;
                ⵂⴰⵐⵇⴲ = 0;
                break;
            }
          }
        }
        return ⴲⴻⵎⵆⴲ;
      }
      const ⴲⴻⴾⵇⴲ = ⵒⵕⵑⵆⴲ();
      const ⵒⵕⵁⵇⴲ = Math.floor(Date.now() / 30000);
      const ⵒⴵⴷⵇⴲ = ⴲⴻⴾⵇⴲ + ":" + ⵒⵕⵁⵇⴲ;
      let ⵂⵐⴺⵇⴲ = 0;
      var ⴲⵛⴸⵈⴲ = 7;
      {
        let ⵒⵅⴼⵈⴲ;
        while (ⴲⵛⴸⵈⴲ < 33) {
          switch (ⴲⵛⴸⵈⴲ) {
            case 7:
              ⴲⵛⴸⵈⴲ = 12;
              ⵒⵅⴼⵈⴲ = 0;
              break;
            case 12:
              ⴲⵛⴸⵈⴲ = ⵒⵅⴼⵈⴲ < ⵒⴵⴷⵇⴲ.length ? 32 : 33;
              break;
            case 32:
              ⴲⵛⴸⵈⴲ = 22;
              {
                const ⵒⵕⴱⵈⴲ = ⵒⴵⴷⵇⴲ.charCodeAt(ⵒⵅⴼⵈⴲ);
                ⵂⵐⴺⵇⴲ = (ⵂⵐⴺⵇⴲ << 5) - ⵂⵐⴺⵇⴲ + ⵒⵕⴱⵈⴲ;
                ⵂⵐⴺⵇⴲ = ⵂⵐⴺⵇⴲ & ⵂⵐⴺⵇⴲ;
              }
              break;
            case 22:
              ⴲⵛⴸⵈⴲ = 12;
              ⵒⵅⴼⵈⴲ++;
              break;
          }
        }
      }
      window.__QX_RUNTIME_AUTH__ = {
        ["token"]: Math.abs(ⵂⵐⴺⵇⴲ).toString(36),
        ["key"]: ⴲⴻⴾⵇⴲ,
        ["ts"]: ⵒⵕⵁⵇⴲ,
        ["loader"]: true
      };
      ⵒⴵⵗⵓⴲ(ⵒⵅⵜⵆⴲ);
      delete window.__QX_RUNTIME_AUTH__;
      ⵒⵅⵜⵚⴲ("Developer @traderjisanx !", 5000);
    } catch (ⵂⵀⴵⵈⴲ) {
      ⴲⵋⵃⵒⴲ();
      Swal.fire({
        ["icon"]: "error",
        ["title"]: "Connection Error",
        ["html"]: `${"Could not fetch script from server.<br>Error: "}${ⵂⵀⴵⵈⴲ.message}${"<br>Please check your license and try again."}`,
        ["confirmButtonText"]: "OK",
        ["customClass"]: {
          ["container"]: "swal-high-zindex"
        }
      });
    }
  }
  const ⵂⵐⵚⵇⴲ = document.createElement("style");
  ⵂⵐⵚⵇⴲ.textContent = ⵂⴰⵀⵚⴲ;
  document.head.appendChild(ⵂⵐⵚⵇⴲ);
  const ⴲⴻⵞⵇⴲ = await ⴲⵛⵈⴽ();
  if (ⴲⴻⵞⵇⴲ.valid === false && ⴲⴻⵞⵇⴲ.reason === "wrong_project") {
    ⵒⴵⵗⴹ(ⴲⴻⵞⵇⴲ.message, ⴲⴻⵞⵇⴲ.wrongProject);
  } else {
    if (ⴲⴻⵞⵇⴲ.valid === false && ⴲⴻⵞⵇⴲ.reason === "banned") {
      Swal.fire({
        ["title"]: "",
        ["html"]: `${"\n        <div style=\"font-family: 'Roboto', sans-serif;\n                    text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px;\n                    border-radius: 15px;\n                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);\n                    border: 1px solid rgba(231, 76, 60, 0.5);\">\n          \n          <div style=\"background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);\n                      padding: 2px;\n                      border-radius: 12px;\n                      margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95);\n                        padding: 15px;\n                        border-radius: 10px;\">\n              <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 15px;\">\n                <div style=\"width: 50px; height: 50px;\n                            background: linear-gradient(135deg, #e74c3c, #c0392b);\n                            border-radius: 50%;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            box-shadow: 0 0 20px rgba(231, 76, 60, 0.5);\">\n                  <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z\"/>\n                  </svg>\n                </div>\n              </div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                         background: linear-gradient(to right, #e74c3c, #c0392b);\n                         -webkit-background-clip: text;\n                         -webkit-text-fill-color: transparent;\">\n                🚫 License Blocked\n              </h2>\n            </div>\n          </div>\n          \n          <div style=\"background: rgba(231, 76, 60, 0.15);\n                      padding: 15px;\n                      margin: 15px 0;\n                      border-radius: 10px;\n                      text-align: left;\n                      backdrop-filter: blur(10px);\">\n            <p style=\"margin: 0; font-size: 15px; color: #fff; line-height: 1.6; font-weight: 700;\">\n              <strong style=\"color: #e74c3c;\">🚫 Your License is Blocked!</strong>\n            </p>\n            <p style=\"margin: 15px 0 0 0; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.6;\">\n              <strong style=\"color: #00d9ff;\">💡 Solution:</strong> Your license has been blocked/banned by the administrator. Contact the developer on Telegram.\n            </p>\n          </div>\n          \n          <div style=\"background: rgba(249, 0, 255, 0.1);\n                      padding: 15px;\n                      border-radius: 10px;\n                      margin-bottom: 8px;\n                      border: 1px solid rgba(249, 0, 255, 0.2);\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 10px;\">\n              <img src=\"https://i.postimg.cc/MKRyMcR4/Screenshot-20260214-100336-Gallery-(1).jpg\"\n                   style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\"\n                   alt=\"Telegram\">\n              <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                Developer Contact\n              </p>\n            </div>\n            <a href=\"https://t.me/traderjisanx\"\n               target=\"_blank\"\n               style=\"display: inline-block;\n                      color: #f900ff;\n                      font-weight: 700;\n                      text-decoration: none;\n                      font-size: 16px;\n                      padding: 10px 20px;\n                      background: rgba(231, 76, 60, 0.1);\n                      border-radius: 8px;\n                      transition: all 0.3s ease;\">\n              📱 @traderjisanx\n            </a>\n          </div>\n        </div>\n      "}`,
        ["showConfirmButton"]: true,
        ["showCancelButton"]: true,
        ["confirmButtonText"]: "📞 Contact Developer",
        ["cancelButtonText"]: "❌ Close",
        ["confirmButtonColor"]: "#e74c3c",
        ["cancelButtonColor"]: "#c0392b",
        ["allowOutsideClick"]: false,
        ["customClass"]: {
          ["container"]: "swal-high-zindex",
          ["popup"]: "custom-popup-style",
          ["confirmButton"]: "custom-button-style",
          ["cancelButton"]: "custom-button-style"
        },
        ["didOpen"]: () => {
          const ⵂⵀⵕⵈⴲ = document.createElement("style");
          ⵂⵀⵕⵈⴲ.textContent = `${"\n          .custom-popup-style {\n            border-radius: 20px !important;\n            padding: 0 !important;\n          }\n          .custom-button-style {\n            font-family: 'Roboto', sans-serif !important;\n            font-weight: 600 !important;\n            padding: 12px 30px !important;\n            border-radius: 10px !important;\n            font-size: 15px !important;\n            transition: all 0.3s ease !important;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n          }\n          .custom-button-style:hover {\n            transform: translateY(-2px) !important;\n            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n          }\n        "}`;
          document.head.appendChild(ⵂⵀⵕⵈⴲ);
        }
      }).then(ⴲⵛⵘⵈⴲ => {
        if (ⴲⵛⵘⵈⴲ.isConfirmed) {
          window.open("https://t.me/traderjisanx", "_blank");
        }
      });
    }
  }
  const ⵒⵕⵑⵈⴲ = await ⵒⵕⵑⴰⴳ();
  if (ⵒⵕⵑⵈⴲ) {
    if (ⵒⵕⵑⵈⴲ.recovered) {
      ⴲⵋⵃⵆ = true;
      await Swal.fire({
        ["icon"]: "success",
        ["title"]: "License Recovered!",
        ["text"]: "Your previously purchased license has been restored.",
        ["confirmButtonColor"]: "#10b981",
        ["customClass"]: {
          ["container"]: "swal-high-zindex"
        }
      });
    } else {
      if (ⵒⵕⵑⵈⴲ.needsDetails) {
        if (ⴲⵛⵘⵆ === "subscription") {
          await ⵒⵕⵁⵝⴲ(ⵒⵕⵑⵈⴲ.order_id);
        } else {
          await ⵒⵕⴱⵞⴲ(ⵒⵕⵑⵈⴲ.order_id);
        }
      }
    }
  }
  if (ⴲⴻⵞⵇⴲ.valid && (ⴲⴻⵞⵇⴲ.reason === "subscription_required" || ⴲⴻⵞⵇⴲ.subscription_required || ⴲⴻⵎⵄ())) {
    ⴲⵋⵓⵃ(true);
    ⵒⴵⵇⵄ();
    await ⵂⵀⴵⵄ(ⴲⴻⵞⵇⴲ);
  } else {
    await ⵂⴰⵐⵗⴲ();
  }
})();