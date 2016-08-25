import {action, observable} from 'mobx';
import authService from '../services/auth.service';

export class AuthStore {
    @observable user = null;
    @observable firebaseUser = null;
    @observable emailPswdSignIn = null;

    init() {
    }

    /**
     * Sets the User after the user logs in
     */
    @action
    setUser(firebaseUser) {
        this.firebaseUser = firebaseUser;
        if (firebaseUser) {
            //Check if user is the the DB
            return authService.getUser(firebaseUser.uid)
            .then((user) => {
                this.user = user;
                return user;
            }).catch(() => {
                return this.createUser(firebaseUser);
            });
        }
    }

    /**
     * Creates a user in Firebase if one does not exist
     */
    @action
    createUser(firebaseUser) {
        let user = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role: firebaseUser.role
        };
        return authService.createUser(user)
            .then(() => {
                this.user = user;
                return user;
            });
    }

    /**
     * The initial Credentials shown on the UI
     */
    @action
    startCredentials() {
        this.emailPswdSignIn = {
            email: '',
            password: '',
            error: null
        };
    }

    /**
     * As the Iput fields change change the Store Value
     */
    @action
    setEmailPswdField(key, value) {
        let override = {};
        override[key] = value;
        this.emailPswdSignIn = Object.assign({}, this.emailPswdSignIn, override);
    }

    signIn() {
        const {email, password} = this.emailPswdSignIn;
        return authService.signIn(email, password);
    }

    signOut() {
        return authService.signOut();
    }
}

