import { View, TextInput } from 'react-native'
import React from 'react'
import { useLocalSearchParams, usePathname } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';



const Search = () => {
  // Retrieves the current pathname in the application
  // const path = usePathname();

  // Retrieves local search parameters, where "query" is an optional parameter
  const params = useLocalSearchParams<{ query?: string }>();

  // Creates a state variable "query" and a function "setSearch" to update it
  // If a "query" parameter exists, it is used as the initial value; otherwise, an empty string is set
  const [search, setSearch] = React.useState(params.query || '');

  // Function that handles the search by updating the "query" state
  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View className='flex flex-row items-center justify-between w-full px-4 mt-4 bg-white border border-gray-200 rounded-lg'>
      <View className='flex flex-1 flex-row items-center justify-start z-50'>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder='Search'
          className='text-sm font-rubik text-black-300 ml-2 flex-1'
        />
        <Octicons name="filter" size={24} color="black" />
      </View>
    </View>
  )
}

export default Search