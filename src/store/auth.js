
import { getAuth } from 'firebase/auth'
import { signIn, signOutUser } from '../plugins/firebase'
// import { register } from '../plugins/firebase'

const auth = getAuth()


export default {
    actions: {
        // eslint-disable-next-line
        async login ({dispatch, commit}, {email, password}) {
            try {
                const response = await signIn(auth, email, password)
                console.log(response.user)
            }catch (e) {
                console.log('error')
            }
        },
        async logout () {
            await signOutUser(auth);
        },
        // async registers({email, password}) {
        //     try {

        //     }catch (e) {
        //         const errorCode = error.code
        //         const errorMessage = error.message
        //     }
        // }
    }
}
