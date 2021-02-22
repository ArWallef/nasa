/*import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})*/

import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Apod from '@/models/Apod.js'

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Apod)


// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
