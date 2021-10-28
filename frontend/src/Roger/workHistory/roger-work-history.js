import React from "react";

export class RogerWorkHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workHistory: this.formatWorkHistory(props.workHistory)
        };
    }


    formatWorkHistory(workHistory) {
        const workHistories = workHistory.map(work => {
            return (
                <li>
                    <h3>{work.title}</h3>
                    <span>{work.text}</span>
                    <p>
                        <i>{work.yearsActive}
                        </i>
                    </p>
                </li>
            );
        });
        return (
            <ul>
                {workHistories}
            </ul>
        );
    }

    render() {
        return (
            this.state.workHistory
        );
    }
}