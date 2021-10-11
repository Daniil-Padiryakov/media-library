import {createStore} from 'vuex'
import book from './modules/book.js'
import movie from './modules/movie.js'
import music from './modules/music.js'

export default createStore({
	state: {
		tabs: ['Books', 'Movies', 'Music'],
		currentTab: 'Books',

		editMode: false,
		editedItem: {},
		itemKey: '',
	},
	mutations: {
		changeTab(state, tab) {
			state.currentTab = tab
		},

		setEditedItem(state, item) {
			state.editedItem = item
		},

		editModeOn(state){
			state.editMode = true
		},
		editModeOff(state){
			state.editMode = false
		},

		updateMessage (state, message, name) {
			state.editedItem[state.itemKey] = message
		},
		setItemKey(state, key) {
			state.itemKey = key
		}
	},
	actions: {
		pickItemEdit(context) {
			context.commit('setEditedItem')
			context.commit('changeEditMode')
		},

		editModeOn(context){
			context.commit('editModeOn')
		},
		editModeOff(context){
			context.commit('editModeOff')
		}
	},
	getters: {
		allTabs(state) {
			return state.tabs
		},
		currentTab(state) {
			return state.currentTab
		},

		itemsForTable(state, getters) {
			switch (state.currentTab) {
				case "Books": return getters.allBooks
					break
				case "Movies": return getters.allMovies
					break
				case "Music": return getters.allMusic
					break
				default: return undefined
					break
			}
        },

		editedItem(state) {
			return state.editedItem
		},
		editMode(state) {
			return state.editMode
		}
	},
	modules: {
		book, movie, music
	}
})
