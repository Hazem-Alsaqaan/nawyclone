import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AuthenticationScreen from "./AuthenticationScreen"
import HomeScreen from "./HomeScreen"
import SearchScreen from "./SearchScreen"
import MyPropertyScreen from "./MyPropertyScreen"
import ExploreScreen from "./ExploreScreen"
import MoreScreen from "./MoreScreen"
import { Text } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import SearchFilterScreen from "./SearchFilterScreen"

const StackNav = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const TabNav = createBottomTabNavigator()
// if user not logedin
const WithoutUser = () => {
    return (
        <StackNav.Navigator initialRouteName="authentication">
            <StackNav.Screen name="authentication" component={AuthenticationScreen} options={{ headerShown: false }} />
        </StackNav.Navigator>
    )
}
// Home Screen Navigator
const HomeScreenNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName="homeScreen">
            <HomeStack.Screen name="homeScreen" component={HomeScreen} options={{ headerShown: false, }} />
            <HomeStack.Screen name="searchFilterScreen" component={SearchFilterScreen} options={{ headerShown: false, }} />
        </HomeStack.Navigator>
    )
}
// if user logedin
const IncludeUser = () => {
    return (
        <TabNav.Navigator initialRouteName="home">
            <TabNav.Screen
                name="Home"
                component={HomeScreenNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => <Text className={focused ? "text-[#245794] font-bold text-[12px]" : "text-[#999] text-[12px]"}>Home</Text>,
                    tabBarIcon: ({ focused }) => <Entypo name="home" size={24} color={focused ? "#245794" : "#999"} />
                }}
            />
            <TabNav.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => <Text className={focused ? "text-[#245794] font-bold text-[12px]" : "text-[#999] text-[12px]"}>Explore</Text>,
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="view-grid-plus-outline" size={24} color={focused ? "#245794" : "#999"} />
                }} />
            <TabNav.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => <Text className={focused ? "text-[#245794] font-bold text-[12px]" : "text-[#999] text-[12px]"}>Search</Text>,
                    tabBarIcon: ({ focused }) => <Octicons name="search" size={24} color={focused ? "#245794" : "#999"} />
                }} />
            <TabNav.Screen
                name="MyProperty"
                component={MyPropertyScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => <Text className={focused ? "text-[#245794] font-bold text-[12px]" : "text-[#999] text-[12px]"}>My Property</Text>,
                    tabBarIcon: ({ focused }) => <MaterialIcons name="apartment" size={24} color={focused ? "#245794" : "#999"} />
                }} />
            <TabNav.Screen
                name="More"
                component={MoreScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => <Text className={focused ? "text-[#245794] font-bold text-[12px]" : "text-[#999] text-[12px]"}>More</Text>,
                    tabBarIcon: ({ focused }) => <AntDesign name="bars" size={24} color={focused ? "#245794" : "#999"} />
                }} />
        </TabNav.Navigator>
    )
}

// main Navigation
const NavigationApp = () => {
    const currentUser = {
        username: "hazem",
        email: "zimmwa@gmail.com"
    }
    return (
        <NavigationContainer>
            {Object.keys(currentUser).length > 0
                ? <IncludeUser />
                : <WithoutUser />}
        </NavigationContainer>
    )
}
export default NavigationApp