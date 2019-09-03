import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import logo from './assets/logo.png';

export default class App extends Component {
	state = {
		data: ''
	};

	findMyIp = async () => {
		this.setState({
			data: 'Retrieving IP...'
		});

		const ip = await fetch('http://httpbin.org/ip');
		const data = await ip.json();
		const dataArray = data.origin.split(',');
		this.setState({
			data: dataArray[0]
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.body}>
					<Image source={logo} />
					<Text style={styles.ip}>{this.state.data}</Text>
					<Button title='Give me my IP!' onPress={this.findMyIp}></Button>
				</View>
				<View style={styles.footer}>
					<Text style={styles.made}>Made by romluc 2019</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2F2336',
		alignItems: 'stretch',
		justifyContent: 'center'
	},

	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	ip: {
		color: '#fff',
		paddingTop: 20,
		paddingBottom: 20
	},

	footer: {
		paddingTop: 10,
		paddingBottom: 10
	},

	made: {
		color: '#fff',
		textAlign: 'center'
	}
});
