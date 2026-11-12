function observeReveal() {
  var els = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!els.length) return;
  Array.prototype.forEach.call(els, function (el) {
    if (el.dataset.rd) return;
    el.dataset.rd = "1";
    var sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains("reveal"); }) : [];
    var i = sibs.indexOf(el);
    el.style.setProperty("--rd", i > 0 ? Math.min(i * 70, 350) + "ms" : "0ms");
  });
  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(els, function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  Array.prototype.forEach.call(els, function (el) { io.observe(el); });
}

function initNav() {
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
  var onScroll = function () {
    if (window.scrollY > 8) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initMotion() {
  var bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.type = "button";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';
  document.body.appendChild(toTop);
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  var header = document.querySelector(".site-header");
  var lastY = 0;
  var ticking = false;
  var onScroll = function () {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    if (header) {
      if (y > lastY && y > 320 && !header.classList.contains("nav-open")) header.classList.add("is-hidden");
      else header.classList.remove("is-hidden");
    }
    if (y > 560) toTop.classList.add("is-shown");
    else toTop.classList.remove("is-shown");
    lastY = y;
    ticking = false;
  };
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();
}

function initContactForm() {
  var form = document.getElementById("enquiry-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var interest = form.interest.value;
    var message = form.message.value.trim();
    var text = "Hi Mema Furniture!" +
      (name ? " My name is " + name + "." : "") +
      (phone ? " Reach me on " + phone + "." : "") +
      (interest ? " I'm interested in: " + interest + "." : "") +
      (message ? " " + message : "");
    window.open(waLink(text), "_blank", "noopener");
  });
}

function initYear() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
  initNav();
  renderPopular();
  renderCatalog();
  renderProductDetail();
  initContactForm();
  initYear();
  observeReveal();
  initMotion();
  document.body.classList.add("is-loaded");
});
