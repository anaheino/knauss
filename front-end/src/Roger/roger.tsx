import React from "react";
import {RogerHeader} from "./header/roger-header";
import {RogerPicture} from "./picture/roger-picture";
import {RogerBio} from "./bio/roger-bio";
import {RogerWorkHistory} from "./workHistory/roger-work-history";

export class Roger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.fetchKnauss();
    }

    fetchKnauss() {
        fetch('http://localhost:5000')
            .then(response =>  response.json())
            .then(data => this.setState({ rogerKnauss: data }))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state.rogerKnauss ?
                    <div>
                        <RogerHeader info = {this.state.rogerKnauss.header} />
                        <RogerPicture pictures = {this.state.rogerKnauss.pictures}/>
                        <RogerBio bio = {this.state.rogerKnauss.bio} />
                        <RogerWorkHistory workHistory = {this.state.rogerKnauss.workHistory}/>
                    </div>
                     : ''}

            </div>
        );
    }
}