import React from 'react';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import ChatComponent from './ChatComponent';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginState: 'signup',
            user: {},
        };
    }

    toggleLogin = () => {
        this.setState({
            loginState: this.state.loginState == 'login' ? 'signup' : 'login',
        });
    }
    login = (user) => {
        this.setState({
            loginState: 'chat',
            user: user,
        });
    }

    render() {
        return (
            this.state.loginState == 'login' ? <LoginComponent toggleLogin={this.toggleLogin} login={this.login} />
                : this.state.loginState == 'signup' ? <SignupComponent toggleLogin={this.toggleLogin} login={this.login} />
                    : <ChatComponent user={this.state.user} />);
    }
}

export default AppContainer