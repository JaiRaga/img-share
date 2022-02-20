import React from "react"
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native'

const Landing = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Landing Page</Text>
			<Button title='Login' onPress={() => navigation.navigate('Login')} />
			<Button
				title='Register'
				onPress={() => navigation.navigate('Register')}
			/>
		</View>
	)
}

export default Landing

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  }
})
