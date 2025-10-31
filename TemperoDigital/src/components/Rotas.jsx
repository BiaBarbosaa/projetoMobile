import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@react-native-vector-icons/ionicons";
import Home from "../screens/HomeScreen";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2D545E",
        tabBarInactiveTintColor: "#ff86bf",
        tabBarStyle: {
          backgroundColor: "#ffffff",
        },
        tabBarLabelPosition: 'beside-icon', // Esta propriedade coloca o rótulo ao lado do ícone
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color, marginLeft: 4 }}>Home</Text>
          )
        }}
      />
    </Tab.Navigator>
  );
}