const productlist = document.querySelector("#add-products");

//Create html elements, add data, and render products
function renderProducts(doc, docID) {
  let mainrow = document.createElement("div");
  let imgcol = document.createElement("div");
  let imgcontainer = document.createElement("div");
  let img = document.createElement("img");
  let desccol = document.createElement("div");
  let name = document.createElement("h3");
  let nameanchor = document.createElement("a");
  let nametag = document.createElement("strong");
  let location = document.createElement("h5");
  let description = document.createElement("p");
  let pricestockrow = document.createElement("div");
  let pricestockcol1 = document.createElement("div");
  let price = document.createElement("p");
  let pricestockcol2 = document.createElement("div");
  let stock = document.createElement("p");
  let deletebutton = document.createElement("button");
  let buttonicon = document.createElement("i");
  let linebreak = document.createElement("hr");

  mainrow.classList.add("row", "wow", "fadeIn");
  imgcol.classList.add("col-lg-5", "col-xl-4", "mb-4");
  imgcontainer.classList.add("view", "overlay", "rounded", "z-depth-1");
  img.classList.add("img-fluid", "img-thumbnail");
  desccol.classList.add("col-lg-7", "col-xl-7", "ml-xl-4", "mb-3");
  name.classList.add("font-weight-bold", "dark-grey-text");
  nametag.classList.add("blue-grey-text", "font-weight-bold");
  location.classList.add("mb-2");
  description.classList.add("grey-text", "font-italic");
  pricestockrow.classList.add("row");
  pricestockcol1.classList.add("col");
  price.classList.add("font-weight-bold");
  pricestockcol2.classList.add("col");
  stock.classList.add("text-right", "pr-2");
  deletebutton.classList.add("btn-block", "btn-unique", "btn-lg");
  

  mainrow.setAttribute("data-id", doc.id);
  
  img.setAttribute("src", doc.data().Image);
  img.setAttribute("alt", "productimg");
  nameanchor.setAttribute("href", "/product.html");
  deletebutton.setAttribute("type", "button");
  deletebutton.setAttribute("id", docID);

  nametag.textContent = doc.data().Product;
  location.textContent = doc.data().Location;
  description.textContent = doc.data().Description;
  price.textContent = doc.data().Price;
  
  
  stock.textContent = "Currently in stock";
  deletebutton.textContent = "Delete";

  mainrow.appendChild(imgcol);
  imgcol.appendChild(imgcontainer);
  imgcontainer.appendChild(img);
  mainrow.appendChild(desccol);
  desccol.appendChild(name);
  name.appendChild(nameanchor);
  nameanchor.appendChild(nametag);
  desccol.appendChild(location);
  desccol.appendChild(description);
  desccol.appendChild(pricestockrow);
  pricestockrow.appendChild(pricestockcol1);
  pricestockcol1.appendChild(price);
  pricestockrow.appendChild(pricestockcol2);
  pricestockcol2.appendChild(stock);
  desccol.appendChild(deletebutton);
  deletebutton.appendChild(buttonicon);

  productlist.appendChild(mainrow);
  productlist.appendChild(linebreak);
}

var currUser;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        currUser = user.uid;
        storeName = user.displayName;
        console.log(currUser.displayName);
        db.collection("users").doc(currUser).collection("products").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          var docID = doc.id;
          renderProducts(doc, docID);
          console.log(doc.id);
  })
})
    }
});