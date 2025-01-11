import { View, Text, StyleSheet } from "react-native"

function HomeScreen(){
    return (
        <View style={styles.homeContainer}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 15,
    },
})

export default HomeScreen;