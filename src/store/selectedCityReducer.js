const SELECTED_CITY = 'SELECTED_CITY'

/// action creater
export function selectedCity (city = '') {
    return {
        type: SELECTED_CITY,
        payload: city
    }
}

/// Reducer
export default function selectedCityReducuer (state = '',action){
    switch (action.type) {
        case SELECTED_CITY:
            return action.payload;
    
        default:
            return state;
    }
}