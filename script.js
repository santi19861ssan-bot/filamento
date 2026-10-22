/*
 * FILAMENTO JOYERÍA — configuración de catálogo y carrito.
 * Cambia los productos en PRODUCTS y el WhatsApp en WHATSAPP_NUMBER.
 * Número internacional: solo dígitos, sin +, espacios ni guiones.
 */
const WHATSAPP_NUMBER = "573025519037";
const CURRENCY = "COP";
const STORAGE_KEY = "filamento-cart-v1";

// Catálogo de muestra. Sustituye nombres, precios y descripciones por los reales.
// Para añadir una foto propia, agrega image: "images/nombre-archivo.jpg" al producto;
// crea la carpeta images y guarda allí la fotografía.
const PRODUCTS = [
  { id: "laminado-01", name: "Anillo 01", section: "Oro laminado", category: "Anillos", price: 0, description: "Pieza de la colección oro laminado, fotografía de referencia.", tag: "ORO LAMINADO", image: "images/manilla-01.jpg" },
  { id: "laminado-02", name: "Manilla 02", section: "Oro laminado", category: "Manillas", price: 0, description: "Cordón negro con cuentas doradas facetadas.", tag: "ORO LAMINADO", image: "images/manilla-02.jpg" },
  { id: "laminado-03", name: "Manilla 03", section: "Oro laminado", category: "Manillas", price: 0, description: "Diseño de cuentas doradas con acabado brillante.", tag: "ORO LAMINADO", image: "images/manilla-03.jpg" },
  { id: "laminado-04", name: "Manilla 04", section: "Oro laminado", category: "Manillas", price: 0, description: "Manilla elegante para combinar a diario.", tag: "ORO LAMINADO", image: "images/manilla-04.jpg" },
  { id: "laminado-05", name: "Manilla 05", section: "Oro laminado", category: "Manillas", price: 0, description: "Cuentas doradas de acabado luminoso.", tag: "ORO LAMINADO", image: "images/manilla-05.jpg" },
  { id: "laminado-06", name: "Anillo 06", section: "Oro laminado", category: "Anillos", price: 0, description: "Pieza de la colección oro laminado, fotografía de referencia.", tag: "ORO LAMINADO", image: "images/manilla-06.jpg" },
  { id: "laminado-07", name: "Anillo 07", section: "Oro laminado", category: "Anillos", price: 0, description: "Pieza de la colección oro laminado, fotografía de referencia.", tag: "ORO LAMINADO", image: "images/manilla-07.jpg" },
  { id: "laminado-08", name: "Manilla 08", section: "Oro laminado", category: "Manillas", price: 0, description: "Manilla de estilo clásico con detalles dorados.", tag: "ORO LAMINADO", image: "images/manilla-08.jpg" },
  { id: "laminado-09", name: "Anillo 09", section: "Oro laminado", category: "Anillos", price: 0, description: "Pieza de la colección oro laminado, fotografía de referencia.", tag: "ORO LAMINADO", image: "images/manilla-09.jpg" },
  { id: "laminado-10", name: "Manilla 10", section: "Oro laminado", category: "Manillas", price: 0, description: "Manilla con medalla central decorativa.", tag: "ORO LAMINADO", image: "images/manilla-10.jpg" },
  { id: "laminado-11", name: "Manilla 11", section: "Oro laminado", category: "Manillas", price: 0, description: "Cordón tejido con cuentas doradas en relieve.", tag: "ORO LAMINADO", image: "images/manilla-11.jpg" },
  { id: "laminado-12", name: "Manilla 12", section: "Oro laminado", category: "Manillas", price: 0, description: "Diseño clásico con medalla dorada.", tag: "ORO LAMINADO", image: "images/manilla-12.jpg" },
  { id: "laminado-13", name: "Anillo 13", section: "Oro laminado", category: "Anillos", price: 0, description: "Pieza de la colección oro laminado, fotografía de referencia.", tag: "ORO LAMINADO", image: "images/manilla-13.jpg" },
  { id: "laminado-14", name: "Manilla 14", section: "Oro laminado", category: "Manillas", price: 0, description: "Diseño tejido con cuentas doradas.", tag: "ORO LAMINADO", image: "images/manilla-14.jpg" },
  { id: "laminado-15", name: "Anillo 15", section: "Oro laminado", category: "Anillos", price: 0, description: "Pieza de la colección oro laminado, fotografía de referencia.", tag: "ORO LAMINADO", image: "images/manilla-15.jpg" },
  { id: "oro-01", name: "Anillo 01", section: "Oro", category: "Anillos", price: 0, description: "Pieza de la colección oro, fotografía de referencia.", tag: "ORO", image: "images/manilla-01.jpg" },
  { id: "oro-02", name: "Manilla 02", section: "Oro", category: "Manillas", price: 0, description: "Cordón negro con cuentas doradas facetadas.", tag: "ORO", image: "images/manilla-02.jpg" },
  { id: "oro-03", name: "Manilla 03", section: "Oro", category: "Manillas", price: 0, description: "Diseño de cuentas doradas con acabado brillante.", tag: "ORO", image: "images/manilla-03.jpg" },
  { id: "oro-04", name: "Manilla 04", section: "Oro", category: "Manillas", price: 0, description: "Manilla elegante para combinar a diario.", tag: "ORO", image: "images/manilla-04.jpg" },
  { id: "oro-05", name: "Manilla 05", section: "Oro", category: "Manillas", price: 0, description: "Cuentas doradas de acabado luminoso.", tag: "ORO", image: "images/manilla-05.jpg" },
  { id: "oro-06", name: "Anillo 06", section: "Oro", category: "Anillos", price: 0, description: "Pieza de la colección oro, fotografía de referencia.", tag: "ORO", image: "images/manilla-06.jpg" },
  { id: "oro-07", name: "Anillo 07", section: "Oro", category: "Anillos", price: 0, description: "Pieza de la colección oro, fotografía de referencia.", tag: "ORO", image: "images/manilla-07.jpg" },
  { id: "oro-08", name: "Manilla 08", section: "Oro", category: "Manillas", price: 0, description: "Manilla de estilo clásico con detalles dorados.", tag: "ORO", image: "images/manilla-08.jpg" },
  { id: "oro-09", name: "Anillo 09", section: "Oro", category: "Anillos", price: 0, description: "Pieza de la colección oro, fotografía de referencia.", tag: "ORO", image: "images/manilla-09.jpg" },
  { id: "oro-10", name: "Manilla 10", section: "Oro", category: "Manillas", price: 0, description: "Manilla con medalla central decorativa.", tag: "ORO", image: "images/manilla-10.jpg" },
  { id: "oro-11", name: "Manilla 11", section: "Oro", category: "Manillas", price: 0, description: "Cordón tejido con cuentas doradas en relieve.", tag: "ORO", image: "images/manilla-11.jpg" },
  { id: "oro-12", name: "Manilla 12", section: "Oro", category: "Manillas", price: 0, description: "Diseño clásico con medalla dorada.", tag: "ORO", image: "images/manilla-12.jpg" },
  { id: "oro-13", name: "Anillo 13", section: "Oro", category: "Anillos", price: 0, description: "Pieza de la colección oro, fotografía de referencia.", tag: "ORO", image: "images/manilla-13.jpg" },
  { id: "oro-14", name: "Manilla 14", section: "Oro", category: "Manillas", price: 0, description: "Diseño tejido con cuentas doradas.", tag: "ORO", image: "images/manilla-14.jpg" },
  { id: "oro-15", name: "Anillo 15", section: "Oro", category: "Anillos", price: 0, description: "Pieza de la colección oro, fotografía de referencia.", tag: "ORO", image: "images/manilla-15.jpg" }
];

