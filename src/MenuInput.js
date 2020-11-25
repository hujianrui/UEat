import React, { Component } from "react";

class MenuInput extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.removeDish(this.props.id);
    }

    render() {
        return (
            <div className="form-row">
                <div className=" col-md-3">
                    <label>{this.props.dishName}</label>
                </div>
                <div className="col-md-7">
                    <label>{this.props.dishImage}</label>
                </div>
                <button type="button"
                    className="btn btn-success btn-sm col-md-1"
                >Edit</button>
                <button type="button"
                    className="btn btn-danger btn-sm col-md-1"
                    onClick={this.handleRemove}
                >X</button>
            </div>
        );
    }
}

export default MenuInput;