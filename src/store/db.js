import firebase from 'firebase'

var config = {
	apiKey: 'AIzaSyDX25GZp9v-lz4OPARJ7jP5ZBsgBOvH_Ac',
	authDomain: 'test-5af0b.firebaseapp.com',
	databaseURL: 'https://test-5af0b.firebaseio.com',
	storageBucket: 'test-5af0b.appspot.com',
	messagingSenderId: '472421364909'
}
firebase.initializeApp(config)

export default firebase.database()