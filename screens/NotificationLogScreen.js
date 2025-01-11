import { View, Text, StyleSheet } from "react-native"

function NotificationLogScreen(){
    return (
        <View style={styles.notificationlogsContainer}>
            <Text>Notification Logs Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    notificationlogsContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 15,
    },
})

export default NotificationLogScreen;