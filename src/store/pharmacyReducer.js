const PHARMACY_INIT = 'PHARMACY_INIT';

/// action creater
export function pharmacyInit (pharmacy = {},city = {}) {
    return {
        type: PHARMACY_INIT,
        payload: {pharmacy,city}
    }
}

/// Reducer
export default function pharmacyReducuer (state = {},action){
    switch (action.type) {
        case PHARMACY_INIT:
            return action.payload;
    
        default:
            return state;
    }
}