import React from 'react'
import { ScrollView, TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default function User(props) {

    const handlePlans = (event) => {
        props.navigation.navigate('Plans')
    }
    const handleGroups = (event) => {
        props.navigation.navigate('Groups')
    }
    const handleMessages = (event) => {
        props.navigation.navigate('Messages')
    }
    const handleAccount = (event) => {
        props.navigation.navigate('Account')
    }

    return (
        <ScrollView style={styles.main}>
            <View style={styles.userContainer}>
                <View style={styles.buttonsContainer}>
                    <View style={styles.groupsButton}>
                        <Button 
                            title='Groups'
                            onPress={handleGroups}
                        />
                    </View>
                    <View style={styles.plansButton}>
                        <Button 
                            title='Messages'
                            onPress={handleMessages}
                        />
                    </View>
                    <View style={styles.plansButton}>
                        <Button 
                            title='Plans'
                            onPress={handlePlans}
                        />
                    </View>
                    <View style={styles.accountButton}>
                        <Button 
                            title='Account'
                            onPress={handleAccount}
                        />
                    </View>
                </View>
                <Text style={styles.feedMessage}>My Feed</Text>
                <View style={styles.feed}>
                    
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
    userContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    buttonsContainer: {
    },
    plansButton: {
    },
    groupsButton: {
    },
    accountButton: {
    },
    feedMessage: {       
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 15,
    },
    feed: {
 
    },
});
