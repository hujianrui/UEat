import React, { Component } from "react";

class MenuAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishName: "",
            dishImage: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    };

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleAdd() {
        this.props.addDish({ ...this.state, id: this.state.dishName });
        this.setState({
            dishName: "",
            dishImage: "",
        });
    }

    render() {
        return (
            <div className="form-row">
                <div className=" col-md-3">
                    <input
                        type="text"
                        name="dishName"
                        className="form-control"
                        placeholder="Enter dish name"
                        value={this.state.dishName}
                        onChange={this.handleChange} />
                </div>
                <div className="col-md-8">
                    <input
                        type="url"
                        name="dishImage"
                        className="form-control"
                        placeholder="Enter dish image"
                        value={this.state.dishImage}
                        onChange={this.handleChange} />
                </div>
                <button type="button"
                    className="btn btn-danger btn-sm col-md-1"
                    onClick={this.handleAdd}
                >Add</button>
            </div>
        );
    }
}

export default MenuAdd;