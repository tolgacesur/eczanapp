import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <nav className="container navbar">
                    <a className="navbar-brand" href="http://eczanapp.space/">Nöbetçi App</a>
                </nav>
            </header>
        )
    }
}

export default Header;
