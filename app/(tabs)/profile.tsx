import { Image, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/profile-image.png")}
        resizeMode="cover"
        style={styles.profileImage}
      />

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
