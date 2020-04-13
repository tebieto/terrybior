import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAytW_SLrENoWP6MmcW0sIjFPRMLGdNn1c",
    authDomain: "terrybior-71fb6.firebaseapp.com",
    databaseURL: "https://terrybior-71fb6.firebaseio.com",
    projectId: "terrybior-71fb6",
    storageBucket: "terrybior-71fb6.appspot.com",
    messagingSenderId: "781974696527",
    appId: "1:781974696527:web:48c91e7fc0ec4f9dd8703a",
    measurementId: "G-1Z9NZQVNR8"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    } 
    
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items,

        }
    });

    return transformedCollection.reduce((accummulator, collection) => {
        accummulator[collection.title.toLowerCase()] = collection;
        return accummulator
    }, {});
}


export default firebase;