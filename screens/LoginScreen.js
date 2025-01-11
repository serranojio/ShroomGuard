import { View, Text, StyleSheet } from "react-native"

function LoginScreen(){
    return (
        <View style={styles.loginContainer}>
            <Text>Login Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 15,
    },
})

export default LoginScreen;