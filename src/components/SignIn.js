import React from 'react';
import { firebaseApp } from '../firebase/firebase';
import { connect } from 'react-redux';
import { logUserIn } from '../actions/index';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPassChange = this.onPassChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onEmailChange(e) {
        e.persist();
        this.setState(() => ({ email: e.target.value }));
    }

    onPassChange(e) {
        e.persist();
        this.setState(() => ({ password: e.target.value }));
    }

    onLoginClick(e) {
        e.preventDefault();
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            if (error) {
                this.setState(() => ({ error }));
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h2>Sign In</h2>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="email" onChange={this.onEmailChange} />
                        <input className="form-control" type="password" placeholder="password" onChange={this.onPassChange} />
                        <button className="btn btn-success" onClick={this.onLoginClick}>Log In</button>
                    </div>
                </form>
                {this.state.error && <div style={{ color: 'red' }}>{this.state.error.message}</div>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: (email) => dispatch(logUserIn(email))
    }
}

export default connect(undefined, mapDispatchToProps)(SignIn);