import React, { Component } from 'react'
import { View, Text } from "react-native"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import firebase from 'firebase'
import LoginForm from './components/LoginForm'


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDVxr6vu9Q7OBRt4LLow6WNcWevT-Z1PFs",
            authDomain: "manager-c8d6f.firebaseapp.com",
            databaseURL: "https://manager-c8d6f.firebaseio.com",
            projectId: "manager-c8d6f",
            storageBucket: "manager-c8d6f.appspot.com",
            messagingSenderId: "295968628423"
        }
        firebase.initializeApp(config)
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App