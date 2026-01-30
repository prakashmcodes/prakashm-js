const myForm = document.getElementById("myform");

const webType = document.getElementById("webtype");
const pageRadios = document.querySelectorAll("input[name='pages']");
const seo = document.getElementById("seo");
const payment = document.getElementById("payment");
const admin = document.getElementById("admin");
const totalEl = document.getElementById("total");
const breakdownEl = document.getElementById("breakdown");
const resetBtn = document.getElementById("resetBtn");
const checkoutBtn = document.getElementById("checkoutbtn");

const pricing = {
  ecommerce: 8000,
  saas: 10000,
  portfolio: 5000,
  page: 500,
  seo: 1500,
  payment: 2500,
  admin: 3000,
};

function calculate() {
  let total = 0;
  let breakdown = "";

  const type = webType.value;
  if (type) {
    total += pricing[type];
    breakdown += `Base (${type}): ₹${pricing[type]}<br>`;
  }

  let pages = 0;
  pageRadios.forEach((r) => {
    if (r.checked) pages = Number(r.value);
  });

  if (pages) {
    const pageCost = pages * pricing.page;
    total += pageCost;
    breakdown += `Pages (${pages} × ₹${pricing.page}): ₹${pageCost}<br>`;
  }

  if (seo.checked) {
    total += pricing.seo;
    breakdown += `SEO: ₹${pricing.seo}<br>`;
  }
  if (payment.checked) {
    total += pricing.payment;
    breakdown += `Payment Gateway: ₹${pricing.payment}<br>`;
  }
  if (admin.checked) {
    total += pricing.admin;
    breakdown += `Admin Panel: ₹${pricing.admin}<br>`;
  }

  totalEl.innerText = total;
  breakdownEl.innerHTML = breakdown || "Select options to generate quote.";

  if (total > 0) {
    checkoutBtn.classList.remove("hidden");
  } else {
    checkoutBtn.classList.add("hidden");
}
}

webType.addEventListener("change", calculate);
pageRadios.forEach((r) => r.addEventListener("change", calculate));
seo.addEventListener("change", calculate);
payment.addEventListener("change", calculate);
admin.addEventListener("change", calculate);


myForm.addEventListener("submit", (e) => {


  myForm.reset();
  totalEl.innerText = 0;
  breakdownEl.innerHTML = "Select options to generate quote.";
  checkoutBtn.classList.add("hidden");
});



resetBtn.addEventListener("click", () => {
  webType.value = "";
  pageRadios.forEach((r) => (r.checked = false));
  seo.checked = false;
  payment.checked = false;
  admin.checked = false;
  totalEl.innerText = 0;
  breakdownEl.innerHTML = "Select options to generate quote.";
  checkoutBtn.classList.add("hidden");
});
