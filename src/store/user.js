import Store from './store'

var store=new Store()

export default {
	store,
	login(id,pass){
		store.pub({name:"toy"})
	}
}