var firebaseConfig = {
  apiKey: "AIzaSyAJQUFyz-3Xf0UaHI5a_BNdBRp2fb8LjRw",
  authDomain: "form-6a750.firebaseapp.com",
  databaseURL: "https://form-6a750.firebaseio.com",
  projectId: "form-6a750",
  storageBucket: "form-6a750.appspot.com",
  messagingSenderId: "1008405945733",
  appId: "1:1008405945733:web:42ba39da72cf1fd700b8ec",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert("Signed Up");
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
}

function signOut() {
  auth.signOut();
  alert("Signed Out");
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    alert("Active User " + email);

    //Take user to a different or home page

    //is signed in
  } else {
    alert("No Active User");
    //no user is signed in
  }
});
