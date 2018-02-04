import { GET_COUNTRIES_RESPONSE } from '../../actions'

export default function countries (state = [], action) {
  console.log('countries reducer')
  switch (action.type) {
    case GET_COUNTRIES_RESPONSE:
      return action.payload.map(country => country.name);
    default:
      return state;
  }
};
