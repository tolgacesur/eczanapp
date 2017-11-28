import React from 'react'
import cities from './il-bolge.json'

class Select extends React.Component {

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
                <select className="form-control">
                    <option>Lütfen İl Seçin</option>
                    {cityItems}
                </select>
            </div>
        )

    }

}

export default Select;