export default {
    state: {
        halls: []
    },
    mutations: {
        setHall: (state, hall) => {
            state.halls.push(hall)
        },
        clearHalls: (state) => {
            state.halls = []
        }
    },
    getters: {
        getHalls: (state) => {
            return state.halls
        }
    }
}