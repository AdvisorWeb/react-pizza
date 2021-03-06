import axios from "axios";

export const setLoading = (payload) => ({
    type: 'SET_LOADED',
    isLoaded: payload,
})

export const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch(setLoading(false))

    axios
        .get(`/pizzas?${
            category !== null ? `category=${category}` : ''
            }&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
            dispatch(setPizzas(data));
        })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    isLoaded: true,
    payload: items
})