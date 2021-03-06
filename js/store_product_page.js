function show1instrument(page) {
  const productsCont = document.querySelector(".box_for_card1");
  productsCont.innerHTML = `
      <div class="images_card">
        <div class="carusel_1">
          <button type="button" class="btnPrev1"><</button>
          <a class="page_100" )>
            <div class="big_image " >
              <img  src="${
                page.image
              }" class=".btn-info"data-bs-toggle="modal" data-bs-target="#productInfoModal" alt="${
    page.name
  }" >
              </img>
            </div>
          </a>
          <button type="button" class="btnNext1">></button>
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
          <h5>${(
            page.price * sessionStorage.getItem("rate") || page.price
          ).toFixed(0)}.00  ${sessionStorage.getItem("curency") || "USD"}<h5>
        </div>
        <hr></hr>
        <div class="button_container">
          <input type="number" class="counter" value="1" min="1" max="3">
          <button  class="button_to_cart type="button   data-id="${
            page.id
          }"> Add to cart </button>
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
  `;
}

async function loadInstrument() {
  const instruments = await instrumentsS.getInstruments();
  show1instrument(instruments[`${localStorage.getItem("id")}`]);
  localStorage.setItem(
    "addimage",
    instruments[`${localStorage.getItem("id")}`]["additionalImages"]
  );

  const btnNextSign = document.querySelector(".carusel_1 .btnNext1");
  btnNextSign.addEventListener("click", nextBigSlide);
  const btnPrevSign = document.querySelector(".carusel_1 .btnPrev1");
  btnPrevSign.addEventListener("click", prevBigSlide);

  sessionStorage.clear();
}
loadInstrument();

async function handleInstrumentInfoClick() {
  const instruments = await instrumentsS.getInstruments();

  let imag = localStorage.getItem("addimage").split(",");
  let instr = localStorage.getItem("id");
  let modal = document.querySelector("#productInfoModal");

  const instrumentImg1 = modal.querySelector(".modal-body .image-one");
  instrumentImg1.setAttribute("src", imag[0].split("'")[1]);
  instrumentImg1.setAttribute("alt", imag[0].split("'")[3]);
  const instrumentImg2 = modal.querySelector(".modal-body .image-two");
  instrumentImg2.setAttribute("src", imag[1].split("'")[1]);
  instrumentImg2.setAttribute("alt", imag[1].split("'")[3]);
  const instrumentImg3 = modal.querySelector(".modal-body .image-three");
  instrumentImg3.setAttribute("src", imag[2].split("'")[1]);
  instrumentImg3.setAttribute("alt", imag[2].split("'")[3]);
  const instrumentImg4 = modal.querySelector(".modal-body .image-four");
  instrumentImg4.setAttribute("src", imag[3].split("'")[1]);
  instrumentImg4.setAttribute("alt", imag[3].split("'")[3]);
  modal.querySelector(".modal-body .card-title").innerText =
    instruments[instr].name;
  modal.querySelector(".modal-body .card-text").innerText =
    instruments[instr].description;
}

function modalW() {
  document
    .querySelector(".carusel_1 .btn-info")
    .addEventListener("click", handleInstrumentInfoClick);
}
handleInstrumentInfoClick();
