import { SafeAreaView, Text, View } from "react-native"
import Header from "../components/Header"

const ExploreScreen = () => {
    return (
        <SafeAreaView className=" flex-1 bg-white">
            <Header pageName="Explore" />
            <View className="flex items-center justify-center">
                <Text>Explore Screen</Text>
            </View>
        </SafeAreaView>
    )
}
export default ExploreScreen