import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Text style={styles.ip}>IP</Text>
				<Button title='Descobrir meu IP!'></Button>
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
	}
});
