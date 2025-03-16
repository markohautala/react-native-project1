import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import AntDesign from '@expo/vector-icons/AntDesign';


interface Props {
  onBtnClick?: () => void;
}

export const FeaturedCards = ({ onBtnClick }: Props) => {
  return (
    <TouchableOpacity
      onPress={onBtnClick}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={images.stockholm} className="size-full rounded-3xl"/>
      <Image source={images.cardGradient} className="size-full absolute rounded-3xl bottom-0"/>
      <View className="flex flex-row items-center absolute bottom-5 left-5">
        <AntDesign name="star" size={24} color="#b3cde4" />
        <Text className="text-white font-rubik-bold">4.4</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Cards = () => {
  return (
    <View>
      <Text>Cards</Text>
    </View>
  );
};
