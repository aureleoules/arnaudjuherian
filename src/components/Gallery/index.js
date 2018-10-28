import React from 'react';

import './styles.scss';

class Gallery extends React.Component {

    componentDidMount() {
        document.getElementById(this.props.id).style = "animation-delay: " + this.props.delay + "ms!important;";
    }
    
    render() {
        return (
            <div id={this.props.id} onClick={this.props.onClick} className="gallery-container">
                <div className="gallery" style={{backgroundImage: "url(" + this.props.preview + ")"}}/>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Gallery;