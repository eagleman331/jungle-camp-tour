import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function MapLayout() {
  return (
    <Stack>
        <Stack.Screen name="SiteCategory" options={{ headerShown: false }} />
      <Stack.Screen name="SiteCategory" options={{ headerShown: false }} />
    </Stack>
  );
}
