import React from 'react'
import { connect } from 'react-redux'
import { pharmacyInit } from 'store/pharmacyReducer'

class PharmacyResult extends React.Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div>{this.props.pharmacyResponse.name}</div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        pharmacyResponse: state.pharmacy
    }
}

export default connect(mapStateToProps,undefined)(PharmacyResult);