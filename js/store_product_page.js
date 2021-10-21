function show1instrument(page) {
  const productsCont = document.querySelector(".box_for_card1");
  productsCont.innerHTML = `
    <div class="images_card">
      <div class="carusel_1">
        <button type="button" class="btnPrev1"><</button>
        <a class="page_100" data-id="${page.id}")>
          <div class="big_image" >
            <img  src="${page.image}" alt="${page.name}" ></img>
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
        <h5>$${page.price}<h5>
      </div>
      <hr></hr>
      <div class="button_container">
        <input type="number" class="counter" value="1" min="1" max="3">
        <button class="button_to_cart type="button"> Add to cart </button>
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
}
loadInstrument();
