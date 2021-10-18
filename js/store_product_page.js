const instrument_one = [
  {
    id: 1,
    name: "Raven Bee RB500 Exotic Style Guitar",
    image: "/img/electric_guitar_RB500.jpg",
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
    price: 300.0,
    code: 45,
    description:
      "This electric guitar has a classic design and is created for ease of playability. The ultra-thin maple neck makes it easy to use the 22-fret fingerboard.",
    features:
      '<li>- Scale length: 25-1/2</li><li>- Nut Width: 1.69"(43mm)</li><li>- Controls: Volume, Tone, 5-way blade pickup selector</li>',
  },
  {
    id: 5,
    name: "Deanson VV02 Acoustic Guitar",
    image: "img/acoustic_guitar_VV02.jpg",
    price: 112.0,
    code: 47,
    description:
      "This nice-looking classic guitar has a sweet, articulate sound. It is great for any music styles from fingerpicking to robust strumming.",
    features:
      '<li>- 24 3/4" scale length</li><li>- Spruce top<li></li>- Rosewood fingerboard and bridge</li><li>- Synthetic bone nut and saddle</li>',
  },
  {
    id: 6,
    name: "Kuro Music Studio S-35 Acoustic Guitar",
    image: "img/acoustic_guitar_S_35.jpg",
    price: 105.0,
    code: 49,
    description:
      "Here's a great-looking acoustic guitar with a loud, bold sound and excellent features that are great for any musician seeking a well-built and easy-playing instrument.",
    features:
      '<li>- Agathis back and sides</li><li>- 25-1/2" scale length</li><li>- Synthetic bone nut and saddle</li><li>- Slim neck profile</li>',
  },
  {
    id: 7,
    name: "Raven RT1 Acoustic-Electric Guitar",
    image: "img/acoustic_guitar_RT1.jpg",
    price: 110.0,
    code: 48,
    description:
      'This affordable instrument is a great entry-level 25.4" scale guitar. It has a nato C-shaped neck, simulated belly bridge, and a simulated rosewood fingerboard.',
    features:
      '<li>- Nut width: 1.69" (43mm)</li><li>- Number of frets: 20</li><li>- Pickup/preamp: yes</li><li>- Preamp EQ: 3-band</li>',
  },
  {
    id: 8,
    name: "Fogue RA-090 Acoustic Guitar",
    image: "img/acoustic_guitar_RA_090.jpg",
    price: 110.0,
    code: 50,
    description:
      "This guitar is a perfect instrument for the beginner. The body depth and width give you a balanced tone. The guitar is simple and classy, nothing extra.",
    features:
      '<li>- 6-string</li><li>- 25-3/8" scale length</li><li>- C-shape neck</li><li>- 20 frets (14 open)</li><li>- 1-2/3" nut width</li><li>- 16" radius</li>',
  },
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

function show_instrument(page) {
  const productsCont = document.querySelector(".selection_instruments");
  productsCont.innerHTML = `
  <div class="box_for_card">
    <div class="images_card">
      <div class="carusel_1">
        <button type="button" class="btnPrev1" onclick="prevBigSlide()"><</button>
        <a href = "/page_product_image.html" class="page_100" data-id="${page}")>
          <div class="big_image" >
            <img  src="${page.image}" alt="${page.name}" ></img>
          </div>
        </a>  
        <button type="button" class="btnNext1" onclick="nextBigSlide()">></button>
      </div>  
    <div class="small_image" >
        <img  src="${page.image}" alt="${page.name}"></img>
      </div>
    </div>
    <div class="description_card">
      <div>
        <h3 class="in_stock">In stock</h3>
      </div>
      <div>
        <h4>${page.name}</h4>
      </div>
      <div>
        <p>Product code ${page.code}</p>
      </div>
      <div>
        <h5>$${page.price}<h5>
      </div>
      <hr></hr>
      <div class="button_container">
        <input type="number" class="counter" value="1" min="1" max="3">
        <button class= "button_to_cart type="button"> Add to cart </button>
        <br>
      </div>
      <div class="text">
        <h6>DESCRIPTION</h6>
        <hr>
        <hr class="linedivider">
        <p>${page.description}</p>
        <p>Features:</p>
        <ul>
          ${page.features}
        </ul>
      </div>
    </div>
  </div>`;
  localStorage.setItem("id", `${page.id}`);
}

const get_item = localStorage.getItem("id");
// document.querySelector("#a .page_100").addEventListener("click", guitar500);
const instrument_data = instrument_one[get_item - 1];
guitar500(instrument_data);
function guitar500(instrument_data) {
  const pageCont = document.querySelector(".box_for_card1");
  pageCont.innerHTML = `
    <div class="images_card">
      <div class="carusel_1">
        <button type="button" class="btnPrev1" onclick="prevBigSlide()"><</button>
        <a>
          <div class="big_image" >
            <img  src="${instrument_data.image}" alt="${instrument_data.name}" ></img>
          </div>
        </a>  
        <button type="button" class="btnNext1" onclick="nextBigSlide()">></button>
      </div>
      
    </div>`;
}
