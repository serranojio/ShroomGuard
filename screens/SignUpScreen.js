import { View, Text, StyleSheet } from "react-native"

function SignUpScreen(){
    return (
        <View style={styles.signupContainer}>
            <Text>Signup Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    signupContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 15,
    },
})

export default SignUpScreen;