import React from 'react'
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function SignUp(props) {
   
    return (
    <View style={styles.signUpContainer}>
        <Text style={styles.message}>Please Complete to Continue</Text>
        <View style={styles.signUpForm}>
            <Text style={styles.signUpText}>Username</Text>
            <View style={styles.input}>
                <TextInput 
                    style={styles.signUpInput} 
                />
            </View>
            <Text style={styles.signUpText}>Email</Text>
            <View style={styles.input}>
                <TextInput 
                    style={styles.signUpInput} 
                />
            </View>
            <Text style={styles.signUpText}>Password</Text>
            <View style={styles.input}>
                <TextInput 
                    style={styles.signUpInput} 
                />
            </View>
            <Text style={styles.signUpText}>First Name</Text>
            <View style={styles.input}>
                <TextInput 
                    style={styles.signUpInput} 
                />
            </View>
            <Text style={styles.signUpText}>Last Name</Text>
            <View style={styles.input}>
                <TextInput 
                    style={styles.signUpInput} 
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
    signUpContainer: {
    paddingTop: 44,
    },
    message: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    },
    signUpForm: {
        padding: 20,
    },
    signUpText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        padding: 5,
    },
    input: {
        alignItems: 'center',
    },
    signUpInput: {
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
        padding: 35,
        paddingTop: 25,
    },
});