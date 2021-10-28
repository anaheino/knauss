import React from "react";
import {RogerHeader} from "./header/roger-header";
import {RogerPicture} from "./picture/roger-picture";
import {RogerBio} from "./bio/roger-bio";
import {RogerWorkHistory} from "./workHistory/roger-work-history";

export class Roger extends React.Component {

    rogerKnauss = {
        header: {
            name: 'Knauss, Roger',
            title: 'Mies'
        },
        pictures: [
            {
                title: 'Knauss at his best',
                picture: './knauss.png'
            }
        ],
        bio: {
                title: 'The man, The legend',
                items: [
                    {
                        'title': 'Man of Equal Opportunities',
                        'details': {
                            'text': 'Ever since he was born, R. Knauss has been a loyal supporter of women\'s rights.',
                            'additional': '* Student times not included'
                        }
                    },
                    {
                        'title': 'Man of mysteries',
                        'details': {
                            'text': 'No one knows exactly how long Roger has been influencing this world. Some say he\'s as ancient as the mountains themselves.',
                            'additional': 'But it might be sometime between 1900 and 2020'
                        }
                    }
               ]
            },
        workHistory: [
            {
                'title': 'Astronaut',
                'text': 'Employed at NASA',
                'yearsActive': '1961-1972'
            }
        ]
    };

    render() {
        return (
            <div>
                <RogerHeader info = {this.rogerKnauss.header} />
                <RogerPicture pictures = {this.rogerKnauss.pictures}/>
                <RogerBio bio = {this.rogerKnauss.bio} />
                <RogerWorkHistory workHistory = {this.rogerKnauss.workHistory}/>
            </div>
        );
    }
}