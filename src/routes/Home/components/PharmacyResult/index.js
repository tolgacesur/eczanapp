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
                    <td>{item.eczaneIlce}</td>
                    <td>{item.eczaneAdres}</td>
                    <td>{item.eczaneTelefon}</td>
                </tr>
            )

        });

        if (!this.props.pharmacyResponse.length == 0) {

            return (
                <div>
                    <br />
                    <h2>{this.props.pharmacyResponse.length} Adet Eczane bulundu.</h2>
                    <br />
                    <h1 className="city">{this.props.pharmacyCity}</h1>
                    <table className="table table-responsive table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Eczane Adı</th>
                                <th scope="col">İlçe</th>
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

        } else {
            return (
                <div>
                    <table className="table table-responsive table-dark">
                        <thead>
                            <tr>
                                <th scope="col" style={{textAlign: 'center'}}>Sonuç bulunamadı</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            )
        }


    }
}


const mapStateToProps = (state) => {
    return {
        pharmacyResponse: state.pharmacy.pharmacy,
        pharmacyCity: state.pharmacy.city
    }
}

export default connect(mapStateToProps, undefined)(PharmacyResult);