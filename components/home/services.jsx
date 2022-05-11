import { View, Text } from "react-native";
import tw from "twrnc";

const Services = ({ name, icon, link, navigation }) => {
  return (
    <View
      style={[
        tw`bg-gray-300 ios:h-28 android:h-32 mx-2 my-2 rounded-lg`,
        { width: "44%" },
      ]}
    >
      <View
        style={[
          tw`bg-[#3a3073] rounded-t-lg py-3 w-20 rounded-r-lg `,
          {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 12.0,

            elevation: 24,
          },
        ]}
      >
        {icon}
      </View>
      <View style={tw`flex flex-col justify-center items-center`}>
        <Text>{}</Text>
        <Text style={tw`text-xl font-extrabold text-slate-600`}>{name}</Text>
      </View>
    </View>
  );
};

export default Services;
