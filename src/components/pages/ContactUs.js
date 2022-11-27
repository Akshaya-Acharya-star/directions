import React from "react";
import emailjs from '@emailjs/browser';


class Contact extends React.Component {
  
       constructor(props) {
      super(props);
      this.state = {
        name: '',
        nameError: false,
        contact: '',
        email: '',
        emailError: false,
        emailError2: false,
        message: '',
        messageError: false,
        formValid: false,
        sendemail: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleBlur   = this.handleBlur.bind(this);
    }
   
    isValidEmail(email) {
      return true;
      //return /^[a-zA-Z0-9_\-\.a-zA-Z0-9_\-\.a-zA-Z0-9_\-\.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }
    
    handleBlur(e) {
     
      const name = e.target.name; 
      const value = e.target.value;

      this.setState({ [name]: value  });

      if (value.length <= 0 && (name === 'name')) {
        this.setState({ nameError: true });
      } else {
        this.setState({ nameError: false });
      } 

      if (value.length <= 0 && (name === 'email')) {
        this.setState({ emailError: true });
        this.setState({ emailError2: false });
      } else {
        this.setState({ emailError: false });
        if(this.isValidEmail(value)) {
          this.setState({ emailError2: false });  
        } else {
          this.setState({ emailError2: true });  
        }
      } 

    }
    
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value  });
    }
  
    handleSubmit(e) {
      
      const { name, email, message, nameError, emailError, emailError2, messageError } = this.state;
      
      this.setState({ nameError: name ? false : true });
      this.setState({ messageError: message ? false : true });
      this.setState({ emailError: email ? false : true });
      if (email && !emailError) { this.setState({ emailError2: this.isValidEmail(email) ? false : true }); }
      

      if (name && email && message && !nameError && !emailError && !emailError2 && !messageError) {
        this.setState({ formValid: true });
        this.sendEmail();
      } else {
        this.setState({ formValid: false });
      }

      e.preventDefault(); 

   }

    sendEmail(e) {
      const serviceId='service_gym4i5t'
      const templateId='template_iwxb7ie'
      const userId='1at7fi3q0Lv-PRAWH'
      emailjs.send(serviceId, templateId, this.state, userId)
      .then((result) => {
        this.setState({ sendemail: true });
        window.alert("Email sent sucessfully");
       window.location.reload();
      }, (error) => {
        this.setState({ sendemail: false });
        window.alert("Failed to email");
      });
    }
    render() {
      document.title = "Contact Us";
      const { nameError, emailError, emailError2, messageError} = this.state;

  
      return (
  <>
  <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light ">
    <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>{this.props.title}</h3></div>
<div class="container">
    <div class="row">
    <div className="col-md-4 col-sm-12">
        <h5>Address</h5>
        <p>No.51,2nd Floor, CMH Road(Above Bombay Dying)</p>
        <p>Indiranagar, Bangalore - 560 038</p>
        <br/>
        <br/>
        <p>Email : itsdirections@gmail.com</p>
        <p>Phone : (91) 8095006850</p>
    </div>
    <div className="col-md-6 col-sm-12">
      <form action="/" onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
        <div className="form-group">
          <label className="mb-0">Name<span className="text-danger">*</span></label>
          <input name="name" type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
          { nameError
            ? <div className="alert alert-danger mt-2">Name is a required field.</div>
            : ''
          }
          <br/>
        </div>
        <div className="form-group">
          <label className="mb-0">Email Id<span className="text-danger">*</span></label>
          <input name="email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} />
          { emailError
            ? <div className="alert alert-danger mt-2">Email is a required field.</div>
            : ''
          }
          { emailError2
            ? <div className="alert alert-danger mt-2">Email invalid.</div>
            : ''
          }
          <br/>
        </div>
        <div className="form-group">
          <label className="mb-0">Contact number (Optional)</label>
          <input name="contact" type="text" className="form-control" placeholder="Contact" onChange={this.handleChange} value={this.state.contact}  />
          <br/>
        </div>
        <div className="form-group">
          <label className="mb-0">Message<span className="text-danger">*</span></label>
          <textarea name="message" type="text" className="form-control" placeholder="Message" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur} />
          { messageError
            ? <div className="alert alert-danger mt-2">Message is a required field.</div>
            : ''
          }
          <br/>
        </div>
        <div className="form-group col-md-3 col-sm-6">
        <br/>
        <input type="submit" className="btn btn-primary text-uppercase" value="Submit" />
        </div>
       </form>
      
    </div>
    </div>

</div>
  </div>
      </>
      );

    }
  }
  
export default Contact;