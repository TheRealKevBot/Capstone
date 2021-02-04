import React from 'react'
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function SignIn(props) {
   
    return (
    <View style={styles.signInContainer}>
        <Text style={styles.message}>Please Verify to Continue</Text>
        <View style={styles.logInForm}>
            <Text style={styles.logInText}>Username</Text>
            <View style={styles.input}>
                <TextInput 
                    style={styles.logInInput} 
                />
            </View>
            <Text style={styles.logInText}>Password</Text>
            <View style={styles.input}>
            <TextInput 
                style={styles.logInInput} 
            />
            </View>
            <View style={styles.verifyButton}>
                <Button
                    title='Authenticate'
                />
            </View>
            <View style={styles.registerButton}>
                <Button 
                    title='Register'
                />
            </View>
        </View>
    </View>   
    )
}

const styles = StyleSheet.create({
    signInContainer: {
    paddingTop: 44,
    },
    message: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    },
    logInForm: {
        padding: 80,
    },
    logInText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        padding: 5,
    },
    input: {
        alignItems: 'center',
    },
    logInInput: {
        backgroundColor: 'white',
        color: 'black',
        width: 250,
        padding: 5,
    },
    verifyButton: {
        paddingTop: 20,
        padding: 10,
    },
    registerButton: {
        padding: 10,
        paddingTop: 10,
    },
});