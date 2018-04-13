import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import  'react-responsive-modal/lib/css';
class Register extends Component{
    constructor(props){
        super(props);
        this.openPopup = this.openPopup.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.state = {
        open: false,  
        };
    }
    onOpenModal() {
        this.setState({ open: true });
      }
      
      onCloseModal() {
        this.setState({ open: false });
      }
    openPopup(){
        console.log(">>>",this.state)
        this.setState({ open: true });
        const { open } = this.state;
        return (
            <Modal open={open} onClose={this.onCloseModal} little>
          <h2>Simple centered modal</h2>
        </Modal>
        )
    }
    render(){
        return <button className="btn btn-primary" onClick={this.openPopup}> Register Me </button>
    }
}
export default Register;