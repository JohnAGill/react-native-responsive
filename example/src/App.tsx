import * as React from 'react';

import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useResponsive } from '@exorttech/react-native-responsive';
import useCustomResponsive from './responseiveStyles';

export default function App() {
  const newStyleSheet = useCustomResponsive(styles);

  return (
    <SafeAreaView style={newStyleSheet.container}>
      <ScrollView>
        <View style={newStyleSheet.box}>
          <View style={newStyleSheet.line1} />
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={newStyleSheet.text}>Hello i am some text</Text>
              <View style={newStyleSheet.box2} />
              <Text style={newStyleSheet.text}>Hello i am some text</Text>
            </View>
            <Text style={newStyleSheet.text}>Hello i am some text</Text>

            <View style={newStyleSheet.box2} />
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={newStyleSheet.text}>Hello i am some text</Text>

              <View style={newStyleSheet.box2} />
              <Text style={newStyleSheet.text}>Hello i am some text</Text>
            </View>
            <Text style={newStyleSheet.text}>Hello i am some text</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'red',
  },
  box: {
    width: 400,
    height: 300,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  box2: { height: 50, width: 100, backgroundColor: 'pink' },
  text: { fontSize: 16 },
  line1: {
    width: 400,
    height: 100,
    backgroundColor: 'red',
  },
  line2: {
    width: 300,
    height: 100,
    backgroundColor: 'green',
  },
  line3: {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
  },
});
