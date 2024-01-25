import { Pressable } from "react-native"
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const SearchFilter = () => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate("searchFilterScreen")} className="bg-slate-50 p-3 rounded-lg border-[1px] border-solid border-slate-200 rotate-90">
            <Fontisto name="equalizer" size={20} color="#465A70" />
        </Pressable>
    )
}
export default SearchFilter