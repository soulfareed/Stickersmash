import { useRef, useState } from "react";
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
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";

const PlaceholderImage = require("../assets/images/background-image.png");

type SelectedEmoji = {
  emoji: string;
  size: number;
  x: number;
  y: number;
};
export default function App() {
  const imageRef = useRef(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const [showAppOptions, setshowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(PlaceholderImage);

  const [selectedEmoji, setSelectedEmoji] = useState<string[]>([]);
  const [isPickerVisible, setPickerVisible] = useState<boolean>(false);
  if (status === null) {
    requestPermission();
  }

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
    setSelectedEmoji([]);
    setSelectedImage(PlaceholderImage);
  };

  const onAddSticker = () => {
    setPickerVisible(true);
  };

  // const onModalClose = () => {
  //   setIsModalVisible(false);
  // };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 450,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("saved");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer selectedImage={selectedImage} />
          {selectedEmoji && selectedEmoji.length
            ? selectedEmoji.map((ele) => {
                return <EmojiSticker imageSize={60} stickerSource={ele} />;
              })
            : null}
        </View>
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
        onSelect={(emoji) => {
          console.log("current emoji", emoji);
          let arr = selectedEmoji;

          arr.push(emoji);
          setSelectedEmoji(arr);
        }}
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
