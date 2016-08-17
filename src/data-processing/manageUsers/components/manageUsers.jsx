import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ManageUsers extends React.Component {

    render() {
        return (
            <div>
                <h2>Manager Users Page</h2>
                <form>
                    <div>Add User</div>
                    <div>
                        <label>Email Address</label>
                        <TextField type="email" required/>
                    </div>
                    <div>
                        <label>Password</label>
                        <TextField type="password" required/>
                    </div>
                    <div>
                     <RaisedButton  type="submit" label="Add User" />
                    </div>
                </form>
            </div>
        );
    }
}


