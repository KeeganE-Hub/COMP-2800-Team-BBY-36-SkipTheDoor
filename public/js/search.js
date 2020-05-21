// function search() {
//     let search = document.getElementById("searcher").value;
//     var proRef = db.collection("users").doc("charliewei").collection("products");
//     var query = proRef.where("Description", "==", search)
//           .get()
//           .then(function(querySnapshot) {
//               querySnapshot.forEach(function(doc) {

//                   // doc.data() is never undefined for query doc snapshots
//                   console.log(doc.id);
//               });
//           })
//           .catch(function(error) {
//               console.log("Error getting documents: ", error);
//           });
//         }

//   document.getElementById("searchEnter").onclick = search;