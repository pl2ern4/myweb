import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Control, Form,Field } from 'react-redux-form';
const require = str => {
    return str!=undefined && str.trim()!==''
}
class LoginForm extends Component {
    
  handleSubmit(val) {
    console.log("Submit",val,this.props);
   // return false;
      this.props.submitForm(val);
  }
  validate(str,ref){
    // console.log(str,ref);
    return true;
  }
  render() {
    return (
      <Form 
        model="userform" 
        onSubmit={(val) => this.handleSubmit(val)}
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