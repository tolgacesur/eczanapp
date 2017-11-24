import React from 'react'

class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p className="footer-text">Github <a className="footer-text" href="https://github.com/tolgacesur">@tolgacesur</a>
                <br /> React/Redux
                <br />Eczanelere Ait Veriler hastanebul.com.tr Sitesinden Alınmıştır.
                <br />© 2017</p>
            </div>
        )
    }
}

export default Footer;