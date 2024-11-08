import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";


export type RootStackParamList = {
  Welcome: undefined,
  Subscribe: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function RootNavigator(){
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Subscribe" component={SubscribeScreen}/>
    </Stack.Navigator>
  )
}