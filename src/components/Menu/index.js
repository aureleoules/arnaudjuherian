import React from 'preact';

import './styles.scss';
import { Link } from 'preact-router/match';

import Logo from 'components/Logo';

import strings from 'strings';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Logo/>
                <ul>
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