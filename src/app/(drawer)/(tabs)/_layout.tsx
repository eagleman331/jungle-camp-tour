import { Stack, Tabs } from 'expo-router';
import { TabBarIcon } from '~/src/components/TabBarIcon';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="(TouristMap)"
        options={{
          title: 'Camp Tour',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="campground" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'FAQs',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="clipboard" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{href:null,}}
        />
    </Tabs>
  );
}
