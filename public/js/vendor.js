function makeApiCall() {
  var uid;

  firebase.auth().onAuthStateChanged((user) => {
    var form = document.getElementById("user");
    uid = user.uid;
    if (user) {
      var docRef = db.collection("users").doc(uid);

      docRef.get().then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          form.style.display = "none";

          rawInputURL = doc.data().googlesheetsURL;
          var input = rawInputURL.split('/');
          var googlesheetsID = input[5];

          console.log(googlesheetsID);

          var params = {
            // The ID of the spreadsheet to retrieve data from.
            spreadsheetId: googlesheetsID, // TODO: Update placeholder value.

            // The A1 notation of the values to retrieve.
            range: 'Sheet1', // TODO: Update placeholder value.
          };



          var request = gapi.client.sheets.spreadsheets.values.get(params);
          request.then(function (response) {
            // TODO: Change code below to process the `response` object:
            populateFirebaseWithProducts(response.result, uid);
            console.log(response.result);

          }, function (reason) {
            console.error('error: ' + reason.result.error.message);
          });

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });

    } else {
      // User not logged in or has just logged out.
    }
  });


}

function initClient() {
  var API_KEY = 'AIzaSyAb8oIKcpF5_l22H6LPV_cPsMWMXAotbpw'; // TODO: Update placeholder with desired API key.

  var CLIENT_ID =
    '319704064195-lfbg03net9enhq6jqail5264fjbll6vi.apps.googleusercontent.com'; // TODO: Update placeholder with desired client ID.

  // TODO: Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';

  gapi.client.init({
    'apiKey': API_KEY,
    'clientId': CLIENT_ID,
    'scope': SCOPE,
    'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function () {
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
    updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
  if (isSignedIn) {
    makeApiCall();
  }
}

function handleSignInClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

function populateFirebaseWithProducts(result, uid) {
  for (var row = 1; row < result.values.length; row++) {
    var productName = result.values[row][0];
    for (var col = 0; col < result.values[0].length; col++) {
      var columnTitle = result.values[0][col];
      db.collection("users").doc(uid).collection("products").doc(productName).set({
        [columnTitle]: result.values[row][col] + ""
      }, {
        merge: true
      }); 
    }
  }

  for (var row = 1; row < result.values.length; row++) {
    var productName = result.values[row][0];
      var columnTitle = result.values[0][col];
        
      db.collection("market").add({
        Product: result.values[row][0] + "",
        Description: result.values[row][1] + "",
        Price: result.values[row][2] + "",
        Quantity: result.values[row][3] + "",
        Location: result.values[row][4] + ""
      });
  }
}

function updateUserInfo(event) {
  console.log(document.getElementById("form1").value);

  firebase.auth().onAuthStateChanged(function (user) {
    var userid = user.uid;
    var storeName = document.getElementById("form1").value;
    var storeAddress = document.getElementById("form2").value;
    var googlesheetsURL = document.getElementById("form3").value;

    db.collection("users").doc(userid).set({
      storeName: storeName,
      storeAddress: storeAddress,
      googlesheetsURL: googlesheetsURL
    }, {
      merge: true
    });
  })
}

function updateInfo() {
  var form = document.getElementById("user");
  var updateButton = document.getElementById("update");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var name = user.displayName.split(" ", 1);

    document.getElementById("welcome").innerHTML = "Hi " + name + "!";
  } else {
    console.log(user);
  }
});