import { act, fireEvent, render } from "@testing-library/react-native";
import Profile from "./profile";

export const IMAGE_IN_BASE_64 = 'base64code'


jest.mock('expo-image-picker', () => {
  return {
    requestMediaLibraryPermissionsAsync: jest.fn().mockImplementation(() => ({
      status: 'granted'
    })),
    launchImageLibraryAsync: jest.fn().mockImplementation(() => ({
      canceled: false,
      assets: [
        { base64: IMAGE_IN_BASE_64 }
      ]
    }))
  }
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

test("Default avatar used from storage", async () => {
  const result = render(<Profile />);
  const profileImage = result.getByTestId('profileImage')

  expect(profileImage.props.source.uri).toBe(`data:image/png;base64,null`)

  await act(() => {
    fireEvent.press(result.getByTestId('chooseImageButton'))

  })

  await new Promise(resolve => setTimeout(resolve, 1e3))
  expect(profileImage.props.source.uri).toBe(`data:image/png;base64,${IMAGE_IN_BASE_64}`)
});
