import * as firebase from 'firebase';
var config = {
       apiKey: "AIzaSyAPIaJ8XR0-JVIpp-EHTll4THJgM4bM0KM",
           authDomain: "crystalball-ecc5a.firebaseapp.com",
               databaseURL: "https://crystalball-ecc5a.firebaseio.com",
                   projectId: "crystalball-ecc5a",
                       storageBucket: "crystalball-ecc5a.appspot.com",
                           messagingSenderId: "145484281462"
        			 };
                            firebase.initializeApp(config);

export default 'firebase'
