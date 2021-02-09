import React from 'react'
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function Chats(props) {
    return (
        <View style={styles.messagesContainer}>
            <Text style={styles.welcome}>Welcome to your chats!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messagesContainer: {
        backgroundColor: 'black',
        viewHeight: 100,
        viewWidth: 100,
        flex: 1,
    },
    welcome: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 15,
    },
});
