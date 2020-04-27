import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from "./actions/auth";
import Header from "./Header";

class LoginForm extends Component {
    state = {
        email: "", id: 1
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAuthenticated) {
            this.props.history.push('/home');
        }
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/home');
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.loginUser(this.state)
    };

    handleChange = event => {
        this.setState({...this.state, [event.target.name]: event.target.value})
    };

    render() {
        console.log(this.props)
        return (<div>
            <Header/>
            <div style={{marginTop: "50px", display: "grid", gridTemplateColumns: "40% 40%"}}>
                <div style={{height: "100%"}}>
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
                        alt="Rise of skywalker" style={{height: "500px"}}/>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label for="email">Email</label><br/>
                    <input style={{width: "200px", height: "20px"}} type='email' name="email" required={true}
                           onChange={this.handleChange}/>
                    <br/>
                    <button style={{marginTop: "20px", width: "130px", height: "30px"}} type='submit'>Login</button>

                </form>
            </div>
        </div>);
    }
}


function mapStateToProps(state) {
    console.log({state})
    return {
        isAuthenticated: state.loginReducer.isAuthenticated
    };
}

export default connect(mapStateToProps, {loginUser})(LoginForm);