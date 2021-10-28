import React from "react";

export class RogerBio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: props.bio
        };
        this.state.listItems = this.createListItems(this.state.bio.items);
    }

    createListItems(items) {
        return items.map(item => {
            return (<div>
                <h4>{item.title}</h4>
                <p>{item.details.text}</p>
                <span>{item.details.additional}</span>
            </div>);
        });
    }

    render() {
      return (
          <div>
              <h2>{this.state.bio.title} </h2>
              {this.state.listItems}
          </div>
      );
    }
}