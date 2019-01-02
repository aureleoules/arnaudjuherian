import React from 'react';

import './styles.scss';
import client from 'services/client';

import {getLanguage} from 'utils';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feched: false
        }
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
                    <img alt="about" src={this.state.image_url}/>
                    <p>{getLanguage() === "en" ? this.state.content_en : this.state.content_fr}</p>
                </div>}
            </div>
        )
    }
}

export default About;