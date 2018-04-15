import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import  'react-responsive-modal/lib/css';
import { Control, Form,Field,Errors,actions } from 'react-redux-form';

const isRequired = (val) => val && val.trim() && val.trim().length > 0;
const isValidEmailId = (val) => {
    console.log(val);
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
}
const isValidPhoneNumber = (val) => {
    console.log(val);
    return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(val)
}

class Register extends Component{
    constructor(props){
        super(props);
        this.openPopup = this.openPopup.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.state = {
        open: false,  
        value:"",
        radioVal:""
        };
    }
    handleSubmit(payload)
    {
        console.log(payload);
        
        const props = this.props;

        props.handleSubmit(payload);
        if(!payload) 
        {   
            return false;
        }
        if(payload && !payload.image){

        }
        if(payload && !payload.password){}
        if(payload && !payload.rpassword){}
        if(payload && !payload.gender){}
        if(payload && !payload.phone){}
        if(payload && !payload.userid){}
        if(payload && !payload.email) {}
        
    }

    onCloseModal() {
        this.setState({ open: false });
      }
    openPopup(){
        this.setState({ open: true });        
    }
    
    render(){
        const {open} = this.state
        console.log('props', this.props);
        return (
                <div>
                    <button className="btn btn-primary" onClick={this.openPopup}> Register Me </button>
                    <Modal open={open} onClose={this.onCloseModal} little>
                        <Form 
                            model="user_register" 
                            onSubmit={(val) => this.handleSubmit(val)}
                        >
                            <Field model=".userid" refs="userid"  >
                                <Control.text model=".userid" className="form" autoComplete="off" name="userid" placeholder={"User Id"} validators={{ isRequired }}/>
                                <Errors className="error" model=".userid"
                                    show={{touched: true, focus: false}}
                                    messages={{
                                        isRequired: 'Please Enter Proper User ID'
                                    }}
                                />
                                
                            </Field>

                            <Field model=".password">
                                <Control.text className="form" type="password" model=".password"  autoComplete="off" placeholder={"password"} validators={{ isRequired }} validateOn="change"/>
                                <Errors className="error" model=".password" 
                                    show={{touched: true, focus: false}}
                                    messages={{
                                        isRequired: 'Please Enter Proper User ID'
                                }} />
                            </Field>

                            <Field model=".cpassword">
                                <Control.text className="form" type="password" model=".rpassword" autoComplete="off" placeholder={"Confirm Password"} validators={{ isRequired }} validateOn="change"/>
                                <Errors className="error" model=".cpassword" messages={{
                                    isRequired: 'Field must not be Empty'
                                    }}
                                    show={{touched: true, focus: false}} 
                                />
                            </Field>

                            <Field model=".phone">
                                <Control.text className="form" type="text" model=".phone" autoComplete="off" placeholder={"Phone No"} validators={{isRequired,isValidPhoneNumber}} validateOn="change"/>
                                <Errors className="error" model=".phone" messages={{
                                    isRequired: 'Field must not be Empty',
                                    isValidPhoneNumber: 'Please Enter Valid Phone No.'
                                    }}
                                    show={{touched: true, focus: false}}
                                />
                            </Field>
                            <Field model=".email">
                                <Control.text className="form" type="text" model=".email" autoComplete="off" placeholder={"Email Id"} validators={{isRequired,isValidEmailId}} validateOn="change"/>
                                <Errors className="error" model=".email" messages={{
                                    isRequired: 'Field must not be Empty',
                                    isValidEmailId: 'Please Enter Valid Email Id'
                                    }}
                                    show={{touched: true, focus: false}}
                                />
                            </Field>
                            <Field model=".gender">
                                <label>
                                    <input type="radio" value="female" />
                                    <span>Female</span>
                                </label>
                                <label>
                                    <input type="radio" value="male" />
                                    <span>Male</span>
                                </label>
                                <Errors className="error" model=".gender" messages={{
                                    isRequired: 'Field must not be Empty',
                                    }}
                                    show={{touched: true, focus: false}}
                                />
                            </Field>

                            <Field model=".image">
                                <Control.file model=".image" />
                                <Errors className="error" model=".image" messages={{
                                    isRequired: 'Field must not be Empty',
                                    }}
                                    show={{touched: true, focus: false}}
                                />
                                
                            </Field>
                            
                            <button className="btn btn-danger">Submit!</button>
                        </Form>
                    </Modal>
                </div>
                )
    }
}
export default Register;