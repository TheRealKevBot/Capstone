import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import User from './User'
import SignIn from '../components/Account/SignIn'
import SignUp from '../components/Account/SignUp'
import Plans from '../components/Users/Plans'
import Groups from '../components/Users/Groups'
import Account from '../components/Users/Account'
import Chats from '../components/Users/Chats'

import AuthScreen from '../screens/AuthScreen'

const Stack = createStackNavigator()

export default class Main extends Component {

    state = {
        error: '',
        friends: [],
        groups: [],
        chats: [],
        user: {},
    }

    componentDidMount() {
        let token = AsyncStorage.getItem('token')
        if(token){
            fetch("http://localhost:3000/profile", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}` 
                }
            })
            .then(response => response.json())
            .then(result => {
                if(result.id){
                    this.setState({ user: result })
                }
            })
        }
    }

    signUp = user => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    f_name: user.fName,
                    l_name: user.lName
                }
            })
        })
        .then(response => response.json())
        .then(user => this.setState({ user }))
    }

    signIn = (username, password) => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        })
        .then(response => response.json())
        .then(result => {
            if (result.token){
            AsyncStorage.setItem('token', result.token)
            this.setState({
                user: result.user
                })
            }
            else {
                this.setState({
                    error: result.error
                })
            }
        })
    }

    logOut = (user) => {

    }

    deleteUser = (user) => {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .then(this.setState({ user: null }))
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name='SignIn'>
                        {(stackProps) => <SignIn {...stackProps} user={this.state.user} signIn={this.signIn} signUp={this.signUp} error={this.state.error} /> }
                    </Stack.Screen>
                    <Stack.Screen name='SignUp'>
                        {(stackProps) => <SignUp {...stackProps} user={this.state.user} signUp={this.signUp} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Home'> 
                        {(stackProps) => <User {...stackProps} user={this.state.user} /> }
                    </Stack.Screen>
                    <Stack.Screen name="Groups">
                        {(stackProps) => <Groups {...stackProps} user={this.state.user} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Chats'>
                        {(stackProps) => <Chats {...stackProps} user={this.state.user} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Plans'>
                        {(stackProps) => <Plans {...stackProps} user={this.state.user} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Account'>
                        {(stackProps) => <Account {...stackProps} user={this.state.user} /> }
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

