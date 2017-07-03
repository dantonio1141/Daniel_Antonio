const firebase = require('../firebase.js');


export const LOGIN = 'LOGIN';

export function doLogin(email, password){
	return {type: LOGIN, email, password}
}
//export function doLogin(email, password) {
//	return (dispatch, getState) => {
//		dispatch(startAuthorizing());
//
//		firebase.auth().singInWithEmailAndPassword(email,password);
//	}
//}

