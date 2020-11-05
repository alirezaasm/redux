import types from "./types";

const INITAL_STATE = {
    users: [],
    loading: false,
    error: null
}

const reducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case types.fetchsucses:
            return {
                ...state,
                error: null,
                loading: false,
                users: action.payload
            }
        case types.fetcherror:
            return {
                ...state,
                loading: true,
                users: [],
                error: action.payload

            }

        case types.request:
            return {
                ...state,
                loading: true
            }
        default :
            return state
    }
}

export default reducer;
