# react-native-responsive

Easy responsive styles for react native

## Motivation

A common problem when building mobile apps in React Native is style consistency across different device sizes.

The aim of this package is to tweak your styles fixed values to produce a more consistent layout between different devices.

As outlined below I've used the current largest iPhone as the default standard values but these can be changed by the user as needed.

The current working principle is to scale down fixed dimensions to account for the smaller screen space,

However I would like to introduce more functionality that allows for the opposite, meaning your mobile styles can be scaled up to work on tablets while maintaining the overall aesthetic.

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

### Custom Hook

```js
// responsiveStyles.ts
import { createResponsive } from '@exorttech/react-native-responsive';

const useResponsive = createResponsive({ width: 420, height: 932 });

export default useResponsive;

// App.tsx
import useCustomResponsive from './responseiveStyles';

const newStyleSheet = useCustomResponsive(yourReactNativeStyleSheet);

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

## Standard Values

The Standard values are based on the iPhone 14 pro max width and height.

These values can be changed to fit the users needs by using the custom hook instance outlined above

## ToDo

- Add more functions for changing different style values

- Add types definitions for ts support

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
