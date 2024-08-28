import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type ButtonProps = {
  onPress?: () => void;
};

export default function CircleButton({ onPress }: ButtonProps) {
  return (
    <View style={styles.CircleButtonContainer}>
      <Pressable style={styles.CircleButton} onPress={onPress}>
        <MaterialIcons name="add" size={40} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  CircleButtonContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 60,
    borderWidth: 5,
    borderColor: "#ffd33d",
    borderRadius: 40,
    padding: 3,
  },
  CircleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: "#fff",
  },
});
