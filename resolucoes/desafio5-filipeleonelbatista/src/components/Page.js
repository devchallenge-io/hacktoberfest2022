import * as React from 'react';
import { ScrollView, View } from 'react-native';

export default function Page({ children }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#191A2C"
    }}>
      <ScrollView>
        {children}
      </ScrollView>
    </View>
  );
}