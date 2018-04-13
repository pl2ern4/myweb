import React, {Component} from 'react';
import * as action from '../action';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginForm from '../Component/LoginForm';
import Register from '../Component/Register';

class Login extends Component{
    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount(){
        //this.props.getLogin();
        console.log("this.props",this.props);
        console.log("hello");
    }
    submitForm(data){
       this.props.loginUser(data);
    //   const {dispatch} = this.props;
    //   console.log("data",data)
    //    this.boundActionCreators = bindActionCreators(action.getLogin(data), dispatch)
    //    console.log(this.boundActionCreators)
    }
    render(){
        return (<div>
                    <LoginForm submitForm={this.submitForm}/>
                    <Register/>
                </div>)
    }
}
const mapStateToProps = (state) => {
    console.log("state",state)
    return{
        isloggedIn : state.isLoggedIn
    }
}
   
const mapDispatchToProps = dispatch=>({
    loginUser: data=> dispatch(action.getLogin(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);