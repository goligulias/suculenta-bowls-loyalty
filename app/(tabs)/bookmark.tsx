import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Bookmarks() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-3xl">Bookmark</Text>
			<StatusBar style="auto" />
		</View>
	);
}
