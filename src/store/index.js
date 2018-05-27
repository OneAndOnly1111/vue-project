import Vuex from 'vuex'
import createLogger from '../plugins/logger'
import mutations from './mutations'
import actions from './actions'
import dashboard from './modules/dashboard'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		dashboard
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
})