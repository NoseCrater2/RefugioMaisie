/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjVu7lryd599gj-I9Xwz34Nd2eummxUMk",
  authDomain: "refugio-maisie.firebaseapp.com",
  projectId: "refugio-maisie",
  storageBucket: "refugio-maisie.appspot.com",
  messagingSenderId: "218300132468",
  appId: "1:218300132468:web:74a5dd7b0a7120f1463521"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const app = createApp(App)

registerPlugins(app, firebaseapp)

app.mount('#app')
