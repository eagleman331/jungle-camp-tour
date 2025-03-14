import { View, Text, useWindowDimensions, FlatList, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const SiteDetails = () => {
  const { width, height } = useWindowDimensions();
  const params = useLocalSearchParams(); // Retrieves query params
  console.log("params", params)
  return (
    <>
      <View className="flex-1 bg-slate-300">
        <View className="h-2/5 w-full bg-red-500">
          <Image 
           className=" drop-shadow-xl w-full h-full object-contain"
           source={params.imageFacility}
          />
        </View>
        <View className="-top-5 h-4/5 w-full rounded-3xl bg-green-400">
        <Text className="mt-2 text-center text-xl font-semibold">SITE DETAILS</Text>
          
          <View className="mt-2 p-2">
            <Text className="font-bold">Purpose</Text>
            <Text className="ml-2 mt-2 font-light">
    {params.purpose}
            </Text>
          </View>

          <View className="mt-2 p-2">
            <Text className="font-bold">Location</Text>
            <Text className="ml-2 mt-2 font-light">
            {params.location}
            </Text>
          </View>

          <View className="mt-2 p-2">
            <Text className="font-bold">Aminities</Text>
            <Text className="ml-2 mt-2 font-light">
            {params.Aminities}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default SiteDetails;
