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

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});