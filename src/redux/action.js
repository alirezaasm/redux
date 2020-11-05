import types from "./types";
import axios from "axios";

export const fetchsucsses = data => ({
    type: types.fetchsucses,
    payload: data
})

export const fetcherror = error => ({
    type: types.fetcherror,
    payload: error
})


export const request = () => ({
    type: types.request
})

export const fetch = () => {
    return (dispatch) => {
        dispatch(request)

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => dispatch(fetchsucsses(response.data)))
            .catch(er => {
                    const errormsg = er.messag
                    dispatch(fetcherror(errormsg))
                }
            )
    }
}



