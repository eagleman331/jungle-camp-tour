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
import { testImages } from '../../../assets/TestData/imagesTestInvites';

import { IconsCampTour } from '../../../assets/DataApp/CampTourSpots';
import { FlatCategories } from '~/src/components/CampTourMarquee';

export default function Home() {
  const { width, height } = useWindowDimensions();

  //   const scale =  useSharedValue(1);
  //   const animatedStyle = useAnimatedStyle(() => ({
  //     transform: [{ scale: scale.value }],
  //   }));
  //   return (
  //     <Pressable
  //       onPressIn={() => (scale.value = withSpring(0.9, { damping: 5, stiffness: 150 }))} // Press effect
  //       onPressOut={() => (scale.value = withSpring(1, { damping: 5, stiffness: 150 }))} // Release effect
  //       onPress={() => console.log('Pressed')} // OnPress event
  //     >
  //       <Animated.View
  //         key={item.id}
  //         className="flex-row justify-between rounded-lg bg-blue-500"
  //         style={[
  //           styles.button,
  //           animatedStyle,
  //           { marginTop: 20, height: height * 0.2, width: width * 0.9 },
  //         ]}>
  //         <View className="mt-4 w-3/5">
  //           <Text className="ml-4 text-lg font-bold text-slate-950 antialiased">Swimming Pool</Text>
  //           <Text className="ml-4 text-wrap text-base antialiased">
  //             Its easy to start swimming dsdfsdfsdfsdf fsdfsdfsd sdfsdfsd{' '}
  //           </Text>
  //         </View>

  //         <View className="w-2/5 items-center justify-center bg-white">
  //           <Image
  //             className="bottom-1 rounded-lg drop-shadow-xl"
  //             style={{ width: 100, height: 100 }}
  //             source={require('~/src/assets/icon.png')}
  //           />
  //         </View>
  //       </Animated.View>
  //     </Pressable>
  //   );
  // };
  return (
    <>
      <View className="flex-1  bg-gray-400">
        <SafeAreaView>
          <View className=" bg-blue-500" style={{ marginTop: 50, marginLeft: 25 }}>
            <Text className="text-4xl text-stone-800">Camp Tour</Text>
          </View>
          {/* Container of category of places */}
          <View className="items-center" style={{ marginTop: 20 }}>
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
