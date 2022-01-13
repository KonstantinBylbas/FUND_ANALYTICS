import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './components/variables.scss';
import App from './App';
import ModalContextProvider from './components/services/contexts/modalcontext/modal.context';
import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';
import { I18nextProvider } from 'react-i18next';
import i18n from "i18next";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

i18n.init({
    interpolation: { escapeValue: false },
    lng: getCookie("language") || "en",
    resources: {
        en: {
            common: en               
        },
        ru: {
            common: ru
        },
    },
});

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBIondPmdvc8Ez7I4urD4gaXFDFTXiMfjQ",
    authDomain: "anal-3ce51.firebaseapp.com",
    projectId: "anal-3ce51",
    storageBucket: "anal-3ce51.appspot.com",
    messagingSenderId: "187384137817",
    databaseURL: "https://anal-3ce51-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:187384137817:web:11d2a225a3d80f9f9f4948",
    measurementId: "G-538Y5MGS4C"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <ModalContextProvider>
            <App />
        </ModalContextProvider>
    </I18nextProvider>,
    document.getElementById('root')
);