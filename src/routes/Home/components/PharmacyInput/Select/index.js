import React from 'react'
import { connect } from 'react-redux'
import cities from './il-bolge.json'
import { selectedCity } from 'store/selectedCityReducer'

class Select extends React.Component {

    constructor(){
        super();

        this.state = {
            selectCity : ""
        }
    }

    handleChange(event) {
        this.setState({selectCity: event.target.value});
        this.props.selectCity(event.target.value);
    } 

    render() {

        let cityItems = cities.map((item, index) => {

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toLocaleUpperCase('tr-TR') + string.slice(1);
            }

            item.il = item.il.toLocaleLowerCase('tr-TR');
            item.il = capitalizeFirstLetter(item.il);

            return (
                <option style={{ fontSize: 16 }} value={item.il}>{item.plaka} - {item.il}</option>
            )

        })

        return (
            <div>
                <select className="form-control" value={this.state.selectCity} onChange={this.handleChange.bind(this)}>
                    <option value="0">Lütfen İl Seçin</option>
                    {cityItems}
                </select>
            </div>
        )

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCity: (city) => dispatch(selectedCity(city))
    }
}


export default connect(undefined,mapDispatchToProps)(Select);