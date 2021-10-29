import React from "react";
import {Picture} from "../../types/types";

type PictureState = { pictures: JSX.Element[] };
type PictureProps = { pictures: Picture[]}
export class RogerPicture extends React.Component<PictureProps, PictureState> {

    constructor(props: PictureProps) {
        super(props);
        this.state = {
            pictures: this.generatePictureElements(props.pictures)
        };
    }

    generatePictureElements(pictures: Picture[]) {
        return pictures.map((pic, i) => {
            return (
                <div key={i}>
                    <img src={pic.url} width="200" height="250"/>
                    <h6>{pic.title}</h6>
                </div>
                );
            });
    }

    render() {
        return (
            this.state.pictures
        );
    }
}