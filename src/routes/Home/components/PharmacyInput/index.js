import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { pharmacyInit } from 'store/pharmacyReducer'
import PharmacyResult from '../PharmacyResult'
import Spinner from '../Spinner'
import Select from './Select'

class PharmacyInput extends Component {

    constructor() {
        super();

        this.state = {
            dataLoaded: false,
            getData: false
        }

    }


    getPharmacy() {
        this.setState({
            getData: true
        })
        axios.get(`http://api.eczanapp.space/pharmacy/${this.props.selectedCity}`)
            .then((res) => {
                const pharmacy = res.data;
                this.props.pharmacyData(pharmacy, this.props.selectedCity);
                this.setState({
                    getData: false,
                    dataLoaded: true
                })
            },
            (err) => {
                console.log("hata");
                this.setState({
                    getData: false,
                    dataLoaded: false
                })
            }
            );
    }


    render() {
        if (Object.keys(this.props.pharmacyResponse).length === 0 && this.props.pharmacyResponse.constructor === Object && this.state.getData == false) {

            return (
                <div>
                    <form className="form-inline">
                        <div className="form-group mx-sm-3">
                            <Select />
                        </div>
                        <button type="button" className="btn btn-primary search-btn" onClick={this.getPharmacy.bind(this)} >Ara</button>
                    </form>


                </div>
            )

        } else if (this.state.dataLoaded == false && this.state.getData == true) {

            return <Spinner />

        } else if (this.state.dataLoaded == true && this.state.getData == false) {

            return <PharmacyResult />

        }


    }
}

const mapStateToProps = (state) => {
    return {
        pharmacyResponse: state.pharmacy,
        selectedCity: state.selectedCity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pharmacyData: (pharmacy, city) => dispatch(pharmacyInit(pharmacy, city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyInput);
