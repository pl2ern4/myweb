import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Control, Form,Field } from 'react-redux-form';
const require = str => {
    return str!=undefined && str.trim()!==''
}
class LoginForm extends Component {
  handleSubmit(val) {
    console.log(val);
  }
  validate(str,ref){
    console.log(str,ref);
  }
  render() {
    return (
      <Form 
        model="user" 
        onSubmit={(val) => this.handleSubmit(val)}
        validators={{
            'userid':(val)=>this.validate(val,this),
            'password':(val)=>this.validate(val,this)
        }}
      >
        <Field  model=".userid" refs="userid">
             <Control.text model=".userid"/>
        </Field>

        <Field  className="formfield password"  model=".userid">
             <Control.text type="password" model=".password" />
        </Field>
  
        <button className="btn btn-danger">Submit!</button>
      </Form>
    );
  }
}

// No need to connect()!
export default LoginForm;