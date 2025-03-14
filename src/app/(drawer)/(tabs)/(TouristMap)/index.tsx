import { Stack } from 'expo-router';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from '~/src/components/Container';
import { ScreenContent } from '~/src/components/ScreenContent';
import { testImages } from '~/src/assets/TestData/imagesTestInvites';

import { IconsCampTour } from '~/src/assets/DataApp/CampTourSpots';
import { FlatCategories } from '~/src/components/CampTourMarquee';

export default function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {/* <Stack.Screen options={{ title: 'Tab One' }} /> */}
      <View className="flex-1  bg-gray-400">
        <SafeAreaView>
          <View className="mt-16 ml-5" >
            <Text className="text-4xl text-stone-800">Camp Tour</Text>
          </View>
          {/* Container of category of places */}
          <View className="items-center mt-3">
            <FlatList
              data={IconsCampTour}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <FlatCategories item={item} />
              }
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
