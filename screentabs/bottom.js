import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MyStack from "./stack";
import History from "../screens/history";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#694fad" }}>
      <Tab.Screen
        name="index"
        component={MyStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="finance"
        component={History}
        options={{
          tabBarLabel: "finance",
          tabBarIcon: ({ color }) => (
            <Entypo name="credit-card" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={MyStack}
        options={{
          tabBarLabel: "settings",
          tabBarIcon: ({ color }) => (
            <Entypo name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
