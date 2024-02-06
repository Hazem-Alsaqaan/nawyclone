import { View, Text, Image, TouchableOpacity } from "react-native"

const ProductBox = ({ item }) => {
    return (
        <>
            <View className={`flex p-4 bg-white rounded-md shadow-2xl shadow-slate-500 my-5 mx-auto w-[225px] h-64 border-[3px] border-solid border-sky-100 relative overflow-hidden`}>
                <View className={` absolute top-5 -left-12 w-40 h-6 bg-red-600 opacity-[0.85] flex items-center justify-center -rotate-45 z-10`}>
                    <Text className={`text-white font-bold`}>Off 25%</Text>
                </View>
                <View className={`flex-1`}>
                    <Image
                        source={{ uri: item?.image }}
                        className={`w-full h-full`}
                        resizeMode="contain"
                    />
                </View>
                <View className={`flex-1 mt-2 justify-end`}>
                    <Text className={`text-slate-500`}>{item.title}</Text>
                    <Text>{item.category}</Text>
                    <View className={`flex-row items-center justify-between`}>
                        <View className={`flex-row items-center`}>
                            <Text className={`text-slate-500 font-[900]`}>Price: </Text>
                            <Text className={`text-sky-600 font-[900]`}>{item.price}</Text>
                        </View>
                        <TouchableOpacity className={`px-4 py-2 rounded-lg shadow-md shadow-slate-500 bg-blue-500 border-[2px] border-solid border-slate-100`}>
                            <Text className={`text-white font-[900]`}>ادفع الان</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ProductBox