const $ = (selector) => document.querySelector(selector);
const money = (amount) => new Intl.NumberFormat("es-CO", {
  style: "currency", currency: CURRENCY, maximumFractionDigits: 0
}).format(amount);

let activeSection = "Oro laminado";
let activeCategory = "Manillas";
let cart = loadCart();

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter(row => PRODUCTS.some(product => product.id === row.id) && Number.isInteger(row.qty) && row.qty > 0);
  } catch { return []; }
}
function saveCart() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch { /* El carrito funciona durante la sesión si el almacenamiento no está disponible. */ }
}
function productById(id) { return PRODUCTS.find(product => product.id === id); }
function cartQty() { return cart.reduce((sum, row) => sum + row.qty, 0); }
function cartTotal() { return cart.reduce((sum, row) => sum + productById(row.id).price * row.qty, 0); }
function artMarkup(product) {
  if (product.image) return `<img class="product-photo" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy">`;
  return `<div class="product-art" aria-hidden="true"></div>`;
}

function renderProducts() {
  const products = PRODUCTS.filter(p => p.section === activeSection && p.category === activeCategory);
  if (!products.length) {
    $("#product-grid").innerHTML = `<div class="empty-collection"><p class="eyebrow">PRÓXIMAMENTE</p><h3>Estamos preparando esta selección.</h3><p>Pronto encontrarás aquí nuevas piezas de ${escapeHTML(activeSection.toLowerCase())}.</p></div>`;
    return;
  }
  $("#product-grid").innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-image">
        <span class="product-tag">${escapeHTML(product.tag)}</span>
        ${artMarkup(product)}
      </div>
      <div class="product-info">
        <div><h3>${escapeHTML(product.name)}</h3><p class="product-description">${escapeHTML(product.description)}</p></div>
        <span class="product-price">${money(product.price)}</span>
      </div>
      <button class="add-button" data-add="${product.id}">AÑADIR AL CARRITO ＋</button>
    </article>`).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function addToCart(id) {
  const row = cart.find(item => item.id === id);
  if (row) row.qty += 1; else cart.push({ id, qty: 1 });
  saveCart(); renderCart(); showToast(`${productById(id).name} añadido al carrito.`);
}
function changeQty(id, delta) {
  const row = cart.find(item => item.id === id);
  if (!row) return;
  row.qty += delta;
  if (row.qty <= 0) cart = cart.filter(item => item.id !== id);
  saveCart(); renderCart();
}
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart(); renderCart();
}
function renderCart() {
  const qty = cartQty();
  $("#cart-count").textContent = qty;
  $("#drawer-item-count").textContent = `(${qty})`;
  $("#cart-subtotal").textContent = money(cartTotal());
  $("#checkout-total").textContent = `${money(cartTotal())} COP`;
  $("#cart-items").innerHTML = cart.map(row => {
    const product = productById(row.id);
    return `<div class="cart-row">
      <div class="cart-thumb">${artMarkup(product)}</div>
      <div><h3>${escapeHTML(product.name)}</h3><div class="cart-row-price">${money(product.price)} c/u</div>
        <div class="qty-controls"><button data-qty="${product.id}" data-delta="-1" aria-label="Reducir cantidad">−</button><span>${row.qty}</span><button data-qty="${product.id}" data-delta="1" aria-label="Aumentar cantidad">+</button></div>
      </div>
      <button class="remove-item" data-remove="${product.id}" aria-label="Eliminar ${escapeHTML(product.name)}">Eliminar</button>
    </div>`;
  }).join("");
  $("#cart-empty").classList.toggle("show", qty === 0);
  $("#cart-summary").classList.toggle("hidden", qty === 0);
}
function openCart() {
  $("#cart-drawer").classList.add("open");
  $("#cart-drawer").setAttribute("aria-hidden", "false");
  $("#drawer-backdrop").classList.add("show");
  document.body.classList.add("locked");
}
function closeCart() {
  $("#cart-drawer").classList.remove("open");
  $("#cart-drawer").setAttribute("aria-hidden", "true");
  $("#drawer-backdrop").classList.remove("show");
  if (!$("#checkout-modal").classList.contains("open")) document.body.classList.remove("locked");
}
function openCheckout() {
  if (!cart.length) return;
  closeCart();
  $("#checkout-modal").classList.add("open");
  $("#checkout-modal").setAttribute("aria-hidden", "false");
  $("#checkout-backdrop").classList.add("show");
  document.body.classList.add("locked");
  setTimeout(() => $("#customer-name").focus(), 100);
}
function closeCheckout() {
  $("#checkout-modal").classList.remove("open");
  $("#checkout-modal").setAttribute("aria-hidden", "true");
  $("#checkout-backdrop").classList.remove("show");
  document.body.classList.remove("locked");
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}
function createWhatsAppMessage(formData) {
  const items = cart.map(row => {
    const p = productById(row.id);
    return `• ${p.name} x${row.qty} — ${money(p.price * row.qty)}`;
  }).join("\n");
  const optional = [
    formData.get("address") ? `Dirección: ${formData.get("address").trim()}` : "",
    formData.get("notes") ? `Nota: ${formData.get("notes").trim()}` : ""
  ].filter(Boolean).join("\n");
  return [
    "¡Hola, FILAMENTO JOYERÍA! Quiero realizar este pedido:",
    "",
    items,
    "",
    `TOTAL DE PRODUCTOS: ${money(cartTotal())} COP`,
    "Envío: por confirmar por WhatsApp.",
    "",
    "DATOS DEL CLIENTE",
    `Nombre: ${formData.get("name").trim()}`,
    `Teléfono: ${formData.get("phone").trim()}`,
    `Ciudad: ${formData.get("city").trim()}`,
    optional,
    "",
    "Por favor, confirmen disponibilidad, envío y forma de pago. ¡Gracias!"
  ].filter(line => line !== null).join("\n");
}

document.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const qty = event.target.closest("[data-qty]");
  const remove = event.target.closest("[data-remove]");
  const filter = event.target.closest("[data-category]");
  const section = event.target.closest("[data-section]");
  if (add) addToCart(add.dataset.add);
  if (qty) changeQty(qty.dataset.qty, Number(qty.dataset.delta));
  if (remove) removeFromCart(remove.dataset.remove);
  if (section) {
    activeSection = section.dataset.section;
    document.querySelectorAll(".section-filter").forEach(button => button.classList.toggle("active", button === section));
    renderProducts();
  }
  if (filter) {
    activeCategory = filter.dataset.category;
    document.querySelectorAll(".filter").forEach(button => button.classList.toggle("active", button === filter));
    renderProducts();
  }
});

$("#open-cart").addEventListener("click", openCart);
$("#close-cart").addEventListener("click", closeCart);
$("#drawer-backdrop").addEventListener("click", closeCart);
$("#continue-shopping").addEventListener("click", () => { closeCart(); $("#coleccion").scrollIntoView({ behavior: "smooth" }); });
$("#go-checkout").addEventListener("click", openCheckout);
$("#close-checkout").addEventListener("click", closeCheckout);
$("#checkout-backdrop").addEventListener("click", closeCheckout);
$("#checkout-form").addEventListener("submit", event => {
  event.preventDefault();
  if (!cart.length) { closeCheckout(); showToast("Tu carrito está vacío."); return; }
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const message = createWhatsAppMessage(new FormData(form));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
$("#contact-whatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}`;
$("#year").textContent = new Date().getFullYear();
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeCart(); closeCheckout(); }
});
renderProducts();
renderCart();
