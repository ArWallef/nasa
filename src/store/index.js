

import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMCRUD from '@wgr-sa/vuex-orm-crud'
import axios from 'axios'
import Apod from '@/models/Apod.js'


// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Apod)


let client = axios.create({
  baseURL: 'http://localhost:8888/api.nasa',
  timeout: 1000
});
VuexORM.use(VuexORMCRUD, { client })


Vue.use(Vuex)

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
