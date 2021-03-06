Skip The Door

- General Info

Skip The Door is a mobile friendly web application as a storefront for businesses small and large to be able to list their products for customers.Store owners can list their products by either creating them individually, or uploading it into the database from a Google spreadsheet. Customers can then visit the market to view the items, their price, if they're in stock, and where the store is located. They can also search for specific items.

Running this project does require it to be hosted.

This project demonstrates:
	-use of firebase authentication for store owners
	-read and write to firebase
	-excel sheet writing to firebase
	-query functionality in firebase
	-use of navbar in bootstrap
	-social media plugins



- Technologies

Technologies used for this project:

	-Firebase Hosting
	-Firebase Firestore Database
	-HTML, CSS
	-JavaScript
	-Bootstrap
	-Google Sheets API v4
	-Material Design Boostrap

Instructions for users:
1) Submit the required information in the form in vendor.html
	A) Fill in the store name, store address, along with the googlesheets URL and then hit the "submit" button.
        B) Obtain your googlesheets URL by copying the exact URL of the googlesheet you plan to use.
2) Connect your personal googlesheets to our App
	A) Once the form is submitted, please click the "connect to googlesheets" button in vendor.html
        B) Then log-in to your google account.
3) Upload products onto our site
	A) Please upload the products you wish to display on our site onto your personal googlesheet
        B) Please fill out your googlesheet with the following sample format given by the link below:
        https://docs.google.com/spreadsheets/d/16MDoo13JCiftl75XIUqiF0B0lKet7Wl7MO64KjQNvM0/edit#gid=0
	Note: columns must be in the correct order as given in the samplesheet	

- Easter Egg

By searching for "sdrawkcaB" in the store page search bar, it takes you to a version of the page where the footer is at the top of the page, navbar is at the foot of the page, and the search results appear above the search. Searching "Backwards" in the search bar on this page takes you back to the regular store page.


- Content

Content of the project folder:

   Top level of project folder:
  ├── public                   # Folder with all HTML pages, as well as further subfolders
  ├── .git                     # Folder for git repo
  ├── functions                # Folder created from Firebase
  ├── .gitignore               # Git ignore file
  ├── .gitignore.txt           # Git ignore file
  ├── .firebaserc              # Firebase file
  ├── firebase.json            # Firebase file
  ├── firestore.indexes.json   # Firebase file
  ├── database.rules.json      # Firebase file
  ├── storage.rules            # Firebase file
  ├── firestore.rules          # Rules for read/write to firestore
  └── README.txt

   The public folder contains the HTML files:
  ├── 404.html                 # File for error
  ├── aboutUs.html             # Page telling the user about the creators
  ├── index.html               # Landing page
  ├── login.html               # User authentication/login
  ├── sdrawkcaB.html           # Easter egg version of store
  ├── store.html               # Store market for customers to look at goods, and query for specific things
  ├── storeForm.html           # Page for a business to upload an individual item, with picture, for the store
  └── vendor.html              # Page for a business to upload a google spreadsheet of multiple items for the store

   The public folder also contains the following subfolders and contents:
  ├── css                      # Folder for styling. Contains several Bootstrap files.
   /  aboutUs.css              # CSS file for aboutUs html
   /  index.css                # CSS file for index html
   /  storeForm.css            # CSS file for storeForm html
  ├── font                     # Folder for bootstrap font library
  ├── img                      # Folder for images
   /                           # Subfolders contain images used in bootstrap
  ├── js                       # Folder for scripts. Contains several Bootstrap files.
   /  login.js                 # JavaScript for logging in
   /  sdrawkcaB.js             # JavaScript file for the backwards easter egg page, build off store.js
   /  store.js                 # JavaScript for the store display and query functionality
   /  storeForm.js             # JavaScript for storeForm single item addition to database
   /  vendor.js                # JavaScript for vendor page, uploading google spreadsheets to the database
  ├── scss                     # Folder for boostrap styling library
  └── src                      # Folder for bootstrap functionality library