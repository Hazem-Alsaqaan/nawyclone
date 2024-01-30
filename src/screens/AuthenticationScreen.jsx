import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"

const AuthenticationScreen = () => {
    return (
        <>
            <SafeAreaView className="flex-1 items-center  justify-center bg-[#101010] pt-10  relative">
                <View className="flex items-center pt-20">
                    <Text className="text-white text-6xl">Unlimeted</Text>
                    <Text className="text-white text-xl">Modern Fashion</Text>
                </View>
                <View className=" w-full flex-1 items-center justify-end">
                    <View className=" absolute bottom-0 translate-x-1/2 w-full h-full">
                        <Image
                            source={require("../../assets/pictures/fashion.png")}
                            width={350}
                            height={500}
                            alt="fashion"
                            className="w-full h-full"
                        />
                    </View>
                    <View className="flex items-center justify-center">
                        <Text className="text-gray-300 text-lg">CREATING THE ILLUSION OF TWO</Text>
                        <Text className="text-gray-300 text-lg">DISTINCT PIECES IN ONE</Text>
                    </View>
                    <View className="w-full p-10">
                        <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-3xl w-full flex items-center justify-center mb-2">
                            <Text>LOGIN . EXPLORE YOUR STYLE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=" bg-opacity-90 px-4 py-2 rounded-3xl w-full flex items-center justify-center border-[1px] border-gray-200 border-solid">
                            <Text className="text-white"> CREATE AN ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
export default AuthenticationScreen
