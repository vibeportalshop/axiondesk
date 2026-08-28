// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCulaEKuCWd65B739Kb3nTY7ujv70WoyG0",
  authDomain: "axion-desk.firebaseapp.com",
  projectId: "axion-desk",
  storageBucket: "axion-desk.firebasestorage.app",
  messagingSenderId: "493322474720",
  appId: "1:493322474720:web:ea6de0e979ef9a61a62c85"
});

const messaging = firebase.messaging();

// Optional: handle background messages
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Axion Desk';
  const options = {
    body: payload.notification?.body || '',
    icon: '/favicon.ico',
    data: payload.data || {}
  };
  self.registration.showNotification(title, options);
});