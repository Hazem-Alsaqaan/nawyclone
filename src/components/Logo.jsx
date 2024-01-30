import { Image, Text, View } from "react-native"

const Logo = ({ pageName }) => {
    return (
        <View className="flex-row items-center justify-center">
            <Text className="text-xl text-[#245794] font-[900] mx-1">{pageName ? pageName : ""}</Text>
            <Image
                source={require("../../assets/logo.png")}
                className="w-5 h-5"
            />
        </View>
    )
}
export default Logo