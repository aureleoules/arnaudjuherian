import React from 'preact';
import './styles.scss';
import {Link} from 'preact-router/match';

const Logo = () => (
    <div className="logo">
        <Link href="/" className="full-text">Arnaud Juherian</Link>
        <Link href="/" className="wrapped-text">Arnaud<br/>Juherian</Link>
    </div>
);

export default Logo;