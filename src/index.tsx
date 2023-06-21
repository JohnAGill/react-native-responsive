import { Dimensions } from 'react-native';
import _ from 'lodash';

type StyleSheetType = any;
const standardWidth = 430;
const standardHeight = 932;
export function responsiveWidth(value: number): number {
  const dimensions = Dimensions.get('window');
  const widthDifference = standardWidth - dimensions.width;
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
export function responsiveHeight(value: number): number {
  const dimensions = Dimensions.get('window');
  const heightDifference = standardHeight - dimensions.height;
  if (heightDifference !== 0) {
    const differenceAsPercentage = heightDifference / dimensions.height;
    const round = value * differenceAsPercentage;
    const newValue = value - round;
    return newValue;
  }
  return value;
}

export function responsiveFontSize(value: number): number {
  const dimensions = Dimensions.get('window');
  const heightDifference = standardHeight - dimensions.height;
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

export function useResponsive(styleSheet: StyleSheetType) {
  const clone = _.cloneDeep(styleSheet);
  for (const styleClass in clone) {
    const styleToCheck = clone[styleClass];
    if (styleToCheck?.width && typeof styleToCheck?.width === 'number') {
      clone[styleClass].width = responsiveWidth(styleToCheck.width);
    }
    if (styleToCheck?.height && typeof styleToCheck?.height === 'number') {
      clone[styleClass].height = responsiveHeight(styleToCheck.height);
    }
    if (styleToCheck?.fontSize && typeof styleToCheck?.fontSize === 'number') {
      clone[styleClass].fontSize = responsiveFontSize(styleToCheck.fontSize);
    }
  }
  return clone;
}
