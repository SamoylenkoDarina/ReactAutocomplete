import { REQUEST_ACTION } from '../../middlewares'

export const getCountries = () => {
  return {
    type: REQUEST_ACTION,
    payload: {
      url: 'https://restcountries.eu/rest/v2/all',
      successAction: getCountriesResponse
    }
  }
}

export const GET_COUNTRIES_RESPONSE = 'GET_COUNTRIES_RESPONSE'
export const getCountriesResponse = (countriesList) => {
  return {
    type: GET_COUNTRIES_RESPONSE,
    payload: countriesList
  }
}
