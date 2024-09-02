// import { useEffect } from "react";
// import { View, Image, Text, StyleSheet, ImageStyle } from "react-native";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from "react-native-reanimated";

// type ButtonProps = {
//   imageSize: number;
//   stickerSource?: string;
//   imageStyle?: Animated.AnimateStyle<ImageStyle>;
// };

// export default function EmojiSticker({
//   imageSize,
//   stickerSource,
// }: ButtonProps) {
//   if (!stickerSource) {
//     return null;
//   }

//   const scaleImage = useSharedValue(imageSize);

//   useEffect(() => {
//     console.log(stickerSource);
//     return () => {};
//   }, [stickerSource]);

//   const doubleTap = Gesture.Tap()
//     .numberOfTaps(2)
//     .onStart(() => {
//       if (scaleImage.value === imageSize) {
//         scaleImage.value = scaleImage.value * 2;
//       }
//     });

//   imageStyle = useAnimatedStyle(() => {
//     return {
//       fontSize: withSpring(scaleImage.value),
//     };
//   });
//   return (
//     <View style={styles.container}>
//       <GestureDetector gesture={doubleTap}>
//         <Animated.Text style={[imageStyle, { fontSize: imageSize }]}>
//           {stickerSource}
//         </Animated.Text>
//       </GestureDetector>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 350,
//   },
// });
