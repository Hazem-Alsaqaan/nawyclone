import { View } from "react-native"
import HeaderNav from "./HeaderNav"
import Logo from "./Logo"

const Header = ({ pageName }) => {
    return (
        <View className="flex-row items-center justify-between mt-10 p-4 bg-white border-b-[1px] border-solid border-slate-100">
            <HeaderNav />
            <Logo pageName={pageName} />
        </View>
    )
}

export default Header