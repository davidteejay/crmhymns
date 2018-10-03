import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { 
	Header,
	Left,
	Right,
	Container, 
	Button, 
	Body,
	Icon,
	Text,
	Title,
	Fab,
	View
} from 'native-base';

import Colors from '../../assets/colors';
import Hymns from '../../assets/hymns';

export default class Home extends Component {
	state = {
		hymn: {}
	}

	componentWillMount(){
		let hymnSlug = this.props.navigation.getParam('hymn', '');

		let hymn = Hymns.filter(hymn => hymn.slug === hymnSlug);
		hymn = hymn[0];

		this.setState({ hymn: hymn });
	}

	render(){
		return (
			<Container styles={styles.container}>
				<Header androidStatusBarColor={Colors.brandColor} style={styles.header}>
					<Left>
						<Button transparent>
							<Icon 
								ios='ios-arrow-back' 
								onPress={() => this.props.navigation.navigate('Home')} 
								android="md-arrow-back" 
								style={styles.menuButton}
							/>
						</Button>
					</Left>
					<Body>
						<Title>{this.state.hymn.title}</Title>
					</Body>
					<Right>
					<Button transparent>
						<Icon name='more' style={styles.menuButton} />
					</Button>
					</Right>
				</Header>
				<Fab style={{ backgroundColor: Colors.brandColor }} active={true}>
					<Icon type="MaterialIcons" name="edit"/>
				</Fab>
				<ScrollView style={styles.mainView}>
					{this.state.hymn.stanzas.map((stanza, i) => {
						return (
							<View key={i}>
								<Text style={stanza.content.includes('Ch:') ? {...styles.chorus, ...styles.stanza} : styles.stanza}>{stanza.content.replace(new RegExp('<br>', 'g'), '\n')}</Text>
								<Text>{'\n'}</Text>
							</View>
						)
					})}
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
		width: Dimensions.get('window').width,
		padding: 20
	},
	stanza: {
		fontSize: 16
	},
	chorus: {
		fontStyle: 'italic'
	}
}
