import { View, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import Card from "../components/home/card";
import Services from "../components/home/services";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`android:mt-8`}>
          <StatusBar style="auto" />
          <Card />
          <View
            style={tw`mt-8 px-4 mx-auto flex flex-row justify-between items-center flex-wrap`}
          >
            <Services
              name="Data"
              icon={
                <Ionicons name="cellular" style={tw`text-red-300`} size={30} />
              }
              navigation={navigation}
              link="subscription"
            />
            <Services
              name="Airtime"
              icon={
                <Feather name="phone-call" style={tw`text-red-300`} size={30} />
              }
              navigation={navigation}
              link="airtime"
            />
            <Services
              name="TV Subscription"
              icon={<Entypo name="tv" style={tw`text-red-300`} size={30} />}
              navigation={navigation}
              link="tv"
            />
            <Services
              name="Electricity"
              icon={
                <Entypo name="power-plug" style={tw`text-red-300`} size={35} />
              }
              navigation={navigation}
              link="electricity"
            />
            <Services
              name="Water"
              icon={<Entypo name="water" style={tw`text-red-300`} size={30} />}
              navigation={navigation}
              link="water"
            />
            <Services />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
