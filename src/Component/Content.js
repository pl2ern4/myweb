import React, {Component,Fragment} from 'react';
// import EditProfile from './EditProfile';
import {WelcomeComponent} from '../Component/BasicComponent';
class Content extends Component{
    renderComponent(){
        console.log("jkdf");
        let pageName = "";
        switch(pageName){
            case 'update':
                // return <EditProfile/>
            break;
            default:
                return <WelcomeComponent/>
            break;    
        }
    }
    render(){
        console.log(">>>")
        return this.renderComponent();
    }
}
export default Content;