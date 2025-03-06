import { View, Image, Dimensions, useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
  withTiming,
  Easing,
  interpolate,
  useAnimatedReaction,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

function MarqueItem({ itemImages, index, scroll, containerWidth, itemWidth, screenWidth }) {
  const shift = (containerWidth - screenWidth) / 2;

  const initialPosition = itemWidth * index - shift;

  const animatedStyle = useAnimatedStyle(() => {
    const position = ((initialPosition - scroll.value) % containerWidth) + shift;
    const rotation = interpolate(position, [0, screenWidth], [-1, 1]);
    const translateY = interpolate(
      position,
      [0, (screenWidth - itemWidth) / 2, screenWidth - itemWidth],
      [3, 0, 3]
    );
    return {
      left: position,
      transform: [{ rotateZ: `${rotation}deg` }, { translateY }],
    };
  });

  return (
    <Animated.View
      className="absolute h-full p-2 drop-shadow-md"
      style={[{ left: initialPosition, width: itemWidth }, animatedStyle]}>
      <Image source={itemImages.image} className="h-full w-full rounded-3xl" />
    </Animated.View>
  );
}

const Marquee = ({ testImages, 
  // onIndexChange
}) => {
  const { width: screenWidth } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemWidth = screenWidth * 0.65;

  const scroll = useSharedValue(0);
  const scrollSpeed = useSharedValue(50);

  const containerWidth = itemWidth * testImages.length;

  const gesture = Gesture.Pan()
    .onBegin((e) => {
      scrollSpeed.value = 0;
    })
    .onChange((e) => {
      scroll.value = scroll.value - e.changeX;
    })
    .onUpdate((e) => {
      // console.log('onUpdate', e);
    })
    .onFinalize((e) => {
      scrollSpeed.value = -e.velocityX;
      scrollSpeed.value = withTiming(50, { duration: 1000, easing: Easing.out(Easing.quad) });
    });

  // useEffect(() => {
  //   if (onIndexChange) {
  //     onIndexChange(activeIndex);
  //   }
  // }, [activeIndex]);

  // useAnimatedReaction(
  //   () => scroll.value,
  //   (value) => {
  //     console.log('scroll.value', value);
  //     const normalizedScroll = (value + screenWidth / 2)  % containerWidth;
  //     const activeIndex = Math.floor((normalizedScroll) / itemWidth);
  //     runOnJS(setActiveIndex)(activeIndex);
  //   }
  // );

  useFrameCallback((frameInfo) => {
    const deltaSeconds = (frameInfo.timeSincePreviousFrame ?? 0) / 1000;
    scroll.value = scroll.value + scrollSpeed.value * deltaSeconds;
  });
  return (
    <GestureDetector gesture={gesture}>
      <View className="h-full flex-row">
        {testImages.map((itemImages, index) => (
          <MarqueItem
            key={itemImages.id}
            itemImages={itemImages}
            index={index}
            scroll={scroll}
            containerWidth={containerWidth}
            itemWidth={itemWidth}
            screenWidth={screenWidth}
            onIndexChange={setActiveIndex}
          />
        ))}
      </View>
    </GestureDetector>
  );
};

export default Marquee;
