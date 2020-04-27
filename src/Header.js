import React, {Component} from "react";
import {connect} from "react-redux";
import {logoutUser} from "./actions/auth";
import {Link} from "react-router-dom";

class Header extends Component {

    render() {
        return <nav style={{height: "100px", width: "100%", backgroundColor: "red"}}>
            <img alt="logo"
                 style={{width: "100px", height: "100px", float:'left'}}
                 src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1388px-Star_Wars_Logo.svg.png'/>
            <div style={{display: 'flex', flexDirection:"row-reverse"}}>

                {this.props.isAuthenticated && <Link to={'/'}><button onClick={this.props.logoutUser}>Logout</button></Link>}
                {this.props.children}
            </div>
        </nav>;
    }
}


const mapStateToProps = state =>{
    return {
        isAuthenticated: state.loginReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, {logoutUser})(Header)