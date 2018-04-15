import React,{Component} from 'react';
import { Control, Form,Field } from 'react-redux-form';
// const require = str => {
//     return str!=undefined && str.trim()!==''
// }
class LoginForm extends Component {
    
  handleSubmit(val) {
      this.props.submitForm(val);
     // window.location = window.location.href+"home";
  }
  validate(str,ref){
    return true;
  }
  render() {
    return (
      <Form 
        model="userform" 
        onSubmit={(val) => this.handleSubmit(val)}
      >
        <Field className="form password"  model=".userid" refs="userid">
            <Control.text model=".userid" className="inputText" autoComplete="off" name="userid" placeholder={"User Id"}/>
            
        </Field>

        <Field  className="form password"  model=".password">
             <Control.text type="password" model=".password"  autoComplete="off" placeholder={"password"}/>
        </Field>
  
        <button className="btn btn-danger">Submit!</button>
      </Form>
    );
  }
}

// No need to connect()!
export default LoginForm;