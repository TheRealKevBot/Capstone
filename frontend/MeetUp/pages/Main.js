import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import User from './User'
import SignIn from '../components/Account/SignIn'
import SignUp from '../components/Account/SignUp'
import Plans from '../components/Users/Plans'
import Groups from '../components/Users/Groups'
import Account from '../components/Users/Account'
import Messages from '../components/Users/Messages'

const Stack = createStackNavigator()

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
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name='SignIn'>
                        {(stackProps) => <SignIn {...stackProps} user={this.state.user} signIn={this.signIn} signUp={this.signUp} /> }
                    </Stack.Screen>
                    <Stack.Screen name='SignUp'>
                        {(stackProps) => <SignUp {...stackProps} user={this.state.user} signUp={this.signUp} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Home'> 
                        {(stackProps) => <User {...stackProps} user={this.state.user} friends={this.state.friends} groups={this.state.groups} /> }
                    </Stack.Screen>
                    <Stack.Screen name="Groups">
                        {(stackProps) => <Groups {...stackProps} user={this.state.user} friends={this.state.friends} groups={this.state.groups} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Messages'>
                        {(stackProps) => <Messages {...stackProps} user={this.state.user} friends={this.state.friends} groups={this.state.groups} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Plans'>
                        {(stackProps) => <Plans {...stackProps} user={this.state.user} friends={this.state.friends} groups={this.state.groups} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Account'>
                        {(stackProps) => <Account {...stackProps} user={this.state.user} friends={this.state.friends} groups={this.state.groups} /> }
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
    backgroundColor: 'black',
    },
});

