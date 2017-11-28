import React from 'react'
import { connect } from 'react-redux'
import { pharmacyInit } from 'store/pharmacyReducer'

class PharmacyResult extends React.Component {

    constructor() {
        super();
    }

    render() {

        let pharmacyItems = this.props.pharmacyResponse.map((item, index) => {

            return (
                <tr>
                    <th scope="row" key={item.toString()}>{index + 1}</th>
                    <td>{item.eczaneAdi}</td>
                    <td>{item.eczaneAdres}</td>
                    <td>{item.eczaneTelefon}</td>
                </tr>
            )

        });

        return (
            <div>
                <br />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Eczane Adı</th>
                            <th scope="col">Adres</th>
                            <th scope="col">Telefon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pharmacyItems}
                    </tbody>
                </table>
                <br />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        pharmacyResponse: state.pharmacy
    }
}

export default connect(mapStateToProps, undefined)(PharmacyResult);