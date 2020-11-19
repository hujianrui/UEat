import React, { Component } from "react";
import { DatabaseContext } from './Database';
import './Profile.css'

class Profile extends Component {
    static contextType = DatabaseContext;
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            restaurantName: "",
            resraurantLogo: "",
            resraurantLocation: "",
            resraurantMenu: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSave() {
        console.log(this.state);
    }

    handleCancel() {
        this.setState({
            firstName: "",
            lastName: "",
            restaurantName: "",
            resraurantLogo: "",
            resraurantLocation: "",
            resraurantMenu: []
        });
    }

    render() {
        return (
            <div className="Profile">
                <form className="Profile-form">

                    <h3 className="text-center">Profile</h3>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="Enter first name"
                                value={this.state.firstName}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Enter last name"
                                value={this.state.lastName}
                                onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Restaurant Name</label>
                        <input
                            type="text"
                            name="restaurantName"
                            className="form-control"
                            placeholder="Enter restaurant name"
                            value={this.state.restaurantName}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Resraurant Logo</label>
                        <input
                            type="url"
                            name="resraurantLogo"
                            className="form-control"
                            placeholder="Enter resraurant logo"
                            value={this.state.resraurantLogo}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Resraurant Location</label>
                        <input
                            type="text"
                            name="resraurantLocation"
                            className="form-control"
                            placeholder="Enter resraurant location"
                            value={this.state.resraurantLocation}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <div className="form-row">
                            <label className="col-md-6">Resraurant Menu</label>
                            <label className="col-md-6 text-right">Add</label>
                        </div>
                        <div className="form-row">
                            <div className=" col-md-6">
                                <input
                                    type="text"
                                    name="dishName"
                                    className="form-control"
                                    placeholder="Enter dish name" />
                            </div>
                            <div className=" col-md-6">
                                <input
                                    type="url"
                                    name="dishImage"
                                    className="form-control"
                                    placeholder="Enter dish image" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className=" col-md-6">
                            <button type="button"
                                className="btn btn-dark btn-lg btn-block"
                                onClick={this.handleSave}>Save</button>
                        </div>

                        <div className=" col-md-6">
                            <button type="button"
                                className="btn btn-secondary btn-lg btn-block"
                                onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default Profile;