import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { pharmacyInit } from 'store/pharmacyReducer'
import PharmacyResult from '../PharmacyResult'
import Spinner from '../Spinner'

class PharmacyInput extends Component {

    constructor() {
        super();

        this.state = {
            city: "",
            dataLoaded: false,
            getData: false
        }

    }

    cityChanged(e) {
        this.setState({
            city: e.target.value
        })
    }


    getPharmacy() {
        this.setState({
            getData : true
        })
        axios.get(`http://api.eczanapp.space/pharmacy/${this.state.city}`)
            .then(res => {
                const pharmacy = res.data;
                this.props.pharmacyData(pharmacy);
                this.setState({
                    getData : false,
                    dataLoaded : true
                })
            });
    }


    render() {
        if (Object.keys(this.props.pharmacyResponse).length === 0 && this.props.pharmacyResponse.constructor === Object && this.state.getData == false) {

            return (
                <div>
                    <form className="form-inline">
                        <div className="form-group mx-sm-3">
                            <input type="text" className="form-control" onChange={this.cityChanged.bind(this)} value={this.state.city} placeholder="Şehir adı yazın" />
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
        pharmacyResponse: state.pharmacy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pharmacyData: (pharmacy) => dispatch(pharmacyInit(pharmacy))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyInput);
