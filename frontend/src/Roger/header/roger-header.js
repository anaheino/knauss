import React from "react";

export class RogerHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: props.info
        };
    }

    render() {
        return (
            <h1>{this.state.info.name} - {this.state.info.title}</h1>
        );
    }
}