import { View, TextInput } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDebouncedCallback } from 'use-debounce'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';




const Search = () => {
  // Retrieves the current pathname in the application
  // const path = usePathname();

  // Retrieves local search parameters, where "query" is an optional parameter
  const params = useLocalSearchParams<{ query?: string }>();

  // Creates a state variable "query" and a function "setSearch" to update it
  // If a "query" parameter exists, it is used as the initial value; otherwise, an empty string is set
  const [search, setSearch] = React.useState(params.query || '');


  // Creates a debounced callback function that updates the "query" parameter in the router
  // The function is called with the new search text and a delay of 500ms
  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text }), 500;
  });

  // Function that handles the search by updating the "query" state
  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className='flex flex-row items-center justify-between w-full px-4 mt-4 bg-white border border-gray-200 h-10'>
      <View className='flex flex-1 flex-row items-center justify-start z-50'>
        <AntDesign name="search1" size={20} color="gray" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder='Search for anything'
          className='text-m font-rubik h-10 text-black-300 ml-3 flex-1'
        />
        <FontAwesome6 name="sliders" size={20} color="gray" />
      </View>
    </View>
  )
}

export default Search