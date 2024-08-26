import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ImageViewer from '../components/ImageViewer';
import Button from '@/components/Button';

// const PlaceholderImage = require('../assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer />
      </View>
      <View style={styles.footerContainer}>

      </View>
      <StatusBar style="auto" />
      <Button label='Choose a photo' />
      <Button label='Use this photo' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    alignItems: "center",
    flex: 1 / 3
  }
});

