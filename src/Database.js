import React, { Component, createContext } from "react";
import { withRouter } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const DatabaseContext = createContext();

class DatabaseProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cloud: [],
            restaurants: [],
            user: "",
            profile: ""
        };
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.signUp = this.signUp.bind(this);
        this.updateUserData = this.updateUserData.bind(this);
        this.cancelUpdate = this.cancelUpdate.bind(this);

        const firebaseConfig = {
            apiKey: "AIzaSyB6F6PHFhFdLa_WeVubFSpDHbItasCSXs0",
            authDomain: "ueat-c91c3.firebaseapp.com",
            databaseURL: "https://ueat-c91c3.firebaseio.com",
            projectId: "ueat-c91c3",
            storageBucket: "ueat-c91c3.appspot.com",
            messagingSenderId: "47834770750",
            appId: "1:47834770750:web:7b09cc2d075e3ebaa5106f",
            measurementId: "G-1DE1FNH67H"
        };
        firebase.initializeApp(firebaseConfig);
    }

    componentDidMount() {
        let cloudData = firebase.database().ref();
        cloudData.on('child_added', (data) => {
            this.setState({
                cloud: { ...this.state.cloud, [data.key]: data.val() }
            });
        });

        cloudData.on('child_changed', (data) => {
            this.setState({
                cloud: { ...this.state.cloud, [data.key]: data.val() }
            });
        });

        cloudData.on('child_removed', (data) => {
            this.setState({
                cloud: this.state.cloud.filter(d => d.key !== data.key)
            });
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.cloud !== prevState.cloud) {
            let data = [];
            for (var key in this.state.cloud) {
                data.push(this.state.cloud[key]);
            }
            this.setState({ restaurants: data });
        }
    }

    signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            alert(error.message);
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user, profile: this.state.cloud[user.uid]});
                this.props.history.push("/");
            }
        });
    }

    signOut = () => {
        firebase.auth().signOut();
        this.setState({ user: "", profile: "" });
    }

    signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            alert(error.message);
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
                this.props.history.push("/Profile");
            }
        });
    }

    updateUserData = (userId, state) => {
        firebase.database().ref(userId).set(state);
        this.setState({ profile: state });
        this.props.history.goBack();
    }

    cancelUpdate = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <DatabaseContext.Provider value={{
                ...this.state,
                signIn: this.signIn,
                signOut: this.signOut,
                signUp: this.signUp,
                updateUserData: this.updateUserData,
                cancelUpdate: this.cancelUpdate
            }}>
                {this.props.children}
            </DatabaseContext.Provider>
        );
    }
}

export default withRouter(DatabaseProvider);