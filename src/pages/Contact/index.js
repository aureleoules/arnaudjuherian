import React from 'preact';

import './styles.scss';

import client from 'services/client';

import Facebook from 'assets/icons/facebook.svg';
import Instagram from 'assets/icons/instagram.svg';
import Tumblr from 'assets/icons/tumblr.svg';
import strings from 'strings';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetched: false
        }
        document.title = "Arnaud Juherian - " + strings.MENU_CONTACT;
    }

    componentDidMount() {
        client().then(async api => {
            const response = await api.get('/content/contact');
            console.log(response.data);
            const content = response.data.payload;
            this.setState({
                ...content,
                fetched: true
            });
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="page contact">
                {/* {JSON.stringify(this.state)} */}
                {this.state.fetched && <div className="contact-content fade-in">
                    <h1>{this.state.name}</h1>

                    <p>{this.state.address}</p>
                    <a href={"tel:" + this.state.phone}>{this.state.phone}</a>
                    <a href={"mailto:" + this.state.email}>{this.state.email}</a>

                    <div className="icons">
                        <a target="_blank" rel="noopener noreferrer" href={this.state.facebook_url}>
                            <img alt="facebook" src={Facebook}/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={this.state.instagram_url}>
                            <img alt="instagram" src={Instagram}/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={this.state.tumblr_url}>
                            <img alt="tumblr" src={Tumblr}/>
                        </a>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Contact;