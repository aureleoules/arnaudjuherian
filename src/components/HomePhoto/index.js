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
            <OnVisible id={"this.props.key"} className={["photo", !this.props.firstRow ? "first-row": "", this.props.id, this.props.size, this.props.mode].join(" ")} visibleClassName={"slide-top"}>
                <img alt={this.props.key} src={this.props.src}/>
            </OnVisible>
        )
    }
}

export default HomePhoto;