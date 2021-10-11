const electric = [
  {
    id: 1,
    name: "Raven Bee RB500 Exotic Style Guitar",
    image: "img/electric_guitar_RB500.jpg",
    price: 450.0,
  },
  {
    id: 2,
    name: "Dickson Studio ER100 Electric Guitar",
    image: "img/electric_guitar_ER100.jpg",
    price: 180.0,
  },
  {
    id: 3,
    name: "Dean Doe TRO4506 Electric Guitar",
    image: "img/electric_guitar_TRO4506.jpg",
    price: 220.0,
  },
  {
    id: 4,
    name: "Raven Classic RT45 Electric Guitar",
    image: "img/electric_guitar_RT45.jpg",
    price: 300.0,
  },
];
const acoustic = [
  {
    id: 5,
    name: "Deanson VV02 Acoustic Guitar",
    image: "img/acoustic_guitar_VV02.jpg",
    price: 112.0,
  },
  {
    id: 6,
    name: "Kuro Music Studio S-35 Acoustic Guitar",
    image: "img/acoustic_guitar_S_35.jpg",
    price: 105.0,
  },
  {
    id: 7,
    name: "Raven RT1 Acoustic-Electric Guitar",
    image: "img/acoustic_guitar_RT1.jpg",
    price: 110.0,
  },
  {
    id: 8,
    name: "Fogue RA-090 Acoustic Guitar",
    image: "img/acoustic_guitar_RA_090.jpg",
    price: 110.0,
  },
];

function electricProducts(electric) {
  const productsContainer1 = document.querySelector(".selection_instruments");
  productsContainer1.innerHTML = "";
  for (const product1 of electric) {
    productsContainer1.innerHTML += `<div>
        <div>
          <a href="page_guitar_RB500">
            <img src="${product1.image}" alt="${product1.name}">
          </a>
        </div>
        <div class=box_for_text>
          <a href="page_guitar_RB500">${product1.name}</a>
        </div>
        <div>
          <spin>${product1.price}</spin>
        </div>
        <div>
          <button type="button" class="button_add_cart">Add to Cart</button>
        </div>
      </div>`;
  }
}

function acousticProducts(acoustic) {
  const productsContainer2 = document.querySelector(".selection_instruments");
  productsContainer2.innerHTML = "";
  for (const product2 of acoustic) {
    productsContainer2.innerHTML += `<div>
        <div>
          <a href="page_guitar_RB500">
            <img src="${product2.image}" alt="${product2.name}">
          </a>
        </div>
        <div class=box_for_text>
          <a href="page_guitar_RB500">${product2.name}</a>
        </div>
        <div>
          <spin>${product2.price}</spin>
        </div>
        <div>
          <button type="button" class="button_add_cart">Add to Cart</button>
        </div>
      </div>`;
  }
}

electricProducts(electric);
