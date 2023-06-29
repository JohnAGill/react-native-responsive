import { Dimensions } from 'react-native';
import _ from 'lodash';

type StyleSheetType = {
  [key: string]: {
    [key: string]: string | number;
  };
};
const standardWidth = 430;
const standardHeight = 932;

export function responsiveWidth(value: number, standard?: number): number {
  const standardtoUse = standard || standardWidth;
  const dimensions = Dimensions.get('window');
  const widthDifference = standardtoUse - dimensions.width;
  if (widthDifference !== 0) {
    const differenceAsPercentage = widthDifference / dimensions.width;
    if (value < 200 && widthDifference > 50) {
      const round = value * differenceAsPercentage * 2;
      const newValue = value - round;
      return newValue;
    }
    const round = value * differenceAsPercentage;
    const newValue = value - round;
    return newValue;
  }
  return value;
}

export function responsiveHeight(value: number, standard?: number): number {
  const standardtoUse = standard || standardHeight;

  const dimensions = Dimensions.get('window');
  const heightDifference = standardtoUse - dimensions.height;
  if (heightDifference !== 0) {
    const differenceAsPercentage = heightDifference / dimensions.height;
    const round = value * differenceAsPercentage;
    const newValue = value - round;
    return newValue;
  }
  return value;
}

export function responsiveFontSize(value: number, standard?: number): number {
  const standardtoUse = standard || standardHeight;

  const dimensions = Dimensions.get('window');
  const heightDifference = standardtoUse - dimensions.height;
  if (heightDifference !== 0) {
    const differenceAsPercentage = heightDifference / dimensions.height;
    if (heightDifference > 150) {
      const round = (value * differenceAsPercentage) / 3;

      const newValue = value - round;

      return newValue;
    }
    const round = value * differenceAsPercentage;

    const newValue = value - round;

    return newValue;
  }
  return value;
}

export function useResponsive(
  styleSheet: StyleSheetType,
  _height?: number,
  _width?: number
) {
  const height = _height || standardHeight;
  const width = _width || standardWidth;

  const clone = _.cloneDeep(styleSheet);
  for (const styleClass in clone) {
    const styleToCheck = clone[styleClass] || {};
    if (styleToCheck?.width && typeof styleToCheck?.width === 'number') {
      styleToCheck.width = responsiveWidth(styleToCheck.width, width);
    }
    if (styleToCheck?.height && typeof styleToCheck?.height === 'number') {
      styleToCheck.height = responsiveHeight(styleToCheck.height, height);
    }
    if (styleToCheck?.fontSize && typeof styleToCheck?.fontSize === 'number') {
      styleToCheck.fontSize = responsiveFontSize(styleToCheck.fontSize, height);
    }
  }
  return clone;
}

interface Options {
  width?: number;
  height?: number;
}

export const createResponsive = (options: Options) => {
  return (styleSheet: StyleSheetType) =>
    useResponsive(styleSheet, options.height, options.width);
};
