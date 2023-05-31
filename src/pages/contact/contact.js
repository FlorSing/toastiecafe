
import React from "react";
import './contact.css';
import prodn from '../../assets/productionline.jpg'

function Contact() {
  return (
    <>
      <div>
        <br/>
      </div>
      <div>
      <div className="container" >
    <div className="row">
      <div className="col  contacts" >
      <div>
      <h2>Contact Page</h2>
      </div>
      <div>
        <p>FB Messenger: <br></br>
      <a href='https://www.facebook.com/messages/t/100006489427123/' className="btn btn-primary fblink">https://www.facebook.com/messages/t/100006489427123/</a>
      </p> 
      </div>
      <div>
        <p>
      Facebook: <br></br>
      <a href='https://www.facebook.com/toastiexcafe' className="btn btn-primary fblink">https://www.facebook.com/toastiexcafe </a> 
      </p>
      </div> 
      </div>
      <div class="col">
        <img src={prodn} alt='neonsign'/>
      </div>
    </div>
    </div>
          
      </div>
    </>
    );
  }


export default Contact;
