import React from 'react';
import {Link} from 'react-router';
import {Appbar} from '../data-processing/shell/components/appbar';


export default class Login extends React.Component {
    // getInitialState() {
    //     return {
    //         items: [],
    //         text: ''
    //     };
    // }
    // componentWillMount() {
    //     this.firebaseRef = firebase.database().ref("items");
    //     this.firebaseRef.on("child_added", function(dataSnapshot) {
    //         this.items.push(dataSnapshot.val());
    //         this.setState({
    //         items: this.items
    //         });
    //     }.bind(this));
    // }
    render() {
        console.log('Login');
        return (
            <div>
                <Appbar></Appbar>
                <h2>Login Page</h2>
                <div><Link to="/processing">Processing</Link></div>
                <div><Link to="/survey">Survey</Link></div>
            </div>
        );
    }
}


