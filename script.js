const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464063/jordan_-_Copy_-_Copy_yzg8rx.png",
      },
      {
        code: "darkblue",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464063/jordan_-_Copy_-_Copy_yzg8rx.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464064/jordan2_-_Copy_o6rngi.png",
      },
      {
        code: "green",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464064/jordan2_-_Copy_o6rngi.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464064/blazer_nmxhie.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464065/air_tdxlxc.png",
      },
      {
        code: "lightgray",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464065/air_tdxlxc.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464064/hippie_bqdujt.png",
      },
      {
        code: "black",
        img: "https://res.cloudinary.com/dktfgy8q4/image/upload/v1742464064/hippie2_lqpmok.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
