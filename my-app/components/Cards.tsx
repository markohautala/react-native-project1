import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Models } from "react-native-appwrite";



interface Props {
  item: Models.Document;
  onPress?: () => void;
}

export const FeaturedCards = ({ item: { image, rating, name, address, price }, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={{ uri: image }} className="size-full rounded-3xl"/>
      <Image source={images.cardGradient} className="size-full absolute rounded-3xl bottom-0"/>
      <View className="flex flex-row items-center absolute top-3 right-3 bg-white/65 rounded-full px-3 py-1">
        <AntDesign name="star" size={24} color="#537692" />
        <Text className="text-primary-300 font-rubik-bold ml-1">{rating}</Text>
      </View>
      <View className="flex flex-col absolute items-start bottom-4 inset-x-4">
        <Text className="text-white font-rubik-extrabold text-xl" numberOfLines={1}>{name}</Text>
        <Text className="text-white font-rubik text-sm" numberOfLines={1}>{address}</Text>
        <Text className="text-white font-rubik text-sm" numberOfLines={1}>{price} $</Text>
        <View className="absolute bottom-0 right-1">
          <FontAwesome6 name="heart" size={24} color="white" />
        </View>
      </View>

    </TouchableOpacity>
  );
};

export const Cards = ({ item: { image, rating, name, address, price }, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-1 w-full mt-2 px-2 py-2 rounded-lg bg-white shadow-lg relative shadow-black-100/70">
      <View className="flex flex-row items-center absolute px-1 top-3 right-3 bg-white/65 p-0.5 rounded-full z-50">
        <AntDesign name="star" size={16} color="#537692" />
        <Text className="text-primary-300 font-rubik-bold ml-0.5 text-xs">{rating}</Text>
      </View>

      <Image source={{ uri: image }} className="w-full h-40 rounded-lg"/>

      <View className="flex flex-col mt-2">
        <Text className="text-black-200 font-rubik-semibold text-base" numberOfLines={1}>{name}</Text>
        <Text className="text-black-200 font-rubik text-xs" numberOfLines={1}>{address}</Text>
        <Text className="text-black-200 font-rubik-bold text-sm" numberOfLines={1}>{price} $</Text>
        <View className="absolute bottom-0 right-1">

          <FontAwesome6 name="heart" size={20} color="grey" />

        </View>
      </View>
    </TouchableOpacity>
  );
};
