import React from 'react';

import './styles.scss';

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery-container">
                <div className="gallery" style={{backgroundImage: "url(" + this.props.preview + ")"}}/>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Gallery;