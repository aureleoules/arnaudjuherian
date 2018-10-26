import React from 'preact';
import './styles.scss';
import {Link} from 'preact-router/match';

const Logo = () => (
    <div className="logo">
        <Link href="/">Arnaud<br/>Juherian</Link>
    </div>
);

export default Logo;