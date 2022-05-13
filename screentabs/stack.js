import { createStackNavigator } from "@react-navigation/stack";
import Airtime from "../screens/airtime";
import Electricity from "../screens/electricity";
import Home from "../screens/home";
import Subscription from "../screens/subscription";
import Tv from "../screens/tv";
import Water from "../screens/water";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="subscription" component={Subscription} />
      <Stack.Screen name="airtime" component={Airtime} />
      <Stack.Screen name="tv" component={Tv} options={{ headerShown: false }} />
      <Stack.Screen name="electricity" component={Electricity} />
      <Stack.Screen name="water" component={Water} />
    </Stack.Navigator>
  );
}

export default MyStack;
