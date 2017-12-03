import React from 'react';
import {firebaseApp} from '../firebase/firebase';
import { logUserOut } from '../actions/index';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSignoutClick = this.onSignoutClick.bind(this);
    }

    onSignoutClick() {
        firebaseApp.auth().signOut();
        this.props.logUserOut()
    }

    render() {
        return (
            <div className="container">
                <div>Goal Coach App</div>
                {this.props.emailLoggedIn && <div style={{color: 'green'}}>{this.props.emailLoggedIn}</div>}
                <button className="btn btn-danger" onClick={this.onSignoutClick}>Sign Out</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        emailLoggedIn: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserOut: () => dispatch(logUserOut())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);