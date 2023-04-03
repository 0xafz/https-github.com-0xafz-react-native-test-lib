import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-awesome-library2' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const AwesomeLibrary2 = NativeModules.AwesomeLibrary2
  ? NativeModules.AwesomeLibrary2
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return AwesomeLibrary2.multiply(a, b);
}

export function add(a: number, b: number): number {
  return AwesomeLibrary2.add(a, b);
}
