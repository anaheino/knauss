import React from "react";
import {Header} from "../../types/types";

type HeaderState = { info: Header };
export class RogerHeader extends React.Component<HeaderState, HeaderState> {
    constructor(props: HeaderState) {
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