import React, { useEffect } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";
import Search from "@/components/Search";
import { Cards, FeaturedCards } from "@/components/Cards";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";
import { router, useLocalSearchParams } from "expo-router";
import { useAppwrite } from "@/lib/useAppwrite";
import { getLatestProperties, getProperties } from "@/lib/appwrite";

export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
  useAppwrite({
    fn: getLatestProperties,
  });

  const {
    data: properties,
    refetch,
    loading,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);

  // Pushes to the specific property page upon clicking the card
  const handleCardPress = (id: string) => router.push(`/properties/${id}`);


  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <Cards
            item={item}
            onPress={() => handleCardPress(item.$id)}
          />
        )}
        keyExtractor={(item) => item.$id}
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
                  <Text className="text-large font-rubik text-black-100">
                    Hello
                  </Text>
                  <Text className="text-large text-black-300 font-rubik-medium">
                    {user?.name}
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

            <View className="mt-1">
              <FlatList
                data={latestProperties} // Example data array
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <FeaturedCards
                    item={item}
                    onPress={() => handleCardPress(item.$id)}
                  />
                )}
                contentContainerStyle={{ gap: 20, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                bounces={false}
              />
            </View>

            <View className="flex flex-row my-3 justify-between items-center">
              <Text className="text-xl font-rubik-bold text-black-300">
                Our top picks
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-200">
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <Filters />

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
