import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const Register = () => {
	return (
		<View style={styles.container}>
			<Text>Register</Text>
		</View>
	)
}

export default Register

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
	},
})