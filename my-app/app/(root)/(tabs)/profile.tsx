import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

interface settingItemProp {
  iconName: string;
  title: string;
  textStyle: string;
  onPress?: () => void;
  iconLibrary?: "FontAwesome" | "FontAwesome6"; // Added option for FontAwesome6
}

const SettingsItem = ({
  iconName,
  title,
  onPress,
  textStyle,
  iconLibrary = "FontAwesome", // Default to FontAwesome
}: settingItemProp) => {
  const IconComponent = iconLibrary === "FontAwesome6" ? FontAwesome6 : FontAwesome;

  return (
    <TouchableOpacity className="flex flex-row items-center justify-between py-3" onPress={onPress}>
      <View className="flex flex-row items-center gap-3">
        <IconComponent name={iconName} size={30} color="black" />
        <Text className={`text-large font-rubik-medium ${textStyle}`}>
        {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
        <View className="flex flex-row justify-between items-center mt-3">
          <Text className="text-xl font-rubik-medium">Profile</Text>
          <AntDesign name="bells" size={24} color="#001b2e" />
        </View>

        <View className="flex flex-row justify-center items-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image source={images.avatar} className="size-44 relative rounded-full" />
            <TouchableOpacity
              className="absolute bottom-16 right-1"
              style={{
                backgroundColor: "#eef3f9",
                borderRadius: 50,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="edit" size={24} color="#001b2e" />
            </TouchableOpacity>
            <Text className="text-xl font-rubik-medium mt-2">Name here</Text>
          </View>
        </View>

        <View className="flex flex-col mt-10">
          <SettingsItem iconName="calendar" title="My Bookings" textStyle="text-style-class" />
          <SettingsItem iconName="wallet" title="Payments" iconLibrary="FontAwesome6" textStyle="text-style-class" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
