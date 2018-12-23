import React from 'preact';

import './styles.scss';
import { Link } from 'preact-router/match';

import Logo from 'components/Logo';

import strings from 'strings';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            openHamburger: false
        }
    }

    toggleMenu = () => {
        if(this.state.active) {
            this.setState({openHamburger: !this.state.openHamburger})
            const menu = document.getElementById("menu");
            menu.classList.add("fade-out");
            setTimeout(() => {
                this.setState({active: !this.state.active})
                menu.classList.remove("fade-out");
            }, 350);
        } else {
            this.setState({active: !this.state.active, openHamburger: !this.state.openHamburger})
        }
    };

    render() {
        return (
            <div className="menu">
                <Logo/>
                <button onClick={this.toggleMenu} className={["hamburger", "hamburger--collapse", this.state.openHamburger ? "is-active": ""].join(" ")} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>  
                <ul id="menu" className={this.state.active ? "active" : ""}>
                    <li>
                        <Link onClick={this.toggleMenu}  activeClassName="active" href="/galleries">{strings.MENU_GALLERIES}</Link>
                    </li>
                    <li>
                        <Link onClick={this.toggleMenu} activeClassName="active" href="/publications">{strings.MENU_PUBLICATIONS}</Link>
                    </li>
                    <li>
                        <Link onClick={this.toggleMenu} activeClassName="active" href="/about">{strings.MENU_ABOUT}</Link>
                    </li>
                    <li>
                        <Link onClick={this.toggleMenu} activeClassName="active" href="/contact">{strings.MENU_CONTACT}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;