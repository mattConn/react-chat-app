# Chat App
A chat app using React and Firebase.

# Running/Building
First, install dependencies with `npm install`. Then, create `src/firebaseConfig.js`, which is needed to connect to your Firebase database.  
Finally, the standard `create-react-app` commands will run or build this app: `npm start` and `npm run build`, respectively.

# Firebase
`src/firebaseConfig.js` is needed to connect to your Firebase database and is ignored by git intentionally as it contains sensitive database information. The config variable can be obtained through the Firebase console. It can be found under "project settings" and within the "Your apps" section.  
It should look something like:
```
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```