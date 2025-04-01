import React from "react";
import images from "@/constants/images";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Search from "@/components/Search";
import { Cards, FeaturedCards } from "@/components/Cards";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";

export default function Index() {

  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <Button title="Seed here" onPress={seed}/>
      <FlatList
        data={[]}
        renderItem={null}
        contentContainerClassName="pb-20"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-3">
            <View className="flex flex-row justify-between items-center mt-5">
              <View className="flex flex-row items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="size-12 rounded-full"
              />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-large font-rubik text-black-100">Hello</Text>
                  <Text className="text-large text-black-300 font-rubik-medium">{user?.name}</Text>
                </View>
              </View>
              <Octicons name="bell" size={24} color="black" />
            </View>

            <Search />

            <View className="my-5">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-200">See all</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="mt-1">
              <FlatList
                data={[1, 2, 3, 4]} // Example data array
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => <FeaturedCards />}
                contentContainerStyle={{ gap: 20, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                bounces={false}
              />
            </View>

            <View className="flex flex-row my-3 justify-between items-center">
              <Text className="text-xl font-rubik-bold text-black-300">Our top picks</Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-200">See all</Text>
              </TouchableOpacity>
            </View>

            <Filters />

            <View className="flex flex-row gap-5 m-5">
              <Cards />
              <Cards />
            </View>
            <View className="flex flex-row gap-5 m-5">
              <Cards />
              <Cards />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
