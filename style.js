let foodList = [
  {
    name: "Gà cuộn",
    cost: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà cuộn",
    cost: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà cuộn",
    cost: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà cuộn",
    cost: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
];

let product = document.getElementsByClassName("product");

function createProductCard(food) {
  let card = document.createElement("div");
  card.className = "item-card";
  card.innerHTML = `
    <img src="${food.imageURL}" alt="">
                    <div class="item">  
                        <div class="item-detail">
                            <div class="name"><b>${food.name}</b></div>
                            <div class="cost"><b>${food.cost}₫</b></div>
                        </div>
                        <div class="item-desc">${food.quantity}</div>
                    </div>
                    <div class="bot-card">
                                                               
     </div>`;

  // let item = document.createElement("div");
  // item.className = "item";
  // item.innerHTML = `
  // <div class="item-detail">
  //     <div class="name"><b>${food.name}</b></div>
  //     <div class="cost"><b>${food.cost}₫</b></div>
  // </div>
  // <div class="item-desc">${food.quantity}</div>
  // `;

  let btnBox = document.createElement("div");
  btnBox.className = "bot-card";

  let btnAdd = document.createElement("button");
  let btnText = document.createElement("b");
  btnText.innerText  = "Thêm";

  btnAdd.appendChild(btnText);
  btnBox.appendChild(btnAdd);
  card.appendChild(btnBox);

  btnBox.addEventListener("click", () => {
    if (food.quantity >= 0) {
      food.quantity -= 1;
      card.innerHTML = `
      <img
      src="${food.imageURL}"
      alt=""
    />
    <div class="item">
      <div class="item-detail">
        <div class="name"><b>${food.name}</b></div>
        <div class="cost"><b>${food.price}₫</b></div>
      </div>
      <div class="item-desc">Số lượng ${food.quantity}</div>
    
    </div>
      `;
      btnAdd.appendChild(btnText);
      btnBox.appendChild(btnAdd);
      card.appendChild(btnBox);
      addToCart(food);
    }
  });

  return card;
}



for (let i = 0; i < product.length; i++) {
  for (let j = 0; j < foodList.length; j++) {
    product[i].appendChild(createProductCard(foodList[j]));
  }
}
