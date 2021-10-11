export default {
    state: {
        books: [
            {title: 'Title book 1', author: 'Author 1', desc: ' Description 1'},
            {title: 'Title book 2', author: 'Author 2', desc: ' Description 2'},
            {title: 'Title book 3', author: 'Author 3', desc: ' Description 3'},
            {title: 'Title book 4', author: 'Author 3', desc: ' Description 4'},
            {title: 'Title book 5', author: 'Author 3', desc: ' Description 5'},
        ],
    },
    mutations: {
        addBook(state, newBook) {
            state.books.unshift(newBook)
        }
    },
    actions: {
    },
    getters: {
        allBooks(state) {
            return state.books
        }
    },
}