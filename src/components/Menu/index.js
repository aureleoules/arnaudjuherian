import React from 'preact';

import './styles.scss';
import { Link } from 'preact-router/match';

import Logo from 'components/Logo';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Logo/>
                <ul>
                    <li>
                        <Link activeClassName="active" href="/">Page d'accueil</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" href="/galleries">Galeries</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" href="/about">À propos</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;