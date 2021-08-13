import Rebase from 're-base'
import Firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.databaseURL())

export {firebaseApp, base}