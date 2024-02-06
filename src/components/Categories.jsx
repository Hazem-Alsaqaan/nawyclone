import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
    const navigate = useNavigation()
    return (
        <View className="px-4 my-6">
            <Text className="text-xl font-[900]">الفئات</Text>
            <View className="flex-row items-center justify-center">
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <MaterialIcons name="apartment" size={22} color="#245794" />
                    <Text className="font-bold text-xs">عقارات</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <FontAwesome5 name="car-side" size={22} color="#245794" />
                    <Text className="font-bold text-xs">سيارات</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <MaterialIcons name="sports-handball" size={22} color="#245794" />
                    <Text className="font-bold text-xs">رياضة</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <Ionicons name="man" size={22} color="#245794" />
                    <Text className="font-bold text-[10px]">ملابس رجالي</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <Ionicons name="woman-sharp" size={22} color="#245794" />
                    <Text className="font-bold text-[10px]">ملابس حريمي</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center justify-center">
                <TouchableOpacity onPress={() => navigate.navigate("المتاجر")} className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <MaterialCommunityIcons name="cart-variant" size={22} color="#245794" />
                    <Text className="font-bold text-[10px]">هايبرات</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <MaterialIcons name="electrical-services" size={22} color="#245794" />
                    <Text className="font-bold text-xs text-center">اجهزة كهربائية</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <MaterialCommunityIcons name="advertisements" size={22} color="#245794" />
                    <Text className="font-bold text-xs text-center">دعاية واعلان</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <MaterialIcons name="fastfood" size={22} color="#245794" />
                    <Text className="font-bold text-xs">مطاعم</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-50 rounded-md border-[1px] border-solid border-blue-300 m-1  h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                    <MaterialIcons name="build" size={22} color="#245794" />
                    <Text className="font-bold text-[10px] text-center">مواد بناء وتشطيب</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Categories