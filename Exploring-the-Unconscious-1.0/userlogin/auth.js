var config = {
	    apiKey: "AIzaSyAPIaJ8XR0-JVIpp-EHTll4THJgM4bM0KM",
	    authDomain: "crystalball-ecc5a.firebaseapp.com",
	    databaseURL: "https://crystalball-ecc5a.firebaseio.com",
	    projectId: "crystalball-ecc5a",
	    storageBucket: "crystalball-ecc5a.appspot.com",
	    messagingSenderId: "145484281462"
	  };
firebase.initializeApp(config);

//first get the elements
const emailtxt = document.getElementById('txtemail');
const passtxt = document.getElementById('txtpassword');
const loginButton = document.getElementById('btnLogin');
const RegisterButton = document.getElementById('btnRegister');
const logoutButton = document.getElementById('btnLogout');

loginButton.addEventListener('click', callback => {
	
	const email = emailtxt.value;
	const pass = passtxt.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email,pass);

	promise.catch(f => console.log(callback.message));

});

RegisterButton.addEventListener('click', callback => {
	
	const email = emailtxt.value;
	const pass = passtxt.value;
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email,pass);

	promise.catch(f => console.log(callback.message));

});

logoutButton.addEventListener('click', callback => {
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser);
	}
	else{
			console.log("user is not logged on");
		}
	});

