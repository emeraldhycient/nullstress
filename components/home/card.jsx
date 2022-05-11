import { View, Text, Image } from "react-native";
import tw from "twrnc";

const Card = () => {
  return (
    <View
      style={[
        tw`bg-[#3a3073] h-44 mt-4 px-4 py-4 mx-auto rounded-lg border border-[#3a3073]`,
        { width: "90%" },
      ]}
    >
      <View style={tw`flex flex-row justify-between  `}>
        <View style={tw`flex flex-col  justify-between pb-8`}>
          <Text style={tw`text-gray-100 text-lg font-medium`}>
            Igweze Hycient
          </Text>
          <View style={tw`mt-6`}>
            <Text
              style={[tw`text-gray-400 text-sm mb-2`, { fontWeight: "bold" }]}
            >
              Balance
            </Text>
            <Text style={tw`text-gray-100 text-2xl font-extrabold`}>
              ₦1,000,000
            </Text>
          </View>
        </View>
        <View style={tw`flex flex-col justify-start items-center h-40 `}>
          <Image
            source={require("../../assets/mastercard.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
