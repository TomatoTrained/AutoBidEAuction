// Import the functions you need from the SDKs you need
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
const firebaseConfig = {
    apiKey: "AIzaSyBXE5Cp4foZxRPcAOlCSHfbKTFwIWdQSWE",
    authDomain: "user-login-form-a440d.firebaseapp.com",
    databaseURL: "https://user-login-form-a440d-default-rtdb.firebaseio.com",
    projectId: "user-login-form-a440d",
    storageBucket: "user-login-form-a440d.appspot.com",
    messagingSenderId: "536643428878",
    appId: "1:536643428878:web:b9527baf1828015b0a525f"
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Request permission for notifications
Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Get the token
        return messaging.getToken();
    } else {
        console.log('Unable to get permission to notify.');
    }
}).then((token) => {
    console.log('FCM Token:', token);
}).catch((error) => {
    console.error('Error getting FCM token:', error);
});

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('firebase-messaging-sw.js')
        .then((registration) => {
            console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}
