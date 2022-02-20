import React, {useState} from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, Button } from 'react-native'


const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSignUp = () => {
    console.log("Done")
  }

	return (
		<View style={styles.container}>
      <TextInput placeholder="" onChangeText={ name => setName(name)} />
      <TextInput placeholder="" onChangeText={email => setEmail(email)} />
      <TextInput placeholder="" onChangeText={password => setPassword(password)} secureTextEntry={true} />
      <Button title="Sign up" onPress={onSignUp} />
		</View>
	)
}

export default Register

const styles = StyleSheet.create({
	container: {
    marginTop: StatusBar.currentHeight,
    padding: 5
	},
})
