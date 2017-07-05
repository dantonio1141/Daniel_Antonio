import React, { Component } from 'react';
import {
	View,
	Text,
	Alert,
	TextInput,
	Button,
	Image,
} from 'react-native';

import firebase from 'firebase'
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../Actions/authActions.js';
import styles from './styles.js';
import {ExploreView} from '../Explore/exploreView.js';
export class LoginView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}
	componentDidMount(){
		firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser){
				console.log(firebaseUser);
			}
			else{
				console.log("user is not logged on");
			}
		});
		console.log(this);
		console.log(ActionCreators);
	}
	static navigationOptions = { 
		headerRight: <Button title="Logout"
		disabled={!(firebase.auth().currentUser)}
		onPress={() =>
				this.setState(firebase.auth().signOut())	
			}/>,
	};



      submitLogin= ({email, password}) =>  {
      	           firebase.auth().signInWithEmailAndPassword(email, password)
	      	      .then(() => {this.props.navigate('Explore')})
		      .catch(error => { 
			      console.log('didnt work')
		});
      }

      submitRegistration = ({email, password, navigate}) => {
	      console.log(email);
	      console.log(password); 
	      firebase.auth().createUserWithEmailAndPassword(email, password)
	      .catch(error => console.log('registered'));
      }

	render() {
		const { navigate } = this.props.navigation;
		return(
			<Image source ={require('../../Assets/gradient.jpg')}
			style={styles.container}>
			<View> 
			<TextInput
			style={styles.loginStyle}
			placeholder='Email'
			onChangeText = {(email) => this.setState({email})}
		           />

			<TextInput
			  secureTextEntry = {true}
			  style ={styles.passwordStyle}
			  placeholder='password'
			  onChangeText = {(password) => this.setState({password})}
			 />

			<Button
				title= 'Login'
				onPress={() =>
					this.submitLogin(this.state, navigate)
			}/>
			<Button
				title= 'Register'
				onPress={() => 
					this.submitRegistration(this.state)
			}/>
			</View>
			</Image>
		);
		}
}

const navi = StackNavigator({
	Explore: {screen: ExploreView },
});


function mapDispatchToProps(dispatch) {
		return {
			doLogin: function(){dispatch(ActionCreators.doLogin)}
		};
	}

//function mapStateToProps(dispatch){
//	return {email: this.state.email, password: this.state.password}
//}


export default connect(null , mapDispatchToProps)(LoginView);
