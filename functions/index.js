const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()


// will check db to make sure an alias a user has entered is unique
exports.checkAlias = functions.https.onCall((data, context) => {

  const ref = admin.firestore().collection('users').doc(data.slug)

  return ref.get().then(doc => {
    return { unique: !doc.exists }
  }).catch(err => {
    throw new functions.https.HttpsError('failed to connect')
  });

})
