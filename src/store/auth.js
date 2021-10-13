
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set } from "firebase/database"
import { signIn, signOutUser, register  } from '../plugins/firebase'


const auth = getAuth()


export default {
    actions: {
        // eslint-disable-next-line
        async login ({dispatch, commit}, {email, password}) {
            try {
                await signIn(auth, email, password)
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
                const db = getDatabase()
                console.log(db)
                await set(ref(db, `/users/${uid}/info`), {
                    bill: 1000,
                    usename: name    
                  })
            }catch (e) {
                console.log(e)
                throw e
            }
        },
        getUid() {
            const user = auth.currentUser
            return user ? user.uid : null
        }
    }
}
