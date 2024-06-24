import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAvatar } from "@/hooks/useAvatar";


export default function Profile() {
  const { fileUri, uploadNewImage } = useAvatar();

  return (
    <View style={styles.container}>
      {fileUri && (
        <Image
          source={{
            uri: fileUri
          }}
          resizeMode="cover"
          style={styles.profileImage}
        />
      )}

      <TouchableOpacity
        onPress={uploadNewImage}>
        <Text>
          Choose Image
        </Text>
      </TouchableOpacity>
      <Text style={styles.name}>AlexZhaba</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  profileImage: {
    width: 300,
    height: 300,
  },
  container: {
    padding: 20,
    display: "flex",
    gap: 20,
    alignItems: "center",
  },

  name: {
    fontSize: 30,
  },
});
