import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const Login = () => {
	return (
		<View style={styles.container}>
			<Text>Login</Text>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  }
})
