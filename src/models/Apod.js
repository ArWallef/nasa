import { Model } from '@vuex-orm/core'
//import moment from 'moment'

export default class Apod extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'apods'

  static apiPath = 'apods/index.json'

  static primaryKey = 'date'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      date: this.attr(null),
      copyrights: this.attr(null),
      explanation: this.attr(null),
      hdurl: this.attr(null),
      media_type: this.attr(null),
      service_version: this.attr(null),
      title: this.attr(null),
      url: this.attr(null)
    }
  }
}
