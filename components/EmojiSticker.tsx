import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type EmojiStickerProps = {
  imageSize: number;
  stickerSource: string;
};

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: EmojiStickerProps) {
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    console.log(stickerSource);
  }, [stickerSource]);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      scale.value = scale.value === 1 ? 2 : 1;
    });

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: withSpring(scale.value) },
      ],
      fontSize: imageSize,
    };
  });

  const composed = Gesture.Simultaneous(doubleTap, drag);

  return (
    <View style={styles.container}>
      <GestureDetector gesture={composed}>
        <Animated.Text style={[styles.sticker, animatedStyle]}>
          {stickerSource}
        </Animated.Text>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 350,
  },
  sticker: {
    textAlign: "center",
  },
});
