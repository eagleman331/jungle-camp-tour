import { View, Text } from 'react-native';
import React from 'react';

const QuestionAnswer = ({ item }) => {
  return (
    <View key={item.id} className="mt-2 p-2">
      <Text className="font-bold">{item.question}</Text>
      <Text className="ml-2 mt-2 font-light">{item.answer}</Text>
    </View>
  );
};

export default QuestionAnswer;
