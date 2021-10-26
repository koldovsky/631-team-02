function show4Instruments(groups) {
  const instrumentContainer = document.querySelector(".selection_instruments");
  instrumentContainer.innerHTML = "";
  for (let elem of groups) {
    instrumentContainer.innerHTML += `<div>
      <div>
        <a class="toProduct_${
          elem.id
        }"  href="page_product_image.html" data-id="id" onmouseover="localStorage.setItem('id', '${
      elem.id
    }')" >
          <img src="${elem.image}"  alt="${elem.name}">
        </a>
      </div>
      <div class=box_for_text>
        <a >${elem.name}</a>
      </div>
      <div>
        <spin class='price'>${elem.convertedPrice || elem.price}.00 ${
      elem.convertedValue || "USD"
    }</spin>
      
      </div>
      <div>
        <button type="button" class="button_add_cart"'>Add to Cart</button>
      </div>
    </div>`;
  }
}
function currency_rate(rates) {
  const cur = document.querySelector(".exchange");
  for (pops in rates) {
    cur.innerHTML += `<option>${pops}</option>`;
  }
}
async function load4Instruments() {
  const instruments = await instrumentsS.getInstruments();
  document
    .querySelector(".button_eg_guitar")
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

async function getJsons(url) {
  const responce = await fetch(url);
  return await responce.json();
}
async function convertCurrency() {
  const convertTo = document.querySelector(".exchange").value;

  const currencies = await getJsons(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );

  const rate = currencies.rates[convertTo];
  const instruments = await instrumentsS.getInstruments();
  sessionStorage.setItem("curency", convertTo);
  sessionStorage.setItem("rate", rate);
  for (const instrument of instruments) {
    instrument.convertedPrice = (instrument.price * rate).toFixed(0);
    instrument.convertedValue = convertTo;
  }
  currency_rate(currencies.rates);
  load4Instruments();
}
document.querySelector(".exchange").addEventListener("click", convertCurrency);
