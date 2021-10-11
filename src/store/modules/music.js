export default {
    state: {
        music: [
            {title: 'Track 1', author: 'Author 1', duration: '3m', desc: ' Description 1'},
            {title: 'Track 2', author: 'Author 2', duration: '3m', desc: ' Description 2'},
            {title: 'Track 3', author: 'Author 3', duration: '3m', desc: ' Description 3'},
        ],
    },
    mutations: {
        addMusic(state, newMusic) {
            state.music.unshift(newMusic)
        }
    },
    actions: {
    },
    getters: {
        allMusic(state) {
            return state.music
        }
    },
}