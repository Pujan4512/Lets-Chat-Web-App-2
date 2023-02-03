const firebaseConfig = {
    apiKey: "AIzaSyAl9n54QibTNZKehmJDrgykt7rrS9iE0Ik",
    authDomain: "letschat-web-app-3ddaf.firebaseapp.com",
    projectId: "letschat-web-app-3ddaf",
    storageBucket: "letschat-web-app-3ddaf.appspot.com",
    messagingSenderId: "704274646816",
    appId: "1:704274646816:web:125de626cbeb329e9eb945"
  };

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = user_name;