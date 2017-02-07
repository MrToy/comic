import Store from './store'
import db from './db'

var store=new Store()

db.ref('config').on('value',data=>store.pub(data.val()))

export default {
	store,
	change(){
		db.ref('config').set({key:Math.random()})
	}
}