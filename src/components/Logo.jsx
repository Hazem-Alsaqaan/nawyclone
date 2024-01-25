import { Image, Text, View } from "react-native"

const Logo = ({ pageName }) => {
    return (
        <View className="flex-row items-center justify-center">
            <Image
                source={require("../../assets/logo.jpg")}
                className="w-5 h-5"
            />
            <Text className="text-xl text-[#245794] font-bold mx-0.5">{pageName ? pageName : ""}</Text>
        </View>
    )
}
export default Logo