import { Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';

const HeaderNav = () => {
    return (
        <View className="flex-row items-center justify-center bg-white">
            <Feather name="heart" size={20} color="#999" />
            <View className="bg-white rounded-full p-[2px] border-[1px] border-solid border-sky-700 ml-3">
                <Feather name="user" size={16} color="#999" />
            </View>
        </View>
    )
}

export default HeaderNav