import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import tw from "twrnc";
const History = () => {
  return (
    <SafeAreaView>
      <View
        style={[
          tw`android:pt-8 bg-[#3a3073] rounded-b-lg flex flex-row justify-center`,
          { height: Dimensions.get("screen").height / 3 },
        ]}
      >
        <Text style={tw` text-white text-3xl font-bold`}>history</Text>
      </View>
      <View
        style={[
          tw` rounded-t-3xl -mt-24 z-10 bg-white`,
          { height: Dimensions.get("screen").height / 1.1 },
        ]}
      ></View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({});
