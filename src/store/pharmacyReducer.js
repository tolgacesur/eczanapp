const PHARMACY_INIT = 'PHARMACY_INIT';

/// action creater
export function pharmacyInit (pharmacy = {}) {
    return {
        type: PHARMACY_INIT,
        payload: pharmacy
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