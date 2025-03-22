import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setFilter] = useState(params.filter || "All");

  const handleCategory = (category: string) => {
    if (selectedCategory === category) {
      setFilter("All");
      router.setParams({ filter: "All" });
      return;
    }

    setFilter(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          className={`flex flex-col items-start px-2.5 py-1.5 m-1 rounded-lg ${selectedCategory === category.title ? 'bg-primary-100' : 'bg-white border border-primary-200'}`}
          onPress={() => handleCategory(category.title)}
        >
          <Text className={`text-black text-sm ${selectedCategory === category.title ? 'text-white font-rubik-bold' : 'text-black font-rubik'}`}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Filters