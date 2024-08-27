import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "../components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("../assets/images/background-image.png");

// const PlaceholderImage = require("../assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(PlaceholderImage);

  // const pickImageAsync = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   });
  //   if (!result.canceled) {
  //     setSelectedImage(result.assets[0]);
  //   } else {
  //     alert("You did not select any image");
  //   }
  // };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer selectedImage={selectedImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
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
});
