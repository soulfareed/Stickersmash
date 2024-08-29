import React, { useEffect } from "react";
import { View, StyleSheet, Button, Dimensions } from "react-native";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const { height } = Dimensions.get("window");

interface EmojiPickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (emoji: string) => void;
}

export default function EmojiPicker({
  visible,
  onClose,
  onSelect,
}: EmojiPickerProps) {
  const translateY = useSharedValue(height);

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, { duration: 300 });
    } else {
      translateY.value = withTiming(height, { duration: 300 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <>
      {visible && (
        <Animated.View style={[styles.animatedContainer, animatedStyle]}>
          <View style={styles.container}>
            <Button
              title="Close"
              onPress={() => {
                onClose();
              }}
            />
            <EmojiSelector
              onEmojiSelected={(emoji) => {
                onSelect(emoji);
                onClose(); // Close the modal after selecting an emoji
              }}
              showSearchBar={true}
              showHistory={true}
              showTabs={true}
              category={Categories.all}
              columns={5} // Adjust the number of columns
            />
          </View>
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  animatedContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%", // Adjust as needed
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    padding: 5,
  },
});
