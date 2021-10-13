import { getStorage, ref, uploadBytes  } from "firebase/storage"
// import { getDatabase } from "firebase/database"
// const db = getDatabase()

const storage = getStorage()

export default {
    actions: {
        async uploadToStorage(_state, { file, path }) {
                try {
                    const storageRef = await ref(storage, path + Math.random() + file.name)
                    uploadBytes(storageRef, file).then(async (snapshot) => {
                        return await snapshot.ref.getDownloadURL()
                })
                } catch (e) {
                    console.error(`Upload failed:, ${e}`)
                    throw e
                }
        },

//         async removeFromStorage(_state, url) {
//             return await firebase
//                 .storage()
//                 .refFromURL(url)
//                 .delete()
//                 .then(() => console.log(`File ${url} deleted from storage`))
//                 .catch((error) => {
//                     console.log(`Problem to delete file  ${error}`)
//                     throw error
//                 })
//         },

//         async writeToDatabase(_state, { payload, path }) {
//             try {
//                 return await firebase.database().ref(path).set(payload)
//             } catch (error) {
//                 console.log(`Error writing to database: ${error}`)
//                 throw error
//             }
//         },

        // async readFromDatabase(_state, path) {
        //     try {
        //         // return (
        //         //     await firebase.database().ref(path).once("value")  
        //         // ).val()
        //         const starCountRef = ref(db, path)
        //         onValue(starCountRef, (snapshot) => {
        //             snapshot.val()  
        //         });
        //     } catch (error) {
        //         console.log(`Error reading from database: ${error}`)
        //         throw error
        //     }
        // },
    },
}