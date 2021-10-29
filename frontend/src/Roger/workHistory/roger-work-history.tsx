import React, {ElementType} from "react";
import { WorkHistory } from "../../types/types";

type WorkHistoryState = { workHistory: JSX.Element };
type WorkHistoryProps = { workHistory: WorkHistory[] };
export class RogerWorkHistory extends React.Component<WorkHistoryProps, WorkHistoryState> {

    constructor(props: WorkHistoryProps) {
        super(props);
        this.state = {
            workHistory: this.formatWorkHistory(props.workHistory)
        };
    }


    formatWorkHistory(workHistory: WorkHistory[]): JSX.Element {
        const workHistories = workHistory.map((work, i) => {
            return (
                <li key={i}>
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