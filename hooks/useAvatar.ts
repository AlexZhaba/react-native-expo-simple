import { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const AVATAR_BASE_64_KEY = "AVATAR_BASE_64_KEY";

const getImageFromStorage = async () => {
  try {
    return await AsyncStorage.getItem(AVATAR_BASE_64_KEY);
  } catch {
    return null;
  }
};

const saveImageToStorage = async (uri: string) => {
  try {
    return await AsyncStorage.setItem(AVATAR_BASE_64_KEY, uri);
  } catch {
    return null;
  }
};

export const useAvatar = () => {
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const uploadNewImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });

    const imageData = result?.assets?.[0].base64;

    if (!result.canceled && imageData) {
      setImageBase64(imageData);
      saveImageToStorage(imageData);
    }
  };

  useEffect(() => {
    getImageFromStorage().then((val) => setImageBase64(val));
  });

  const fileUri = useMemo(() => {
    return `data:image/png;base64,${imageBase64}`;
  }, [imageBase64]);

  return { fileUri, uploadNewImage };
};
