import { Model } from '@vuex-orm/core'

export default class Apod extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'apods'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(null),
      copyrights: this.attr(null),
      date: this.attr(null),
      explanation: this.attr(null),
      media_type: this.attr(null),
      service_version: this.attr(null),
      title: this.attr(null),
      url: this.attr(null)
    }
  }
}
