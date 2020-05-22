// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-n2aDGPBRbl3LAtsW9Ih-rPSe9O8wuXE",
    authDomain: "group36-a3695.firebaseapp.com",
    databaseURL: "https://group36-a3695.firebaseio.com",
    projectId: "group36-a3695",
    storageBucket: "group36-a3695.appspot.com",
    messagingSenderId: "442042715299",
    appId: "1:442042715299:web:bcc01e94cb94902f088316"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true };
    firestore.settings(settings);

    var storeName;
    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User logged in already or has just logged in.
    console.log(user.uid);
    storeName=user.uid;
    
  } else {
    // User not logged in or has just logged out.
  }
});
//Store the uploadedImage image URL 
var uploadedImage = "images/defaultImage.png";

  // get elements
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('fileButton');
  

  // listen for file selection
  fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];
  // select unique name for everytime when image uploaded 
  // Date.now() is function that give current timestamp 
  var name = "123" + Date.now();

// make ref to your firebase storage and select images folder 
var storageRef = firebase.storage().ref('/images/' + name);
//upload file
var task = storageRef.put(file);

  // all working for progress bar that in html 
  // to indicate image uploading... report 
  task.on('state_changed', function (snapshot) {
    var progress =
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    var uploader = document.getElementById('uploader');
    uploader.value = progress;
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED:
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING:
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    console.log(error);
  }, function () {

    // get the uploaded image url back 
    task.snapshot.ref.getDownloadURL().then(
      function (downloadURL) {

        // You get your url from here 
        console.log('File available at', downloadURL);
        uploadedImage = downloadURL;
        // print the image url 
        console.log(downloadURL);
        var img= document.getElementById('prv');
    img.src = uploadedImage;




      });
  });

  });

  storageRef.child(''+downloadURL).getDownloadURL().then(function(download){

  });


  function onSubmit( form ){
  var data = JSON.stringify( $(form).serializeArray() ); 
  var productName = document.getElementById('productName').value;       //  <-----------
  var productDescription = document.getElementById('productDescription').value;     //  <-----------
  var productLocation = document.getElementById('productLocation').value;       //  <-----------
  var productPrice = document.getElementById('productPrice').value;       //  <-----------
  var productQuantity = document.getElementById('productQuantity').value;       //  <-----------
  // we cannot use doc(productName) -> causes error if user posts the same item with same name twice. not unique id to document
  db.collection("users/").doc(storeName).collection("products").add({
            Product: productName,
            Description: productDescription,
            Price: productPrice,
            Location: productLocation,
            Quantity: productQuantity,
            Image: uploadedImage,
  });
// adding function into market database
  db.collection("market").add({
            Store: storeName,
            Product: productName,
            Description: productDescription,
            Price: productPrice,
            Location: productLocation,
            Quantity: productQuantity,
            Image: uploadedImage,
  });
  console.log( data );
  
  //window.open('store.html', "_self"); -- will cause no data to be stored
  return false; //don't submit
}

function open_window(){
  window.open("personal_store.html", "_self");
}



  
  firebase.analytics();