import React from 'preact';

import './styles.scss';
import OnVisible from 'react-on-visible';

class HomePhoto extends React.Component {

    render() {
        return (
            <OnVisible className="photo slide-up">
                <img className={this.props.size} alt={this.props.key} src={this.props.src}/>
            </OnVisible>
        )
    }
}

export default HomePhoto;