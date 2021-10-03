import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
const auth = getAuth()

export default {
    actions: {
        async login ({dispatch, commit}, {email, password}) {
            try {
                await signInWithEmailAndPassword(auth, email, password)
                console.log(dispatch, commit)
            }catch (e) {
                console.log('1')
            }
        }
    }
}
