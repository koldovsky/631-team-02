async function getInstrument(instrumentUrl) {
  const responce = await fetch(instrumentUrl);
  const instrument = await responce.json(instruments_cards);
  return instrument;
}
const electric = [];
const acoustic = [];
const drums = [];
const orchestric = [];
const other = [];

for (pages of instrument) {
  if (pages.id > 0 && pages.id <= 4) {
    electric.push(pages);
  } else if (pages.id > 4 && pages.id <= 8) {
    acoustic.push(pages);
  } else if (pages.id > 8 && pages.id <= 12) {
    drums.push(pages);
  } else if (pages.id > 12 && pages.id <= 16) {
    orchestric.push(pages);
  } else if (pages.id > 16 && pages.id <= 20) {
    other.push(pages);
  }
}
function showInstruments(group_of_instrument) {
  const instrumentContainer = document.querySelector(".selection_instruments");
  instrumentContainer.innerHTML = "";
  for (const elem of group_of_instrument) {
    instrumentContainer.innerHTML += `<div>
        <div>
          <a href="page_guitar_RB500">
            <img src="${elem.image}" alt="${elem.name}">
          </a>
        </div>
        <div class=box_for_text>
          <a href="page_guitar_RB500">${elem.name}</a>
        </div>
        <div>
          <spin>$${elem.price}</spin>
        </div>
        <div>
          <button type="button" class="button_add_cart">Add to Cart</button>
        </div>
      </div>`;
  }
}

async function loadInstrument(group_of_instrument) {
  const instrument = await getInstrument("instruments_cards.json");
  showInstruments(group_of_instrument);
}

loadInstrument(electric);
