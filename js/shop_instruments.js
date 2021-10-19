const electric = [
  {
    id: 1,
    name: "Raven Bee RB500 Exotic Style Guitar",
    image: "img/electric_guitar_RB500.jpg",
    image_small: "img/electric_guitar_RB500_small.jpg",
    price: 450.0,
    code: 44,
    description:
      "This guitar is for those who are ready to amaze others and stand out from the crowd! The unique design of this guitar will be visible from afar.",
    features:
      "<li>-Body wood: alder</li><li>- Scale length: 25.5</li><li>- Fingerboard radius: 10-14</li><li>- Control layout: 1 volume, 1 tone</li>",
  },
  {
    id: 2,
    name: "Dickson Studio ER100 Electric Guitar",
    image: "img/electric_guitar_ER100.jpg",
    image_small: "img/electric_guitar_ER100_small.jpg",
    price: 180.0,
    code: 23,
    description:
      "This guitar was first introduced back in 1985 and is still one of the most beloved guitars among our customers.",
    features:
      "<li>- Double cutaway</li><li>- Solid maple</li><li>- Scale length: 25.5 in.</li>",
  },
  {
    id: 3,
    name: "Dean Doe TRO4506 Electric Guitar",
    image: "img/electric_guitar_TRO4506.jpg",
    image_small: "img/electric_guitar_TRO4506_small.jpg",
    price: 220.0,
    code: 26,
    description:
      "A bright guitar for your bright performances. It features a single-cut design, quality maple, and a deep sound you won't be disappointed with.",
    features:
      "<li>- Single cutaway</li><li>- Scale length: 24.75 in.</li><li>- Number of frets: 21</li>",
  },
  {
    id: 4,
    name: "Raven Classic RT45 Electric Guitar",
    image: "img/electric_guitar_RT45.jpg",
    image_small: "img/electric_guitar_RT45_small.jpg",
    price: 300.0,
    code: 45,
    description:
      "This electric guitar has a classic design and is created for ease of playability. The ultra-thin maple neck makes it easy to use the 22-fret fingerboard.",
    features:
      '<li>- Scale length: 25-1/2</li><li>- Nut Width: 1.69"(43mm)</li><li>- Controls: Volume, Tone, 5-way blade pickup selector</li>',
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
const drums = [
  {
    id: 9,
    name: "BlueWater BWL1000 Ultimate Snare Drum",
    image: "img/drums_BWL1000.jpg",
    price: 145.0,
  },
  {
    id: 10,
    name: "Ericson Black&White Snare Drum",
    image: "img/drums_Black&White.jpg",
    price: 115.0,
  },
  {
    id: 11,
    name: "Ericson White Crystal Snare Drum",
    image: "img/drums_White_Cristal.jpg",
    price: 115.0,
  },
  {
    id: 12,
    name: "Ericson Beech Wood Snare Drum",
    image: "img/drums_Beach_Wood.jpg",
    price: 115.0,
  },
];
const orchestric = [
  {
    id: 13,
    name: "Donny Stavanger SRT12 Alto Saxophone",
    image: "img/orchestric_SRT12.jpg",
    price: 450.0,
  },
  {
    id: 14,
    name: "Simona SR-V Professional Violin",
    image: "img/orchestric_SR-V.jpg",
    price: 700.0,
  },
  {
    id: 15,
    name: "AER B-Flat Professional Bass Horn",
    image: "img/orchestric_AER_B-Flat.jpg",
    price: 300.0,
  },
  {
    id: 16,
    name: "Muratti Professional MB Oboe",
    image: "img/orchestric_MB.jpg",
    price: 900.0,
  },
];
const other = [
  {
    id: 17,
    name: "Jiwa Studio JWL100 Single Row Tambourine",
    image: "img/other_JWL100.jpg",
    price: 50.0,
  },
  {
    id: 18,
    name: "Kurumba KK400 Bongo Drum in Green",
    image: "img/other_KK400.jpg",
    price: 89.0,
  },
  {
    id: 19,
    name: "Bosner AT1 Accordion in Gold",
    image: "img/other_AT1.jpg",
    price: 160.0,
  },
  {
    id: 20,
    name: "Hohner Silver Star ERX3 Harmonica",
    image: "img/other_ERX3.jpg",
    price: 67.0,
  },
];

// async function getInstrument(url) {
//   const response = await fetch(url);
//   const instruments = await response.json();
//   return instruments;
// }
// const insrtrument = new InstrumentsService();
// var instruments = await instrument_data.getInstruments();

function show4Instruments(group) {
  const instrumentContainer = document.querySelector(".selection_instruments");
  instrumentContainer.innerHTML = "";
  //  if (groups === 'acoustic') let group = instruments.slice(4, 8);
  for (elem of group) {
    instrumentContainer.innerHTML += `<div>
      <div>
        <a class="toProduct"  >
          <img src="${elem.image}" onclick='show_instrument(instrument_one[${elem.id}-1])' alt="${elem.name}">
        </a>
      </div>
      <div class=box_for_text>
        <a >${elem.name}</a>
      </div>
      <div>
        <spin>$${elem.price}</spin>
      </div>
      <div>
        <button type="button" class="button_add_cart" )'>Add to Cart</button>
      </div>
    </div>`;
  }
}
show4Instruments(acoustic);
// showInstruments(instruments.slice(0, 3));

// async function loadInstrument() {
//   const instruments = await getInstrument(instruments.json);
//   ;
// }
// loadInstrument();
