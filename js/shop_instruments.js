async function getInstrument(url) {
  const responce = await fetch(url);
  const instruments = await responce.json();
  return instruments;
}
// function getJson(url, callback) {
//   fetch(url)
//     .then((responce) => Response.json())
//     .then((instruments_cards) => callback(instruments_cards));
// }
// function getJson(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       callback(instruments_cards);
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }

let electric = [];
let acoustic = [];
let drums = [];
let orchestric = [];
let other = [];

for (pages of instruments) {
  if (pages.id > 0 && pages.id <= 4) electric.push(pages);
  if (pages.id > 4 && pages.id <= 8) acoustic.push(pages);
  if (pages.id > 8 && pages.id <= 12) drums.push(pages);
  if (pages.id > 12 && pages.id <= 16) orchestric.push(pages);
  if (pages.id > 16 && pages.id <= 20) otherOther.push(pages);
}

function showInstruments(group_of_pages) {
  const instrumentContainer = document.querySelector(".selection_instruments");
  instrumentContainer.innerHTML = "";
  for (const elem of group_of_pages) {
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
// getJson("instruments_cards.json", showInstruments);

async function loadInstrument(group_of_pages) {
  const instruments = await getInstrument(instruments.json);
  showInstruments(group_of_pages);
}
loadInstrument(electric);
