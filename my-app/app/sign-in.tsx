import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";

const SignIn = () => {
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      console.log("Logged in successfully");
    } else {
      Alert.alert("Error", "Failed to login with Google"); // Title is "Error" and message is "Failed to login with Google"
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingBottom: 40 }}>
          <Image
            source={images.onboarding}
            style={{ width: "100%", height: undefined, aspectRatio: 0.8 }}
            resizeMode="contain"
          />
          <View className="px-10">
            <Text className="text-base text-center uppercase font-rubik text-black-200">
              Welcome to Peak Properties
            </Text>
            <Text className="text-2xl font-rubik-bold text-black-300 text-center mt-4">
              Let's Find Your Next Dream Home {"\n"}
              <Text className="text-primary-200">Together.</Text>
            </Text>
            <Text className="text-lg font-rubik text-black-200 text-center mt-12">
              Login to Peak Properties with Google
            </Text>

            <TouchableOpacity
              onPress={handleLogin}
              className="bg-black shadow-md shadow-zinc-300 w-full py-4 mt-5"
            >
              <View className="flex flex-row items-center justify-center">
                <Image
                  source={icons.google}
                  className="w-7 h-7"
                  resizeMode="contain"
                />
                <Text className="text-lg font-rubik-medium text-white ml-2">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
