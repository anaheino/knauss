import React from "react";
import {Bio, BioItem} from "../../types/types";

type WorkHistoryState = { bio: Bio, listItems: JSX.Element[] }
type WorkHistoryProps = { bio: Bio };
export class RogerBio extends React.Component<WorkHistoryProps, WorkHistoryState>{
    constructor(props: WorkHistoryProps) {
        super(props);
        this.state = {
            bio: props.bio,
            listItems: this.createListItems(props.bio.items)
        };
    }

    createListItems(items: BioItem[]): JSX.Element[] {
        return items.map((item, i) => {
            return (<div key={i}>
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