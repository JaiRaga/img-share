import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from './components/landing/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Landing'>
				<Stack.Screen
					name='Landing'
					component={Landing}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
			</Stack.Navigator>
			<ExpoStatusBar style='auto' />
		</NavigationContainer>
	)
}
