import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SignIn.css';

class SignIn extends Component {
    render() {
        return (
            <div className="SignIn">
                <form className="SignIn-form">

                    <h3 className="text-center">Sign In</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign In</button>
                    <p className="text-center">
                        Don't have an account? <Link to='/Register'>Register</Link>
                    </p>

                </form>
            </div>
        );
    }

}

export default SignIn;