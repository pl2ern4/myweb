import React, {Component} from 'react';
import * as action from '../action';
import { connect } from 'react-redux'
import LoginForm from '../Component/LoginForm';
import Register from '../Component/Register';

class Login extends Component{
    componentDidMount(){
        //this.props.getLogin();
        console.log("this.props",this.props);
        console.log("hello");
    }
    render(){
        return (<div>
                    <LoginForm/>
                    <Register/>
                </div>)
    }
}
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
  })
   
  const mapDispatchToProps = dispatch => ({
    getLogin: action.getLogin()
  })
   
export default connect(mapStateToProps)(Login);