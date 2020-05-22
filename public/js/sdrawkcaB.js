    const productlist = document.querySelector("#add-products");

    //Create html elements, add data, and render products
    function renderProducts(doc) {
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
      // let addbutton = document.createElement("button");
      // let buttonicon = document.createElement("i");
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
      // addbutton.classList.add("btn-block", "btn-unique", "btn-lg");
      // buttonicon.classList.add("fas", "fa-cart-plus", "ml-2");

      mainrow.setAttribute("data-id", doc.id);
      
      // img.setAttribute("src", "./img/dummy.jpg");
      img.setAttribute("src", doc.data().Image);
      if (!doc.data().Image) {
        img.setAttribute("src", "./img/dummy.jpg");
      };
      img.style.width = "23em";
      img.style.height = "23em";
      nameanchor.setAttribute("href", "/product.html");
      // addbutton.setAttribute("type", "button");

      nametag.textContent = doc.data().Location;
      // nametag.textContent = doc.data().Product;
      // location.textContent = doc.data().Location;
      location.textContent = doc.data().Product;
      description.textContent = doc.data().Description;
      price.textContent = doc.data().Price;
      if (doc.data().Quantity > 0) {
        stock.textContent = "Currently in stock";
      } else {
        stock.textContent = "Out of stock";
      };

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
      // desccol.appendChild(addbutton);
      // addbutton.appendChild(buttonicon);

      productlist.appendChild(mainrow);
      productlist.appendChild(linebreak);
    }

    //Lists all products.
    db.collection("market").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        renderProducts(doc);
      })
    });

    console.log(localStorage.getItem("homeSearch"));

    function search() {
      // Clear previous results
      document.getElementById("add-products").innerHTML = "";

      let search = document.getElementById("searcher").value;

      // Easter egg
      if (search == "Backwards") {
        window.location.pathname = './store.html';
      } else {
      // Tidy user input
      search = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();

      //Declare query area
      var proRef = db.collection("market");
    
    // Search (description)
    var query = proRef.where("Product", "==", search)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                renderProducts(doc);
                  // doc.data() is never undefined for query doc snapshots
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });

            }
    }


document.getElementById("submit").onclick = search;