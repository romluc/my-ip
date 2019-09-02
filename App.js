import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import logo from './assets/logo.png';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Image source={logo} />
				<Text style={styles.ip}>IP</Text>
				<Button title='Give me my IP!'></Button>
			</View>
			<View style={styles.footer}>
				<Text style={styles.made}>Made by romluc 2019</Text>
			</View>
		</View>
	);
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
