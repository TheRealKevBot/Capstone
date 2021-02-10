import React from 'react'
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function Account(props) {
    return (
        <View style={styles.accountContainer}>
            <Text style={styles.welcome}>Welcome to your account!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    accountContainer: {
        backgroundColor: 'black',
        // viewHeight: 100,
        // viewWidth: 100,
        flex: 1,
    },
    welcome: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 15,
    },
});
