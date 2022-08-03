import { useState } from "react"
import "./Form.css"
import logo from "./Images/Logo.jpg"
const Form = () => {

    const [email, SetEmail] = useState("")
    const [pass, SetPass] = useState("")
    const changeEmail = (email) => {
        SetEmail(email.target.value)
       
        }
    const changePass = (password) => {
        SetPass(password.target.value)
       
        }

      const PasswordStrength=(event)=>{
        const passwordValue= event.target.value;
        const passwordLength= passwordValue.length;

         const inputValue = document.getElementById("inputValue")
         if(passwordLength >= 3 ){
            inputValue.style.backgroundColor = "red"
        }
        else{
            inputValue.style.backgroundColor = "white"
        }
        if(passwordLength>= 6)
        {
            inputValue.style.backgroundColor = "yellow"
          }
          if(passwordLength>= 10)
        {
            inputValue.style.backgroundColor = "green"
          }
        }
        const formSubmit =(event)=>{
            const inputValue = document.getElementById("inputValue")
            event.preventDefault()
            SetEmail("")
            SetPass("")
            inputValue.style.backgroundColor = "white"
        }
    return (
              <div className="container">
            <div className="form_container">
                <img src={logo} />
                <h3>MY REACT WEBSITE</h3>
                <p>Online Website Designed To Take The Hassle</p>
            </div>
            <div className="login_form">
                <label className="input_label" >Your Email</label>
                <input type="text" placeholder="Enter Your Email" value={email} onChange={changeEmail}/>
                <label className="input_label">Password</label>
                <input type="password" placeholder="Enter Your Password" value={pass} onChange={changePass} onInput={PasswordStrength} id="inputValue" />
                <div className="checkbox">
                    <input type="checkbox" />
                    <label className="checkbox_label">Remember Me</label>
                    <span>
                        <span>Recover Password</span>
                    </span>
                </div>
                <button className="btn" onClick={formSubmit}>Sign In</button>
            </div>
        </div>

    )
    }

export default Form