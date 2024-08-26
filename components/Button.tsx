import { StyleSheet, Text, View, Pressable } from "react-native";

type ButtonProps = {
    label: string;
    onPress: () => void;
    style?: object;
    type?: "primary" | "secondary" | "danger"; // Example types for different button styles
};

export default function Button({ label, onPress, style, type = "primary" }: ButtonProps) {
    // Define different styles based on the type prop
    const buttonStyles = [
        styles.buttonBase,
        type === "primary" && styles.buttonPrimary,
        type === "secondary" && styles.buttonSecondary,
        type === "danger" && styles.buttonDanger,
        style // custom styles passed from the parent component
    ];

    return (
        <View style={styles.container}>
            <Pressable style={buttonStyles} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 70,
        marginHorizontal: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonBase: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonPrimary: {
        backgroundColor: 'grey',
    },
    buttonSecondary: {
        backgroundColor: 'blue',
    },
    buttonDanger: {
        backgroundColor: 'red',
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
    },
});
<Button
    label="Click Me"
    onPress={() => alert('Button Pressed')}
    type="primary" // or "secondary" or "danger"
    style={{ marginVertical: 10 }} // Optional custom style
/>
