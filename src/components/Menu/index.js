import React from 'preact';

import './styles.scss';
import { Link } from 'preact-router/match';

import Logo from 'components/Logo';

import strings from 'strings';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    toggleMenu = () => this.setState({active: !this.state.active});

    render() {
        return (
            <div className="menu">
                <Logo/>
                <button onClick={this.toggleMenu} className={["hamburger", "hamburger--collapse", this.state.active ? "is-active": ""].join(" ")} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>  
                <ul className={this.state.active ? "active" : ""}>
                    <li>
                        <Link activeClassName="active" href="/">{strings.MENU_HOME}</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" href="/galleries">{strings.MENU_GALLERIES}</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" href="/publicataions">{strings.MENU_PUBLICATIONS}</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" href="/contact">{strings.MENU_CONTACT}</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" href="/about">{strings.MENU_ABOUT}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;