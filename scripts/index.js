let bagItems = [];
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayProductsOnHomePage();
  displayBagCount();
}

function displayProductsOnHomePage() {
  let productContainer = document.querySelector(".product-container");
  if (!productContainer) {
    return;
  }
  let inner_html = "";
  items.forEach((item) => {
    inner_html += `
  <div class="img-container">
          <img
            class="product-img"
            src="${item.image}"
            alt="product image"
          />
          <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
          <div class="company-name">${item.company}</div>
          <div class="product_name" id="product_name">
          ${item.item_name}
          </div>
          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="add-to-bag" onclick="addToBag(${item.id})">👜 Add to Bag</button>
        </div>`;
  });
  productContainer.innerHTML = inner_html;
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagCount();
}

function displayBagCount() {
  let bagCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagCountElement.style.visibility = "visible";
    bagCountElement.innerHTML = bagItems.length;
  } else {
    bagCountElement.style.visibility = "hidden";
  }
}
