import { GET_COUNTRIES, getCountriesResponse } from '../../actions'

export const REQUEST_ACTION = 'REQUEST_ACTION'

export const request = store => next => action => {
  console.log('request middleware')

  if (action.type === REQUEST_ACTION) {
    fetch(action.payload.url)
      .then(response => response.json())
      .then(countries => {
        const newAction = action.payload.successAction(countries)
        next(newAction)
      })
      .catch((error) => console.error('request error:', error))
    return
  }

  next(action)
}
