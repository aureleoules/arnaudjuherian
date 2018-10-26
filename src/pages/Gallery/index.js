import React from 'react';

import './styles.scss';

import client from 'services/client';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: {
                photos: []
            }
        }
    }

    componentWillMount() {
        client.get('/galleries/title/' + this.props.title).then(response => {
            const gallery = response.data.payload;
            console.log(gallery);
            this.setState({gallery});
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="page gallery">
                <div className="gallery-photos-container">
                    {this.state.gallery.photos.map((photo, i) => (
                        <img src={photo.url}/>
                    ))}    
                </div>
            </div>
        );
    }
}

export default Gallery;