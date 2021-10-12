async function getInstrument(url) {
  const response = await fetch(url);
  const instruments = await response.json();
  return instruments;
}

function showInstruments(music) {
  const instrumentContainer = document.querySelector(".selection_instruments");
  instrumentContainer.innerHTML = "";
  for (const elem of music) {
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
let music = [];
async function loadInstrument(group) {
  const instruments = await getInstrument(instruments.json);
  for (good of group) {
    music.push(instruments(good));
  }
  showInstruments(music);
}
