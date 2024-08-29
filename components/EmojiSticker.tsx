import { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

type ButtonProps = {
  imageSize?: number;
  stickerSource?: string;
};

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: ButtonProps) {
  if (!stickerSource) {
    return null;
  }

  useEffect(() => {
    console.log(stickerSource);
    return () => {};
  }, [stickerSource]);

  return (
    <View style={styles.container}>
      {/* <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      /> */}
      <Text style={{ fontSize: imageSize }}>{stickerSource}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 350,
  },
});
