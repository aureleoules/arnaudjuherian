import React from 'react';

import './styles.scss';

import client from 'services/client';

import strings from 'strings';

class Work extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }

        document.title = "Arnaud Juherian - " + strings.MENU_PUBLICATIONS;
    }

    componentWillMount() {
        client().then(async (api) => {
            const response = await api.get('/work');
            const photos = response.data.payload || [];
            this.setState({
                photos
            });
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="page work">
                <div className="work-photos-container">
                    {this.state.photos.map((photo, i) => (
                        <img alt={"Arnaud Juherian"} src={photo.url}/>
                    ))}    
                </div>
            </div>
        );
    }
}

export default Work;