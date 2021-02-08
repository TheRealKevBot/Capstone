import React from 'react'
import { ScrollView, TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function SignUp(props) {

    const handleRegister = (event) => {
        props.navigation.navigate('Home')
    }
   
    return (
        <ScrollView style={styles.main}>
            <View style={styles.signUpContainer}>
                <Text style={styles.message1}>We appreciate your interest in MeetUp!</Text>
                <Text style={styles.message2}>Please Complete to Continue</Text>
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
    signUpContainer: {
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
        width: 250,
    },
});