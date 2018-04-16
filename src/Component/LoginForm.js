import React,{Component} from 'react';
import { Control, Form,Field,Errors } from 'react-redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

const isRequired = (val) => val && val.trim() && val.trim().length > 0;

class LoginForm extends Component {
    
  handleSubmit(val) {
      this.props.submitForm(val);
      window.location = window.location.origin;
  }
  validate(str){
    console.log("---",str);
    return true;
  }
  render() {
    return (
      <Form 
        model="userform" 
        onSubmit={(val) => this.handleSubmit(val)}
        onBeforeSubmit={(evt)=>{this.validate(evt)}}
      >
        <Field model=".userid">
          <Control.text className="blocking-span form inputText" model=".userid" autoComplete="off" name="userid" placeholder={"User Id"} validators={{ isRequired }}/>
          <span className="floating-label">Your email address</span>
          <Errors className="error" model=".userid"
                show={{touched: true, focus: false}}
                messages={{
                    isRequired: 'Please Enter Correct User ID'
                }}
            />
           {/* <div>
              {/* <span class='blocking-span'>
              <input type="text" class="inputText" />
              </span>
              <span class="floating-label">Your email address</span>
            </div> */}
        </Field>
        <Field model=".password">
             <Control.text className="form password" type="password" model=".password"  autoComplete="off" placeholder={"password"} validators={{ isRequired }}/>

             <Errors className="error" model=".password"
                show={{touched: true, focus: false}}
                messages={{
                    isRequired: 'Please Enter Password'
                }}
            />
        </Field>
  
        <button className="btn btn-danger">Submit!</button>
      </Form>
    );
  }
}

export default LoginForm;