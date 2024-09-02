import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function SignUp() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-3xl">Sign up!</Text>
			<StatusBar style="auto" />
		</View>
	);
}
