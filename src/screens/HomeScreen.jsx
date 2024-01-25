import { Image, ImageBackground, PixelRatio, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Header from "../components/Header"
import CompaniesList from "../components/CompaniesList"
import SearchContainer from "../components/SearchContainer"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
    const Navigation = useNavigation()
    const fontScale = PixelRatio.getFontScale()
    return (
        <SafeAreaView className="bg-white">
            <Header pageName="Nawy" />
            <ScrollView >
                <CompaniesList />
                <SearchContainer />
                {/* MAnage My Property Component */}
                <TouchableOpacity onPress={() => Navigation.navigate("MyProperty")} className="flex-row items-center justify-center  bg-slate-50 border-[1px] border-solid border-slate-200 mx-4 rounded-lg py-2 px-4 my-5">
                    <View className="flex-1 items-center justify-center">
                        <Text className={`text-black text-xl my-2`}>Manage My Property</Text>
                        <Text className="text-slate-400 text-xs">Valuate, Analyze and Stay Updated</Text>
                    </View>
                    <View className="overflow-hidden h-24 w-24">
                        <Image
                            source={{ uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1705418045/4979878_50819-removebg-preview_po33th.png" }}
                            className="h-full w-full ml-2"
                        />
                    </View>
                </TouchableOpacity>
                {/* Limited Time Offers Component */}
                <View className="bg-yellow-500 overflow-hidden mx-4 rounded-xl">
                    <ImageBackground
                        source={{ uri: "https://img.freepik.com/free-vector/hand-drawn-flat-design-blackout-illustration_23-2149253383.jpg?w=826&t=st=1705420076~exp=1705420676~hmac=051eaf28b5365b96e307c4252b2e311b61fcee19a6d09a8866def0d21486031d" }}
                        resizeMode="cover"
                        className="h-32 p-4 flex-row items-center justify-between">
                        <View className="flex-1">
                            <View className="flex-row items-center">
                                <Text className="text-white text-xl font-bold">Limited Time </Text>
                                <Text className="text-orange-400 text-xl font-bold">Offers</Text>
                            </View>
                            <Text className="text-sm text-slate-300">Reserve Your Unit Now</Text>
                        </View>
                        <View className="h-32 bg-yellow-500 p-2 flex  justify-center">
                            <Text className="text-slate-50 font-thin text-xs tracking-wide">SPECIAL</Text>
                            <Text className="text-white tracking-[2px]">DEALS</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View className="flex items-center justify-center h-96">
                    <Text>Component Two</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen
