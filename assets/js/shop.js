function starIcon() {
  return '<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8z"/></svg>';
}

function waIcon() {
  return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/></svg>';
}

function productCard(p) {
  var cat = getCategory(p.category);
  var stock = p.availability === "In Stock" ? "chip-stock" : "chip-order";
  return '' +
    '<article class="product-card reveal">' +
      '<a class="product-media" href="product.html?id=' + p.id + '" aria-label="' + p.name + '">' +
        '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
        '<span class="chip tier">' + p.tier + '</span>' +
      '</a>' +
      '<div class="product-body">' +
        '<p class="product-cat">' + cat.name + '</p>' +
        '<h3 class="product-name"><a href="product.html?id=' + p.id + '">' + p.name + '</a></h3>' +
        '<div class="product-meta">' +
          '<span class="chip ' + stock + '">' + p.availability + '</span>' +
          '<p class="product-price">From ' + formatKES(p.priceFrom) + '</p>' +
        '</div>' +
        '<div class="product-actions">' +
          '<a class="btn btn-ghost btn-sm" href="product.html?id=' + p.id + '">View details</a>' +
          '<a class="icon-btn" href="' + waLink(productEnquiry(p)) + '" target="_blank" rel="noopener" aria-label="Order ' + p.name + ' on WhatsApp">' + waIcon() + '</a>' +
        '</div>' +
      '</div>' +
    '</article>';
}

function renderPopular() {
  var grid = document.getElementById("popular-grid");
  if (!grid) return;
  var items = PRODUCTS.filter(function (p) { return p.popular; });
  grid.innerHTML = items.map(productCard).join("");
}

function renderCatalog() {
  var grid = document.getElementById("catalog-grid");
  if (!grid) return;
  var state = { q: "", cat: "all", sort: "featured" };
  var search = document.getElementById("catalog-search");
  var pills = Array.prototype.slice.call(document.querySelectorAll(".pill[data-cat]"));
  var sortSel = document.getElementById("catalog-sort");
  var count = document.getElementById("catalog-count");
  var empty = document.getElementById("catalog-empty");

  function apply() {
    var list = PRODUCTS.filter(function (p) {
      var okCat = state.cat === "all" || p.category === state.cat;
      var hay = (p.name + " " + p.materials + " " + p.description + " " + getCategory(p.category).name).toLowerCase();
      var okQ = !state.q || hay.indexOf(state.q) !== -1;
      return okCat && okQ;
    });
    if (state.sort === "price-asc") list.sort(function (a, b) { return a.priceFrom - b.priceFrom; });
    if (state.sort === "price-desc") list.sort(function (a, b) { return b.priceFrom - a.priceFrom; });
    if (state.sort === "name") list.sort(function (a, b) { return a.name.localeCompare(b.name); });
    grid.innerHTML = list.map(productCard).join("");
    count.textContent = list.length + " of " + PRODUCTS.length + " pieces";
    empty.hidden = list.length !== 0;
    var hash = state.cat === "all" ? "collection.html" : "collection.html?cat=" + state.cat;
    if (state.cat !== "all") history.replaceState(null, "", "#cat-" + state.cat);
    observeReveal();
  }

  if (search) {
    search.addEventListener("input", function () {
      state.q = search.value.trim().toLowerCase();
      apply();
    });
  }
  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p2) { p2.classList.remove("is-active"); });
      pill.classList.add("is-active");
      state.cat = pill.dataset.cat;
      apply();
    });
  });
  if (sortSel) {
    sortSel.addEventListener("change", function () {
      state.sort = sortSel.value;
      apply();
    });
  }
  var preset = new URLSearchParams(location.search).get("cat");
  if (preset) {
    var match = pills.filter(function (p2) { return p2.dataset.cat === preset; })[0];
    if (match) match.click();
  }
  apply();
}

function renderRelated(id) {
  var wrap = document.getElementById("related-grid");
  if (!wrap) return;
  var p = getProduct(id);
  if (!p) return;
  var items = PRODUCTS.filter(function (x) { return x.category === p.category && x.id !== p.id; }).slice(0, 4);
  if (items.length < 4) {
    PRODUCTS.forEach(function (x) {
      if (items.length < 4 && x.id !== p.id && items.indexOf(x) === -1 && x.category !== p.category) items.push(x);
    });
  }
  wrap.innerHTML = items.map(productCard).join("");
  observeReveal();
}

function renderProductDetail() {
  var page = document.getElementById("product-detail");
  if (!page) return;
  var id = new URLSearchParams(location.search).get("id");
  var p = getProduct(id);
  if (!p) {
    location.replace("collection.html");
    return;
  }
  var cat = getCategory(p.category);
  document.title = p.name + " — Mema Furniture";
  var crumbs = document.getElementById("crumbs");
  if (crumbs) {
    crumbs.innerHTML =
      '<a href="index.html">Home</a><span aria-hidden="true">/</span>' +
      '<a href="collection.html">Collection</a><span aria-hidden="true">/</span>' +
      '<span>' + p.name + '</span>';
  }
  var stock = p.availability === "In Stock" ? "chip-stock" : "chip-order";
  page.innerHTML =
    '<div class="detail-grid">' +
      '<div class="detail-media reveal">' +
        '<img src="' + p.image + '" alt="' + p.name + '">' +
        '<span class="chip chip-float tier">' + p.tier + '</span>' +
        '<span class="chip chip-float ' + stock + '">' + p.availability + '</span>' +
      '</div>' +
      '<div class="detail-info">' +
        '<p class="eyebrow">' + cat.name + '</p>' +
        '<h1 class="detail-title">' + p.name + '</h1>' +
        '<p class="detail-price">' + formatKES(p.priceFrom) + ' <span>– ' + formatKES(p.priceTo) + '</span></p>' +
        '<p class="detail-desc">' + p.description + '</p>' +
        '<dl class="spec-list">' +
          '<div><dt>Dimensions</dt><dd>' + p.dimensions + '</dd></div>' +
          '<div><dt>Materials</dt><dd>' + p.materials + '</dd></div>' +
          '<div><dt>Available colours</dt><dd><span class="swatch-row">' + p.colours.map(function (c) { return '<span class="swatch-text">' + c + '</span>'; }).join("") + '</span></dd></div>' +
          '<div><dt>Collection tier</dt><dd>' + p.tier + '</dd></div>' +
          '<div><dt>Availability</dt><dd>' + p.availability + '</dd></div>' +
        '</dl>' +
        '<div class="detail-actions">' +
          '<a class="btn btn-wa" href="' + waLink(productEnquiry(p)) + '" target="_blank" rel="noopener">' + waIcon() + 'Order on WhatsApp</a>' +
          '<a class="btn btn-outline" href="tel:' + MEMA.phoneTel + '"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.3-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.4A2 2 0 0 1 4.4 2.3h3a2 2 0 0 1 2 1.7l.7 3.2a2 2 0 0 1-.6 2L8.1 10a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2-.6l3.2.7a2 2 0 0 1 1.6 2Z"/></svg>Call ' + MEMA.phoneDisplay + '</a>' +
        '</div>' +
        '<p class="detail-note">Every order is confirmed with you before production begins. <a href="contact.html">Customisation requests</a> and <a href="contact.html">delivery arrangements</a> are handled personally on WhatsApp.</p>' +
      '</div>' +
    '</div>';
  renderRelated(id);
}
