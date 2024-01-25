import { TextInput, View } from "react-native"
import { Octicons } from '@expo/vector-icons';

const SearchInput = () => {
    return (
        <View className="bg-slate-50 py-2 px-5 rounded-lg border-[1px] border-solid border-slate-200 mr-2 flex-1 flex-row items-center justify-center">
            <View className="mr-5">
                <Octicons name="search" size={20} color="#999" />
            </View>
            <TextInput placeholder="What are you looking for ?" />
        </View>
    )
}
export default SearchInput