import React from 'preact';

import client from 'services/client';

import Gallery from 'components/Gallery';

import './styles.scss';
import { route } from 'preact-router';

class Galleries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            galleries: []
        }
    }

    componentWillMount() {
        client.get('/galleries').then(response => {
            const galleries = response.data.payload;
            this.setState({galleries});
            console.log(galleries);
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="page galleries">
                <div className="galleries-container">
                    {this.state.galleries.map((gallery, i) => (
                        <Gallery onClick={() => route('/gallery/' + gallery.title)} preview={gallery.preview_image} title={gallery.title}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Galleries;