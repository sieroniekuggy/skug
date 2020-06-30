import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCOlIn_9o78z7Whld0jhjWJY6_8Eow0MzQ',
	authDomain: 'pagetify.firebaseapp.com',
	databaseURL: 'https://pagetify.firebaseio.com',
	projectId: 'pagetify',
	storageBucket: 'pagetify.appspot.com',
	messagingSenderId: '385455694678',
	appId: '1:385455694678:web:5b6411a1e1ba293dbd2cf7',
	measurementId: 'G-V4YS0H16QX',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage, firebase as default };
