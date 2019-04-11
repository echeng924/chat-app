import React from 'react';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import ChatComponent from './ChatComponent';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginState: 'signup',
        };
    }

    toggleLogin = () => {
        this.setState({
            loginState: this.state.loginState == 'login' ? 'signup' : 'login',
        });
    }


    render() {
        return (
            this.state.loginState == 'login' ? <LoginComponent toggleLogin={this.toggleLogin} />
                : this.state.loginState == 'signup' ? <SignupComponent toggleLogin={this.toggleLogin}  />
                    : <ChatComponent />);
    }
}

export default AppContainer