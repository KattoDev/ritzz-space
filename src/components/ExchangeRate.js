import { KEY } from './information/void'

/**
 *
 * @param {String} currency USD | COP in uppercase
 */
export function exchange(currency) {
  const URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${KEY}`

  fetch(URL)
    .then(Response => Response.json())
    .then(data => {
      return currency === 'COP' ? data.rates.COP : data.rates.USD
    })
    .catch(err => {
      return err
    })
}
