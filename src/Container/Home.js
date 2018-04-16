import React, {Component,Fragment} from 'react';
import * as action from '../action';
import { connect } from 'react-redux';
import {Header,Footer} from '../Component/header';
// import Content from '../Component/Content';

class Home extends Component{

    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this)
    }

    componentWillMount() {
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function(event) {
            window.history.go(1);
        };
    }
   
    logOut(){
        const {dispatch} = this.props;
        dispatch(action.logOut());
        window.location.href = window.location.origin + "/login";
    }

    render(){

        return (
            <Fragment>
                <Header handleLogOut={this.logOut}/>
                {/* <Content/> */}
                <Footer/>
            </Fragment> 
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        isloggedIn : state.root.isLoggedIn && state.root.isLoggedIn.loginStatus,
        user_register:state.forms.user_register
    }
}
   
export default connect(mapStateToProps)(Home);