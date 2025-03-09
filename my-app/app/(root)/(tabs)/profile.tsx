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
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from "@expo/vector-icons/AntDesign";

import { settings } from "@/constants/data";

interface SettingItemProps {
  icon: JSX.Element;
  title: string;
  textStyle: string;
  showArrow?: boolean;
  onPress?: () => void;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow,
}: SettingItemProps) => {
  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-between py-3"
      onPress={onPress}
    >
      <View className="flex flex-row items-center gap-3">
        {icon} {/* Icon rendered correctly */}
        <Text className={`text-large font-rubik-medium ${textStyle}`}>{title}</Text>
      </View>
      {showArrow && <AntDesign name="right" size={24} color="black" />}
    </TouchableOpacity>
  );
};

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        {/* Header */}
        <View className="flex flex-row justify-between items-center mt-3">
          <Text className="text-xl font-rubik-medium">Profile</Text>
          <Octicons name="bell" size={24} color="black" />
        </View>

        {/* Profile Section */}
        <View className="flex flex-row justify-center items-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
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
              <FontAwesome5 name="edit" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-xl font-rubik-medium mt-2">Name here</Text>
          </View>
        </View>

        {/* Settings List */}
        <View className="flex flex-col mt-10">
          {/* My Bookings */}
          <SettingsItem
            icon={<FontAwesome name="calendar" size={24} color="black" />}
            title="My Bookings"
            textStyle="text-style-class"
            showArrow={true}
          />
          {/* Payments */}
          <SettingsItem
            icon={<FontAwesome5 name="wallet" size={24} color="black" />}
            title="Payments"
            textStyle="text-style-class"
            showArrow={true}
          />
        </View>

        {/* Other Settings */}
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.map((item, index) => {
            return (
              <SettingsItem
                key={index}
                icon={item.icon} // Directly using the icon JSX.Element
                title={item.title}
                textStyle="text-style-class"
                showArrow={true}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
