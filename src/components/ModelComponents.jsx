import { useState } from "react"
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, Modal } from "react-native"

const UseStyle = () => {
    const { width } = useWindowDimensions()
    const MyStyle = StyleSheet.create({
        btn: {
            width: width < 570 ? 250 : 350
        }
    })
    return MyStyle
}
const ModelComponenets = () => {
    const Styles = UseStyle()
    const [showModel, setShowModel] = useState(false)
    return (
        <>
            <View className={`flex-1 items-center justify-center`}>
                <TouchableOpacity onPress={() => setShowModel(true)} className={`bg-sky-400 flex items-center justify-center px-5 py-2 rounded-md shadow-2xl`} style={Styles.btn}>
                    <Text className={`text-white`}>Click Me</Text>
                </TouchableOpacity>
                <Modal visible={showModel} transparent animationType="slide" onRequestClose={() => setShowModel(false)}>
                    <View className=" bg-blue-50 flex-1 items-center justify-center">
                        <View className={` bg-teal-500 m-2 p-5 rounded-md flex items-center justify-center`} >
                            <Text className="text-white">Hello Model</Text>
                        </View>
                        <TouchableOpacity onPress={() => setShowModel(false)} className={` bg-blue-900 flex items-center justify-center px-5 py-2 rounded-md shadow-2xl`} style={Styles.btn}>
                            <Text className={`text-white`}>clear</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default ModelComponenets