import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



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
      <View className="flex flex-row items-center absolute top-3 right-3 bg-white/65 rounded-full px-3 py-1">
        <AntDesign name="star" size={24} color="#537692" />
        <Text className="text-primary-300 font-rubik-bold ml-1">4.4</Text>
      </View>
      <View className="flex flex-col absolute items-start bottom-3 inset-x-4">
        <Text className="text-white font-rubik-extrabold text-xl" numberOfLines={1}>Stockholm</Text>
        <Text className="text-white font-rubik text-sm" numberOfLines={1}>Vega | Brf Juno</Text>
        <Text className="text-white font-rubik text-sm" numberOfLines={1}>2 895 000 kr</Text>
        <View className="absolute bottom-1 right-1">
          <FontAwesome6 name="heart" size={24} color="white" />
        </View>
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
