import React, { useState } from "react";
import "./Contact.css";


export default function Contact() {

  const [checkName, setcheckName] = useState(false);
  const  showUsername=(event)=>event.target.value===""?setcheckName(false):setcheckName(true);

  const [checkAge, setcheckAge] = useState(false);
  const  showUserAge=(event)=>event.target.value===""?setcheckAge(false):setcheckAge(true);

  const [checkEmail, setcheckEmail] = useState(false);
  const  showUserEmail=(event)=>event.target.value===""?setcheckEmail(false):setcheckEmail(true);

  const [checkPassword, setcheckPassword] = useState(false);
  const  showUserPassword=(event)=>event.target.value===""?setcheckPassword(false):setcheckPassword(true);
      
    
   
   
  
  return (
    <>
      <section className="contact">
        <h1 className="text-center mt-4">CONATCT SECTION</h1>

        <div className="d-flex justify-content-center align-items-center text-white mt-3">
          <i className="line"> </i>
          <i className="fa-solid fa-star mx-3 star"></i>
          <i className="line"> </i>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-md-8   offset-2  d-flex justify-content-center align-items-center flex-column  pt-3" >
              {checkName===true?<p className="inputColor">userName:</p>:null}
              <input type="text" onInput={showUsername}  className="form-control border-top-0 border-end-0 border-start-0 inputForm pb-3" placeholder="userName"/>
              {checkAge===true?<p className="inputColor">userAge:</p>:null}
              <input type="number" onInput={showUserAge}  className="form-control border-top-0 border-end-0 border-start-0 inputForm pb-3 mt-5" placeholder="userAge"/>
              {checkEmail===true?<p className="inputColor">userEmail:</p>:null}
              <input type="email" onInput={showUserEmail}  className="form-control border-top-0 border-end-0 border-start-0 inputForm pb-3 mt-5" placeholder="userEmail"/>
              {checkPassword===true?<p className="inputColor">userPassword:</p>:null}
              <input type="password" onInput={showUserPassword}  className="form-control border-top-0 border-end-0 border-start-0 inputForm pb-3 mt-5" placeholder="userPassword"/>
             <div className="inputForm mt-4">
              <a className="btn btn-success justify-content-start btnForm py-2">send Message</a>
             </div>
            
            </div>
            
          </div>
        </div>

      </section>

    </>
  );
}
