import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/home'
import { Passwords } from "./pages/passwords";

const Tab = createBottomTabNavigator()


export function Roules() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} />

            <Tab.Screen nome="Passwords" component={Passwords} />
        </Tab.Navigator>
    )
}