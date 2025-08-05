import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@react-native-vector-icons/ionicons";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff238a",
        tabBarInactiveTintColor: "#ff86bf",
        tabBarStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          
          )
        }}
      />
    </Tab.Navigator>
  );
}