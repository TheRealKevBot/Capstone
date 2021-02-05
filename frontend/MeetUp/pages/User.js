import React from 'react'
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function User(props) {

    return (
        <View style={styles.userContainer}>
            <View style={styles.buttonsContainer}>
                <View style={styles.plansButton}>
                    <Button 
                        title='Plans'
                    />
                </View>
                <View style={styles.groupsButton}>
                    <Button 
                        title='Groups'
                    />
                </View>
                <View style={styles.accountButton}>
                    <Button 
                        title='Account'
                    />
                </View>
            </View>
            <View style={styles.feed}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
    },
    buttonsContainer: {
    },
    plansButton: {
    },
    groupsButton: {
    },
    accountButton: {
    },
    feed: {
    },
});
