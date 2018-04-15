import React, {Component} from 'react';
import * as action from '../action';
import { connect } from 'react-redux';

class Home extends Component{
    componentWillMount(){
        const {dispatch,isloggedIn} = this.props;
        console.log(this.props);
        dispatch(action.loginStatus());
        debugger;
        if(!isloggedIn){
           // window.location.href = window.location.origin+'/login';
        }

    }
    render(){
        console.log(this.props);
        return "Home Page"
    }
}
const mapStateToProps = (state) => {
    console.log("state",state)
    return{
        isloggedIn : state.root.isLoggedIn && state.root.isLoggedIn.loginStatus,
        user_register:state.forms.user_register
    }
}
   
export default connect(mapStateToProps)(Home);