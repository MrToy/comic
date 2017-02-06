import React from 'react'
import firebase from 'firebase'
export default class extends React.Component{
	componentDidMount(){
		var config = {
			apiKey: 'AIzaSyDX25GZp9v-lz4OPARJ7jP5ZBsgBOvH_Ac',
			authDomain: 'test-5af0b.firebaseapp.com',
			databaseURL: 'https://test-5af0b.firebaseio.com',
			storageBucket: 'test-5af0b.appspot.com',
			messagingSenderId: '472421364909'
		}
		firebase.initializeApp(config)

		//firebase.database().ref('config').set({name:'toy'})
		firebase.database().ref('config').on('value',function(x){
			console.log(x.val())
		})
		console.log(firebase.database().ref().child('users').push().key)
	}
	render(){
		return(
			<div >todo</div>
		)
	}
}