import { useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"

const Companies = () => {
    const navigation = useNavigation()
    const { companiesList } = useSelector((state) => state.publicStatesSlice)
    return (
        <>
            <View className={`bg-white flex-1 flex-row flex-wrap items-center justify-center `}>
                {
                    companiesList.length > 0 ?
                        companiesList.map((item) => (
                            // Single Company 
                            <TouchableOpacity
                                key={item?._id}
                                onPress={() => navigation.navigate(item?.title)}
                                className={`w-20 h-20 rounded-lg m-2 border-[1px] border-solid border-slate-200 flex items-center justify-center overflow-hidden`}>
                                <Image
                                    source={{ uri: item?.pic }}
                                    className={`w-full h-full`}
                                />
                            </TouchableOpacity>
                        ))
                        :
                        <View className={`bg-white flex-1 items-center justify-center `}>
                            <Text>Comming Soon...</Text>
                        </View>
                }
            </View>
        </>
    )
}
export default Companies