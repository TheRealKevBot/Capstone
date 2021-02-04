import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import SignIn from '../components/Account/SignIn'
import SignUp from '../components/Account/SignUp'

export default class Main extends Component {

    state = {
        user: [],
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.mainContainer}>
                <SignIn user={this.state.user} />
                <SignUp user={this.state.user} />
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
    backgroundColor: 'black',
    },
});

