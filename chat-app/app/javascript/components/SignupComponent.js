import React from 'react'

class SignupComponent extends React.Component {
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
        fetch('/users', {
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
            <div className="content sidebar">
                <div className="header">Welcome Back!</div>
                <div className="sub-header">
                    <div className="line">Already have an account?</div>
                    <div className="line">Login with your personal info</div>
                </div>
                <div>
                    <div className="button" onClick={this.props.toggleLogin}>SIGN IN</div>
                </div>
            </div>
            <div className="content active">
                <div className="header">Register for Chatter</div>
                <div className="sub-header">
                    <div className="line">Enter your information to register</div>
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
                    <div className="button" onClick={this.submit}>SIGN UP</div>
                </div>
            </div>
        </div>);
    }
}

export default SignupComponent