function show4Instruments(groups) {
  const instrumentContainer = document.querySelector(".selection_instruments");
  instrumentContainer.innerHTML = "";
  for (const elem of groups) {
    instrumentContainer.innerHTML += `<div>
      <div>
        <a class="toProduct_${elem.id}"  href="page_product_image.html" onmouseover="localStorage.setItem('id', '${elem.id}')">
          <img src="${elem.image}"  alt="${elem.name}">
        </a>
      </div>
      <div class=box_for_text>
        <a >${elem.name}</a>
      </div>
      <div>
        <spin>$${elem.price}</spin>
      </div>
      <div>
        <button type="button" class="button_add_cart"'>Add to Cart</button>
      </div>
    </div>`;
  }
}

async function load4Instruments() {
  const instruments = await instrumentsS.getInstruments();
  document
    .querySelector(".shop_button_section .button_eg_guitar")
    .addEventListener("click", () => show4Instruments(instruments.slice(0, 4)));
  document
    .querySelector(".button_ag_guitar")
    .addEventListener("click", () => show4Instruments(instruments.slice(4, 8)));
  document
    .querySelector(".button_drums")
    .addEventListener("click", () =>
      show4Instruments(instruments.slice(8, 12))
    );
  document
    .querySelector(".button_orchestric")
    .addEventListener("click", () =>
      show4Instruments(instruments.slice(12, 16))
    );
  document
    .querySelector(".button_other")
    .addEventListener("click", () =>
      show4Instruments(instruments.slice(16, 20))
    );
  show4Instruments(instruments.slice(0, 4));
}
load4Instruments();
