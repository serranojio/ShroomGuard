import { View, Text, StyleSheet } from "react-native"

function ProfileScreen(){
    return (
        <View style={styles.profileContainer}>
            <Text>Profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 15,
    },
})

export default ProfileScreen;