import React from 'preact';

import client from 'services/client';

import Gallery from 'components/Gallery';

import './styles.scss';
import { route } from 'preact-router';
import strings from 'strings';

class Galleries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            galleries: []
        }
        this.currentDelay = 0;

        document.title = "Arnaud Juherian - " + strings.MENU_GALLERIES;
    }

    componentWillMount() {        
        client().then(async (api) => {
            const response = await api.get('/galleries');
            const galleries = response.data.payload;
            this.setState({
                galleries
            });
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="page galleries">
                <div className="g-div">
                    <div className="galleries-container">
                        {this.state.galleries.map((gallery, i) => {
                            if(i !== 0) {
                                this.currentDelay += 100;
                            }
                            return (
                                <Gallery id={i} delay={this.currentDelay} onClick={() => route('/gallery/' + gallery.title)} preview={gallery.preview_image} title={gallery.title}/>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Galleries;