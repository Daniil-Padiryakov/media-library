export default {
    state: {
        movies: [
            {title: 'Title 1', actors: 'Actors 1, Actors 2, Actors 3', duration: '2h.30m', desc: ' Description 1'},
            {title: 'Title 2', actors: 'Actors 1, Actors 2, Actors 3', duration: '2h.30m', desc: ' Description 2'},
            {title: 'Title 3', actors: 'Actors 1, Actors 2, Actors 3', duration: '2h.30m', desc: ' Description 3'},
            {title: 'Title 4', actors: 'Actors 1, Actors 2, Actors 3', duration: '2h.30m', desc: ' Description 4'},
        ],
    },
    mutations: {
        addMovie(state, newMovie) {
            state.movies.unshift(newMovie)
        }
    },
    actions: {
    },
    getters: {
        allMovies(state) {
            return state.movies
        }
    },
}