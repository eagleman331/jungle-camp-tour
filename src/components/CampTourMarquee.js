import { router, Stack } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export const FlatCategories = ({ item }) => {
  const { width, height } = useWindowDimensions();
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(0.9, { damping: 5, stiffness: 150 }))} // Press effect
      onPressOut={() => (scale.value = withSpring(1, { damping: 5, stiffness: 150 }))} // Release effect
      onPress={() => router.push("/reactMap")} // OnPress event
    >
      <Animated.View
        key={item.id}
        className="flex-row justify-between rounded-lg bg-blue-500"
        style={[
          styles.button,
          animatedStyle,
          { marginTop: 20, height: height * 0.2, width: width * 0.9 },
        ]}>
        <View className="mt-4 w-3/5">
          <Text className="ml-4 text-lg font-bold text-slate-950 antialiased">{item.title}</Text>
          <Text className="ml-4 text-wrap text-base antialiased">
            {item.description}{' '}
          </Text>
        </View>

        <View className="w-2/5 items-center justify-center bg-white">
          <Image
            className="bottom-1 rounded-lg drop-shadow-xl"
            style={{ width: 100, height: 100 }}
            source={item.image}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
};



const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
