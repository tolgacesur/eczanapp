import React, { Component } from 'react';

class SearchInput extends Component {

    constructor() {
        super();

    }

    Getfunction = () => {
        console.log("search event")
    }


    render() {

        return <div>
            <form className="form-inline">
                <div className="form-group mx-sm-3">
                    <input type="text" className="form-control" placeholder="Şehir adı yazın" />
                </div>
                <button type="submit" className="btn btn-primary search-btn" onClick={e => {
                    e.preventDefault();
                    this.Getfunction();
                }}>Ara</button>
                <a href="#" onClick={e => {
                    e.preventDefault();
                    onViewChange(3);
                }}>Şifremi Unuttum!</a>
            </form>


        </div>

    }
}

export default SearchInput;
