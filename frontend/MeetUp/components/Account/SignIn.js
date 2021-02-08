import React from 'react'
import { ScrollView, TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function SignIn(props) {

    const handleRegister = (event) => {
        props.navigation.navigate('SignUp')
    }

    const handleVerify = (event) => {
        props.navigation.navigate('Home')
    }
   
    return (
        <ScrollView style={styles.main}>
            <View style={styles.signInContainer}>
                <Text style={styles.message1}>Welcome To MeetUp!</Text>
                <Text style={styles.message2}>Please Verify to Continue</Text>
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
                            onPress={handleVerify}
                        />
                    </View>
                    <View style={styles.registerButton}>
                        <Button 
                            title='Register'
                            onPress={handleRegister}
                        />
                    </View>
                </View>
            </View>   
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        viewHeight: 100,
        viewWidth: 100,
        flex: 1,
    },
    signInContainer: {
        backgroundColor: 'black',
        paddingTop: 44,
        alignItems: 'center',
        flex: 1,
    },
    message1: {
        color: 'white',
        fontSize: 26,
        textAlign: 'center',
        padding: 15,
    },
    message2: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    },
    logInForm: {
        padding: 40,
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
        width: 250,
    },
    registerButton: {
        padding: 10,
        paddingTop: 10,
        width: 250,
    },
});