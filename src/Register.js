import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Register.css'

class Register extends Component {
    render() {
        return (
            <div className="Register">
                <form className="Register-form">

                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="text-center">
                        Already have an account? <Link to='/SignIn'>Sign In</Link>
                    </p>

                </form>
            </div>
        );
    }
}

export default Register;