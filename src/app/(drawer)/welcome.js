import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { testImages } from '../../assets/TestData/imagesTestInvites';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import Animated, { FadeIn, FadeOut, SlideInUp, FadeInUp } from 'react-native-reanimated';
import Marquee from '../../components/Marquee';


const welcome = () => {
  const [activeImage, setActiveImage] = useState(0);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const onPressButton = () => {
    setActiveImage(activeImage >= testImages.length - 1 ? 0 : activeImage + 1);
  };
  return (
    <View className="flex-1 items-center bg-yellow-950">
      <Animated.Image
        // key={testImages[activeImage].id}
        // source={testImages[activeImage].image}
        key={testImages[1].id}
        source={testImages[1].image}
        resizeMode={'cover'}
        className="absolute left-0 top-0 h-full w-full"
        entering={FadeIn.duration(1000)}
        exiting={FadeOut.duration(1000)}
      />
      <View className="absolute  left-0 top-0 h-full w-full bg-black/60" />

      <BlurView intensity={0} experimentalBlurMethod={'blur'} className="h-full w-full">
        <SafeAreaView edges={['bottom']}>
          <Animated.View
            className="mt-20 h-4/6 w-full"
            entering={SlideInUp.springify().mass(1).damping(30)}>
            <Marquee
              testImages={testImages}
              // onIndexChange={setActiveImage}
            />
          </Animated.View>

          <View className="mt-14 flex-1 justify-center p-4">
            <Animated.Text
              className="text-center text-2xl font-bold text-white/60"
              entering={FadeInUp.duration(500).delay(500)}>
              welcome to the App
            </Animated.Text>

            <Animated.Text
              className="mt-2 text-center text-5xl font-bold text-white"
              entering={FadeInUp.duration(500).delay(500)}>
              notJust Invites
            </Animated.Text>
            <Animated.Text
              className="mb-5 text-center text-lg text-white/60"
              entering={FadeInUp.duration(500).delay(500)}>
              Create beautiful invitations.
            </Animated.Text>

            <AnimatedPressable
              onPress={() => onPressButton()}
              className="item-center self-center rounded-full bg-white px-10 py-4"
              entering={FadeInUp.duration(500).delay(500)}>
              <Text className="text-lg">Create an Event</Text>
            </AnimatedPressable>
          </View>
        </SafeAreaView>
      </BlurView>
    </View>
  );
};

export default welcome;
