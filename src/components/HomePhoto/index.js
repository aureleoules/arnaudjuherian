import React from 'preact';

import './styles.scss';
import OnVisible from 'react-on-visible';

class HomePhoto extends React.Component {

    constructor(props) {
        super(props);
        this.container = React.create
    }

    componentDidMount() {
        document.getElementsByClassName(this.props.id)[0].style = "animation-delay: " + this.props.delay + "ms!important;";
    }

    render() {
        return (
            <OnVisible percent={25} id={"this.props.key"} className={["photo", !this.props.firstRow ? "first-row": "", this.props.id, this.props.size, this.props.mode, this.props.hasGallery ? "has-gallery" : ""].join(" ")} visibleClassName={"slide-top"}>
                <img onClick={this.props.onClick} alt={this.props.key} src={this.props.src}/>
                {this.props.hasGallery && <p onClick={this.props.onClick}>Accéder à la galerie<br/>« <strong>{this.props.linkedGallery.title}</strong> »</p>}
            </OnVisible>
        )
    }
}

export default HomePhoto;