import Vue from 'vue'

export default {
    state: {
        token: null,
        id: null,
        superuser: false,
        role: null
    },
    
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload.token
            Vue.$jwt.verify(payload.token)

        }
    }

}