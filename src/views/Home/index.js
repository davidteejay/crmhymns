import React, { Component } from 'react';
import { ScrollView, Dimensions, BackHandler, Platform, Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { 
	Header,
	Left, 
	Right, 
	Container, 
	Button, 
	Body, 
	Input, 
	Icon, 
	List, 
	ListItem, 
	Text,
	Fab
} from 'native-base';

import Colors from '../../assets/colors';
import Hymns from '../../assets/hymns';

export default class Home extends Component {
	componentDidMount(){
		SplashScreen.hide();

		if (Platform.OS == "android") BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}
	
	handleBackButton(){               
		Alert.alert(
			'Exit App?',
			'Are you sure you want to exit the application', [{
				text: 'No',
				style: 'cancel'
			}, {
				text: 'Yes',
				onPress: () => BackHandler.exitApp()
			}, ]
		 )

		 return true;
	   }
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	  }

	render(){
		return (
			<Container styles={styles.container}>
				<Header androidStatusBarColor={Colors.brandColor} searchBar style={styles.header}>
					<Left>
						<Button transparent>
							<Icon 
								ios='ios-menu' 
								onPress={() => this.props.navigation.openDrawer()} 
								android="md-menu" 
								style={styles.menuButton}
							/>
						</Button>
					</Left>
					<Body>
						<Input />
					</Body>
					<Right>
						<Button transparent>
							<Icon ios='ios-search' android="md-search" style={styles.menuButton}/>
						</Button>
					</Right>				
				</Header>
				<Fab style={{ backgroundColor: Colors.brandColor }} active={true}>
					<Icon type="MaterialIcons" name="add"/>
				</Fab>
				<ScrollView style={styles.mainView}>
					<List>
						{Hymns.map((hymn, i) => {
							return (
								<ListItem noIndent key={i} onPress={() => this.props.navigation.navigate('Hymn', { hymn: hymn.slug })}>
									<Text>{hymn.title}</Text>
								</ListItem>
							)
						})}
					</List>
				</ScrollView>
			</Container>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		backgroundColor: Colors.brandColor,
		paddingHorizontal: 10
	},
	menuButton: {
		fontSize: 26,
		color: '#fff'
	},
	mainView: {
		width: Dimensions.get('window').width
	}
}
