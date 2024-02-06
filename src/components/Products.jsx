import {
    ImageBackground,
    View,
    Text,
    FlatList,
    SafeAreaView,
} from "react-native";
import ProductBox from "./ProductBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNikeProducts } from "../redux/actions/nikeProducts";

const Products = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.nikeSlice);
    const { allProductsLoading } = useSelector((state) => state.nikeSlice);
    useEffect(() => {
        dispatch(getNikeProducts());
    }, []);
    return (
        <>
            <SafeAreaView className={`flex-1 items-center justify-center bg-white`}>
                {allProductsLoading ? (
                    <View className={`flex-1 bg-slate-100 justify-center items-center`}>
                        <Text className={`text-sky-600 font-[900]`}>Loading...</Text>
                    </View>
                ) : allProducts.length > 0 ? (
                    <View className={`flex-1 flex-row items-center justify-center px-4`}>
                        <FlatList
                            data={allProducts}
                            renderItem={({ item }) => (
                                <ProductBox key={item.id} item={item} />
                            )}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                ) : (
                    <View className={`flex-1 bg-slate-100 justify-center items-center`}>
                        <Text className={`text-sky-600 font-[900]`}>لا توجد منتجات...</Text>
                    </View>
                )}
            </SafeAreaView>
        </>
    );
};
export default Products;
