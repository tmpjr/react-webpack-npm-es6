'use strict';

import React from 'react';

export default class TweetBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: "" }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div className="well clearfix">
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <span>{140 - this.state.text.length}</span>
                <br/>
                <button className="btn btn-primary pull-right" 
                    disabled={this.state.text.length === 0}>Tweet</button>
                <button className="btn btn-default pull-right">Add Photo</button>
            </div>
        );
    }
}
