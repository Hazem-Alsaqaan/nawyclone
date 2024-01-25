import { View } from "react-native"
import SearchInput from "./SearchInput"
import SearchFilter from "./SearchFilter"

const SearchContainer = () => {
    return (
        <View className="flex-row items-center justify-center  m-4">
            <SearchInput />
            <SearchFilter />
        </View>
    )
}
export default SearchContainer