import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import images from '@/constants/images';

const Profile = () => {
  const handleLogout = async () => {};

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false} // hide vertical scroll bar
        contentContainerClassName='pb-32 px-7' // px means padding, pb means padding-bottom
      >
        <View className='flex flex-row justify-between items-center mt-3'>
          <Text className='text-xl font-rubik-medium'>
            Profile
          </Text>
          <AntDesign name="bells" size={24} color="#001b2e" />
        </View>

        <View className='flex flex-row justify-center items-center mt-5'>
          <View className='flex flex-col items-center relative mt-5'>
            <Image source={images.avatar} className='size-44 relative rounded-full'/>
            <TouchableOpacity>
              <FontAwesome5 name="edit" size={24} color="#001b2e" />
            </TouchableOpacity>
            <Text>Name here</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile