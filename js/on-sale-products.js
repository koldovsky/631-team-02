(function(){
   const onSaleProducts = [
      {
         id: 1,
         name: "Dowson DDR100 Acoustic Guitar",
         img: "img/dowsonddr100.jpg",
         price: 200
      },
      {
         id: 2,
         name: "AER B-Flat Professional Bass Horn",
         img: "img/basshorn.jpg",
         price: 200
      },
      {
         id: 2,
         name: "Lewis Lewel ST-1 Student Violin",
         img: "img/student-violin.jpg",
         price: 200
      },
      {
         id: 3,
         name: "SRT12 Alto Saxophone",
         img: "img/orchestric_SRT12.jpg",
         price: 200
      }
   ]

   function renderProducts(onSaleProducts) {
      const productContainer = document.querySelector('.swiper-wrapper');
      for (const product of onSaleProducts) {
         productContainer.innerHTML += 
         `<div class=swiper-slide>
         <img src="${product.img}" alt="${product.name}">
         <span>${product.name}</span></br>
         <span>${product.price}</span></br>
         <a href="#"><button class="on-sale-swiper-button">buy now</button></a>
         </div>`;
      }
   }

   renderProducts(onSaleProducts);
})();