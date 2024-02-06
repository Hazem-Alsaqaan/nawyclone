import { useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"

const NikeCategories = () => {
    const navigation = useNavigation()
    const categoriesData = [
        {
            "_id": "1",
            "title": "احذية رياضية",
            "pic": "https://img.freepik.com/free-photo/close-up-futuristic-sneakers_23-2151005739.jpg?t=st=1706981718~exp=1706985318~hmac=20eec4d4c31128d195518fc586da38e5a1dc50fed1e124136d84546bb0bf308c&w=360"
        },
        {
            "_id": "2",
            "title": "ملابس رياضية",
            "pic": "https://img.freepik.com/free-photo/woman-near-fitball-looking-camera_23-2147775559.jpg?w=740&t=st=1706982026~exp=1706982626~hmac=e8cc9429009f6dc6bd3fa1b32e47fa87ddb7f07fb962709762734d4bd6dd345d"
        }
    ]
    return (
        <View className={`flex-1 flex-row items-center justify-center flex-wrap bg-white py-10`}>
            {/* single Categories */}
            {categoriesData.length > 0 ?
                categoriesData.map((item) => (
                    <TouchableOpacity
                        key={item?._id}
                        onPress={() => navigation.navigate("المنتجات")}
                        className={`w-28 h-32 bg-white rounded-md p-1 m-1 flex items-center justify-center border-[1px] border-solid border-slate-300 shadow-xl shadow-[#555]`}>
                        <View className="w-full h-2/3 flex items-center justify-center">
                            <Image
                                source={{ uri: item?.pic }}
                                className={`w-full h-full`}
                            />
                        </View>
                        <View className="flex-1 items-center justify-center">
                            <Text className={`text-black font-[900]`}>{item.title}</Text>
                        </View>
                    </TouchableOpacity >
                ))
                :
                <TouchableOpacity className={`w-28 h-32 bg-white rounded-md p-1 m-1 flex items-center justify-center border-[1px] border-solid border-slate-300 shadow-xl shadow-[#555]`}>
                    <View className="flex-1 items-center justify-center">
                        <Text className={`text-black font-[900]`}>المنتجات</Text>
                    </View>
                </TouchableOpacity >
            }
        </View >
    )
}

export default NikeCategories