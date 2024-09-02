import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Profile() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-3xl">Profile</Text>
			<StatusBar style="auto" />
		</View>
	);
}
