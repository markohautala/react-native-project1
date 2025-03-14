import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, usePathname } from 'expo-router'

const Search = () => {
  // Retrieves the current pathname in the application
  const path = usePathname();

  // Retrieves local search parameters, where "query" is an optional parameter
  const params = useLocalSearchParams<{ query?: string }>();

  // Creates a state variable "query" and a function "setSearch" to update it
  // If a "query" parameter exists, it is used as the initial value; otherwise, an empty string is set
  const [query, setSearch] = React.useState(params.query || '');

  // Function that handles the search by updating the "query" state
  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search