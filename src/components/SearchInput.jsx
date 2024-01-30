import { TextInput, View } from "react-native"
import { Octicons } from '@expo/vector-icons';

const SearchInput = () => {
    return (
        <View className="bg-slate-50 py-2 px-5 rounded-lg border-[1px] border-solid border-slate-200 ml-1 flex-1 flex-row items-center justify-end">
            <TextInput
                placeholder="ابحث عن ما تريد ؟"
                className="flex-1 placeholder:font-bold placeholder:text-lg" />
            <View className="ml-3">
                <Octicons name="search" size={20} color="#999" />
            </View>
        </View>
    )
}
export default SearchInput