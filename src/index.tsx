import { Dimensions } from 'react-native';

const standardWidth = 430;
const standardHeight = 932;
export function responsiveWidth(value: number): number {
  const dimensions = Dimensions.get('window');
  const widthDifference = standardWidth - dimensions.width;
  if (widthDifference !== 0) {
    const differenceAsPercentage = widthDifference / dimensions.width;
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
