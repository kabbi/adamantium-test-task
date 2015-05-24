import alt from '../alt';
import locationActions from '../actions/LocationActions'

class LocationStore {
  constructor() {
    this.bindAction(locationActions.updateLocation, this.onUpdateLocation)

    this.city = 'Auckland'
    this.country = 'NZ'
  }

  onUpdateLocation(obj) {
    var [city, country] = obj
    this.city = city
    this.country = country
  }
}

export default alt.createStore(LocationStore)