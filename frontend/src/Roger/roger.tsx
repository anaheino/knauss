import React from "react";
import {RogerHeader} from "./header/roger-header";
import {RogerPicture} from "./picture/roger-picture";
import {RogerBio} from "./bio/roger-bio";
import {RogerWorkHistory} from "./workHistory/roger-work-history";
import {RogerType} from "../types/types";

type RogerState = { rogerKnauss: RogerType };
export class Roger extends React.Component<{}, RogerState> {

    componentWillMount() {
        this.fetchKnauss();
    }

    fetchKnauss() {
        fetch('http://localhost:5000')
            .then(response =>  response.json())
            .then((data: RogerType) => this.setState({ rogerKnauss: data }))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>

                {this.state?.rogerKnauss ?
                    <div>
                        <RogerHeader  info = {this.state.rogerKnauss.header} />
                        <RogerPicture pictures = {this.state.rogerKnauss.pictures}/>
                        <RogerBio bio = {this.state.rogerKnauss.bio} />
                        <RogerWorkHistory workHistory = {this.state.rogerKnauss.workHistory}/>
                    </div>
                     : ''}

            </div>
        );
    }
}