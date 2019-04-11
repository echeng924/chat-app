import React from 'react'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
    }

    onChange = event => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    submit = () => {
        let params = {
            username: this.state.username,
            password: this.state.password,
        };
        fetch('/log-in', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error);
            } else {
                this.props.login(response.user);
            }
        })
    }

    render() {
        return (<div className="login-container">
            <div className="content active">
                <div className="header">Sign in to Chatter</div>
                <div className="sub-header">
                    <div className="line">Enter your information to login</div>
                </div>
                <div className="form">
                    <div className="input">
                        <i className="fas fa-user"></i>
                        <input type="text" name="username" value={this.state.username} onChange={this.onChange} placeholder="Username" />
                    </div>
                    <div className="input">
                        <i className="fas fa-key"></i>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" />
                    </div>
                </div>
                <div>
                    <div className="button" onClick={this.submit}>SIGN IN</div>
                </div>
            </div>
            <div className="content sidebar">
                <div className="header">Join us now!</div>
                <div className="sub-header">
                    <div className="line">Not yet signed up?</div>
                    <div className="line">Register and start chatting with us!</div>
                </div>
                <div>
                    <div className="button" onClick={this.props.toggleLogin}>SIGN UP</div>
                </div>
            </div>
        </div>);
    }
}

export default LoginComponent