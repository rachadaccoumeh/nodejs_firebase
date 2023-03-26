const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://your-project-id.firebaseio.com'
});
const db = admin.database();
const ref = db.ref('path/to/data');

// Write data to Firebase Realtime Database
ref.set({
    key1: 'value1',
    key2: 'value2'
});

// Read data from Firebase Realtime Database
ref.once('value', (snapshot) => {
    console.log(snapshot.val());
});

const registrationToken = 'YOUR_DEVICE_REGISTRATION_TOKEN';

const message = {
    notification: {
        title: 'Title of the notification',
        body: 'Body of the notification'
    },
    token: registrationToken
};

admin.messaging().send(message)
    .then((response) => {
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });