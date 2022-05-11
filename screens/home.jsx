import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import Card from "../components/home/card";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />
        <Card />
      </View>
    </SafeAreaView>
  );
};

export default Home;
