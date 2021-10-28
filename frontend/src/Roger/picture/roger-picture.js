import React from "react";

export class RogerPicture extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            pictures: this.generatePictureElements(props.pictures)
        };
    }

    generatePictureElements(pictures) {
        return pictures.map((pic, i) => {
            return (
                <div>
                    <img key={i} src={pic.picture} width="200" height="250"/>
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