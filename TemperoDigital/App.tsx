import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Rotas from "./src/components/Rotas";
import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";
import Home from "./src/screens/Home";
import CadastrarReceita from "./src/screens/CadastrarReceita";

//deixar as rotas assim por enquanto
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Rotas" component={Rotas} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="CadastrarReceita" component={CadastrarReceita} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;