import firebase from 'firebase';
import {firebaseConfig} from '../../core';

class AuthService {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
    signIn(email, password) {
        return firebase.auth()
            .signInWithEmailAndPassword(email, password);
    }
    signOut() {
        return firebase.auth().signOut();
    }
    observeAuthChanges(observer) {
        firebase.auth().onAuthStateChanged(observer);
    }
    createUser(user) {
        return firebase.database().ref('users/' + user.uid).set(user);
    }
    getUser(uid) {
        var userRef = firebase.database().ref('/users/'+uid);
        return userRef.once('value').then(function(snapshot) {
            return snapshot.val();
        });
    }
}

let authService = new AuthService();

export default authService;
