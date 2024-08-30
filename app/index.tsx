import { Children, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import ImageViewer from "../components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import CircleButton from "../components/CircleButton";
import IconButton from "../components/IconButton";
import EmojiPicker from "../components/EmojiPicker";
import EmojiSticker from "../components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PlaceholderImage = require("../assets/images/background-image.png");

export default function App() {
  const [showAppOptions, setshowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(PlaceholderImage);

  // const [isModalVisible, setIsModalVisible] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [isPickerVisible, setPickerVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
      setshowAppOptions(true);
    } else {
      alert("You did not select any image");
    }
  };

  const onReset = () => {
    setshowAppOptions(false);
    setSelectedEmoji(null);
    setSelectedImage(PlaceholderImage);
  };

  const onAddSticker = () => {
    setPickerVisible(true);
  };

  // const onModalClose = () => {
  //   setIsModalVisible(false);
  // };

  const onSaveImageAsync = async () => {};

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer selectedImage={selectedImage} />
        {selectedEmoji && (
          <EmojiSticker imageSize={100} stickerSource={selectedEmoji} />
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setshowAppOptions(true)}
          />
        </View>
      )}

      {/* <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}
      ></EmojiPicker> */}

      <EmojiPicker
        visible={isPickerVisible}
        onClose={() => setPickerVisible(false)}
        onSelect={(emoji) => setSelectedEmoji(emoji)}
      />

      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    alignItems: "center",
    flex: 1 / 3,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
