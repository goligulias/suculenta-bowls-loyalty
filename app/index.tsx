import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';

export default function Index() {
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className="w-full justify-center items-center h-full px-4">
					<Image source={images.logo} className="w-[450px] h-[200px]" resizeMode="cover" />
					<Image
						source={images.cards}
						className="max-w--[380px] w-full h-[300px]"
						resizeMode="contain"
					/>
					<View className="relative mt-5">
						<Text className="text-3xl txt-white font-bold text-center">
							Discover <Text className="text-secondary-200">Suculenta</Text>
						</Text>
						<Image source={images.path} className="w-[136px] h-[15px] absolute-bottom-2 -right-8" />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
