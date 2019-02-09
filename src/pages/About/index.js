import React from 'react';

import './styles.scss';
import client from 'services/client';

import {getLanguage} from 'utils';

import strings from 'strings';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feched: false
        }
        document.title = "Arnaud Juherian - " + strings.MENU_ABOUT;
    }

    componentWillMount() {
        client().then(async api => {
            const response = await api.get('/content/about');
            const content = response.data.payload;
            this.setState({...content, fetched: true});
            console.log(content);
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="page about">
                {this.state.fetched && <div className="about-container fade-in">
                    <img alt="Arnaud Juherian" src={this.state.image_url}/>
                    {(getLanguage() === "en" ? this.state.content_en : this.state.content_fr).split('\n').map((block, i) => {
                    return (
                        <p key={i}>{block}</p>
                    )
                })
                }
                </div>}
            </div>
        )
    }
}

export default About;