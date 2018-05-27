import Vuex from 'vuex'
import createLogger from '../plugins/logger'
import mutations from './mutations'
import actions from './actions'

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    mutations,
    actions
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
