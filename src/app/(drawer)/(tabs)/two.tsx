import LottieView from 'lottie-react-native';
import { FlatList, Text, useWindowDimensions, View } from 'react-native';
import { useRef } from 'react';
import { FaqsData } from '~/src/assets/DataApp/FaqsData';
import  QuestionAnswer  from '~/src/components/Marques/QuestionAnswer';

export default function Home() {
  const { width, height } = useWindowDimensions();
  const animation = useRef(null);
console.log()
  return (
    <>
      <View className="flex-1">
        <View
          style={{
            backgroundColor: '#fff',
            alignItems: 'center',
            flex: 1,
          }}>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 300,
              height: 300,
            }}
            source={require('../../../assets/lottie/construction.json')}
          />
          <View
            className="w-11/12 rounded-xl bg-green-400 drop-shadow-md"
            style={{ height: height * 0.55 }}>
            <Text className="mt-2 text-center text-xl font-bold">Frequently Ask Questions</Text>
            <FlatList
              data={FaqsData}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <QuestionAnswer item={item}/>}
            />
          </View>
        </View>
      </View>
    </>
  );
}
