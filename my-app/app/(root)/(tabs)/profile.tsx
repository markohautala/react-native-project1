import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from "@expo/vector-icons/AntDesign";

import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/global-provider";
import { logout } from "@/lib/appwrite";
import { TextStyle } from "react-native";


interface SettingItemProps {
  icon: JSX.Element;
  title: string;
  textStyle?: TextStyle;
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
      className="flex-row items-center justify-between py-3"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-3">
        {icon}
        <Text className="text-large font-rubik-medium" style={textStyle}>
          {title}
        </Text>
      </View>
      {showArrow && <AntDesign name="right" size={24} color="black" />}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      Alert.alert("Success", "Logged out successfully");
      refetch({});
    } else {
      Alert.alert("Error", "Failed to logout");
    }
  }

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
              source={{ uri: user?.avatar }}
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
            <Text className="text-xl font-rubik-medium mt-2">{user?.name}</Text>
          </View>
        </View>

        {/* Settings List */}
        <View className="flex flex-col mt-10">
          {/* My Bookings */}
          <SettingsItem
            icon={<FontAwesome name="calendar" size={24} color="black" />}
            title="My Bookings"
            textStyle={{ color: "black" }} // ✅ now this works correctly
            showArrow={true}
          />
          {/* Payments */}
          <SettingsItem
            icon={<FontAwesome5 name="wallet" size={24} color="black" />}
            title="Payments"
            textStyle={{ color: "black" }}
            showArrow={true}
          />
        </View>

        {/* Other Settings */}
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.map((item, index) => {
            return (
              <SettingsItem
                key={index}
                icon={item.icon}
                title={item.title}
                textStyle={{ color: "black" }}
                showArrow={true}
              />
            );
          })}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
        <SettingsItem
          icon={<MaterialIcons name="logout" size={24} color="#F75555" />}
          title="Logout"
          textStyle={{ color: "#F75555" }} // ✅ style for text
          showArrow={false}
          onPress={handleLogout}
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
