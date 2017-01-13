import React from 'react'
import style from './index.styl'
import {IconButton,Dialog,TextField} from 'material-ui'
import {CommunicationImportContacts,ContentAdd} from 'material-ui/svg-icons'
import ImageSelector from '../../image-selector'

const CommicEditor=()=>(
	<div>
		<TextField floatingLabelText="标题" /><br/>
		<TextField floatingLabelText="关键词" /><br/>
		<ImageSelector/>
	</div>
)


class CommicPanel extends React.Component{
	state={open:false}
	render(){
		return(
			<div className={style.panel}>
				<div className={style.header}>
					<CommunicationImportContacts />
					<span>本子列表x</span>
					<IconButton onClick={()=>this.setState({open:true})}><ContentAdd /></IconButton>
				</div>
				<div className={style.content}>
					todo
					<ImageSelector/>
				</div>
				<Dialog open={this.state.open} onRequestClose={()=>this.setState({open:false})}>
					<CommicEditor />
				</Dialog>
			</div>
		)
	}
}

export default class extends React.Component{
	render(){
		return(
			<div className={style.box}>
				<CommicPanel />
			</div>
		)
	}
}