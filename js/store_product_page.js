const ravenBee = {
  id: 1,
  name_instr: "Raven Bee RB500 Exotic Style Guitar",
  code_instr: 44,
  price_instr: 450.0,
  description_instr:
    "This guitar is for those who are ready to amaze others and stand out from the crowd! The unique design of this guitar will be visible from afar.",
  features:
    "<li>-Body wood: alder</li><li>- Scale length: 25.5</li><li>- Fingerboard radius: 10-14</li><li>- Control layout: 1 volume, 1 tone</li>",
};
const dicksonStudio = {
  id: 101,
  name_instr: "Dickson Studio ER100 Electric Guitar",
  code_instr: 23,
  price_instr: 180.0,
  description_instr:
    "This guitar was first introduced back in 1985 and is still one of the most beloved guitars among our customers.",
  features1: "- Double cutaway",
  features2: "- Solid maple",
  features3: "- Scale length: 25.5 in.",
  features4: "",
};

function show_instrument(instrument) {
  const productsCont = document.querySelector(".box_for_card");
  productsCont.innerHTML = "";
  productsCont.innerHTML = `
    <div class="images">
        <div class="carusel_1">
            <button type="button" class="btnPrev"><</button>
            <div class="big_image">
            </div> 
            <button type="button" class="btnNext">></button>  
        </div>
        <div class="small_image">
        </div>
    </div>
    <div class="description">
        <div>
            <div>
                <h3>In stock</h3>
            </div>
            <div>
                <h4>${instrument.name_instr}</h4>
            </div>
            <div>
                <p>Product code ${instrument.code_instr}</p>
            </div>
            <div>
                <h5>$${instrument.price_instr}<h5>
            </div>
                <hr></hr>
                <br>
            <div class="button_container row w-100">
                <input type="number" class="counter col-md-2 w-20" value="1" min="1" max="3">
                <div class="button col-md-10">
                    <button class= "button w-100"> Add to cart </button>
                </div>
            </div>                   
                <br>
            <div class="text">
                <h6>DESCRIPTION</h6>
                <hr>
                <hr class="linedivider">
                <p>${instrument.description_instr}</p>
                <p>Features:</p>
                    <ul>
                       ${instrument.features}
                    </ul>
            </div>
        </div>
    </div>`;
}
show_instrument(ravenBee);
