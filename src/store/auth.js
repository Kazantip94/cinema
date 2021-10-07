
import { getAuth } from 'firebase/auth'
import { signIn, signOutUser, register, db } from '../plugins/firebase'


const auth = getAuth()


export default {
    actions: {
        // eslint-disable-next-line
        async login ({dispatch, commit}, {email, password}) {
            try {
                const response = await signIn(auth, email, password)
                console.log(response.user)
            } catch (e) {
                console.log(e)
                throw e
            }
        },
        async logout () {
            await signOutUser(auth)
        },
        // eslint-disable-next-line
        async register({dispatch}, {email, password, name}) {
            try {
                // eslint-disable-next-line
                await register(auth, email, password)
                const uid = await dispatch('getUid')
                // console.log(uid)
                await db.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name
                })

            }catch (e) {
                console.log(e)
                throw e
            }
        },
        getUid(userCredential) {
            const user = userCredential.user
            // const user = firebase.auth().currentUser
            // console.log(user)
            return user ? user.uid : null
        }
    }
}
