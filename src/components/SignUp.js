import React from 'react';
import { firebaseApp } from '../firebase/firebase';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null,
        }

        this.onPassChange = this.onPassChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onClickRegister = this.onClickRegister.bind(this);
    }

    onEmailChange(e) {
        e.persist();
        this.setState(() => ({ email: e.target.value }));
    }

    onPassChange(e) {
        e.persist();
        this.setState(() => ({ password: e.target.value }));
    }

    onClickRegister(e) {
        e.preventDefault();
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            if (error) {
                this.setState(() => ({error: error}))
                console.log(error);
            } 
        });
    }

    render() {
        return (
            <div className="container">
                <h2>Sign Up</h2>
                <form>
                    <div className="form-group">
                        <input onChange={this.onEmailChange} className="form-control" placeholder="email" type="text" />
                        <input onChange={this.onPassChange} className="form-control" placeholder="password" type="password" />
                        <button onClick={this.onClickRegister} className="btn btn-success">Register</button>
                    </div>                   
                </form>
                {this.state.error && <div style={{color: 'red'}}>{this.state.error.message}</div>}
            </div>
        )
    }
}

export default SignUp;