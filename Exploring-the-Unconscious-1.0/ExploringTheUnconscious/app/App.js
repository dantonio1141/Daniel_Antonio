import React from 'react';
import {
	  AppRegistry,
	  Text,
	  View,
	  Button,
	  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LoginView } from './Views/Login/loginView.js';
import { ExploreView } from './Views/Explore/exploreView.js'; 
import styles from './styles.js';


const Header = props => (
	<View style={{backgroundColor: 'transparent'}}>
	</View>
);

class HomeScreen extends React.Component {
	  static navigationOptions = {
		      title: 'Explore',
		      headerTitleStyle: {Color: 'black'},
		      header: (props) => <Header {...props}/>,
		    };
	  render() {

		const { navigate } = this.props.navigation; 
		      return(
			<Image source = {require('./Assets/l4040003cd_-_dock-in-fog.jpg')}
			      style={styles.container}>
			<View>
		  	<Button
		  		onPress={() => navigate('Login')}
		  		title="Login" />
			<Button
			      onPress={() => navigate('Explore')}
			      title="Explore" />
			</View>
			</Image>
		);
	 }
}

class ChatScreen extends React.Component {
	static navigationOptions = ({navigation }) => ({ 
		title: `Chat with ${navigation.state.params.user}`,
	});
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View>
				<Text>Chat with {params.user}</Text>
			</View>
		);
	}
}

const  ExploringTheUnconscious =StackNavigator({
	  Home: { screen: HomeScreen },
	  Chat: { screen: ChatScreen },
	  Login: { screen: LoginView },
	  Explore: { screen: ExploreView},

});

AppRegistry.registerComponent('ExploringTheUnconscious', () => ExploringTheUnconscious);


