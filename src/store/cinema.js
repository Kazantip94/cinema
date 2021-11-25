export default {
    state: {
        cinema: {},
    },

    mutations: {
        setCinema: (state, cinema) => {
            state.cinema = cinema;
        },

        clearCinema: (state) => {
            state.cinema = {};
        }
    },

    getters: {
        getCinema: (state) => {
            return state.cinema;
        }
    },
}