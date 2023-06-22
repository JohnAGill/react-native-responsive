# react-native-responsive

Easy responsive styles for react native

## Installation

### NPM

```sh
npm install @exorttech/react-native-responsive
```

### Yarn

```sh
yarn add @exorttech/react-native-responsive
```

## Usage

### Hook

```js
import { useResponsive } from '@exorttech/react-native-responsive';

// ...

const newStyleSheet = useResponsive(yourReactNativeStyleSheet);

<View style={newStyleSheet.container}>
  <View style={newStyleSheet.box}>
    <Text style={newStyleSheet.text}>React Native Responsive Rocks!</Text>
  </View>
</View>;

const yourReactNativeStyleSheet = StyleSheet.create({
  container: {
    width: 600,
    height: 600,
  },
  box: {
    width: 300,
    height: 120,
  },
  text: {
    fontSize: 32,
  },
});
```

### Individual functions

```js
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '@exorttech/react-native-responsive';

// ...
<View style={styles.container}>
  <View style={{ width: responsiveWidth(300), height: responsiveHeight(120) }}>
    <Text style={{ fontSize: responsiveFontSize(32) }}>
      React Native Responsive Rocks!
    </Text>
  </View>
</View>;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(600),
    height: 600,
  },
});
```

## ToDo

- Allow standard values to be overwritten in a config call

- Add more functions for changing different style values

- Add explination for standard values

- Add types definitions for ts support

* more to come

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
