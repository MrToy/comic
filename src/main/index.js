import React from 'react'
import firebase from 'firebase'
import user from '../store/config'
export default class extends React.Component{
	state={user:{}}
	componentDidMount(){
		this.user=user.store.sub(user=>this.setState({user}))
	}
	componentWillUnmount(){
		this.user.unsub()
	}
	render(){
		return(
			<div>
				{JSON.stringify(this.state.user)}
				<button onClick={()=>user.change()}>233</button>
			</div>
		)
	}
}