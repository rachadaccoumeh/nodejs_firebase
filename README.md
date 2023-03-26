# Firebase With NodeJS

## 1. Introduction to Firebase and Node.js

Firebase is a platform developed by Google for building web and mobile applications. It offers a suite of tools and
services to help developers build high-quality apps quickly and easily. Firebase provides a variety of features such as
authentication, real-time database, cloud storage, and cloud messaging that make it easier to build, scale and manage
your app.

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code
outside of a web browser, making it a popular choice for building server-side applications.

By combining Firebase with Node.js, developers can build powerful server-side applications that can take advantage of
the features offered by Firebase. In this tutorial, we will focus on using Firebase Realtime Database and Firebase Cloud
Messaging (FCM) with Node.js.

Let's move on to the next step:

## 2. Setting up a Firebase project

To use Firebase in your Node.js application, you need to set up a Firebase project. If you already have a Firebase
project, you can skip this step.

To create a new Firebase project, follow these steps:

1. Go to the Firebase Console at https://console.firebase.google.com/
2. Click on the "Add project" button.
3. Enter a name for your project and select your country/region.
4. Click on "Create project".
5. Once your project is created, you will be redirected to the project dashboard.

Make sure to note down your project ID and API key, as you will need them later.

Now, let's move on to the next step:

## 3. Installing Firebase SDK for Node.js

To use Firebase with Node.js, you need to install the Firebase SDK for Node.js. You can install the Firebase SDK using
npm, which is the package manager for Node.js.

To install the Firebase SDK, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command:

```bash
npm install firebase-admin
```

This will install the Firebase SDK for Node.js in your project directory.

Now, let's move on to the next step:

## 4. Initializing Firebase in Node.js

To use Firebase in your Node.js application, you need to initialize Firebase in your Node.js code.

To initialize Firebase, follow these steps:

1. Go to the Firebase Console and select your project.
2. Click on the gear icon and select "Project settings".
3. Select the "Service accounts" tab.
4. Click on the "Generate new private key" button.
5. Save the generated JSON file to your project directory.
6. Open your Node.js file and add the following code at the top:

```js
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-project-id.firebaseio.com'
});
```

Replace path/to/serviceAccountKey.json with the path to the JSON file you downloaded earlier, and replace
your-project-id with your actual project ID.

Replace databaseURL with the URL of your Firebase Realtime Database. You can find the URL of your Firebase Realtime

This initializes Firebase in your Node.js application and sets up the connection to your Firebase project.

Now, let's move on to the next step:

## 5. Writing and reading data with Firebase Realtime Database

Firebase Realtime Database is a NoSQL cloud-hosted database that stores and syncs data in real-time. In this step, we
will cover how to read and write data to the Firebase Realtime Database using the Firebase SDK for Node.js.

To read and write data from the Firebase Realtime Database, follow these steps:

1. Open your Node.js file and add the following code:

```js
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

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
```

Replace path/to/serviceAccountKey.json with the path to the JSON file you downloaded earlier, and replace
your-project-id with your actual project ID. Replace path/to/data with the path to the data you want to read or write.

Replace databaseURL with the URL of your Firebase Realtime Database. You can find the URL of your Firebase Realtime

This code writes data to the specified path and then reads it from the same path and logs it to the console.

That's it! Now you know how to read and write data to the Firebase Realtime Database using the Firebase SDK for Node.js.

Next, let's move on to step 6:

## 6. Sending notifications with Firebase Cloud Messaging (FCM)

Firebase Cloud Messaging (FCM) is a service that allows you to send notifications and messages to users across
platforms. In this step, we will cover how to send notifications with FCM using Node.js.

To send notifications with FCM, follow these steps:

1. Go to the Firebase Console and select your project.
2. Click on the gear icon and select "Project settings".
3. Select the "Cloud Messaging" tab.
4. Copy the Server key, which is used to authenticate with FCM.
5. Open your Node.js file and add the following code:

```js
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-project-id.firebaseio.com'
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
```

Replace path/to/serviceAccountKey.json with the path to the JSON file you downloaded earlier, and replace
your-project-id with your actual project ID. Replace YOUR_DEVICE_REGISTRATION_TOKEN with the registration token of the
device you want to send the notification to.

Replace databaseURL with the URL of your Firebase Realtime Database. You can find the URL of your Firebase Realtime

This sends a notification to the specified device with the specified title and body.

Now, let's move on to the last step:

## 7. Conclusion

In this tutorial, we covered how to use Firebase with Node.js. We walked through setting up a Firebase project,
installing the Firebase SDK for Node.js, initializing Firebase in Node.js, writing and reading data with Firebase
Realtime Database, and sending notifications with Firebase Cloud Messaging.

Firebase offers many other features such as authentication, cloud storage, and cloud functions that you can use to build
powerful server-side applications. By combining Firebase with Node.js, you can take advantage of the features offered by
Firebase to build high-quality apps quickly and easily.