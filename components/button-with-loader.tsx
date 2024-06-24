import React from "react";
import { ActivityIndicator, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonWithLoaderProps {
  isLoading: boolean;
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
}

export const ButtonWithLoader = ({ isLoading, onPress, children }: ButtonWithLoaderProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isLoading} style={{ width: '100%', }}>
      <View style={{
        backgroundColor: isLoading ? "rebeccapurple" : "slateblue",
        ...styles.button,
      }}>
        {isLoading ? (
          <ActivityIndicator size="small" color="yellow" />
        ) : (
          <Text style={styles.text}>
            {children}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )

}

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    height: 40,
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  }
})