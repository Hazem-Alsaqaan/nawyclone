import { Image, PixelRatio, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Header from "../components/Header"
import CompaniesList from "../components/CompaniesList"
import SearchContainer from "../components/SearchContainer"
import { useNavigation } from "@react-navigation/native"
import Categories from "../components/Categories"
import AboutUsSlider from "../components/AboutUsSlider"

const HomeScreen = () => {
    const Navigation = useNavigation()
    const fontScale = PixelRatio.getFontScale()
    return (
        <SafeAreaView className="bg-white">
            <Header pageName="circle" />
            <AboutUsSlider />
            <ScrollView >
                <SearchContainer />
                <Categories />
                <CompaniesList />
                {/* MAnage My Property Component */}
                <TouchableOpacity onPress={() => Navigation.navigate("MyProperty")} className="flex-row items-center justify-center  bg-slate-50 border-[1px] border-solid border-slate-200 mx-4 rounded-lg py-2 px-4 my-5">
                    <View className="overflow-hidden h-24 w-24">
                        <Image
                            source={require("../../assets/logo.png")}
                            className="h-full w-full ml-2"
                        />
                    </View>
                    <View className="flex-1  justify-center items-end">
                        <Text className={`text-black text-xl font-[900] my-2`}>تواصل معانا وحقق اعلى ربح</Text>
                        <Text className="text-slate-400 text-xs">01017997927</Text>
                        <Text className="text-slate-400 text-xs">hazem.alsaqaan@gmail.com</Text>
                        <Text className="text-slate-400 text-xs">http://google.com</Text>
                    </View>
                </TouchableOpacity>

                <View className="flex items-center justify-center h-96">
                    <Text>Component Two</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen
