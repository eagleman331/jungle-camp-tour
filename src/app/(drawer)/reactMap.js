import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const reactMap = () => {
  const [locRegion, setLocRegion] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          longitude: 121.36279850956352,
          latitude:  14.534941949811,
          latitudeDelta: 0.00031,
          longitudeDelta: 0.00031,
        }}
      />
    </View>
  );
};

export default reactMap;
