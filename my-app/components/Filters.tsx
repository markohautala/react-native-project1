import { Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(params.filter || "All");

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      router.setParams({ filter: "" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          className={`flex flex-col items-start px-2.5 py-1.5 m-1 rounded-lg ${
            selectedCategory === item.category
              ? 'bg-primary-100'
              : 'bg-white border border-primary-200'
          }`}
          onPress={() => handleCategoryClick(item.category)}
        >
          <Text
            className={`text-black text-sm ${
              selectedCategory === item.category
                ? 'text-white font-rubik-bold'
                : 'text-black font-rubik'
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
