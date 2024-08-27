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