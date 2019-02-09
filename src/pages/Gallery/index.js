import React from 'react';

import './styles.scss';

import client from 'services/client';
import strings from 'strings';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: {
                photos: []
            }
        }

        document.title = "Arnaud Juherian - " + this.props.title;
    }

    componentWillMount() {
        client().then(async (api) => {
            const response = await api.get('/galleries/title/' + this.props.title);
            const gallery = response.data.payload;
            this.setState({
                gallery
            });
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="page gallery">
                <div className="gallery-photos-container">
                    {this.state.gallery.photos.map((photo, i) => (
                        <img alt={"Arnaud Juherian"} src={photo.url}/>
                    ))}    
                </div>
            </div>
        );
    }
}

export default Gallery;