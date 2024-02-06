import { Image, Text, View, TouchableOpacity } from "react-native"

const FathallaCategories = () => {
    const categoriesData = [
        {
            "_id": "1",
            "title": "المواد الغذائية",
            "pic": "https://img.freepik.com/free-vector/set-tin-food_1308-26262.jpg?w=740&t=st=1706969318~exp=1706969918~hmac=15e2ac23b6aea838b02579797a1025f773c505e462601a88bab8eee7c7f3474b"
        },
        {
            "_id": "2",
            "title": "منتجات الالبان",
            "pic": "https://img.freepik.com/free-vector/realistic-milk-containers-table-poser_1284-21368.jpg?w=740&t=st=1706970810~exp=1706971410~hmac=b8aef7ae014d5de2181ff31f7ea80333684c923beb8b0da8d71b19f6876c4177"
        },
        {
            "_id": "3",
            "title": "المنظفات",
            "pic": "https://img.freepik.com/free-vector/realistic-laundry-detergent-sale-ad_52683-19961.jpg?t=st=1706970804~exp=1706971404~hmac=36de95e2ac7eb1129a9cc6d22c62b0807de233c33c9f9a9147bead146f7e6dd0"
        },
        {
            "_id": "4",
            "title": "الاجهزة الكهربائية",
            "pic": "https://img.freepik.com/free-vector/washing-machine-realistic-poster-with-quiet-quick-wash-symbols-illustration_1284-29131.jpg?w=740&t=st=1706971896~exp=1706972496~hmac=40850941a770f5e72934a48fa1601b17a5bb09e484653d568ca5b0d6d4e00ced"
        },
        {
            "_id": "5",
            "title": "الملابس",
            "pic": "https://img.freepik.com/free-photo/portrait-young-female-with-shopping-bags-jumping_23-2148883664.jpg?w=360&t=st=1706973335~exp=1706973935~hmac=db250a08043ba9d3af7e5ba60bb5878063e3426cf35835e0af776763392d432d"
        }
    ]
    return (
        <>
            <View className={`flex-1 flex-row items-center justify-center flex-wrap bg-white py-10`}>
                {/* single Categories */}
                {categoriesData.length > 0 ?
                    categoriesData.map((item) => (
                        <TouchableOpacity
                            key={item?._id}
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
        </>
    )
}
export default FathallaCategories