import React from 'react'
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function Plans(props) {
    return (
        <View style={styles.plansContainer}>
            <Text style={styles.welcome}>Welcome to your plans!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    plansContainer: {
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
