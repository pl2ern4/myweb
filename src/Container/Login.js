import React, {Component} from 'react';
import * as action from '../action';
import { connect } from 'react-redux';
import LoginForm from '../Component/LoginForm';
import Register from '../Component/Register';

class Login extends Component{
    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(payload)
    {
        const {dispatch} = this.props;
        dispatch(action.registerUser(payload)); 
    }

    submitForm(data){
        const {dispatch} = this.props;
        dispatch(action.requestLogin(data));
    }
    render(){
        const {...props} = this.props;
        return (<div className="row">
                    <div className="col-sm-8">
                        <img alt="banner-image" className="image" src="https://www.anz.com.au/content/anzcomau/en/target/homepage/hero-banners/bank-accounts/sem-mta-row-beach-plane-new/_jcr_content/anz_default_par/hero_0/image.img.full.high.jpg/1500360462483.jpg"/>
                    </div>
                    <div className="col-sm-4">
                        <LoginForm submitForm={this.submitForm}/>
                        <Register form={props.user_register} handleSubmit={this.handleSubmit}/>
                    </div>
                </div>)
    }
}
const mapStateToProps = (state) => {
    console.log("state",state)
    return{
        isloggedIn : state.isLoggedIn,
        user_register:state.forms.user_register
    }
}
   
export default connect(mapStateToProps)(Login);