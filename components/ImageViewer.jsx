import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";


  

export default function App({ selectedImage}) {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={selectedImage} style={styles.image} />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1,
        paddingTop: 50
    },
    image: {
        width: 350,
        height: 400,
        borderRadius: 20

    }
})









// import React, { useState } from 'react';
// import { StyleSheet, View, Image, Button } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';



// export default function App() {
//   const [image, setImage] = useState<string | null>(null);

//   const pickImage = async () => {
//     try {
//       const croppedImage = await ImagePicker.openPicker({
//         width: 300,       // Desired width of the cropped image
//         height: 300,      // Desired height of the cropped image
//         cropping: true,   // Enable cropping functionality
//       });
//       setImage(croppedImage.path);
//     } catch (error) {
//       console.log('Error picking image: ', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Pick and Crop Image" onPress={pickImage} />
//       {image && (
//         <Image source={{ uri: image }} style={styles.image} />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 300,
//     height: 300,
//     marginTop: 20,
//     borderRadius: 10,
//   },
// });
