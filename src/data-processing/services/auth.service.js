import firebase from 'firebase';
import {firebaseConfig} from '../../core/config/firebase';

export default class AuthService{

    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
    getCurrentUser(){
        if(firebase.auth().currentUser){
            console.log(firebase.auth().currentUser);
        }
    }
    signInWithEmailAndPassword(email, password) {
        return firebase.auth()
            .signInWithEmailAndPassword(email, password);
    }
    signOut() {
        return firebase.auth().signOut();
    }
    createUser(user) {
        return firebase.database().ref('users/' + user.uid).set(user);
    }

    fetchUser(uid) {
        return firebase.database().ref('/users/' + uid)
            .once('value')
            .then(function(snapshot) {
                return snapshot.val();
            });
    }

    fetchUsers() {
        return firebase.database().ref('/users/')
            .once('value')
            .then(function(snapshot) {
                return snapshot.val();
            });
    }
    observeAuthChanges() {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            console.log('User: '+firebaseUser);
        });
    }
        /**
     *  Init Load
     */
    // this.af.auth.subscribe((data) => {
    //       console.log("Check Login: ",data);
    //       if(data){
    //        this._userService.UserList.subscribe(
    //         userList => {
    //         this.userListDB = userList;
    //         if(userList){
    //           for (var user of this.userListDB) {
    //             if (user.email == data.auth.providerData[0].email) {
    //               this.UserExists = true;
    //               if(user.role == null){
    //                 this.error = "This User does not have permission to access this system. Please contact Admin.";
    //               }else if (user.role == "admin"){
    //                 this._router.navigate(['/processing/admin']);
    //               }
    //             }
    //           }
    //       }
    //    })
    //   }
    // });
    // checkLoggedIn(){
    //     this.af.auth.subscribe((data) => {
    //     console.log("Ckeck Login: ",data);
    //     if(data){
    //         this.loginToDB(data);
    //         // this._router.navigate(['/processing/admin'])
    //     }
    //     })
    // }
    // loginToDB(authData) {
    //     if(this.userListDB == null){
    //         //Woud this ever be the case??
    //         console.error("The DB has no users");
    //     }
    //     this.UserExists = false;
    //     for (var user of this.userListDB) {
    //         if (user.email == authData.auth.providerData[0].email) {
    //         this.UserExists = true;
    //         if(user.role == null){
    //             this.error = "This User does not have permission to access this system. Please contact Admin.";
    //         }else if (user.role == "admin"){
    //             this._router.navigate(['/processing/admin']);
    //         }
    //         }
    //     }
    //     //If user doesn't exist in the DB add it without a role
    //     if(!this.UserExists){
    //         var userInfo = new UserInfo(authData.auth.providerData[0].email, null);
    //         this.UserList.push(userInfo).then(resp => {
    //         this.error = "This User does not have permission to access this system. Please contact Admin.";
    //         }).catch((error) => {
    //         console.log(error);
    //         if (error != null) {
    //             console.log("Unable to Save User to DB");
    //             this.error = "Sorry, we were unable to proceed with your request. Please try again.";
    //         }
    //         });
    //     }
    // }
}



