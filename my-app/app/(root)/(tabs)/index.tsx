import React from "react";
import images from "@/constants/images";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Search from "@/components/Search";
import { Cards, FeaturedCards } from "@/components/Cards";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-large font-rubik text-black-100">
                Hello
              </Text>
              <Text className="text-large text-black-300 font-rubik-medium">
                Marko
              </Text>
            </View>
          </View>
          <Octicons name="bell" size={24} color="black" />
        </View>
        <Search />
        <View className="my-5">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-200">
                See all
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FeaturedCards />
      
      <Cards />

    </SafeAreaView>
  );
}
