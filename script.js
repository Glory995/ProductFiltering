let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "whiteshirt.webp",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "shortskirt.webp",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sportysmartwatch.webp",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knittedshirt.webp",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "blackjaket.webp",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pinktrousers.webp",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brownjacket.webp",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfygrypant.jpg",
    },
  ],
};

for (let product of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", product.category, "hide"); 

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", product.image); 

  imageContainer.appendChild(image);
  card.appendChild(imageContainer);

 
  
  let container = document.createElement("div")
container.classList.add("container")

let namege =document.createElement("h5")
namege.classList.add("product-name")
namege.innerText= product.productName.toUpperCase()
container.appendChild(namege)

let price = document.createElement("h6")
price.innerText= "$"+ product.price
container.appendChild(  price)

card.appendChild(container)
document.querySelector(".products").appendChild(card);

}


function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach(button => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  
  // Loop through all cards
  elements.forEach(element => {
    if (value === "all" || element.classList.contains(value)) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
}








window.onload = () => {
  let filterValue = "all";
  filterProduct(filterValue);
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      filterValue = button.innerText; 
      filterProduct(filterValue);
    });
  });
};







  


