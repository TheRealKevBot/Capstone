import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import SignIn from '../components/Account/SignIn'
import SignUp from '../components/Account/SignUp'

import User from './User'

export default class Main extends Component {

    state = {
        friends: [],
        groups: [],
        user: [],
    }

    componentDidMount() {

    }

    signIn = () => {

    }

    signUp = () => {

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.mainContainer}>
                    <User user={this.state.user} friends={this.state.friends} groups={this.state.groups} />
                    <SignIn user={this.state.user} signIn={this.signIn} signUp={this.signUp} />
                    <SignUp user={this.state.user} signUp={this.signUp} />
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

