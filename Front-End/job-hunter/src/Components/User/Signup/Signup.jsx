import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <>
      <div className="sign_wrapper">
        <div className="sign_in">
          <div className="content">
            <h5 className="title">Signup</h5>
            <input placeholder="email" className="text" type="text" value="" />
            <input
              placeholder="password"
              className="text"
              type="password"
              value=""
            />

            <p className="policy">
              By clicking Agree & Join, you agree to <br /> the Jobhunter User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>

            <button className="login_btn">Agree & Join</button>

            <p className="dont">
             Already have an account? <a>Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup