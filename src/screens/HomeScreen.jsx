import { Image, ImageBackground, PixelRatio, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Header from "../components/Header"
import CompaniesList from "../components/CompaniesList"
import SearchContainer from "../components/SearchContainer"
import { useNavigation } from "@react-navigation/native"
import Categories from "../components/Categories"

const HomeScreen = () => {
    const Navigation = useNavigation()
    const fontScale = PixelRatio.getFontScale()
    return (
        <SafeAreaView className="bg-white">
            <Header pageName="امازون بلدنا" />
            {/* Limited Time Offers Component */}
            <View className="bg-yellow-500 overflow-hidden mx-4 rounded-xl">
                <ImageBackground
                    source={{ uri: "https://img.freepik.com/free-vector/hand-drawn-flat-design-blackout-illustration_23-2149253383.jpg?w=826&t=st=1705420076~exp=1705420676~hmac=051eaf28b5365b96e307c4252b2e311b61fcee19a6d09a8866def0d21486031d" }}
                    resizeMode="cover"
                    className="h-32 p-4 flex-row items-center justify-between">
                    <View className="flex-1">
                        <View className="flex items-start">
                            <Text className="text-orange-400 text-2xl font-[900]">اعرض متجرك عندنا</Text>
                            <Text className="text-lg font-bold text-white">سيب التسويق علينا</Text>
                        </View>
                    </View>
                    <View className="h-32 bg-yellow-500 p-2 flex items-center justify-center">
                        <Text className="text-white tracking-[2px] font-extrabold text-lg">صفقات</Text>
                        <Text className="text-white font-bold text-base tracking-wide">خاصة</Text>
                    </View>
                </ImageBackground>
            </View>
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
